import { Text} from 'react-native'
const DESSERTS = [{
    id: 1,
    sellerName: "John Adams",
    name: "Chocolate Fudge IceCream with Sprinkles",
    price: 3.5,
    image: require('../assets/Desserts/Image1.png'),
    description: "Two scoops of vanilla icecream, with some chocolate fudge and rainbow sprinkes!"
},
{
    id: 2,
    sellerName: "Mahmoud Jabbar",
    name: "Custard Brownie",
    price: 2,
    image: require('../assets/Desserts/Image2.png'),
    description: "Three Chocolate Brownies, with custard stuffing!"
},
{
    id: 3,
    sellerName: "Richard Jacobs",
    name: "Lemon Cake",
    price: 10,
    image: require('../assets/Desserts/Image3.png'),
    description: "Round lemmon cake with bright yellow whipped cream!"
},
{
    id: 4,
    sellerName: "Ali Khan",
    name: "Hazelnut IceCream with Rainbow Sprinkles",
    price: 3.5,
    image: require('../assets/Desserts/Image4.png'),
    description: "Chocolate Ice cream cone with rainbow sprinkles!"
},
{
    id: 5,
    sellerName: "Bob Shark",
    name: "Chocolate Cake",
    price: 3.5,
    image: require('../assets/Desserts/Image5.png'),
    description: "Large Chocolate Cake, with chocolate whipped cream on top!"
},
{
    id: 6,
    sellerName: "Tony Hawk",
    name: "Bannana Oatmeal",
    price: 3.5,
    image: require('../assets/Desserts/Image6.png'),
    description: "Mixture of bannanas, almonds, milk, and maple syrup!"
},
{
    id: 7,
    sellerName: "Ahmad Issa",
    name: "Baked Chocolate Cookies",
    price: 3.5,
    image: require('../assets/Desserts/Image7.png'),
    description: "Crunchy, crispy baked chocolate cookie!"
},
{
    id: 8,
    sellerName: "Juan Dewey",
    name: "Dark chocolate pastries ",
    price: 3.5,
    image: require('../assets/Desserts/Image8.png'),
    description: "Two scoops of vanilla icecream with some chocolate fudge and rainbow sprinkes"
},
{
    id: 9,
    sellerName: "Marvin Richard",
    name: "Dark Chocolate IceCream ",
    price: 3.5,
    image: require('../assets/Desserts/Image9.png'),
    description: "Dark Chocolate IceCream with vanilla bean icecream stuffing!"
},
{
    id: 10,
    sellerName: "Leonard Davidson",
    name: "Peanut Mystery",
    price: 3.5,
    image: require('../assets/Desserts/Image10.png'),
    description: "Dried peanut butter chunkc, covered with biscuit!"
},
{
    id: 11,
    sellerName: "Jeremy Dickenson",
    name: "Oreo Toast",
    price: 3.5,
    image: require('../assets/Desserts/Image11.png'),
    description: "Light chocolate custard, with rasberries on the side!"
},
{
    id: 12,
    sellerName: "Mariana Antal",
    name: "Chocolate Marshmellow Toast",
    price: 3.5,
    image: require('../assets/Desserts/Image12.png'),
    description: "Four pieces of delicious toast "
},

   
]

//function to display all the desserts for the user
export function getDesserts(){
    return DESSERTS;
}

//function to display the specific image the user clicks on
export function getDessert(id){
        return DESSERTS.find((dessert) => dessert.id == id);
}
//extracting the name of desserts only
export function getDessertName(){
    return Object.values(DESSERTS).map((x=>console.log(x.name)))
}
    
// export function getSellerDessert(id, sellerName){

//     // console.log(DESSERTS.find((dessert) => (dessert.id == id && dessert.sellerName == sellerName)));
//     return DESSERTS.find((dessert) => dessert.id == id && dessert.sellerName == sellerName);
   
// }


// export function getSellerName(sellerName)
// {
     
//     DESSERTS.filter(value => value == sellerName && DESSERTS.sellerName == sellerName)

//     if(sellerName == DESSERTS.sellerName)
//     {
//         return DESSERTS.sellerName;
//     }

// }