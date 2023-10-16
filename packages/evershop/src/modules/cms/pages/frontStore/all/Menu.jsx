import PropTypes from "prop-types";
import React, { useState } from "react";
import "./Menu.scss";
import { createClient } from "urql";
import { AiOutlineDown } from "react-icons/ai";

export default function Menu({ menu: { items } }) {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItemIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredItemIndex(null);
  };

  const client = createClient({
    url: "/api/graphql"
  });

  const dataProduct = [
    {
      name: "Kính Rayban chính hãng",
      url: "kinh-rayban"
    },
    {
      name: "Kính Levis chính hãng",
      url: "kinh-levis"
    },
    {
      name: "Kính Eyes chính hãng",
      url: "kinh-eyes"
    }
    // Add more product data as needed
  ];

  const dataProduct2 = [
    {
      title: "Chất liệu",
      items: [
        {
          name: "Titan",
          url: "titan"
        },
        {
          name: "Nhựa",
          url: "nhua"
        },
        {
          name: "Kim loại",
          url: "kim-loai"
        }
      ]
    },

    {
      title: "Kiểu Gọng",
      items: [
        {
          name: "Vành liền",
          url: "vanh-lien"
        },
        {
          name: "Nửa gọng",
          url: "nua-gong"
        },
        {
          name: "Không gọng",
          url: "khong-gong"
        }
      ]
    },

    {
      title: "Dáng mắt",
      items: [
        {
          name: "Mắt Mèo",
          url: "mat-meo"
        },
        {
          name: "Tròn",
          url: "tron"
        },
        {
          name: "Vuông",
          url: "vuong"
        }
      ]
    },

    {
      title: "Giới tính",
      items: [
        {
          name: "Nam",
          url: "nam"
        },
        {
          name: "Nữ",
          url: "nu"
        }
      ]
    }
    // Add more product data as needed
  ];
  const dataProduct3 = [
    {
      title: "Tính năng",
      items: [
        {
          name: "Hạn chế loang nước",
          url: "han-che-loang-nuoc"
        },
        {
          name: "Chống phản quang",
          url: "chong-phan-quang"
        },
        {
          name: "Chống va đập",
          url: "chong-va-dap"
        },
        {
          name: "Chống loá sáng",
          url: "chong-loa-sang"
        },
        {
          name: "Eyezen",
          url: "eyezen"
        },
        {
          name: "Chống ánh sáng xanh",
          url: "chong-anh-sang-xanh"
        },
        {
          name: "Râm cận",
          url: "ram-can"
        },
        {
          name: "Đổi màu",
          url: "doi-mau"
        }
      ]
    },

    {
      title: "Thương Hiệu",
      items: [
        {
          name: "Chemi",
          url: "chemi"
        },
        {
          name: "Essilor",
          url: "essilor"
        },
        {
          name: "Kodak",
          url: "kodak"
        },
        {
          name: "Zeiss",
          url: "zeiss"
        }
      ]
    },

    {
      title: "Chiết Suất",
      items: [
        {
          name: "1.60",
          url: "mat-kinh/?chiet-suat=50"
        },
        {
          name: "1.56",
          url: "mat-kinh/?chiet-suat=53"
        },
        {
          name: "1.74",
          url: "174"
        },
        {
          name: "1.67",
          url: "167"
        }
      ]
    },

    {
      title: "Độ cận",
      items: [
        {
          name: "0.00 - 2.50",
          url: "0.00-2.50"
        },
        {
          name: "3.75 - 7.00",
          url: "3.75-7.00"
        },
        {
          name: "2.75 - 3.50",
          url: "2.75-3.50"
        },
        {
          name: "Trên 7.00",
          url: "tren-7.00"
        }
      ]
    },
    {
      title: "Độ viễn",
      items: [
        {
          name: "2.25 - 3.00",
          url: "2.25-3.00"
        },
        {
          name: "0.00 - 2.00",
          url: "0.00-2.00"
        },
        {
          name: "3.25 - 5.00",
          url: "3.25-5.00"
        },
        {
          name: "Trên 5.00",
          url: "tren-5.00"
        }
      ]
    }
    // Add more product data as needed
  ];
  const dataProduct4 = [
    {
      name: "Gọng kính",
      url: "gong-kinh"
    },
    {
      name: "Mắt kính",
      url: "mat-kinh"
    },
    {
      name: "Tật",
      url: "tat"
    }
    // Add more product data as needed
  ];

  const getProductsForHoveredItem = () => {
    if (hoveredItemIndex === 0) {
      return dataProduct;
    } else if (hoveredItemIndex === 1) {
      return dataProduct2;
    }
    // Return an empty array or other default value if no item is hovered
    return [];
  };

  const hoveredProducts = getProductsForHoveredItem();

  return (
    <div className="menu-container main-menu self-center hidden md:block" >
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ul className="isHidden nav flex space-x-275 justify-content-center">
          {items.map((item, index) => (
            <li
              className="nav-item flex "
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <a className="nav-link hover:underline" href={item.url}>
                {item.name}
              </a>
              <div>
                <AiOutlineDown className="w-[12px] ml-[5px]" />
              </div>
            </li>
          ))}
        </ul>
        <ul
          className={`product-header ${
            hoveredItemIndex === 0 ? "block" : "hidden"
          }`}
        >
          {hoveredProducts.map((product, index) => (
            <li className="product-item mr-3" key={index}>
              <a className="nav-link hover:underline" href={product.url}>
                {product.name}
              </a>
            </li>
          ))}
        </ul>
        <ul
          className={` product-header ${
            hoveredItemIndex === 1 ? "block" : "hidden"
          }`}
        >
          {dataProduct2.map((product, index) => (
            <li className="product-item " key={index}>
              <div className="items">
                <h4>{product.title}</h4>
                {
                  product.items.map((item, itemIndex) => <div key={itemIndex}>
                      <a  className="nav-link hover:underline" href={item.url}>
                    {item.name}
                  </a>
                    </div>)
                }
              </div>
            </li>
          ))}
        </ul>
        <ul
          className={`product-header ${
            hoveredItemIndex === 2 ? "block" : "hidden"
          }`}
        >
          {dataProduct3.map((product, index) => (
            <li className="product-item " key={index}>
              <div className="items">
                <h4>{product.title}</h4>
                {
                  product.items.map((item, itemIndex) => <div key={itemIndex}>
                      <a  className="nav-link hover:underline" href={item.url}>
                    {item.name}
                  </a>
                    </div>)
                }
              </div>
            </li>
          ))}
        </ul>
        <ul
          className={`product-header-last ${
            hoveredItemIndex === 6 ? "block" : "hidden"
          }`}
        >
          {dataProduct4.map((product, index) => (
            <li  key={index} className="mr-3">
              <a href={product.url}>
                {product.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export const layout = {
  areaId: "header",
  sortOrder: 5
};

export const query = `
  query {
    menu {
      items {
        name
        url
      }
    }
  }
`;
