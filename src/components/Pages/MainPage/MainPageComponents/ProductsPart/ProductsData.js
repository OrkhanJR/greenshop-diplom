import product1 from "../../../../../assets/Images/products/product-1.png";
import product1_2 from "../../../../../assets/Images/products/product1_2.png";
import product1_3 from "../../../../../assets/Images/products/product1_3.png";
import product1_4 from "../../../../../assets/Images/products/product1_4.png";
import product2 from "../../../../../assets/Images/products/product-2.png";
import product3 from "../../../../../assets/Images/products/product-3.png";
import product4 from "../../../../../assets/Images/products/product-4.png";
import product5 from "../../../../../assets/Images/products/product-5.png";
import product6 from "../../../../../assets/Images/products/product-6.png";
import product7 from "../../../../../assets/Images/products/product-7.png";
import product8 from "../../../../../assets/Images/products/product-8.png";
import product9 from "../../../../../assets/Images/products/product-9.png";
import product10 from "../../../../../assets/Images/products/product-10.png";
import product11 from "../../../../../assets/Images/products/product-11.png";
import product12 from "../../../../../assets/Images/products/product-12.png";
import product13 from "../../../../../assets/Images/products/product-13.png";
import product14 from "../../../../../assets/Images/products/product-14.png";

export const products = [
  {
    id: 1,
    name: "Barberton Daisy",
    sizes: [
      { size: "S", price: "119.00" },
      { size: "M", price: "139.00" },
      { size: "L", price: "159.00" },
    ],
    photos: [product1, product1_2, product1_3, product1_4],
    discountPercentage: 0.2,
    category: ["House Plants", "Terrariums"],
    newArrival: true,
    sale: true,
    shortDescription:
      "The Barberton Daisy is a beautiful flowering plant that adds a vibrant touch to any space. It comes in three different sizes and is perfect for both indoor and outdoor settings.",
    tags: ["Home", "Garden", "Plants"],
    description:
      "The Barberton Daisy, also known as the Gerbera Jamesonii, is an eye-catching flowering plant native to South Africa. With its bright and colorful blooms, it brings life and beauty to any environment. This plant is easy to care for and thrives in both indoor and outdoor settings, making it a versatile choice for any gardener or plant enthusiast. Whether used as a focal point in a garden bed or as a stunning centerpiece indoors, the Barberton Daisy is sure to impress. Treat yourself to this exquisite plant and enjoy the joy it brings to your home or garden.",
  },

  {
    id: 2,
    name: "Angel Wing Begonia",
    sizes: [
      { size: "S", price: "169.00" },
      { size: "M", price: "189.00" },
    ],
    photos: [product2],
    discountPercentage: 0,
    category: ["Potter Plants"],
    newArrival: false,
    sale: false,
    shortDescription:
      "The Angel Wing Begonia is a stunning foliage plant with unique angelic-shaped leaves. It is available in two sizes and adds a touch of elegance to any room.",
    tags: ["Home", "Garden", "Plants", "Potter Plants"],
    description:
      "Transform your living space with the exquisite Angel Wing Begonia. This striking foliage plant, adorned with unique angelic-shaped leaves, is a true testament to natural beauty. Native to tropical and subtropical regions, the Angel Wing Begonia thrives in indoor environments, making it an ideal choice for enhancing the ambiance of your home. With its captivating foliage and graceful presence, it effortlessly adds a touch of elegance to any room. Whether placed on a windowsill, tabletop, or as part of a larger indoor garden display, the Angel Wing Begonia is sure to captivate all who behold it. Embrace the tranquility and sophistication it brings to your living space, and indulge in the timeless allure of this botanical masterpiece.",
  },
  {
    id: 3,
    name: "African Violet",
    sizes: [
      { size: "S", price: "229.00" },
      { size: "L", price: "249.00" },
    ],
    photos: [product3],
    discountPercentage: 0.13,
    category: ["House Plants"],
    newArrival: false,
    sale: true,
    shortDescription:
      "The African Violet is a classic houseplant known for its beautiful purple flowers. It comes in two sizes and is currently on sale with a 13% discount.",
    tags: ["Home", "Garden", "Plants", "House Plants"],
    description:
      "Indulge in the timeless beauty of the African Violet, a classic houseplant beloved for its stunning purple flowers and lush foliage. With its delicate blooms and vibrant color, this botanical gem adds a touch of elegance and charm to any indoor space. Native to East Africa, the African Violet thrives in environments with bright, indirect light, making it an ideal choice for adorning windowsills, shelves, or tabletops. Currently on sale with a tempting 13% discount, there's never been a better time to welcome this exquisite plant into your home. Whether you opt for the smaller or larger size, each African Violet is a testament to nature's artistry, offering a captivating display of beauty and grace. Treat yourself or a loved one to the enchanting allure of the African Violet and elevate your indoor oasis with its timeless appeal.",
  },
  {
    id: 4,
    name: "Beach Spider Lily",
    sizes: [
      { size: "S", price: "129.00" },
      { size: "M", price: "149.00" },
    ],
    photos: [product4],
    discountPercentage: 0,
    category: ["Potter Plants", "Big Plants"],
    newArrival: false,
    sale: false,
    shortDescription:
      "The Beach Spider Lily is a unique plant with long, slender leaves that resemble spider legs. It comes in two sizes and is a perfect choice for adding a touch of intrigue to your plant collection.",
    tags: ["Home", "Garden", "Plants", "Potter Plants", "Big Plants"],
    description:
      "Elevate your botanical collection with the captivating Beach Spider Lily, a unique plant that exudes intrigue and charm. Characterized by its long, slender leaves that resemble spider legs, this botanical marvel is a sight to behold. Originating from coastal regions, the Beach Spider Lily thrives in environments with ample sunlight and well-draining soil, making it an excellent choice for both indoor and outdoor spaces. Available in two sizes to suit your preference, each Beach Spider Lily adds a touch of coastal allure to your plant collection, infusing it with a sense of adventure and discovery. Whether placed in a decorative pot indoors or incorporated into a larger garden landscape, the Beach Spider Lily is sure to spark conversation and admiration. Embrace the unique beauty of this extraordinary plant and let its distinctive charm transport you to sandy shores and sun-kissed beaches.",
  },
  {
    id: 5,
    name: "Blushing Bromeliad",
    sizes: [
      { size: "S", price: "139.00" },
      { size: "L", price: "169.00" },
    ],
    photos: [product5],
    discountPercentage: 0.25,
    category: ["Potter Plants"],
    newArrival: false,
    sale: true,
    shortDescription:
      "The Blushing Bromeliad is a stunning plant with vibrant pink flowers that bring a pop of color to any space. It is available in two sizes and currently on sale with a 25% discount.",
    tags: ["Home", "Garden", "Plants", "Potter Plants"],
    description:
      "Add a burst of vibrant color to your home with the enchanting Blushing Bromeliad. Known for its striking pink flowers and unique rosette-shaped foliage, this stunning plant is a true delight for the senses. Native to tropical regions, the Blushing Bromeliad thrives in warm, humid environments, making it an excellent choice for brightening up indoor spaces. Currently on sale with an irresistible 25% discount, there's never been a better time to bring home this botanical beauty. Available in two sizes to suit your preference, each Blushing Bromeliad infuses your space with a sense of joy and vitality, creating a captivating focal point wherever it's placed. Whether adorning a tabletop, shelf, or as part of a larger indoor garden display, the Blushing Bromeliad is sure to turn heads and evoke admiration. Embrace the beauty of nature's palette and indulge in the radiant charm of the Blushing Bromeliad.",
  },
  {
    id: 6,
    name: "Aluminum Plant",
    sizes: [
      { size: "S", price: "179.00" },
      { size: "M", price: "199.00" },
    ],
    photos: [product6],
    discountPercentage: 0,
    category: ["Seeds"],
    newArrival: false,
    sale: false,
    shortDescription:
      "The Aluminum Plant is a popular choice among plant enthusiasts for its striking silver-colored leaves. It comes in two sizes and is a great addition to any indoor garden.",
    tags: ["Home", "Garden", "Plants", "Seeds"],
    description:
      "Elevate your indoor garden with the exquisite Aluminum Plant, renowned for its striking silver-colored leaves that shimmer and shine. A favorite among plant enthusiasts, this botanical gem adds a touch of elegance and sophistication to any indoor space. Native to tropical regions, the Aluminum Plant thrives in environments with bright, indirect light and moderate humidity, making it an ideal choice for adorning windowsills, shelves, or tabletops. Available in two sizes to suit your preference, each Aluminum Plant is a testament to nature's artistry, offering a captivating display of metallic beauty. Whether used as a standalone specimen or incorporated into a larger indoor garden display, the Aluminum Plant never fails to impress with its striking foliage and graceful presence. Embrace the allure of this botanical treasure and elevate your indoor oasis with its timeless appeal.",
  },
  {
    id: 7,
    name: "Bird's Nest Fern",
    sizes: [
      { size: "S", price: "99.00" },
      { size: "L", price: "119.00" },
    ],
    photos: [product7],
    discountPercentage: 0,
    category: ["Seeds"],
    newArrival: false,
    sale: false,
    shortDescription:
      "The Bird's Nest Fern is a beautiful fern with lush, vibrant fronds that resemble a bird's nest. It is available in two sizes and adds a touch of nature to any room.",
    tags: ["Home", "Garden", "Plants", "Seeds"],
    description:
      "Bring the beauty of nature into your home with the exquisite Bird's Nest Fern, a stunning fern species characterized by its lush, vibrant fronds that form a captivating resemblance to a bird's nest. Native to tropical regions, this botanical treasure adds a touch of natural elegance to any indoor space. Available in two sizes to suit your preference, each Bird's Nest Fern infuses your home with a sense of tranquility and serenity, creating a soothing oasis amidst the hustle and bustle of everyday life. With its easy-care nature and low-light tolerance, it's perfect for adorning corners, shelves, or tabletops in any room. Whether you're a seasoned plant enthusiast or new to indoor gardening, the Bird's Nest Fern is sure to delight with its timeless beauty and graceful presence. Embrace the allure of this botanical marvel and let its verdant fronds breathe new life into your living space.",
  },
  {
    id: 8,
    name: "Broadleaf Lady Palm",
    sizes: [
      { size: "S", price: "59.00" },
      { size: "M", price: "79.00" },
      { size: "L", price: "99.00" },
    ],
    photos: [product8],
    discountPercentage: 0,
    category: ["Terrariums"],
    newArrival: false,
    sale: false,
    shortDescription:
      "The Broadleaf Lady Palm is a beautiful palm plant with L, fan-like leaves. It comes in three sizes and is an excellent choice for creating a tropical ambiance.",
    tags: ["Home", "Garden", "Plants", "Terrariums"],
    description:
      "Transform your living space into a tropical paradise with the exquisite Broadleaf Lady Palm, a stunning palm plant adorned with large, fan-like leaves that exude elegance and grace. Native to Southeast Asia, this botanical marvel adds a touch of exotic beauty to any indoor environment. Available in three sizes to suit your space, each Broadleaf Lady Palm serves as a striking focal point, infusing your home with a sense of tranquility and serenity reminiscent of lush tropical landscapes. Whether placed in a terrarium, decorative pot, or as part of a larger indoor garden display, the Broadleaf Lady Palm instantly elevates the ambiance, creating a serene retreat where you can unwind and relax. With its easy-care nature and ability to thrive in low-light conditions, it's perfect for adding a touch of tropical ambiance to any room. Embrace the beauty of the tropics and indulge in the timeless allure of the Broadleaf Lady Palm.",
  },
  {
    id: 9,
    name: "Chinese Evergreen",
    sizes: [
      { size: "S", price: "39.00" },
      { size: "M", price: "49.00" },
    ],
    photos: [product9],
    discountPercentage: 0.2,
    category: ["Seeds"],
    newArrival: true,
    sale: false,
    shortDescription:
      "The Chinese Evergreen is a low-maintenance plant known for its beautiful variegated foliage. It comes in two sizes and is an ideal choice for beginners or busy plant owners.",
    tags: ["Home", "Garden", "Plants", "Seeds"],
    description:
      "Introducing the Chinese Evergreen, a low-maintenance plant prized for its stunning variegated foliage that adds a touch of natural beauty to any indoor space. Perfect for beginners or busy plant owners, this botanical gem requires minimal care while offering maximum visual impact. With its ability to thrive in low-light conditions and tolerate occasional neglect, the Chinese Evergreen is an ideal choice for infusing greenery into your home with ease. Available in two sizes to suit your space, each Chinese Evergreen brings a sense of tranquility and serenity, creating a peaceful oasis amidst the chaos of everyday life. Whether placed on a desk, shelf, or as part of a larger indoor garden display, it effortlessly enhances the ambiance, bringing a sense of joy and vitality to your living space. Treat yourself to the beauty of nature and experience the timeless allure of the Chinese Evergreen.",
  },
  {
    id: 10,
    name: "Calathea Orbifolia",
    sizes: [
      { size: "S", price: "149.00" },
      { size: "M", price: "169.00" },
      { size: "L", price: "189.00" },
    ],
    photos: [product10],
    discountPercentage: 0.15,
    category: ["Small Plants", "House Plants"],
    newArrival: false,
    sale: true,
    shortDescription:
      "The Calathea Orbifolia is a stunning plant with large, round leaves featuring beautiful patterns. It is available in three sizes and currently on sale with a 15% discount.",
    tags: ["Home", "Garden", "Plants", "Small Plants", "House Plants"],
    description:
      "Elevate your indoor oasis with the mesmerizing Calathea Orbifolia, a stunning plant prized for its large, round leaves adorned with exquisite patterns that add a touch of natural elegance to any space. Native to tropical regions, this botanical masterpiece thrives in environments with high humidity and indirect light, making it an ideal choice for brightening up your home. Currently on sale with a tempting 15% discount, there's never been a better time to bring home this botanical beauty. Available in three sizes to suit your preference, each Calathea Orbifolia is a testament to nature's artistry, offering a captivating display of beauty and grace. Whether placed on a windowsill, desk, or as part of a larger indoor garden display, it effortlessly enhances the ambiance, creating a tranquil retreat where you can unwind and relax. Embrace the beauty of the Calathea Orbifolia and let its mesmerizing leaves breathe new life into your living space.",
  },
  {
    id: 11,
    name: "Snake Plant",
    sizes: [
      { size: "S", price: "79.00" },
      { size: "M", price: "89.00" },
    ],
    photos: [product11],
    discountPercentage: 0,
    category: ["Big Plants"],
    newArrival: true,
    sale: false,
    shortDescription:
      "The Snake Plant is a popular choice for its striking sword-shaped leaves and low maintenance requirements. It comes in two sizes and is perfect for adding a touch of green to any space.",
    tags: ["Home", "Garden", "Plants", "Big Plants"],
    description:
      "Introducing the Snake Plant, a popular choice among plant enthusiasts for its striking sword-shaped leaves and remarkable ability to thrive with minimal care. Native to tropical West Africa, this botanical gem adds a touch of greenery to any space, making it an ideal choice for both seasoned gardeners and beginners alike. Available in two sizes to suit your space, each Snake Plant is a testament to resilience and endurance, thriving in low-light conditions and tolerating infrequent watering. Whether placed in a bright corner or as part of a larger indoor garden display, it effortlessly enhances the ambiance, creating a tranquil oasis where you can unwind and relax. With its striking foliage and easy-care nature, the Snake Plant is the perfect addition to your indoor oasis, bringing a touch of natural beauty to your living space.",
  },
  {
    id: 12,
    name: "Spider Plant",
    sizes: [
      { size: "S", price: "49.00" },
      { size: "M", price: "59.00" },
    ],
    photos: [product12],
    discountPercentage: 0.2,
    category: ["Small Plants", "Potter Plants"],
    newArrival: false,
    sale: true,
    shortDescription:
      "The Spider Plant is a classic houseplant known for its long, arching leaves and spider-like plantlets. It is available in two sizes and is currently on sale with a 20% discount.",
    tags: ["Home", "Garden", "Plants", "Small Plants", "Potter Plants"],
    description:
      "Embrace the timeless charm of the Spider Plant, a classic houseplant beloved for its long, arching leaves and charming spider-like plantlets that dangle gracefully from its stems. Originating from South Africa, this botanical beauty adds a touch of natural elegance to any indoor space, making it a beloved choice among plant enthusiasts. Currently on sale with an enticing 20% discount, there's never been a better time to bring home this iconic houseplant. Available in two sizes to suit your space, each Spider Plant infuses your home with a sense of vitality and charm, creating a serene oasis amidst the hustle and bustle of everyday life. Whether placed on a windowsill, shelf, or as part of a larger indoor garden display, it effortlessly enhances the ambiance, bringing a touch of nature indoors. With its easy-care nature and ability to thrive in various light conditions, the Spider Plant is the perfect companion for both seasoned gardeners and beginners alike. Indulge in the beauty of this botanical treasure and let its graceful foliage breathe new life into your living space.",
  },
  {
    id: 13,
    name: "Zebra Cactus",
    sizes: [
      { size: "S", price: "69.00" },
      { size: "M", price: "79.00" },
    ],
    photos: [product13],
    discountPercentage: 0.1,
    category: ["Succulents"],
    newArrival: false,
    sale: false,
    shortDescription:
      "The Zebra Cactus is a unique succulent with distinctive zebra-like stripes on its leaves. It is available in two sizes and is a great choice for adding a touch of nature to your space.",
    tags: ["Home", "Garden", "Plants", "Succulents"],
    description:
      "Introduce a touch of natural elegance to your space with the captivating Zebra Cactus, a unique succulent prized for its distinctive zebra-like stripes adorning its leaves. Native to arid regions, this botanical wonder thrives in environments with plenty of sunlight and well-draining soil, making it an excellent choice for brightening up your home. Available in two sizes to suit your space, each Zebra Cactus infuses your indoor oasis with a sense of style and sophistication, creating a striking focal point wherever it's placed. Whether adorning a windowsill, desk, or as part of a larger succulent arrangement, it effortlessly enhances the ambiance, bringing a touch of nature indoors. With its easy-care nature and ability to thrive with minimal watering, the Zebra Cactus is the perfect choice for busy plant enthusiasts and beginners alike. Embrace the beauty of this botanical treasure and let its unique stripes add a touch of charm to your living space.",
  },
  {
    id: 14,
    name: "English Ivy",
    sizes: [
      { size: "S", price: "89.00" },
      { size: "M", price: "99.00" },
    ],
    photos: [product14],
    discountPercentage: 0.2,
    category: ["Gardening", "House Plants"],
    newArrival: true,
    sale: false,
    shortDescription:
      "The English Ivy is a versatile plant that can be used for both indoor and outdoor decor. It comes in two sizes and is a perfect choice for creating a lush green environment.",
    tags: ["Home", "Garden", "Plants", "Gardening", "House Plants"],
    description:
      "Introducing the English Ivy, a versatile plant celebrated for its ability to thrive in both indoor and outdoor environments, making it an essential addition to any gardening or home decor enthusiast's collection. With its lush, cascading foliage and easy-care nature, the English Ivy adds a touch of natural beauty to any space, creating a verdant oasis wherever it's placed. Available in two sizes to suit your space, each English Ivy plant offers endless possibilities for creative decor, whether used to adorn trellises, hanging baskets, or as a charming ground cover in your garden. With a tempting 20% discount, now is the perfect time to welcome this botanical gem into your home or garden. Embrace the timeless allure of the English Ivy and let its trailing vines and rich green leaves transform your space into a lush and inviting environment that you'll love coming home to.",
  },
  {
    id: 15,
    name: "Peperomia Obtusifolia",
    sizes: [
      { size: "S", price: "69.00" },
      { size: "M", price: "89.00" },
    ],
    photos: [product4],
    discountPercentage: 0.1,
    category: ["House Plants"],
    newArrival: true,
    sale: false,
    shortDescription:
      "The Peperomia Obtusifolia is a compact and easy-to-care-for plant with glossy, green leaves. It comes in two sizes and adds a touch of freshness to any indoor space.",
    tags: ["Home", "Garden", "Plants", "House Plants"],
    description:
      "Enhance the ambiance of your indoor space with the delightful Peperomia Obtusifolia, a compact and easy-to-care-for plant prized for its glossy, green leaves and charming presence. Native to tropical regions, this botanical gem thrives in indoor environments with bright, indirect light, making it an ideal choice for adorning windowsills, shelves, or desktops. Available in two sizes to suit your space, each Peperomia Obtusifolia adds a touch of freshness and vitality to any room, creating a welcoming atmosphere that you'll love coming home to. With its low-maintenance nature and ability to tolerate occasional neglect, it's perfect for busy plant enthusiasts and beginners alike. Embrace the beauty of simplicity and let the Peperomia Obtusifolia bring a touch of natural elegance to your indoor oasis.",
  },
  {
    id: 16,
    name: "Pilea Peperomioides",
    sizes: [
      { size: "S", price: "59.00" },
      { size: "M", price: "79.00" },
    ],
    photos: [product5],
    discountPercentage: 0.05,
    category: ["House Plants"],
    newArrival: false,
    sale: true,
    shortDescription:
      "The Pilea Peperomioides, also known as the Chinese Money Plant, is a charming plant with round, coin-like leaves. It comes in two sizes and is currently on sale with a 5% discount.",
    tags: ["Home", "Garden", "Plants", "House Plants"],
    description:
      "Discover the whimsical beauty of the Pilea Peperomioides, affectionately known as the Chinese Money Plant, a charming addition to any indoor space with its round, coin-like leaves and unique presence. Originating from China, this delightful plant is celebrated for its distinctive appearance and easy-care nature, making it a beloved choice among plant enthusiasts. Currently on sale with an enticing 5% discount, now is the perfect time to bring home this botanical treasure. Available in two sizes to suit your space, each Pilea Peperomioides infuses your home with a touch of prosperity and good fortune, creating a serene atmosphere that fosters positivity and abundance. Whether placed on a windowsill, desk, or as part of a larger indoor garden display, it effortlessly enhances the ambiance, bringing a sense of joy and vitality to your living space. With its resilience and adaptability, the Pilea Peperomioides is the perfect companion for both seasoned gardeners and beginners alike. Embrace the whimsy of this botanical wonder and let its unique charm brighten your home.",
  },
  {
    id: 17,
    name: "String of Hearts",
    sizes: [
      { size: "S", price: "39.00" },
      { size: "M", price: "49.00" },
    ],
    photos: [product6],
    discountPercentage: 0,
    category: ["Succulents"],
    newArrival: true,
    sale: false,
    shortDescription:
      "The String of Hearts is a delightful succulent with trailing stems adorned with heart-shaped leaves. It comes in two sizes and is perfect for hanging baskets or elevated planters.",
    tags: ["Home", "Garden", "Plants", "Succulents"],
    description:
      "Introducing the charming String of Hearts, a delightful succulent prized for its trailing stems adorned with heart-shaped leaves, adding a touch of whimsy to any indoor space. Native to South Africa, this botanical beauty thrives in bright, indirect light and well-draining soil, making it an ideal choice for hanging baskets or elevated planters. Available in two sizes to suit your space, each String of Hearts infuses your home with a sense of warmth and vitality, creating a serene atmosphere that fosters relaxation and tranquility. With its easy-care nature and drought tolerance, it's perfect for busy plant enthusiasts and beginners alike. Whether cascading from a hanging planter or placed on a high shelf, it effortlessly enhances the ambiance, bringing a touch of natural beauty indoors. Embrace the whimsy of the String of Hearts and let its graceful vines breathe new life into your living space.",
  },
  {
    id: 18,
    name: "Philodendron Birkin",
    sizes: [
      { size: "S", price: "89.00" },
      { size: "M", price: "109.00" },
    ],
    photos: [product7],
    discountPercentage: 0.15,
    category: ["House Plants"],
    newArrival: false,
    sale: true,
    shortDescription:
      "The Philodendron Birkin is a striking plant with dark green leaves adorned with creamy-white stripes. It comes in two sizes and is currently on sale with a 15% discount.",
    tags: ["Home", "Garden", "Plants", "House Plants"],
    description:
      "Add a touch of elegance to your indoor oasis with the exquisite Philodendron Birkin, a striking plant prized for its dark green leaves adorned with creamy-white stripes, creating a captivating contrast that enchants the senses. Native to South America, this botanical marvel thrives in environments with bright, indirect light and well-draining soil, making it an ideal choice for adorning shelves, tabletops, or plant stands. Currently on sale with a tempting 15% discount, now is the perfect time to bring home this botanical gem. Available in two sizes to suit your space, each Philodendron Birkin infuses your home with a sense of sophistication and style, creating a serene atmosphere that fosters relaxation and tranquility. With its low-maintenance nature and adaptability, it's perfect for both seasoned plant enthusiasts and beginners alike. Whether placed in a decorative pot or as part of a larger indoor garden display, it effortlessly enhances the ambiance, bringing a touch of natural beauty indoors. Embrace the elegance of the Philodendron Birkin and let its striking foliage elevate your living space.",
  },
  {
    id: 19,
    name: "Hoya Carnosa",
    sizes: [
      { size: "S", price: "59.00" },
      { size: "M", price: "79.00" },
    ],
    photos: [product8],
    discountPercentage: 0,
    category: ["House Plants"],
    newArrival: false,
    sale: false,
    shortDescription:
      "The Hoya Carnosa, also known as the Wax Plant, is a charming vine with waxy, star-shaped flowers. It comes in two sizes and is an excellent choice for trailing or climbing.",
    tags: ["Home", "Garden", "Plants", "House Plants"],
    description:
      "Discover the enchanting beauty of the Hoya Carnosa, affectionately known as the Wax Plant, a charming vine celebrated for its waxy, star-shaped flowers and delightful trailing or climbing habit. Originating from East Asia, this botanical wonder adds a touch of whimsy to any indoor space, making it an ideal choice for adorning shelves, trellises, or hanging baskets. Available in two sizes to suit your space, each Hoya Carnosa infuses your home with a sense of warmth and tranquility, creating a serene atmosphere that fosters relaxation and rejuvenation. With its resilience and adaptability, it's perfect for both seasoned plant enthusiasts and beginners alike. Whether cascading from a hanging planter or climbing a trellis, it effortlessly enhances the ambiance, bringing a touch of natural beauty indoors. Embrace the enchantment of the Hoya Carnosa and let its delightful flowers and graceful vines transform your living space.",
  },
  {
    id: 20,
    name: "Aglaonema Silver Bay",
    sizes: [
      { size: "S", price: "49.00" },
      { size: "M", price: "59.00" },
    ],
    photos: [product9],
    discountPercentage: 0,
    category: ["House Plants"],
    newArrival: true,
    sale: false,
    shortDescription:
      "The Aglaonema Silver Bay is a lovely plant with silver-green leaves that are striped with darker shades. It comes in two sizes and is an ideal choice for brightening up any room.",
    tags: ["Home", "Garden", "Plants", "House Plants"],
    description:
      "Introducing the Aglaonema Silver Bay, a delightful plant prized for its striking silver-green leaves adorned with darker stripes, creating a captivating contrast that enchants the senses. Native to Southeast Asia, this botanical gem adds a touch of elegance to any indoor space, making it an ideal choice for brightening up your home. Available in two sizes to suit your space, each Aglaonema Silver Bay infuses your living space with a sense of freshness and vitality, creating a serene atmosphere that fosters relaxation and tranquility. With its resilience and adaptability, it's perfect for both seasoned plant enthusiasts and beginners alike. Whether placed on a windowsill, tabletop, or as part of a larger indoor garden display, it effortlessly enhances the ambiance, bringing a touch of natural beauty indoors. Embrace the timeless allure of the Aglaonema Silver Bay and let its graceful foliage breathe new life into your living space.",
  },

  {
    id: 21,
    name: "Senecio Rowleyanus",
    sizes: [
      { size: "S", price: "79.00" },
      { size: "M", price: "99.00" },
    ],
    photos: [product10],
    discountPercentage: 0.1,
    category: ["Succulents"],
    newArrival: false,
    sale: false,
    shortDescription:
      "The Senecio Rowleyanus, also known as String of Pearls, is a charming succulent with trailing stems adorned with bead-like leaves. It is available in two sizes and adds a whimsical touch to any space.",
    tags: ["Home", "Garden", "Plants", "Succulents"],
    description:
      "Meet the Senecio Rowleyanus, affectionately known as String of Pearls, a charming succulent prized for its trailing stems adorned with bead-like leaves, evoking the imagery of delicate pearls cascading from a vine. Native to South Africa, this botanical wonder adds a touch of whimsy to any indoor space, making it an ideal choice for hanging baskets or elevated planters. Available in two sizes to suit your space, each Senecio Rowleyanus infuses your home with a sense of natural beauty and elegance, creating a serene atmosphere that fosters relaxation and tranquility. With its low-maintenance nature and drought tolerance, it's perfect for both seasoned plant enthusiasts and beginners alike. Whether cascading from a hanging planter or displayed on a high shelf, it effortlessly enhances the ambiance, bringing a touch of natural beauty indoors. Embrace the enchantment of the Senecio Rowleyanus and let its delightful foliage breathe new life into your living space.",
  },
  {
    id: 22,
    name: "Alocasia Polly",
    sizes: [
      { size: "S", price: "99.00" },
      { size: "M", price: "129.00" },
    ],
    photos: [product11],
    discountPercentage: 0.05,
    category: ["House Plants"],
    newArrival: false,
    sale: true,
    shortDescription:
      "The Alocasia Polly, also known as Elephant Ear, is a stunning plant with arrow-shaped leaves and striking veining. It comes in two sizes and is currently on sale with a 5% discount.",
    tags: ["Home", "Garden", "Plants", "House Plants"],
    description:
      "Introducing the Alocasia Polly, affectionately known as Elephant Ear, a stunning plant celebrated for its arrow-shaped leaves and striking veining, adding a touch of drama and elegance to any indoor space. Native to Southeast Asia, this botanical beauty thrives in environments with bright, indirect light and well-draining soil, making it an ideal choice for adorning windowsills, tabletops, or plant stands. Available in two sizes to suit your space, each Alocasia Polly infuses your home with a sense of sophistication and style, creating a serene atmosphere that fosters relaxation and rejuvenation. Currently on sale with an enticing 5% discount, now is the perfect time to bring home this botanical treasure. With its resilience and adaptability, it's perfect for both seasoned plant enthusiasts and beginners alike. Whether displayed as a standalone statement piece or as part of a larger indoor garden display, it effortlessly enhances the ambiance, bringing a touch of natural beauty indoors. Embrace the elegance of the Alocasia Polly and let its stunning foliage elevate your living space.",
  },

  {
    id: 23,
    name: "Monstera Adansonii",
    sizes: [
      { size: "S", price: "79.00" },
      { size: "M", price: "99.00" },
    ],
    photos: [product12],
    discountPercentage: 0.2,
    category: ["House Plants"],
    newArrival: false,
    sale: true,
    shortDescription:
      "The Monstera Adansonii, also known as Swiss Cheese Vine, is a unique plant with perforated leaves. It comes in two sizes and is currently on sale with a 20% discount.",
    tags: ["Home", "Garden", "Plants", "House Plants"],
    description:
      "Introducing the Monstera Adansonii, affectionately known as the Swiss Cheese Vine, a unique and striking plant celebrated for its perforated leaves, reminiscent of Swiss cheese, adding a touch of whimsy and charm to any indoor space. Native to Central and South America, this botanical wonder thrives in environments with bright, indirect light and well-draining soil, making it an ideal choice for adorning shelves, trellises, or hanging baskets. Currently on sale with a generous 20% discount, now is the perfect time to bring home this botanical treasure. Available in two sizes to suit your space, each Monstera Adansonii infuses your home with a sense of natural beauty and elegance, creating a serene atmosphere that fosters relaxation and rejuvenation. With its resilience and adaptability, it's perfect for both seasoned plant enthusiasts and beginners alike. Whether cascading from a hanging planter or climbing a trellis, it effortlessly enhances the ambiance, bringing a touch of tropical paradise indoors. Embrace the unique allure of the Monstera Adansonii and let its captivating foliage breathe new life into your living space.",
  },
  {
    id: 24,
    name: "Dracaena Marginata",
    sizes: [
      { size: "S", price: "69.00" },
      { size: "M", price: "89.00" },
    ],
    photos: [product13],
    discountPercentage: 0.1,
    category: ["House Plants"],
    newArrival: false,
    sale: false,
    shortDescription:
      "The Dracaena Marginata, also known as Madagascar Dragon Tree, is a striking plant with slender, arching leaves. It comes in two sizes and adds a touch of exoticism to any interior.",
    tags: ["Home", "Garden", "Plants", "House Plants"],
    description:
      "Discover the exotic beauty of the Dracaena Marginata, affectionately known as the Madagascar Dragon Tree, a striking plant prized for its slender, arching leaves and unique presence, adding a touch of drama and sophistication to any indoor space. Native to Madagascar, this botanical gem thrives in environments with bright, indirect light and well-draining soil, making it an ideal choice for adorning windowsills, tabletops, or as a standalone statement piece. Available in two sizes to suit your space, each Dracaena Marginata infuses your home with a sense of natural elegance and allure, creating a serene atmosphere that fosters relaxation and rejuvenation. With its resilience and adaptability, it's perfect for both seasoned plant enthusiasts and beginners alike. Whether displayed as a standalone specimen or as part of a larger indoor garden display, it effortlessly enhances the ambiance, bringing a touch of exoticism indoors. Embrace the captivating beauty of the Dracaena Marginata and let its stunning foliage transport you to tropical paradise.",
  },
];
