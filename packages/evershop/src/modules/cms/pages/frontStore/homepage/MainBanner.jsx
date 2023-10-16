import React from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import Slider from 'react-slick';
import './MainBanner.scss';

export default function MainBanner() {
  const text = _('Discount ${discount} For All Orders Over ${price}', {
    discount: '20%',
    price: '$2000'
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  // First, find the aspect ratio of Banner Slide 1 (e.g., 16:9)
const aspectRatioBanner1 = 16 / 9;

return (
  <Slider {...settings}>
    <div className="slide">
      <div className="image-container">
        <img
          style={{ objectFit: 'cover', width: '100%' }}
          className="image"
          srcSet="
            https://matkinhhanghieu.com/wp-content/uploads/2023/01/offer-banner2.jpg 1920w,
            https://matkinhhanghieu.com/wp-content/uploads/2023/01/offer-banner2.jpg-medium.jpg 960w,
            https://matkinhhanghieu.com/wp-content/uploads/2023/01/offer-banner2.jpg-small.jpg 480w
          "
          sizes="
            (max-width: 768px) 100vw,
            80vw
          "
          src="https://matkinhhanghieu.com/wp-content/uploads/2023/01/offer-banner2.jpg"
          alt="Banner Slide 1"
        />
      </div>
    </div>
    <div className="slide">
      <div className="image-container">
        <img
          style={{ objectFit: 'cover', width: '100%' }}
          className="image"
          srcSet="
            https://kinhmatlily.com/images/banner-supper-combo.jpg 1920w,
            https://kinhmatlily.com/images/banner-supper-combo.jpg-medium.jpg 960w,
            https://kinhmatlily.com/images/banner-supper-combo.jpg-small.jpg 480w
          "
          sizes="
            (max-width: 768px) 100vw,
            80vw
          "
          src="https://kinhmatlily.com/images/banner-supper-combo.jpg"
          alt="Banner Slide 2"
        />
      </div>
    </div>
  </Slider>
);

}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
