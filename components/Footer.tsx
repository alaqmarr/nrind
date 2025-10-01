import React from 'react'

const Footer = ({categories} : {categories: any}) => {
    const html = `
        <footer>
        <!-- footer-area-start -->
        <div class="tp-footer__area">
            <div class="tp-footer__bg" data-background="assets/img/footer/ft-bg-1.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-45 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".3s">
                            <div class="tp-footer__widget footer-2-col-1">
                                <div class="tp-footer__logo">
                                    <a href="/">
                                        <p>NR Industrial Enterprises</p>
                                    </a>
                                </div>
                                <div class="tp-footer__contact-list">
                                    <div class="tp-footer__contact-item pb-20 d-flex about-items-center">
                                        <div class="tp-footer__icon">
                                            <i class="flaticon-mail"></i>
                                        </div>
                                        <div class="tp-footer__text">
                                             <a href="mailto:poorexcharity@gmail.com">poorexcharity@gmail.com</a>
                                        </div>
                                    </div>
                                    <div class="tp-footer__contact-item d-flex about-items-center">
                                        <div class="tp-footer__icon">
                                            <i aria-hidden="true" class="flaticon-phone"></i>
                                        </div>
                                        <div class="tp-footer__text">
                                             <a href="tel:+990988764578">+99 (098) 876 4578</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-6 mb-45 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                            <div class="tp-footer__widget footer-2-col-2">
                                <h4 class="tp-footer__widget-title-2">Navigation</h4>
                                <div class="tp-footer__list">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-6 mb-45 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".7s">
                            <div class="tp-footer__widget footer-2-col-3">
                                <h4 class="tp-footer__widget-title-2">Categories</h4>
                                <div class="tp-footer__list">
                                    <ul>
                                        ${categories.map((category: any) => (`
                                        <li><a href="/products?categoryId=${category.id}">${category.name}</a></li>
                                        `)).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-45 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".9s">
                            <div class="tp-footer__widget footer-2-col-4">
                                <div class="tp-footer__donate-box">
                                    <h4 class="tp-footer__donate-title-sm">Enquire about our products/h4>
                                    <a class="tp-btn theme-2-bg" href="/contact">Contact Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer-area-end -->

        <!-- copyright-area-start -->
        <div class="tp-copyright__area tp-copyright__bg">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="tp-copyright__text text-center text-sm-start">
                            <span>© Copyright 2025 by NR Industrial Enterprises<br/> Designed, developed and Powered by <a href="https://alaqmar.dev">The Web Sensei</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- copyright-area-end -->

    </footer>
    `
    return (
        <div
            dangerouslySetInnerHTML={{ __html: html }}>

        </div>
    )
}

export default Footer
