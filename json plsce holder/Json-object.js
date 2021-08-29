const accessories =
{
    xaomi: {

        mobile: [
            { name: 'poco f1', color: 'blue', price: 21000 },
            { name: 'mi-10', color: 'black', price: 50000 },
            { name: 'node-7 pro', color: 'red', price: 17000 }
        ],
        powerbank: [
            { name: 'a1', color: 'blue', price: 2100 },
            { name: 'mi', color: 'black', price: 500 }
        ]

    },
    samsung: {

        tv: {
            name: 'S-Smart-Tv', color: 'Dark', price: 36000
        },
        mobile: [
            { name: 'm21', color: 'blue', price: 25000 },
            { name: 'a30', color: 'blue', price: 21000 }
        ]
    }

}


//console.log(accessories);
// console.log(accessories.xaomi.mobile);
// console.log(accessories.samsung.tv);

const stringified = JSON.stringify(accessories);
const object = JSON.parse(stringified);
console.log(object);


