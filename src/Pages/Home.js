import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../Components/BlogCard";
import ProductCard from "../Components/ProductCard";
import SpecialComponent from "../Components/SpecialComponent";
function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner-content-1 position-relative">
                <img
                  src="/images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                ></img>
                <div className="main-banner-content position-absolute">
                  <h4 className="text-warning">Yorqin Tomonga O'ting</h4>
                  <h5>Samsung S24 Ultra</h5>
                  <p>999$ dan yoki 41$/24oy</p>
                  <Link className="button">Xoziroq Xarid Qilish!</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src="/images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-warning">Yorqin Tomonga O'ting</h4>
                    <h5>Hp Laptop</h5>
                    <p>
                      1029$ dan <br /> yoki 52$/24oy
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="/images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-warning">Smart Watch</h4>
                    <h5>Aqlli Soatlar</h5>
                    <p>
                      509$ dan <br /> yoki 12$/24oy
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="/images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-warning">Planshetlar Siz bilan </h4>
                    <h5>Planshetlar</h5>
                    <p>
                      700$ dan <br /> yoki 32$/24oy
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="/images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-warning">Quloqchinlar bilan birga</h4>
                    <h5>Quloqchinlar</h5>
                    <p>
                      409$ dan <br /> yoki 22$/24oy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img
                    alt="img"
                    src="/images/service.png"
                    className="object-fit-contain"
                  />
                  <div>
                    <h6>Yetkazib berish bepul!</h6>
                    <p className="mb-0">100$dan oshgan mahsulotlarni</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img alt="img" src="/images/service-02.png" />
                  <div>
                    <h6>Sotuv va qayta ishlash uchun</h6>
                    <p className="mb-0">800$dan oshgan sotuvni</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img alt="img" src="/images/service-03.png" />
                  <div>
                    <h6>Operatorlar Siz bilan</h6>
                    <p className="mb-0">Bizning operatorlarimizda</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img alt="img" src="/images/service-04.png" />
                  <div>
                    <h6>Narxlar</h6>
                    <p className="mb-0">Qulay va Hamyonbop</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img alt="img" src="/images/service-05.png" />
                  <div>
                    <h6>Bizda To'lov</h6>
                    <p className="mb-0">Oson va Tez</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="/images/camera.jpg" alt="imag"></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="/images/tv.jpg" alt="imaa"></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Soatlar</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="/images/tv.jpg" alt="imaa"></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Games</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="imaa"></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="/images/camera.jpg" alt="imaa"></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="/images/tv.jpg" alt="imaa"></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Soatlar</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="/images/tv.jpg" alt="imaa"></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Games</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="imaa"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div class="row">
            <div className="col-3">
              <div className="famous-card bg-dark position-relative ">
                <img src="/images/1famous-1.jpg" className="img-fluid" alt="" />
                <div className="famous-content color-white position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 9</h6>
                  <p>From $999 yoki $17/24oy</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative ">
                <img src="/images/1famous-2.jpg" className="img-fluid" alt="" />
                <div className="famous-content text-dark position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">Smart Watch Series 9</h6>
                  <p className="text-dark">From $999 yoki $17/24oy</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative ">
                <img src="/images/1famous-3.jpg" className="img-fluid" alt="" />
                <div className="famous-content text-dark position-absolute">
                  <h5 className="text-dark">Smartphone</h5>
                  <h6 className="text-dark">Iphone 13 pro max</h6>
                  <p className="text-dark">From $999 yoki $17/24oy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <div className="row">
              <SpecialComponent />
              <SpecialComponent />
              <SpecialComponent />
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="/images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blog</h3>
            </div>
            <div className="row">
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
