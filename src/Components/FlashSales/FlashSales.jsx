import React, { useContext } from "react";
import Timer from "../Timer/Timer";
import Slider from "react-slick";
import { ProductContext } from "../../Context/productContext";
import ProductCard from "../ProductCard/ProductCard";

export default function FlashSales() {
    let { FlashSales } = useContext(ProductContext);
    var settings = {
        dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    
    focusOnSelect:true,
    arrows:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={`${className}  md:top-[-50px] top-[-30px] right-[10%] lg:right-[5%]`}
            // style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          /> 
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
          className={`${className}   md:top-[-50px] top-[-30px] left-[70%] md:left-[80%] lg:left-[85%]`}
            // style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
  return (
    <div className="flex flex-col gap-5 my-5 p-2">
      <div className="flex items-center gap-3  ">
        <div className="w-[20px] h-[40px] bg-mainColor rounded "></div>
        <span className="font-poppins  font-semibold  text-[16px] text-mainColor">
          Today’s
        </span>
      </div>
      <div className="flex items-start md:items-center flex-col md:flex-row gap-y-5 gap-x-20">
        <h2 className="font-semibold text-[36px] leading-[48px]">
          Flash Sales
        </h2>
        <Timer />
      </div>
      
      <Slider {...settings} >
         {FlashSales.map((item ) => (
            <ProductCard item ={item} key={item.id}/>
       
        ))}
      </Slider>

      <button className="btn bg-mainColor w-full md:w-1/4 mx-auto text-white rounded px-1 py-3 font-poppins font-medium leading-6">View All Products</button>
       
    
    </div>
  );
}
