import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from "./Preloader";
import Footer from "./Footer";
import Navbar from "./Navbar";


class HomePage extends Component{
    render(){
        return(
            <div>
                <Navbar/>
               {/*Hero Section Begin*/}
                <section className="hero-section">
                    <div className="hero-items owl-carousel">
                        <div className="single-hero-items set-bg" data-setbg="img/hero-1.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <span>Cucumber,Pepper</span>
                                        <h1>Black friday</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore</p>
                                        <a href="#" className="primary-btn">Shop Now</a>
                                    </div>
                                </div>
                                <div className="off-card">
                                    <h2>Sale <span>50%</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="single-hero-items set-bg" data-setbg="img/hero-2.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <span>Yam,Rice</span>
                                        <h1>Black friday</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore</p>
                                        <a href="#" className="primary-btn">Shop Now</a>
                                    </div>
                                </div>
                                <div className="off-card">
                                    <h2>Sale<span>50%</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Banner Section Begin */}
    <div class="banner-section spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4">
                    <div class="single-banner">
                        <img src="img/banner-1.jpg" alt=""/>
                        <div class="inner-text">
                            <h4>Cereals</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="single-banner">
                        <img src="img/banner-2.jpg" alt=""/>
                        <div class="inner-text">
                            <h4>Vegetables</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="single-banner">
                        <img src="img/banner-3.jpg" alt=""/>
                        <div class="inner-text">
                            <h4>Fruits</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*Banner Section End*/}

  {/*Women Banner Section Begin*/}
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3">
                    <div class="product-large set-bg" data-setbg="img/products/women-large.jpg">
                        <h2>Groceries</h2>
                        <a href="#">Discover More</a>
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-1">
                    <div class="filter-control">
                        <ul>
                            <li class="active">Clothings</li>
                            <li>HandBag</li>
                            <li>Shoes</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                    <div class="product-slider owl-carousel">
                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/products/women-1.jpg" alt=""/>
                                <div class="sale">Sale</div>
                                <div class="icon">
                                    <i class="icon_heart_alt"></i>
                                </div>
                                <ul>
                                    <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Coat</div>
                                <a href="#">
                                    <h5>Pure Pineapple</h5>
                                </a>
                                <div class="product-price">
                                    $14.00
                                    <span>$35.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/products/women-2.jpg" alt=""/>
                                <div class="icon">
                                    <i class="icon_heart_alt"></i>
                                </div>
                                <ul>
                                    <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Shoes</div>
                                <a href="#">
                                    <h5>Guangzhou sweater</h5>
                                </a>
                                <div class="product-price">
                                    $13.00
                                </div>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/products/women-3.jpg" alt=""/>
                                <div class="icon">
                                    <i class="icon_heart_alt"></i>
                                </div>
                                <ul>
                                    <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Towel</div>
                                <a href="#">
                                    <h5>Pure Pineapple</h5>
                                </a>
                                <div class="product-price">
                                    $34.00
                                </div>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/products/women-4.jpg" alt=""/>
                                <div class="icon">
                                    <i class="icon_heart_alt"></i>
                                </div>
                                <ul>
                                    <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Towel</div>
                                <a href="#">
                                    <h5>Converse Shoes</h5>
                                </a>
                                <div class="product-price">
                                    $34.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Women Banner Section End */}

    <section class="deal-of-week set-bg spad" data-setbg="img/time-bg.jpg">
        <div class="container">
            <div class="col-lg-6 text-center">
                <div class="section-title">
                    <h2>Deal Of The Week</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                        consectetur adipisicing elit </p>
                    <div class="product-price">
                        $35.00
                        <span>/ HanBag</span>
                    </div>
                </div>
                <div class="countdown-timer" id="countdown">
                    <div class="cd-item">
                        <span>56</span>
                        <p>Days</p>
                    </div>
                    <div class="cd-item">
                        <span>12</span>
                        <p>Hrs</p>
                    </div>
                    <div class="cd-item">
                        <span>40</span>
                        <p>Mins</p>
                    </div>
                    <div class="cd-item">
                        <span>52</span>
                        <p>Secs</p>
                    </div>
                </div>
                <a href="#" class="primary-btn">Shop Now</a>
            </div>
        </div>
    </section>
    {/*Deal Of The Week Section End*/}

    {/*Instagram Section Begin Photo API*/}
    <div class="instagram-photo">
        <div class="insta-item set-bg" data-setbg="img/insta-1.jpg">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">colorlib_Collection</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" data-setbg="img/insta-2.jpg">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">colorlib_Collection</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" data-setbg="img/insta-3.jpg">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">colorlib_Collection</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" data-setbg="img/insta-4.jpg">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">colorlib_Collection</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" data-setbg="img/insta-5.jpg">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">colorlib_Collection</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" data-setbg="img/insta-6.jpg">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">colorlib_Collection</a></h5>
            </div>
        </div>
    </div>
    {/*Instagram Section End*/}

                {/*Benefit Items*/}
                <div className="benefit-items">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-benefit">
                                <div className="sb-icon">
                                    <img src="img/icon-1.png" alt=""/>
                                </div>
                                <div className="sb-text">
                                    <h6>Free Shipping</h6>
                                    <p>For all order over ₦1000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-benefit">
                                <div className="sb-icon">
                                    <img src="img/icon-2.png" alt=""/>
                                </div>
                                <div className="sb-text">
                                    <h6>Delivery On Time</h6>
                                    <p>If good have prolems</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-benefit">
                                <div className="sb-icon">
                                    <img src="img/icon-1.png" alt=""/>
                                </div>
                                <div className="sb-text">
                                    <h6>Secure Payment</h6>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default HomePage;