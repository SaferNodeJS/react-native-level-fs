
// to write require('fs'), add "browser" mapping in package.json
const fs = require('react-native-level-fs');

fs.mkdir('/home', () => {
  fs.writeFile('/home/hello-world.txt', 'Hello world!\n', () => {
    fs.readFile('/home/hello-world.txt', 'utf-8', (err, data) => {
      console.log(data);
    });
  });
});
