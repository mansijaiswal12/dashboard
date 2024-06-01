import React from "react";
import Card from "./component/Cards";
import Aside from "./component/Aside";
import Navbar from "./component/Navbar";
import img1 from "../src/assets/img1.jpg.jpg"
import img2 from "../src/assets/img2.jpg.jpg"
import img3 from "../src/assets/img3.jpg.jpg"
import img4 from "../src/assets/img4.jpg.jpg"
import img5 from "../src/assets/img5.jpg"
import img6 from "../src/assets/img6.jpg"
import { btn } from "./component/Button";


const App = () => {
  return (
    <div className="bg-white-500">
      <Navbar/>
      <Aside />
      <div class="p-4 sm:ml-64 bg-white-800">
        <div class="p-4  rounded-lg  dark:border-gray-800">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 mb-4 ">
            <div className="py-5">
            <Card  img={img1} button={btn}/>
            </div>
            <div className="py-5">
            <Card img={img2} button={btn}/>
            </div>
            <div className="py-5">
            <Card img={img3} button={btn}/>
            </div>
            <div className="py-5">
            <Card img={img4}/>
            </div>
            <div className="py-5">
            <Card img={img5}/>
            </div>
            <div className="py-5">
            <Card img={img6}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;