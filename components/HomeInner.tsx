'use client'
import React from 'react'

const HomeInner = ({ products }: { products: any }) => {

    const sixProducts = products.slice(0, 6);
    const html = `
    <main>

        <!-- slider-area-start -->
        <div class="tp-slider-2__area tp-slider-2__mb p-relative">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 col-lg-6">
                        <div class="tp-slider-2__content">
                            <div class="tp-slider-2__section-box pb-10">
                                <span class="tp-slider-2-subtitle wow tpfadeUp" data-wow-duration=".9s"
                                data-wow-delay=".3s">Greetings from</span>
                                <h4 class="tp-slider-2-title wow tpfadeUp" data-wow-duration=".9s"
                                data-wow-delay=".5s">NR <br>Industrial Enterprises</h4>
                            </div>
                            <div class="tp-slider-2__content-text">
                                <p class="wow tpfadeUp" data-wow-duration=".9s"
                                data-wow-delay=".7s">
                                NR Industrial Enterprises is a leading manufacturer and supplier of high-quality industrial products. With a commitment to innovation and excellence, we provide solutions that meet the diverse needs of our clients across various industries.
                                </p>
                                <a class="tp-btn wow tpfadeUp" data-wow-duration=".9s"
                                data-wow-delay=".9s" href="/about">Know More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-6">
                        <div class="tp-slider-2__main-thumb">
                            <img src="assets/img/slider/slider-bg-2.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- slider-area-end -->

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

        <!-- about-area-start -->
        <div class="tp-about-2__area fix p-relative pt-120 pb-120">
            <div class="tp-about-2__text-box d-none d-xl-block">
                <h5 class="tp-about-2__big-text">NRINDENT</h5>
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".9s"
                    data-wow-delay=".3s">
                        <div class="tp-about-2__main-thumb p-relative text-center text-lg-end">
                            <img src="assets/img/about/about-2.png" alt="">
                            <div class="tp-about-2__thumb-sm">
                                <img src="assets/img/about/about-2-2.png" alt="">
                            </div>
                            <div class="tp-about-2__thumb-border"></div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7 wow tpfadeRight" data-wow-duration=".9s"
                    data-wow-delay=".9s">
                        <div class="tp-about-2__right-box">
                            <div class="tp-about-2__section-title pb-25">
                                <span class="tp-section-subtitle-2">ABOUT NR INDUSTRIAL ENTERPRISES</span>
                                <h4 class="tp-section-title">Just a quick <br> overview</h4>
                            </div>
                            <div class="tp-about-2__text">
                                <p>
                                    NR Industrial Enterprises is a leading manufacturer and supplier of high-quality industrial products. With a commitment to innovation and excellence, we provide solutions that meet the diverse needs of our clients across various industries.
                                </p>
                            </div>
                            <div class="tp-about-2__wraper pb-40 d-flex justify-content-between">
                                <div class="tp-about-2__list-item d-flex align-items-start">
                                    <div class="tp-about-2__list-icon">
                                        <i class="flaticon-check-mark-black-outline"></i>
                                    </div>
                                    <div class="tp-about-2__list-content">
                                        <h4 class="tp-about-2__title-sm">FULLY TRUSTED</h4>
                                        <p>Charity Navigator's Giving you <br> support multiple</p>
                                    </div>
                                </div>
                                <div class="tp-about-2__list-item d-flex align-items-start">
                                    <div class="tp-about-2__list-icon">
                                        <i class="flaticon-check-mark-black-outline"></i>
                                    </div>
                                    <div class="tp-about-2__list-content">
                                        <h4 class="tp-about-2__title-sm">HIGH QUALITY</h4>
                                        <p>Charity Navigator's Giving you <br> support multiple</p>
                                    </div>
                                </div>                                
                            </div>
                            <div class="tp-about-2__bottom d-flex">
                                <div class="tp-about-2__btn">
                                    <a class="tp-btn" href="/about">Know More</a>
                                </div>
                                <div class="tp-about-2__fact d-flex align-items-center">
                                    <h5 class="tp-about-2__fact-number">100+</h5>
                                    <span>Products <br> Dealt</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- about-area-end -->

        
        <!-- blog-area-start -->
        <div class="tp-blog-2__area tp-blog-2__space">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="tp-blog-2__section-title pb-50 text-center">
                            <span class="tp-section-subtitle">our products</span>
                            <h4 class="tp-section-title">Explore our range of products</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    ${sixProducts.map((product: any) => (`
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                    data-wow-delay=".3s">
                        <div class="tp-blog-2__item">
                            <div class="tp-blog-2__thumb p-relative">
                                <img src="${product.images[0].url}" alt="">
                                <div class="tp-blog-2__icon">
                                    <a class="popup-image" href="${product.images[0].url}"><i class="fa-sharp fa-solid fa-plus"></i></a>
                                </div>
                            </div>
                            <div class="tp-blog-2__content">
                                <div class="tp-blog-2__tag">
                                    <span><i class="flaticon-tag"></i>${product.category.name}</span>
                                </div>
                                <a href="blog-details.html"><h4 class="tp-blog-2__title-sm">
                                ${product.name}
                                </h4></a>
                                <span class="tp-blog-2__meta"</span>
                                <a href="https://wa.me/+919885508494?text=I'm%20interested%20in%20your%20product:%20${product.name}" target="_blank" style="color: #ff6f61; font-weight: bold;">Inquire via WhatsApp</a>
                                    <div class="tp-blog-2__link text-center">
                                        <span>Enquire<i class="flaticon-arrow-right"></i></span>
                                    </div>
                                </a>                                
                            </div>
                        </div>
                    </div>
                    `)).join('')}
                </div>
            </div>
        </div>
        <!-- blog-area-end -->

        
        <!-- faq-area-start -->
        <div class="tp-faq-2__area tp-faq-2__space grey-bg z-index fix p-relative">
            <div class="tp-faq-2__bg">
                <div class="tp-faq-2__bg-text text-center d-none d-lg-block">
                    <span>Contact for <br>further <b>assistance</b></span>
                </div>
            </div>
            <div class="tp-faq-2__wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                            <div class="tp-faq-2__section-title">
                                <span class="tp-section-subtitle-2">FAQS</span>
                                <h4 class="tp-section-title">Quick Questions</h4>
                            </div>
                            <div class="tp-custom-accordion">
                                <div class="accordions" id="accordionExample">
                                    <div class="accordion-items">
                                      <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Where is NR Industrial Enterprises located?
                                        </button>
                                      </h2>
                                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            4-3-180 Mahankali Street, Below AP Vardhaman Bank, Ranigunj, Secunderabad - 500003, Telangana, India.
                                        </div>
                                      </div>
                                    </div>
                                    <div class="accordion-items">
                                      <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What do we deal in?
                                        </button>
                                      </h2>
                                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            NR Industrial Enterprises is a leading manufacturer and supplier of high-quality industrial products. With a commitment to innovation and excellence, we provide solutions that meet the diverse needs of our clients across various industries.
                                        </div>
                                      </div>
                                    </div>
                                    <div class="accordion-items">
                                      <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How can you reach out to us? 
                                        </button>
                                      </h2>
                                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            You can reach out to us through our website contact form, email us at nrindent@gmail.com, or call us at +91 98855 08494.
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
        <!-- faq-area-end -->




    </main>`
    return (
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
    )
}

export default HomeInner
