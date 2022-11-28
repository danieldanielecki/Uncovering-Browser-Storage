const writeToButton = document.getElementById('write-to-button');
const retrieveFromButton = document.getElementById('retrieve-from-button');

const uuid = 'f48d1d75-b7a2-406a-ab8a-971b7ec0606f';

writeToButton.addEventListener('click', () => {
  console.log('uuid: ' + uuid);
  console.log('JSON.stringify(uuid): ' + JSON.stringify(uuid));
  sessionStorage.setItem('uuid', uuid);
});

retrieveFromButton.addEventListener('click', () => {
  const uuidFromStorage = sessionStorage.getItem('uuid');

  console.log('uuid from session storage: ' + uuidFromStorage);
});
