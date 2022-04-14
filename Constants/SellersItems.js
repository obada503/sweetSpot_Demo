const SELLERITEMS = [{
    id: 1,
    sellerName: "John Adams",
    name: "Chocolate Fudge IceCream with Sprinkles",
    price: 3.5,
    image: require('../assets/Desserts/Image1.png'),
    description: "Two scoops of vanilla icecream, with some chocolate fudge and rainbow sprinkes!"

},
{
    id: 2,
    sellerName: "John Adams",
    name: "Chocolate Fudge IceCream with Sprinkles",
    price: 3.5,
    image: require('../assets/Desserts/Image2.png'),
    description: "Two scoops of vanilla icecream, with some chocolate fudge and rainbow sprinkes!"

},
{
    id: 3,
    sellerName: "John Adams",
    name: "Chocolate Fudge IceCream with Sprinkles",
    price: 3.5,
    image: require('../assets/Desserts/Image3.png'),
    description: "Two scoops of vanilla icecream, with some chocolate fudge and rainbow sprinkes!"

},
{
    id: 4,
    sellerName: "John Adams",
    name: "Chocolate Fudge IceCream with Sprinkles",
    price: 3.5,
    image: require('../assets/Desserts/Image4.png'),
    description: "Two scoops of vanilla icecream, with some chocolate fudge and rainbow sprinkes!"

},
{
    id: 5,
    sellerName: "John Adams",
    name: "Chocolate Fudge IceCream with Sprinkles",
    price: 3.5,
    image: require('../assets/Desserts/Image5.png'),
    description: "Two scoops of vanilla icecream, with some chocolate fudge and rainbow sprinkes!"

},
{
    id: 6,
    sellerName: "John Adams",
    name: "Chocolate Fudge IceCream with Sprinkles",
    price: 3.5,
    image: require('../assets/Desserts/Image6.png'),
    description: "Two scoops of vanilla icecream, with some chocolate fudge and rainbow sprinkes!"

},
]

//function to display all the sellers inventory
export function getSellerItems(){
    return SELLERITEMS;
}
//function to display the individual item the seller clicks on which wil direct him to the item page
export function getSellerItem(id){
    return SELLERITEMS.find((selleritems) => selleritems.id == id);
}