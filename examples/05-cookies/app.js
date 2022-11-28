const writeToButton = document.getElementById('write-to-button');
const retrieveFromButton = document.getElementById('retrieve-from-button');

writeToButton.addEventListener('click', () => {
  const user = {
    age: 28,
    company: 'ABN AMRO',
    languages: ['English', 'Polish'],
    name: 'Daniel',
    residence: 'Amsterdam'
  };
  const uuid = 'f48d1d75-b7a2-406a-ab8a-971b7ec0606f';

  document.cookie = `uuid=${uuid}; max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveFromButton.addEventListener('click', () => {
  console.log(document.cookie); // Access cookies.

  // Get user's value in a "beautify" way.
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i => {
    return i.trim();
  });
  console.log(data[1].split('=')[1]);
});
