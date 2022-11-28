const writeToButton = document.getElementById('write-to-button');
const retrieveFromButton = document.getElementById('retrieve-from-button');

const databaseRequest = indexedDB.open('MyStorage', 1);
let database;

databaseRequest.onsuccess = function (event) {
  database = event.target.result;
  console.log('database on created below:');
  console.log(database);
};

databaseRequest.onerror = function (event) {
  console.log('ERROR!');
  console.log(event);
};

writeToButton.addEventListener('click', () => {
  const productsStore = database
    .transaction('products', 'readwrite')
    .objectStore('products');
  productsStore.add({
    id: 'product1',
    price: 29.99,
    title: 'Scarf',
  });
  console.log('database after adding item below:');
  console.log(database);
});

retrieveFromButton.addEventListener('click', () => {
  const productsStore = database
    .transaction('products', 'readwrite')
    .objectStore('products');
  const request = productsStore.get('product1');
  console.log('request below:');
  console.log(request);

  request.onsuccess = function () {
    console.log('request in onsuccess below:');
    console.log(request);
    console.log('request.result in on success:');
    console.log(request.result);
  }
});
