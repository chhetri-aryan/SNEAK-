
const mens = [
    {
      "id":"1",
      "image": "https://hips.hearstapps.com/hmg-prod/images/index-bomber-65a839208f31a.jpg?resize=2048:*",
      "brand": "Nike",
      "title": "Nike Air",
      "color": "Green",
      "selling_price": "10000",
      "price": "15000",
      "discount": "7% off",
      "size": "7",
      "description": "The Nike Air shoes offer a perfect blend of style and performance. With their vibrant green colorway, these shoes make a bold statement wherever you go. The premium materials and innovative design ensure comfort and support, making them ideal for both athletic activities and casual wear.",
      "highlights": [
        "Bold green colorway for a standout look",
        "Premium materials for durability and comfort",
        "Versatile design suitable for various activities",
        "Available in size 7"
      ],
      "details": "Material: Synthetic upper with rubber sole, Closure: Lace-up closure for a secure fit, Sole: Rubber outsole for traction and durability, Fit: True to size"
    },
    {
      "id":"2",
      "image": "https://assets.ajio.com/medias/sys_master/root/20231027/C9zx/653bd699ddf77915195efb70/-473Wx593H-469551489-black-MODEL.jpg",
      "brand": "Nike",
      "title": "Nike Basketball",
      "color": "Green",
      "selling_price": "5000",
      "price": "7000",
      "discount": "7% off",
      "size": "6",
      "description": "The Nike Basketball shoes are designed for players who demand top performance on the court. Featuring a sleek green colorway, these shoes combine style with functionality. The lightweight construction and responsive cushioning provide agility and support during intense games.",
      "highlights": [
        "Sleek design for enhanced agility",
        "Lightweight construction for quick movements",
        "Responsive cushioning for impact protection",
        "Available in size 6"
      ],
      "details": "Material: Synthetic upper with rubber sole, Closure: Lace-up closure for a secure fit, Sole: Rubber outsole with traction pattern, Fit: True to size"
    },
    {
      "id": "3",
      "image": "https://www.sneakers.fr/wp-content/uploads/2023/11/xnike-air-max-1-prm-keep-rip-n-stop-slip-n-av-380x380.jpg.pagespeed.ic.NEljXtiM41.jpg",
      "brand": "Nike",
      "title": "Nike Spectrum",
      "color": "Skin",
      "selling_price": "12000",
      "price": "200000",
      "discount": "7% off",
      "size": "6",
      "description": "The Nike Spectrum shoes feature a sleek and stylish design, perfect for those who want to make a statement with their footwear. The 'Skin' colorway adds a touch of sophistication to any outfit, while the premium materials ensure durability and comfort with every step.",
      "highlights": [
        "Sleek and stylish design for a statement look",
        "Premium materials for durability and comfort",
        "Skin colorway adds sophistication to any outfit",
        "Available in size 6"
      ],
      "details": "Material: Synthetic upper with rubber sole, Closure: Lace-up closure for a secure fit, Sole: Rubber outsole with Air cushioning units, Fit: True to size"
    },
    {
      "id":"4",
      "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a19d87d7-a77d-4e75-b3a9-27c9aa4fa667/team-hustle-d-11-older-basketball-shoes-TBQxXL.png",
      "brand": "Nike",
      "title": "Nike Hustle",
      "color": "Blue",
      "selling_price": "10000",
      "price": "12000",
      "discount": "7% off",
      "size": "9",
      "description": "The Nike Hustle shoes are built for players who give their all on the court. With a bold blue colorway, these shoes make a statement while providing the performance you need to dominate the game. The durable construction and supportive fit ensure you can play at your best every time.",
      "highlights": [
        "Bold blue colorway for standout style",
        "Durable construction for long-lasting performance",
        "Supportive fit for stability on the court",
        "Available in size 9"
      ],
      "details": "Material: Synthetic upper with rubber sole, Closure: Lace-up closure for a secure fit, Sole: Rubber outsole with traction pattern, Fit: True to size"
    },
    {
      "id":"5",
      "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg",
      "brand": "Adidas",
      "title": "Adidas Superstar",
      "color": "Black",
      "selling_price": "6000",
      "price": "10000",
      "discount": "7% off",
      "size": "6",
      "description": "The Adidas Superstar shoes are iconic classics that never go out of style. Featuring a sleek black colorway, these shoes are versatile enough to pair with any outfit. The premium materials and timeless design ensure comfort and durability, making them a must-have in your sneaker collection.",
      "highlights": [
        "Iconic design for timeless style",
        "Premium materials for durability and comfort",
        "Versatile black colorway for easy pairing",
        "Available in size 6"
      ],
      "details": "Material: Leather upper with rubber sole, Closure: Lace-up closure for a secure fit, Sole: Rubber cupsole, Fit: True to size"
    },
    {
      "id":"6",
      "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98da6e46c37b43199652ace2001df3d2_9366/Forum_Low_Shoes_White_FY7986_01_standard.jpg",
      "brand": "Adidas",
      "title": "Adidas Forum Low",
      "color": "White/Blue",
      "selling_price": "10000",
      "price": "14000",
      "discount": "7% off",
      "size": "5",
      "description": "The Adidas Forum Low shoes combine retro style with modern comfort. With a clean white and blue colorway, these shoes add a fresh twist to any outfit. The premium materials and cushioned midsole provide all-day comfort, making them perfect for both casual wear and athletic activities.",
      "highlights": [
      "Retro-inspired design with modern comfort",
      "Clean white and blue colorway for a fresh look",
      "Premium materials for durability and comfort",
      "Cushioned midsole for all-day comfort"
      ],
      "details": "Material: Leather and synthetic upper with rubber sole, Closure: Lace-up closure for a secure fit, Midsole: Cushioned for comfort, Fit: True to size"
      },
      {
      "id":"7",
      "image": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee99b4b9bde74f30a933a8bf011911ae_9366/samba-og-shoes.jpg",
      "brand": "Adidas",
      "title": "Adidas Samba",
      "color": "Black",
      "selling_price": "12000",
      "price": "15000",
      "discount": "7% off",
      "size": "8",
      "description": "The Adidas Samba shoes are a timeless classic loved by sneakerheads worldwide. With a sleek black colorway and iconic design, these shoes never go out of style. The durable construction and comfortable fit make them perfect for everyday wear, whether you're hitting the streets or the dance floor.",
      "highlights": [
      "Timeless design loved by sneakerheads",
      "Sleek black colorway for classic style",
      "Durable construction for long-lasting wear",
      "Comfortable fit for all-day wear"
      ],
      "details": "Material: Leather upper with rubber sole, Closure: Lace-up closure for a secure fit, Sole: Gum rubber outsole for traction, Fit: True to size"
      },
      {
      "id":"8",
      "image": "https://preview.thenewsmarket.com/Previews/ADID/StillAssets/1920x1080/651510.jpg",
      "brand": "Adidas",
      "title": "Adidas Marvel Collab",
      "color": "Red",
      "selling_price": "9000",
      "price": "15000",
      "discount": "7% off",
      "size": "5",
      "description": "The Adidas Marvel Collab shoes are a must-have for superhero fans. Featuring a bold red colorway and iconic Marvel graphics, these shoes make a statement wherever you go. The comfortable fit and durable construction ensure you can show off your superhero style in comfort and style.",
      "highlights": [
      "Bold red colorway with iconic Marvel graphics",
      "Comfortable fit for all-day wear",
      "Durable construction for long-lasting performance",
      "Perfect for superhero fans"
      ],
      "details": "Material: Synthetic upper with rubber sole, Closure: Lace-up closure for a secure fit, Sole: Rubber outsole for traction, Fit: True to size"
      },
      {
      "id":"9",
      "image": "https://media.gq.com/photos/6478d4a81cd547b0719a51d1/4:3/w_1500,h_1125,c_limit/yeezys.jpg",
      "brand": "Adidas",
      "title": "Adidas Yeezy",
      "color": "Grey",
      "selling_price": "12000",
      "price": "20000",
      "discount": "7% off",
      "size": "7",
      "description": "The Adidas Yeezy shoes are a collaboration between Adidas and Kanye West, combining high-fashion aesthetics with athletic performance. With a sleek grey colorway and futuristic design, these shoes elevate any outfit. The innovative materials and cushioned midsole provide unmatched comfort and support.",
      "highlights": [
      "Collaboration with Kanye West for high-fashion style",
      "Sleek grey colorway for a modern look",
      "Innovative materials for comfort and support",
      "Futuristic design stands out from the crowd"
      ],
      "details": "Material: Primeknit upper with Boost cushioning, Closure: Lace-up closure for a secure fit, Sole: Rubber outsole for traction, Fit: True to size"
      },
      {
      "id":"10",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZQhU1G50XchRlSziTrqi-fgjqcvvQX9VqA&usqp=CAU",
      "brand": "Adidas",
      "title": "Adidas Delux",
      "color": "Grey",
      "selling_price": "5000",
      "price": "9000",
      "discount": "7% off",
      "size": "5",
      "description": "The Adidas Delux shoes offer premium comfort and style at an affordable price. With a sleek grey colorway, these shoes are perfect for everyday wear. The lightweight construction and cushioned midsole provide all-day comfort, making them ideal for running errands or hanging out with friends.",
      "highlights": [
      "Affordable shoes with premium comfort",
      "Sleek grey colorway for versatile styling",
      "Lightweight construction for all-day wear",
      "Cushioned midsole for added comfort"
      ],
      "details": "Material: Textile upper with rubber sole, Closure: Lace-up closure for a secure fit, Sole: EVA midsole for lightweight cushioning, Fit: True to size"
      }
      ]

export default mens