/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Area from '@components/common/Area';
import LoadingBar from '@components/common/LoadingBar';
import './Layout.scss';
import './tailwind.scss';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

export default function Layout() {
  return (
    <>
      <LoadingBar />
      <div className="header flex justify-between">
        <Area
          id="header"
          noOuter
          coreComponents={[
            {
              component: { default: Area },
              props: {
                id: 'icon-wrapper',
                className: 'icon-wrapper flex justify-between space-x-1'
              },
              sortOrder: 20
            }
          ]}
        />
      </div>
      <main className="content">
        <Area id="content" className="" noOuter />
      </main>
      <div className="footer bg-[#373836] text-[#fff]">
        <div className="page-width mt-[20px]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                {/* Left Content */}
                <div className="footer-top-box">
                  <h3>Thời gian mở cửa</h3>
                  <ul className="list-time">
                    <li>Thứ 2 - Thứ 7: 08.00 sáng tới 05.00 chiều </li>
                    <li>Chủ Nhật : 10.00 sáng tới 08.00 chiều </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                {/* Middle Content */}
                <div className="footer-top-box">
                  <h3>Phản hồi</h3>
                  <form className="newsletter-box">
                    <div className="form-group">
                      <input
                        type="email"
                        name="Email"
                        placeholder="Email Address*"
                      />
                      <i className="fa fa-envelope"></i>
                    </div>
                    <button className="mt-[10px] p-[5px] bg-[#2c6ecb] rounded" type="submit">
                      Gửi
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-span-1">
                {/* Right Content */}
                <div className="footer-top-box">
                  <h3>Mạng xã hội</h3>
                  <p>Bạn có thể tìm kiếm Thanh Xoài qua các kênh mạng sau.</p>
                  <div className="flex space-x-1">
                    <div>
                      <a href="#">
                        <BsFacebook />{' '}
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <BsInstagram />{' '}
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <BsTwitter />{' '}
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <BsYoutube />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Footer Widget */}
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <div className="footer-widget">
                  <h4>Giới thiệu Thanh Xoài</h4>
                  <p>
                    Chào mừng quý khách đến với cửa hàng kính "Thanh Xoài" - nơi
                    mang đến cho bạn những giải pháp thời trang và chất lượng về
                    kính mắt hàng đầu. Với hơn 10 năm kinh nghiệm trong lĩnh vực
                    kính mắt, chúng tôi tự hào là địa chỉ uy tín và đáng tin cậy
                    cho mọi nhu cầu về kính của bạn.
                  </p>
                  {/* Rest of the content */}
                </div>
              </div>
              {/* Footer Links */}
              <div className="col-span-1">
                <div className="footer-link px-[0px] md:px-[40px] lg:px-[40px]">
                  <h4>Thông tin</h4>
                  <ul>
                    <li>
                      <i class="fa-solid fa-star-half-stroke"></i><a href="#">Giới thiệu</a>
                    </li>
                    <li>
                      <i class="fa-solid fa-star-half-stroke"></i><a href="#">Chăm sóc khách hàng</a>
                    </li>
                    <li>
                      <i class="fa-solid fa-star-half-stroke"></i><a href="#">Điều khoản & Điều kiện</a>
                    </li>
                    <li>
                      <i class="fa-solid fa-star-half-stroke"></i><a href="#">Chính sách bảo mật</a>
                    </li>
                    <li>
                      <i class="fa-solid fa-star-half-stroke"></i><a href="#">Thông tin giao hàng</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Contact Information */}
              <div className="col-span-1">
                <div className="footer-link-contact">
                  <h4> Liên hệ </h4>
                  <ul>
                    <li>
                      <p>
                        <i className="fas fa-map-marker-alt"></i> Địa Chỉ: <br /> TP Thái Bình
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-phone-square"></i>Điện thoại :{' '}
                        <a href="tel:+1-888705770">+84686868686</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-envelope"></i>Email:{' '}
                        <a href="mailto:contactinfo@gmail.com">
                          kinhmatthanhxoai@gmail.com
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2 justify-between">
          {/* Social Media Icons */}
          <div>
            <div className="card-icons flex justify-center space-x-1 md:justify-start">
              {/* Social media icons */}
            </div>
          </div>
          {/* Copyright */}
          <div className="self-center">
            <div className="copyright text-center md:text-right text-textSubdued">
              <span>{/* Copyright text */}</span>
            </div>
          </div>
        </div>
      </div>

      {/* <footer>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-top-box">
                  <h3>Business Time</h3>
                  <ul className="list-time">
                    <li>Monday - Friday: 08.00am to 05.00pm</li>
                    <li>Saturday: 10.00am to 08.00pm</li>
                    <li>
                      Sunday: <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-top-box">
                  <h3>Newsletter</h3>
                  <form className="newsletter-box">
                    <div className="form-group">
                      <input
                        className=""
                        type="email"
                        name="Email"
                        placeholder="Email Address*"
                      />
                      <i className="fa fa-envelope" />
                    </div>
                    <button className="btn hvr-hover" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-top-box">
                  <h3>Social Media</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fab fa-google-plus"
                          aria-hidden="true"
                         />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-rss" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fab fa-pinterest-p"
                          aria-hidden="true"
                         />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-widget">
                  <h4>About Freshshop</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link">
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Our Sitemap</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link-contact">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <p>
                        <i className="fas fa-map-marker-alt" />Address:
                        Michael I. Days 3756
                        <br />
                        Preston Street Wichita, KS 67213
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-phone-square" />Phone:{" "}
                        <a href="tel:+1-888705770">+1-888 705 770</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-envelope" />Email:{" "}
                        <a href="mailto:contactinfo@gmail.com">
                          contactinfo@gmail.com
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}

export const layout = {
  areaId: 'body',
  sortOrder: 1
};
