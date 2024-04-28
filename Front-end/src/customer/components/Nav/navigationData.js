import mens from "../../../Data/Mens/mens";

const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/product/1',
            imageSrc: mens[0].image,
            imageAlt: mens[0].description,
          },
          {
            name: 'Now Trending',
            href: '/product/5',
            imageSrc: mens[4].image,
            imageAlt: mens[4].description,
          },
        ],
        sections: [
          {
            id: 'shoes',
            name: 'Shoes',
            items: [
              { name: 'Adidas', href: '/product' },
              { name: 'Nike', href: '/product' },
              { name: 'Puma', href: '/product' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '/product' },
              { name: 'Wallets', href: '/product' },
              { name: 'Bags', href: '/product' },
              { name: 'Sunglasses', href: '/product' },
              { name: 'Hats', href: '/product' },
              { name: 'Belts', href: '/product' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            href: '/product/4',
            imageSrc: mens[3].image,
            imageAlt: mens[3].description,
          },
          {
            name: 'On Trend',
            href: '/product/7',
            imageSrc: mens[6].image,
            imageAlt:
              mens[6].description,
          },
        ],
        sections: [
            {
                id: 'shoes',
                name: 'Shoes',
                items: [
                  { name: 'Adidas', href: '/product' },
                  { name: 'Nike', href: '/product' },
                  { name: 'Puma', href: '/product' },
                ],
              },
              {
                id: 'accessories',
                name: 'Accessories',
                items: [
                  { name: 'Watches', href: '/product' },
                  { name: 'Wallets', href: '/product' },
                  { name: 'Bags', href: '/product' },
                  { name: 'Sunglasses', href: '/product' },
                  { name: 'Hats', href: '/product' },
                  { name: 'Belts', href: '/product' },
                ],
              },
        ],
      },
    ],
    pages: [
      
    ],
  }

export default navigation;