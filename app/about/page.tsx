import React from 'react'

const page = () => {
    const html = `
    <main>

        <!-- breadcrumb-area-start -->
        <div class="tp-breadcrumb__area p-relative fix tp-breadcrumb-height" data-background="assets/img/breadcrumb/breadcrumb-bg.png">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tp-breadcrumb__content z-index-5">
                            <div class="tp-breadcrumb__list">
                               <span><a href="/">home</a></span> 
                               <span class="dvdr"><i class="fa-sharp fa-solid fa-slash-forward"></i></span>
                               <span>About Us</span>
                            </div>
                            <h3 class="tp-breadcrumb__title">About us</h3>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- breadcrumb-area-end -->

        <!-- about-area-start -->
        <div class="tp-about__area tp-about__space">
            <div class="container">
                <div class="row align-items-xl-start align-items-center">
                    <div class="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".9s"
                    data-wow-delay=".3s">
                        <div class="tp-about-us__main-thumb p-relative">
                            <img src="assets/img/about/about-us-1-1.jpg" alt="">
                            <div class="tp-about-us__thumb-sm">
                                <img src="assets/img/about/about-us-1-2.jpg" alt="">
                            </div>
                            <div class="tp-about-us__thumb-border"></div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7 wow tpfadeRight" data-wow-duration=".9s"
                    data-wow-delay=".7s">
                        <div class="tp-about__right-side tp-about__right-box">
                            <div class="tp-about__section-title pb-25">
                                <span class="tp-section-subtitle-2">Who are we?</span>
                                <h4 class="tp-section-title">About NR<br>Industrial Enterprises</h4>
                            </div>
                            <div class="tp-about__content">
                                <div class="tp-about__text">
                                    <p>
                                    NR Industrial Enterprises is a leading manufacturer and supplier of high-quality industrial products. With a commitment to innovation and excellence, we provide solutions that meet the diverse needs of our clients across various industries.
                                    </p>
                                </div>
                                <div class="tp-about__bottom d-flex">
                                    <div class="tp-about__contact-us">
                                        <span>Call Us</span>      
                                        <a href="tel:+919885508494">+91 98855 08494</a>                                  
                                    </div>
                                    <div class="tp-about__author-box d-flex align-items-center">
                                        <div class="tp-about__author-thumb pr-25">
                                            <img src="assets/img/about/author-1.png" alt="">
                                        </div>
                                        <div class="tp-about__author-info">
                                            <h5 class="tp-about__author-name">Abbas Palanpurwala</h5>
                                            <span>Proprietor</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- about-area-end -->

        <!-- brand-area-start -->
        <div class="tp-brand-2__area">
            <div class="container">
                <div class="tp-brand-2__border">
                    <div class="row">
                        <div class="col-12">
                            <div class="tp-brand-2__wrapper">
                                <div class="swiper-container tp-brand-2__active">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="tp-brand-2__item text-center">
                                                <img src="assets/img/brand/brand-2-1.png" alt="">
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tp-brand-2__item text-center">
                                                <img src="assets/img/brand/brand-2-2.png" alt="">
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tp-brand-2__item text-center">
                                                <img src="assets/img/brand/brand-2-3.png" alt="">
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tp-brand-2__item text-center">
                                                <img src="assets/img/brand/brand-2-4.png" alt="">
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tp-brand-2__item text-center">
                                                <img src="assets/img/brand/brand-2-2.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- brand-area-end -->

        <!-- cta-area-start -->
        <div class="tp-cta-2__area tp-cta-2__pt">
            <div class="tp-cta-2__bg p-relative fix" data-background="assets/img/cta/cta-bg-1.png">
                <div class="tp-cta-2__shape-1 d-none d-xl-block">
                    <img src="assets/img/cta/cta-shape-1-1.png" alt="">
                </div>
                <div class="tp-cta-2__shape-2 d-none d-xl-block">
                    <img src="assets/img/cta/cta-shape-1-2.png" alt="">
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="tp-cta-2__content text-center">
                                <h4 class="tp-cta-2__title">Explore our wide range of products.</h4>
                                <a href="/products" class="tp-btn big">View Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- cta-area-end -->

    
        <!-- cta-area-start -->
        <div class="tp-cta__area">
            <div class="tp-cta__bg" data-background="assets/img/cta/cta-bg.jpg">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-7 col-lg-7 col-md-7">
                            <div class="tp-cta__content d-flex align-items-center">
                                <div class="tp-cta__icon d-none d-sm-block">
                                    <img src="assets/img/cta/cta-icon-1.png" alt="">
                                </div>
                                <h4 class="tp-cta__title-sm">Have an enquiry?<br>
                                </h4>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-5 col-md-5">
                            <div class="tp-cta__button text-md-end text-start">
                                <a class="tp-btn" href="/contact">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- cta-area-end -->

    </main>
    `
  return (
    <div dangerouslySetInnerHTML={{ __html: html }}>
      
    </div>
  )
}

export default page
