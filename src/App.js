import "./App.css";
import "./components/Cards";
import { FaUserAlt } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillBoxFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div className="navbar">
        <ul className="navbar1">
          <img src="/Img/amazon.png" className="amazon" />
          <li className="upper_list">
            {" "}
            <FaUserAlt className="icons" />
            Hello User,
          </li>
          <li className="upper_list">
            {" "}
            <BsFillArrowRightCircleFill className="icons" />
            Hello, Sign in
          </li>
          <li className="upper_list">
            <BsFillBoxFill className="icons" />
            Returns & Orders
          </li>
          <li className="upper_list">
            <FaLocationArrow className="icons" />
            Location
          </li>

          <input type="text" className="input_box" placeholder="Search Amazon.in" />
        </ul>
      </div>

      <div className="navbar2">
        <ul className="navbar_2">
          <li className="lower_list">Amazon minTV</li>
          <li className="lower_list">Bestsellers</li>
          <li className="lower_list">Mobiles</li>
          <li className="lower_list">Customer Service</li>
          <li className="lower_list">Electronics</li>
          <li className="lower_list">Prime</li>
          <li className="lower_list">Amazon Pay</li>
          <li className="lower_list">Fashion</li>
          <li className="lower_list">New Releases</li>
          <li className="lower_list">Home & Kitchen</li>
          <li className="lower_list">Beauty & Personal Care</li>
          <li className="lower_list">Computers</li>
          <li className="lower_list">Books</li>
          <li className="lower_list">Coupons</li>
          <li className="lower_list">Toys & Games</li>
          <li className="lower_lists">Sell</li>
        </ul>
      </div>
      <div className="container">
        <img src="/Img/bg1.png" className="img" />

        <div className="cards_wrapper">
          <Cards head="Apple Smart watch starts from 34,999/-" img="/Img/watch.png" />
          <Cards head="Beauty and Personal Care starts from 399/-" img="/Img/beauty.png" />
          <Cards head="Amazon Fashion starts from 599/-" img="/Img/dress.png" />
          <Cards head="Smart Phones starts from 9,999/-" img="/Img/mobiles.png" />
        </div>
      </div>
    </>
  );
}

export default App;
