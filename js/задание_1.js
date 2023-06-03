const shoes = {
    brand: 'zenden',
    color: 'black',
    year: '2002'
 };
 
 function ownProperties(obj) {
    obj = Object.create(shoes);
    obj.ownPrice = 200000;
    obj.ownModel = 'HM';
 
    for (let key in obj) {
       if (obj.hasOwnProperty(key)) {
          console.log(key)
       }
    }
 }
 console.log(ownProperties())