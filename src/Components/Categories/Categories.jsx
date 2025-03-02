import React from "react";
import Slider from "react-slick";
import Phones from "../../assets/Categories/Category-CellPhone.svg";
import Computers from "../../assets/Categories/Category-Computer.svg";
import SmartWatch from "../../assets/Categories/Category-SmartWatch.svg";
import Camera from "../../assets/Categories/Category-Camera.svg";
import HeadPhones from "../../assets/Categories/Category-Headphone.svg";
import Gaming from "../../assets/Categories/Category-Gamepad.svg";

export default function Categories() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    focusOnSelect: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}  md:top-[-50px] top-[-45px] right-[10%] lg:right-[5%]`}
        // style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}   md:top-[-50px] top-[-45px] left-[70%] md:left-[80%] lg:left-[85%]`}
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
          Categories
        </span>
      </div>
      <div className="flex items-start md:items-center flex-col md:flex-row gap-y-5 gap-x-20">
        <h2 className="font-semibold text-[36px] leading-[48px]">
          Browse By Category
        </h2>
      </div>

      <Slider {...settings}>
        <div className="px-3">
          <div className="border flex flex-col items-center py-5   ">
            <img className="bg-white" src={Phones} alt="" />
            <span className="font-poppins text-[16px] text-black group-hover:text-white ">
              Phones
            </span>
          </div>
        </div>
        <div className="px-3">
          <div className="border flex flex-col items-center py-5   ">
            <img className="bg-white" src={Computers} alt="" />
            <span className="font-poppins text-[16px] text-black group-hover:text-white ">
            Computers
            </span>
          </div>
        </div>
        <div className="px-3">
          <div className="border flex flex-col items-center py-5   ">
            <img className="bg-white" src={SmartWatch} alt="" />
            <span className="font-poppins text-[16px] text-black group-hover:text-white ">
            SmartWatch
            </span>
          </div>
        </div>
        <div className="px-3">
          <div className="border flex flex-col items-center py-5   ">
            <img className="bg-white" src={Camera} alt="" />
            <span className="font-poppins text-[16px] text-black group-hover:text-white ">
            Camera
            </span>
          </div>
        </div>
        <div className="px-3">
          <div className="border flex flex-col items-center py-5   ">
            <img className="bg-white" src={HeadPhones} alt="" />
            <span className="font-poppins text-[16px] text-black group-hover:text-white ">
            HeadPhones
            </span>
          </div>
        </div>
        <div className="px-3">
          <div className="border flex flex-col items-center py-5   ">
            <img className="bg-white" src={Gaming} alt="" />
            <span className="font-poppins text-[16px] text-black group-hover:text-white ">
            Gaming
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
}
