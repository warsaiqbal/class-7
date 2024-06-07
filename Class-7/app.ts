function chef(dish: string, drink: string, dessert: string){
  
  let platter = dish + " " + drink + " " + dessert
  return platter
    // console.log("dish: " + dish);
    // console.log("drink: " + drink);
    // console.log("dessert: " + dessert);
}

let lunch = chef("biryani", "cola next", "gulab jamun")
console.log(lunch);
//chef("biryani", "cola next", "gulab jamun"); //dynamic function



//loop: 1 block of code ko bar bar chalana jb tk hum satisfy na hojaen ya code ko multiple times chalana kam lines mei

//for(initialization, condition, increment){ //initializing variable
//block of code
//}

for(let i = 0; i < 10; i = i + 1){ //or i++ instead of i + 1 
console.log("hello world");
} 

//loop chalta rehta hai jb tk uski koi condition false nhi hojati