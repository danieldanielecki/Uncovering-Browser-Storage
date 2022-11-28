const writeToButton = document.getElementById('write-to-button');
const retrieveFromButton = document.getElementById('retrieve-from-button');

const user = {
  age: 28,
  company: 'ABN AMRO',
  languages: ['English', 'Polish'],
  name: 'Daniel',
  residence: 'Amsterdam'
};
const uuid = 'f48d1d75-b7a2-406a-ab8a-971b7ec0606f';

writeToButton.addEventListener('click', () => {
  console.log('user: ' + user);
  console.log('JSON.stringify(user): ' + JSON.stringify(user));
  localStorage.setItem('user', JSON.stringify(user));

  console.log('uuid: ' + uuid);
  console.log('JSON.stringify(uuid): ' + JSON.stringify(uuid));
  sessionStorage.setItem('uuid', uuid);
});

retrieveFromButton.addEventListener('click', () => {
  const userFromStorage = localStorage.getItem('user');
  const parsedUserFromStorage = JSON.parse(localStorage.getItem('user'));

  console.log('user from local storage: ' + userFromStorage)
  console.log('parsed user from local storage: ' + parsedUserFromStorage);

  const uuidFromStorage = sessionStorage.getItem('uuid');

  console.log('uuid from local storage: ' + uuidFromStorage)
});
