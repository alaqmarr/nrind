'use client'
import React from 'react'


const Header = ({ categories }: { categories: any }) => {
    const html = `
       <!-- back-to-top-start  -->
    <button class="scroll-top scroll-to-target" data-target="html">
        <i class="far fa-angle-double-up"></i>
    </button>
    <!-- back-to-top-end  -->
    <!-- tp-offcanvus-area-start -->
    <div class="tpoffcanvas-area">
        <div class="tpoffcanvas">
           <div class="tpoffcanvas__close-btn">
              <button class="close-btn"><i class="fal fa-times"></i></button>
           </div>
           <div class="tpoffcanvas__logo">
              <a href="/">
                 <img src="/logo.jpg" alt="logo" style="width: 150px; height:auto;"/>
              </a>
           </div>
           <div class="tpoffcanvas__title">
              <p>Welcome to NR Industrial Enterprises</p>
           </div>
           <div class="tp-main-menu-mobile d-xl-none"></div>
           <div class="tpoffcanvas__contact-info">
              <div class="tpoffcanvas__contact-title">
                 <h5>Contact us</h5>
              </div>
              <ul>
                 <li>
                    <i class="fa-light fa-location-dot"></i>
                    <a href="https://www.google.com/maps/@23.8223586,90.3661283,15z" target="_blank">Melbone st, Australia, Ny 12099</a>
                 </li>
                 <li>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:solaredge@gmail.com">themepure@gmail.com</a>
                 </li>
                 <li>
                    <i class="fal fa-phone-alt"></i>
                    <a href="tel:+48555223224">+48 555 223 224</a>
                 </li>
              </ul>
           </div>
        </div>
         </div>
        <div class="body-overlay"></div>
        <!-- tp-offcanvus-area-end -->

    <header class="tp-header-height">
        <div id="header-sticky" class="tp-header-2__area tp-header-2__transparent">
            <div class="container container-large">
                <div class="tp-header-2__plr">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-6 col-md-4 col-7">
                            <div class="tp-header-2__logo">
                                <a href="/">
                                    <img src="/logo.jpg" alt="logo" style="width: 150px; height:auto;"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-7 d-none d-xl-block">
                            <div class="tp-header-2__main-menu">
                                <nav class="tp-main-menu-content">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/products">Products</a></li>
                                        <li class="has-dropdown"><a href="#">Categories</a>
                                            <ul class="submenu tp-submenu">
                                                ${categories.map((category: any) => (`
                                                <li><a href="/products?categoryId=${category.id}">${category.name}</a></li>
                                                `)).join('')}
                                            </ul>
                                        </li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-8 col-5">
                            <div class="tp-header-2__right-box">
                                <div class="tp-header-2__right-action ">
                                    <ul>
                                        <li>
                                        <div class="tp-header-2__btn d-none d-md-block">
                                            <a class="tp-btn" href="/contact">Contact Us</a>
                                        </div>
                                        </li>                                        
                                        <li>
                                            <div class="tp-header-2__bar d-xl-none">
                                                <button class="tp-menu-bar"><i class="fa-solid fa-bars-staggered"></i></button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    `
    return (
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
    )
}

export default Header
