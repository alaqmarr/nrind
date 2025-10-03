import React from 'react'

const ProductsInner = ({ products }: { products: any }) => {

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
                               <span>Products</span>
                            </div>
                            <h3 class="tp-breadcrumb__title">Products</h3>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- breadcrumb-area-end -->


        <!-- blog-area-start -->
        <div class="tp-blog-2__area pt-120 pb-90">
            <div class="container">
                <div class="row">

                ${products ? (
            products.map((product: any) => {
                return (
                    `
                             <div class="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                    data-wow-delay=".8s">
                        <div class="tp-blog-2__item">
                            <div class="tp-blog-2__thumb p-relative">
                                <img src="${product.images[0].url}" alt="">
                                <div class="tp-blog-2__icon">
                                    <a class="popup-image" href="${product.images[0].url}"><i class="fa-sharp fa-solid fa-plus"></i></a>
                                </div>
                            </div>
                            <div class="tp-blog-2__content">
                                <a href="#"><h4 class="tp-blog-2__title-sm">${product.name}</h4></a>
                                <a href=${`https://wa.me/+9198855008494?text=` + encodeURI("I am interested in this product: " + product.name)}>
                                    <div class="tp-blog-2__link text-center">
                                        <span>Enquire<i class="flaticon-arrow-right"></i></span>  
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                            `
                )
            }).join('')
        ) : (`<p>No Products Found</p>`

        )

        }
                   

                </div>
            </div>
        </div>
        <!-- blog-area-end -->


    </main>
    `
    return (
        <div dangerouslySetInnerHTML={{ __html: html }}>

        </div>
    )
}

export default ProductsInner
