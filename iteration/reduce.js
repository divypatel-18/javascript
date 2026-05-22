const num = [1, 2, 3]

// const total = num.reduce(function (acc, currentValue) {
//     console.log(`acc ${acc} and currentvalue:  ${currentValue}`);
    
//     return acc + currentValue
// }, 0)

const total = num.reduce( (acc, currentValue) => acc+currentValue, 0)

console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 299,  
    },
    {
        itemName: "py course",
        price: 599,  
    },
    {
        itemName: "AI course",
        price: 999,  
    },
    {
        itemName: "ML course",
        price: 1299,  
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
