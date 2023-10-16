/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@components/frontStore/cms/Button";
import "./FeaturedCategories.scss";
import Slider from "react-slick";

export default function FeaturedCategories({ products: { items: products } }) {
  console.log("productsasdasasd", products);
  const firstSixProducts = products.slice(0, 6);
  console.log('products', products);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  function truncateText(text, maxLines) {
    const lines = text.split('<br>');
    if (lines.length <= maxLines) {
      return lines.join('<br>');
    } else {
      return `${lines.slice(0, maxLines).join('<br>')}...`;
    }
  }
  return (
    <>
      <div className="mt-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width mb-[20px]">
          <div className="product-container-one fade-down">
            <div className="text-center">
              <img
                styles={{ width: "100%", margin: "0 auto" }}
                src="https://matviet.vn/wp-content/uploads/2023/06/63-300x300.png"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Gọng kính đa dạng
            </h3>
            <div className="mb-1">
              <p>
                Gọng kính rất nhều kiểu dáng phù hợp với độ tuổi, giới tính, nhu cầu, chức năng, các tật khúc xạ...
              </p>
            </div>
          </div>
          <div className="product-container-one fade-down">
            <div>
              <img
                styles={{ width: "100%", margin: "0 auto" }}
                src="https://matviet.vn/wp-content/uploads/2023/06/66-300x300.png"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Kho mắt kính
            </h3>
            <div className="mb-1">
              <p>
                với số lượng và mẫu mã đa dạng, tuyển chọn và
                nhập hoàn toàn từ nước ngoài giúp khách hàng được thoải mái chọn lựa chọn những sản phâm như ý
              </p>
            </div>
          </div>
          <div className="product-container-one fade-down">
            <div>
              <img
                styles={{ width: "100%" }}
                src="https://matviet.vn/wp-content/uploads/2023/05/1-1-300x300.png"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Thương hiệu xa xỉ
            </h3>
            <div className="mb-1">
              <p>
                Sở hữu nhiều thương hiệu kính hàng hiệu khá được ưa chuộng tại thị trường Việt Nam
              </p>
            </div>
          </div>
        </div>
        <div className="text-center product-height">
          <h2>Sản phẩm nổi bật</h2>
        </div>
        <div className="product-border" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width mb-[20px]">
          {firstSixProducts &&
            firstSixProducts.map((product) => (

              <div className="product-container-done">
                <div style={{ width: '100%', height: '300px' }}>
                  <a href={product.url}>
                    <img
                      style={{ width: "100%", height: "100%", objectFit: 'cover', borderRadius: '10px' }}
                      src={`https://www.kinhmatthanhxoai.vn${product.image.thumb}`}
                      // src={`http://localhost:3000${product.image.thumb}`}
                      alt=""
                    />
                  </a>
                </div>
                {/* <h3 className="h4 uppercase mt-1 mb-1">{product.name}</h3>
                <div
                  className="mb-1"
                  dangerouslySetInnerHTML={{ __html: truncateText(product.description, 5) }}
                /> */}
                <div className="mt-2">
                  <Button url={product.url} title="Xem thêm >>>" variant="primary" />
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="container-blog-show">
        <div className="container-blog-text">
          <h1>Đảm bảo chất lượng</h1>
        </div>
        <div className="product-border" />
        <div className="container-content grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
          <div className="product-container flex flex-col items-center">
            <img
              className="mx-auto"
              src="https://kinhmateyeplus.com/wp-content/uploads/2020/05/sunglasses1.png"
            />
            <h3>Mẫu mã đa dạng</h3>
            <p>
              Thấu hiểu thị hiếu khách hàng, mẫu mã của kính mắt Thanh Xoài đa dạng, phù
              hợp với nhiều yêu cầu khác nhau.
            </p>
          </div>
          <div className="product-container flex flex-col items-center">
            <img
              className="mx-auto"
              src="https://kinhmateyeplus.com/wp-content/uploads/2020/05/medal1.png"
            />
            <h3>Uy tín, chất lượng </h3>
            <p>
              Các sản phẩm được chọn lựa kỹ lưỡng, độ tinh xảo cao đi cùng
              chuyên viên kinh nghiệm và máy móc tiên tiến, hiện đại.
            </p>
          </div>
          <div className="product-container flex flex-col items-center">
            <img
              className="mx-auto"
              src="https://kinhmateyeplus.com/wp-content/uploads/2020/05/piggy-bank1.png"
            />
            <h3>GIÁ CẢ HỢP LÝ</h3>
            <p>
              Mức giá cạnh tranh tương xứng với chất lượng, nhiều chương trình
              ưu đãi và chế độ bảo hành hậu mãi .
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-center">
          <h1>Góc nhìn chuyên gia</h1>
        </div>
        <div className="product-border" />
        <div className="product-wrapper container-content grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
          <div className="product-container">
            <div>
              <img
                className="product-image"
                src="https://cdn.elly.vn/uploads/2023/07/09095949/cach-phoi-do-di-bien-cho-nu-trung-nien-11.png"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Mặt tròn nên đeo kính có dạng khung góc
            </h3>
            <div className="mb-1">
              <p>
                Nếu bạn sở hữu gương mặt tròn, hãy thử lựa những mắt kính có dạng hình hộp vuông hoặc hình chữ nhật
                . Kiểu dáng kính này sẽ giúp cân bằng cấu trúc gương mặt.
                Gương mặt bạn sẽ trông bớt bầu bĩnh, thon thả và thanh thoát, mềm mại hơn.
              </p>
            </div>
          </div>
          <div className="product-container">
            <div>
              <img
                className="product-image"
                src="https://hmkeyewear.com/wp-content/uploads/2022/06/kinh-mat-nam-4.jpg"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Mắt kính hợp với khuôn mặt kim cương
            </h3>
            <div className="mb-1">
              <p>
                Để phần xương gò má trở nên mềm mại và làm nổi bật đôi mắt,
                bạn thử chọn khung kính có họa tiết khá đặc biệt.
                Có thể là kiểu mắt kính không vành,
                khung kính có hình bầu dục hoặc kiểu mắt mèo sẽ là
                lựa chọn tốt cho người sở hữu gương mặt kim cương.

              </p>
            </div>
          </div>
          <div className="product-container">
            <div>
              <img
                className="product-image"
                src="https://hmkeyewear.com/wp-content/uploads/2022/06/kinh-mat-cho-nam.jpg"
                alt=""
              />
            </div>
            <h3 className="h4 uppercase mt-1 mb-1">
              Mắt kinh hợp với khuôn mặt thuôn dài
            </h3>
            <div className="mb-1">
              <p>
                Để tạo cảm giác ngắn và cân đối lại khuôn mặt thuôn dài,
                bạn cần chọn loại mắt kính có phần khung kính thể hiện được chiều sâu hơn so với việc chọn kính có chiều rộng.
                Ngoài ra, phần khung kính có thể được họa tiết và phần gọng kính nên là bản to.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overview-image ">
        <Slider {...settings}>
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/EF58750-C07_295x.JPG?v=1544556974"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/EF58773-C05_295x.JPG?v=1544557289"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/J45043-grn_295x.jpg?v=1590119573"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/J75006-SIL_295x.jpg?v=1518418395"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/J75002-MBKL-AA_295x.jpg?v=1564166866"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/J45033-BLK_295x.jpg?v=1516161502"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/PS-9012-C19-B_295x.jpg?v=1565032999"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/EF27984-C82-6114_295x.jpg?v=1565031141"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/EF4026-C25_295x.jpg?v=1564512992"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/PLD3018S-DL5Y2-A_295x.jpg?v=1520277415"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/PA73401-B1_295x.JPG?v=1572975532"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/PLD1017S-3YGH8-A_295x.jpg?v=1520277582"
            alt=""
          />
          <img
            className="image-overview"
            src="https://sunwear.vn/cdn/shop/products/PLD2060S-807-LM_295x.jpg?v=1576134623"
            alt=""
          />
        </Slider>
      </div>
    </>
  );
}

FeaturedCategories.propTypes = {
  products: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        productId: PropTypes.number,
        uuid: PropTypes.string,
        url: PropTypes.string.isRequired,
        name: PropTypes.string,
        image: PropTypes.shape({
          thumb: PropTypes.string
        }),
        sku: PropTypes.string,
        status: PropTypes.number,
        inventory: PropTypes.shape({
          qty: PropTypes.number
        }),
        description: PropTypes.string.isRequired,
        price: PropTypes.shape({
          regular: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
          })
        }),
        editUrl: PropTypes.string,
        updateApi: PropTypes.string,
        deleteApi: PropTypes.string
      })
    ),
    total: PropTypes.number,
    currentFilters: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        operation: PropTypes.string,
        value: PropTypes.string
      })
    )
  }).isRequired
};

export const layout = {
  areaId: "content",
  sortOrder: 10
};

export const query = `
  query Query {
    products {
      items {
        productId
        uuid
        url
        name
        image {
          thumb
        }
        sku
        status
        inventory {
          qty
        }
        price {
          regular {
            value
            text
          }
        }
        description
        editUrl
        updateApi
        deleteApi
      }
      total
      currentFilters {
        key
        operation
        value
      }
    }
  }
`;
