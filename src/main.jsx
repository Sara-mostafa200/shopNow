import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
    <App />
)
