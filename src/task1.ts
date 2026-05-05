type CartItem={
     name: string;
     price:number;
     quantity: number;
}

const addToCart={
     name: "Book",
     price: 200,
     quantity: 2
}

const  calculateTota=( cart: CartItem)=>{

       const {quantity=1, price}=cart;
       return price*quantity;

}


console.log(calculateTota(addToCart))