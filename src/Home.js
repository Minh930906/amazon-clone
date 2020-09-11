import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="SodaStream Jet Sparkling Water Maker, Kit w/60l Cylinder, Silver"
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81cJqe-6PFL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Hoover BH50010 Linx Cordless Stick Vacuum Cleaner, Lightweight, Grey"
            price={100.2}
            image="https://images-na.ssl-images-amazon.com/images/I/61sjxrnJ1aL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Toshiba TRCS01 Cooker 6 Cups Uncooked (3L) with Fuzzy Logic and One-Touch Cooking, Brown Rice, White Rice and Porridge"
            price={149.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51c6diwmDKL._AC_SL1100_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="10 Pairs Fiberglass Alloy Chopsticks, GLAMFIELDS Reusable Japanese Chinese Chop sticks Dishwasher Safe, Non-slip, 9 1/2 inches"
            price={8.7}
            image="https://images-na.ssl-images-amazon.com/images/I/71bod0AoJrL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title='Sony XBR-85Z9G 85" (7680 x 4320) Master Series 8K HDR Smart LED TV (2019)'
            price={109649.99}
            image="https://cdn.alza.hu/ImgW.ashx?fd=f4&cd=WS1023a5&i=1.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
