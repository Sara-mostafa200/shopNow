import { createContext, useState } from "react";
import product1 from '../assets/products/g92-2-500x500 1.png'
import product2 from '../assets/products/product2.png'
import product3 from '../assets/products/product3.png'
import product4 from '../assets/products/product4.png'
import coat from '../assets/BestSelling/coat.png'
import Gucci from '../assets/BestSelling/Gucci.png'
import CPU from '../assets/BestSelling/CPU.png'
import BookSelf from '../assets/BestSelling/BookSelf.png'

export let ProductContext = createContext()

export default function ProductContextProvider(props){
    const [BestSelling, setBestSelling] = useState(
      [
        {
          id: "1",
          name: "The north coat",
          image: coat,
          price: "260",
          oldPrice: "360",
          rating: "5",
          reviews: "65",
          discount: "28"
        },
        {
          id: "2",
          name: "Gucci duffle bag",
          image: Gucci,
          price: "960",
          oldPrice: "1160",
          rating: "4.8",
          reviews: "85",
          discount: "17"
        },
        {
          id: "3",
          name: "RGB liquid CPU Cooler",
          image: CPU,
          price: "160",
          oldPrice: "170",
          rating: "4.6",
          reviews: "65",
          discount: "6"
        },
        {
          id: "4",
          name: "Small BookShelf",
          image: BookSelf,
          price: "360",
          oldPrice: "400",
          rating: "4.7",
          reviews: "95",
          discount: "10"
        },
       
    ])
    const [FlashSales, setFlashSales] = useState([
        {
            id: 1,
            name: "HAVIT HV-G92 Gamepad",
            image: product1,
            price: 120,
            oldPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88
          },
          {
            id: 2,
            name: "AK-900 Wired Keyboard",
            image: product2,
            price: 960,
            oldPrice: 1160,
            discount: 35,
            rating: 4.7,
            reviews: 75
          },
          {
            id: 3,
            name: "IPS LCD Gaming Monitor",
            image: product3,
            price: 370,
            oldPrice: 400,
            discount: 30,
            rating: 5,
            reviews: 99
          },
          {
            id: 4,
            name: "S-Series Comfort Chair",
            image: product4,
            price: 375,
            oldPrice: 400,
            discount: 25,
            rating: 4.6,
            reviews: 99
          }, {
            id: 1,
            name: "HAVIT HV-G92 Gamepad",
            image: product1,
            price: 120,
            oldPrice: 160,
            discount: 40,
            rating: 4.6,
            reviews: 88
          },
          {
            id: 2,
            name: "AK-900 Wired Keyboard",
            image: product2,
            price: 960,
            oldPrice: 1160,
            discount: 35,
            rating: 4.7,
            reviews: 75
          },
       
    ])


    return(
        <ProductContext.Provider value={{FlashSales , BestSelling}}>
            {props.children}
        </ProductContext.Provider>
    )

}