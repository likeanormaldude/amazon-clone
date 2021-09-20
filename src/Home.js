import React from "react";
import "./Home.css";
import primeBg from "./img/bg-prime.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img src={primeBg} alt="Prime Bg" className="home__image" />

      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"
        />
        <Product
          id="12321341"
          title="The Lean Startup How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"
        />
        <Product
          id="12321341"
          title="The Lean Startup How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"
        />
        <Product
          id="12321341"
          title="The Lean Startup How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
