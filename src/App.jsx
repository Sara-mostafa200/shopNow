import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Cart from './Components/Cart/Cart'
import Wishlist from './Components/Wishlist/Wishlist'
import Checkout from './Components/Checkout/Checkout'
import ProductContextProvider from './Context/productContext'
function App() {
  let router = createBrowserRouter([
    {path:'/' , element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:'login' , element:<Login/>},
      {path:'signup' , element:<SignUp/>},
      {path:'cart' , element:<Cart/>},
      {path:'wishlist' , element:<Wishlist/>},
      {path:'checkout' , element:<Checkout/>},
      
    ]}
  ])

  return (
    <>
    <ProductContextProvider>
       <RouterProvider router={router}/>
    </ProductContextProvider>
    
 
    </>
  )
}

export default App
