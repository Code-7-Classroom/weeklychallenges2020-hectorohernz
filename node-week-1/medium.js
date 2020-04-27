/*
     Create a node application that will read 
     all of the planets in the solar system from a text file 
     and print them to the console.
    Text file: mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, pluto (I still believe in you pluto) 
 */
const files = require('fs');
const buff = files.readFile('./planet.txt','utf8', (err, data) => {
   if(err) console.error('THIS IS AN ERROR : ', err);

   data.toString()
   console.log(data);
})
