import React from 'react'

const page = () => {
    const html = `
    <main>

        <!-- breadcrumb-area-start -->
        <div class="tp-breadcrumb__area p-relative fix tp-breadcrumb-height">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tp-breadcrumb__content z-index-5">
                            <div class="tp-breadcrumb__list">
                               <span><a href="/">home</a></span> 
                               <span class="dvdr"><i class="fa-sharp fa-solid fa-slash-forward"></i></span>
                               <span>Contact</span>
                            </div>
                            <h3 class="tp-breadcrumb__title">Contact</h3>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- breadcrumb-area-end -->


        <!-- form-area-start -->
        <div class="tp-contact-form__area tp-contact-form__space">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".9s"
                    data-wow-delay=".3s">
                        <div class="tp-contact-form__left-box">
                            <span class="tp-contact-form__subtitle">CONTACT WITH NR</span>
                            <h4 class="tp-section-title pb-20">Just have a quick <br>any questions?</h4>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7 wow tpfadeRight" data-wow-duration=".9s"
                    data-wow-delay=".7s">
                        <div class="tp-contact-form__form-box">
                            <form action="#">
                                <div class="row">
                                    <div class="col-xl-6 mb-30">
                                        <div class="tp-contact-form__input-box">
                                            <input type="text" placeholder="Your Name">
                                        </div>
                                    </div>
                                    <div class="col-xl-6 mb-30">
                                        <div class="tp-contact-form__input-box">
                                            <input type="email" placeholder="Your Email">
                                        </div>
                                    </div>
                                    <div class="col-xl-6 mb-30">
                                        <div class="tp-contact-form__input-box">
                                            <input type="text" placeholder="Phone">
                                        </div>
                                    </div>
                                    <div class="col-xl-6 mb-30">
                                        <div class="tp-contact-form__input-box">
                                            <input type="text" placeholder="Subject">
                                        </div>
                                    </div>
                                    <div class="col-xl-12 mb-30">
                                        <div class="tp-contact-form__textarea-box">
                                            <textarea placeholder="Write Your Message"></textarea>
                                        </div>
                                    </div>
                                </div>                                
                            </form>
                            <div class="tp-contact-form__button">
                                <button class="tp-btn">Send Your Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- form-area-end -->

        <!-- contact-area-start -->
        <div class="tp-contact__area">
            <div class="container">
                <div class="tp-contact__bg">
                    <div class="tp-contact__wrapper d-flex align-items-center justify-content-between">
                        <div class="tp-contact__item d-flex align-items-center">
                            <div class="tp-contact__icon">
                              <span><i class="flaticon-phone"></i></span>
                            </div>
                            <div class="tp-contact__text">
                                <a href="tel:+9198555008494">+91 98555 00849</a>
                            </div>
                        </div>                        
                        <div class="tp-contact__item d-flex align-items-center">
                            <div class="tp-contact__icon">
                              <span><i class="flaticon-email"></i></span>
                            </div>
                            <div class="tp-contact__text">
                                <a href="mailto:nrindent@gmail.com">nrindent@gmail.com</a>
                            </div>
                        </div>
                        <div class="tp-contact__item d-flex align-items-center">
                            <div class="tp-contact__icon">
                              <span><i class="flaticon-location"></i></span>
                            </div>
                            <div class="tp-contact__text">
                                <a href="#">
                                4-3-180 Mahankali Street, <br/>Below AP Vardhaman Bank, <br/>Ranigunj, Secunderabad - 500003, <br/>Telangana, India.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- contact-area-end -->

        <!-- location-area-start -->
        <div class="tp-location__area">
            <div class="container-fluid g-0">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="tp-location__info-box">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.90821466949774!2d78.49108069896118!3d17.434260215528646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bca6614e0f5%3A0x3b0b238d20d6d2ac!2sN%20R%20Industrial%20Enterprises!5e0!3m2!1sen!2sin!4v1759499464382!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- location-area-end -->


    </main>
    `
    return (
        <div dangerouslySetInnerHTML={{ __html: html }}>

        </div>
    )
}

export default page
