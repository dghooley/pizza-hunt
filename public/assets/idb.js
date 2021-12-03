// create variable to hold db connection
let db;
// establisha  connection to IndexedDB database called 'pizza_hunt' and set it to version 1
const request = indexedDB.open('pizza_hunt', 1);
// this event wil emi if the database verison changes (nonexistant to version 1, v1 to v2, etc. )
request.onupdradeneeded = function(event) {
    // save a reference to the database
    const db = event.target.result;
    // create an object store (table) called `new_pizza`, set it to have an auto incrementing primary key of sorts
    db.createObjectStore('new_pizza', { autoincrement: true });
};

// upon a successful
request.onsuccess = function(event) {
    // when db is successfully created with its object store (from onupgradedneeded even above) or simply established a connection, save reference to db in global varible
    db = event.target.result;

    // check if app is online, if yes, run uploadPizza() funciton to send all local db data to api
    if (navigator.onLine) {
        // we haven't creted this yet, but we will soon, so let's comment it out for now
        // uploadPizza();
    }
};

request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
};

// This function will beexetued if we attempt to submit a new pizza and there's no interenet connection
function saveRecord(record) {
    // open a new transactionm with the database wit hread and write permissions
    const transaction = db.transaction(['new_pizza'], 'readwrite');

    // access the object store for `new_pizza`
    const pizzaObjectStore = transaction.objectStore('new_pizza');

    // add record to your store with add method
    pizzaObjectStore.add(record);
}