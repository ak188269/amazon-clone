import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71SDTPswjNL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="HP Chromebook x360 14-inch (35.56 cms) Thin & Light Touchscreen Laptop (AMD 3015CE/4GB/64GB )"
         
            price={30990}
            rating={5}
            image="https://m.media-amazon.com/images/I/81hoonPUdxL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="Sony MDR-ZX110AP Wired On-Ear Headphones with tangle free cable, 3.5mm Jack, Headset with Mic for phone calls and 1 Year Warranty - (Black)"
            price={1460}
            rating={4}
            image="https://m.media-amazon.com/images/I/61kLSSQ6P7L._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung Galaxy Watch Active 2 - Aluminium, 44mm (Cloud Silver)"
            price={16165}
            rating={3}
            image="https://m.media-amazon.com/images/I/71J3L+ftlzL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={2999}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={70000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG QHD (2560 x 1440) 32 Inch IPS Display 3 Side Borderless - HDR 10, sRGB 99%, AMD Free sync - Dual HDMI, Display Port - 32QN600"
            price={27090}
            rating={4}
            image="https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
