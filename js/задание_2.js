const shoes = {};
shoes.brand = 'zenden';
shoes.color = 'black';
shoes.year = '2002';


const str = 'color'
const str2 = 'country'


function hasProperies(obj, str) {
    return (str in obj)
}


console.log(hasProperies(shoes, str))
console.log(hasProperies(shoes, str2))