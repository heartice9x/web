import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './MobileMenu.scss';
import { AiOutlineDown } from 'react-icons/ai';

export default function MobileMenu({ menu: { items } }) {
  const [show, setShow] = useState(false);
  const [expandedProductIndex, setExpandedProductIndex] = useState(-1);

  const handleItemClick = (index) => {
    if (expandedProductIndex === index) {
      setExpandedProductIndex(-1);
    } else {
      setExpandedProductIndex(index);
    }
  };

  // Define your data arrays here
  const dataArrays = [dataProduct, dataProduct2, dataProduct3,[] , [], [], dataProduct4];

  return (
    <div className="main-menu-mobile self-center">
      <a
        className="menu-icon"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShow(!show);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </a>
      {show && (
        <ul className="nav justify-content-center">
          {items.map((item, index) => (
            <li className="nav-item" key={index}>
              <div className="flex justify-between w-full">
                <a
                  className="nav-link hover:underline"
                  href={item.url}
                  onClick={() => {
                    handleItemClick(index);
                  }}
                >
                  {item.name}
                </a>
                <AiOutlineDown
                  className={`justify-end w-[12px] ml-[5px] ${
                    expandedProductIndex === index ? 'transform rotate-180' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(index);
                  }}
                />
              </div>
              <div>
                {expandedProductIndex === index && (
                  <ul className="product-header-mobile block">
                    {dataArrays[index].length > 0 ? dataArrays[index].map((product, productIndex) => (
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
                    )) : null}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

MobileMenu.propTypes = {
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
  areaId: 'icon-wrapper',
  sortOrder: 50
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
const dataProduct = [
  {
    title: '',
    items: [
      {
        name: 'Kính Rayban chính hãng',
        url: 'kinh-rayban'
      }
    ]
  },
  {
    title: '',
    items: [
      {
        name: 'Kính Levis chính hãng',
        url: 'kinh-levis'
      }
    ]
  },
  {
    title: '',
    items: [
      {
        name: 'Kính Eyes chính hãng',
        url: 'kinh-eyes'
      }
    ]
  }
];

const dataProduct2 = [
  {
    title: 'Chất liệu',
    items: [
      {
        name: 'Titan',
        url: 'titan'
      },
      {
        name: 'Nhựa',
        url: 'nhua'
      },
      {
        name: 'Kim loại',
        url: 'kim-loai'
      }
    ]
  },

  {
    title: 'Kiểu Gọng',
    items: [
      {
        name: 'Vành liền',
        url: 'vanh-lien'
      },
      {
        name: 'Nửa gọng',
        url: 'nua-gong'
      },
      {
        name: 'Không gọng',
        url: 'khong-gong'
      }
    ]
  },

  {
    title: 'Dáng mắt',
    items: [
      {
        name: 'Mắt Mèo',
        url: 'mat-meo'
      },
      {
        name: 'Tròn',
        url: 'tron'
      },
      {
        name: 'Vuông',
        url: 'vuong'
      }
    ]
  },

  {
    title: 'Giới tính',
    items: [
      {
        name: 'Nam',
        url: 'nam'
      },
      {
        name: 'Nữ',
        url: 'nu'
      }
    ]
  }
  // Add more product data as needed
];
const dataProduct3 = [
  {
    title: 'Tính năng',
    items: [
      {
        name: 'Hạn chế loang nước',
        url: 'han-che-loang-nuoc'
      },
      {
        name: 'Chống phản quang',
        url: 'chong-phan-quang'
      },
      {
        name: 'Chống va đập',
        url: 'chong-va-dap'
      },
      {
        name: 'Chống loá sáng',
        url: 'chong-loa-sang'
      },
      {
        name: 'Eyezen',
        url: 'eyezen'
      },
      {
        name: 'Chống ánh sáng xanh',
        url: 'chong-anh-sang-xanh'
      },
      {
        name: 'Râm cận',
        url: 'ram-can'
      },
      {
        name: 'Đổi màu',
        url: 'doi-mau'
      }
    ]
  },

  {
    title: 'Thương Hiệu',
    items: [
      {
        name: 'Chemi',
        url: 'chemi'
      },
      {
        name: 'Essilor',
        url: 'essilor'
      },
      {
        name: 'Kodak',
        url: 'kodak'
      },
      {
        name: 'Zeiss',
        url: 'zeiss'
      }
    ]
  },

  {
    title: 'Chiết Suất',
    items: [
      {
        name: '1.60',
        url: 'mat-kinh/?chiet-suat=50'
      },
      {
        name: '1.56',
        url: 'mat-kinh/?chiet-suat=53'
      },
      {
        name: '1.74',
        url: '174'
      },
      {
        name: '1.67',
        url: '167'
      }
    ]
  },

  {
    title: 'Độ cận',
    items: [
      {
        name: '0.00 - 2.50',
        url: '0.00-2.50'
      },
      {
        name: '3.75 - 7.00',
        url: '3.75-7.00'
      },
      {
        name: '2.75 - 3.50',
        url: '2.75-3.50'
      },
      {
        name: 'Trên 7.00',
        url: 'tren-7.00'
      }
    ]
  },
  {
    title: 'Độ viễn',
    items: [
      {
        name: '2.25 - 3.00',
        url: '2.25-3.00'
      },
      {
        name: '0.00 - 2.00',
        url: '0.00-2.00'
      },
      {
        name: '3.25 - 5.00',
        url: '3.25-5.00'
      },
      {
        name: 'Trên 5.00',
        url: 'tren-5.00'
      }
    ]
  }
  // Add more product data as needed
];
const dataProduct4 = [
  {
    title: '',
    items: [{ name: 'Gọng kính', url: 'gong-kinh' }]
  },
  {
    title: '',
    items: [{ name: 'Mắt kính', url: 'mat-kinh' }]
  },
  {
    title: '',
    items: [{ name: 'Tật', url: 'tat' }]
  }
];
