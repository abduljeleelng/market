import React, {Component} from "react";
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'

class Navbar extends Component{
    render() {
           return (

               // Header Section Begin
    <header className="header-section">
        <div className="header-top">
            <div className="container">
                <div className="ht-left">
                    <div className="mail-service">
                        <i className="fa fa-envelope"/>
                        hello@ojaagbe.com
                    </div>
                    <div className="phone-service">
                        <i className=" fa fa-phone"/>
                        +2349012345678
                    </div>
                </div>
                <div className="ht-right">
                    <a href="#" className="login-panel"><i className="fa fa-user"/>Login</a>
                    <div className="lan-selector">
                        <select className="language_drop" name="countries" id="countries" style={{width:"300px"}}>
                            <option value='yt' data-image="img/flag-1.jpg" data-imagecss="flag yt"
                                data-title="English">English</option>
                        </select>
                    </div>
                    <div className="top-social">
                        <a href="#"><i className="ti-facebook"/></a>
                        <a href="#"><i className="ti-twitter-alt"></i></a>
                        <a href="#"><i className="ti-linkedin"></i></a>
                        <a href="#"><i className="ti-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="inner-header">
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <div className="logo">
                            <Link to="/index.html">
                                <img src="img/ojaagbelogo.jpg" alt="oja"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <div className="advanced-search">
                            <button type="button" className="category-btn">All Categories</button>
                            <div className="input-group">
                                <input type="text" placeholder="What do you need?"/>
                                <button type="button"><i className="ti-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right col-md-3">
                        <ul className="nav-right">
                            <li className="heart-icon">
                                <a href="#">
                                    <i className="icon_heart_alt"></i>
                                    <span>1</span>
                                </a>
                            </li>
                            <li className="cart-icon">
                                <a href="#">
                                    <i className="icon_bag_alt"></i>
                                    <span>3</span>
                                </a>
                                <div class="cart-hover">
                                    <div class="select-items">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="si-pic"><img src="img/select-product-1.jpg" alt=""/></td>
                                                    <td className="si-text">
                                                        <div className="product-selected">
                                                            <p>$60.00 x 1</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td class="si-close">
                                                        <i class="ti-close"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="si-pic"><img src="img/select-product-2.jpg" alt=""/></td>
                                                    <td class="si-text">
                                                        <div class="product-selected">
                                                            <p>$60.00 x 1</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td class="si-close">
                                                        <i class="ti-close"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="select-total">
                                        <span>total:</span>
                                        <h5>$120.00</h5>
                                    </div>
                                    <div class="select-button">
                                        <a href="#" className="primary-btn view-card">VIEW CARD</a>
                                        <a href="#" className="primary-btn checkout-btn">CHECK OUT</a>
                                    </div>
                                </div>
                            </li>
                            <li className="cart-price">$150.00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="nav-item">
            <div className="container">
                <div className="nav-depart">
                    <div className="depart-btn">
                        <i className="ti-menu"></i>
                        <span>All departments</span>
                        <ul className="depart-hover">
                            <li className="active"><a href="#">Women’s Clothing</a></li>
                            <li><a href="#">Men’s Clothing</a></li>
                            <li><a href="#">Underwear</a></li>
                            <li><a href="#">Kid's Clothing</a></li>
                            <li><a href="#">Brand Fashion</a></li>
                            <li><a href="#">Accessories/Shoes</a></li>
                            <li><a href="#">Luxury Brands</a></li>
                            <li><a href="#">Brand Outdoor Apparel</a></li>
                        </ul>
                    </div>
                </div>
                <nav class="nav-menu mobile-menu">
                    {/*Comments*/}
                    <ul>
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><a href="#">Collection</a>
                            <ul className="dropdown">
                                <li><a href="#">Men's</a></li>
                                <li><a href="#">Women's</a></li>
                                <li><a href="#">Kid's</a></li>
                            </ul>
                        </li>
                        <li><a href="./blog.html">Blog</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                        <li><a href="#">Pages</a>
                            <ul className="dropdown">
                                <li><a href="./blog-details.html">Blog Details</a></li>
                                <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                <li><a href="./check-out.html">Checkout</a></li>
                                <li><a href="./faq.html">Faq</a></li>
                                <li><a href="./register.html">Register</a></li>
                                <li><a href="./login.html">Login</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
            </div>
        </div>
    </header>


  );
    }


}
export default Navbar;