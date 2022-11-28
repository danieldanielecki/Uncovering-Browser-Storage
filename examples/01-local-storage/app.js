const writeToButton = document.getElementById('write-to-button');
const retrieveFromButton = document.getElementById('retrieve-from-button');

const user = {
  age: 28,
  company: 'ABN AMRO',
  languages: ['English', 'Polish'],
  name: 'Daniel',
  residence: 'Amsterdam'
};

writeToButton.addEventListener('click', () => {
  console.log('user: ' + user);
  console.log('JSON.stringify(user): ' + JSON.stringify(user));
  localStorage.setItem('user', JSON.stringify(user));
});

retrieveFromButton.addEventListener('click', () => {
  const userFromStorage = localStorage.getItem('user');
  const parsedUserFromStorage = JSON.parse(localStorage.getItem('user'));

  console.log('user from local storage: ' + userFromStorage);
  console.log('parsed user from local storage: ' + parsedUserFromStorage);
});
