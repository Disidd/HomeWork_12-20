
function generateKey(length, characters) {
  let key ='';
  for (let i = 0; i < length; i++) {
    key += characters.charAt(Math.floor(Math.random() * length));
  }

  return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(40, characters);

console.log(key);
