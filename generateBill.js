const items = [
  { name: 'Apple', price: 20, quantity: 10 },
  { name: 'Banana', price: 10, quantity: 5 },
   { name: 'Apple', price: 2, quantity: 10 },
  { name: 'Cherry', price: 5, quantity: 20 },
];

const getBill = items.reduce((acc,item)=>{
        acc.total += Math.abs(item.price * item.quantity)
        if(!(acc.products[item.name])){
            acc.products[item.name] = 0
        }
        acc.products[item.name] += Math.abs(item.price * item.quantity)
        return acc
        
},{total:0,products:{}})

console.log(getBill)
