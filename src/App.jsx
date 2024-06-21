import React, { useState, createContext } from "react";
import Cart from "./Components/Cart";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

export const MyContext = createContext("");

const App = () => {
  const products = [
    {
      id: 1,
      title: "Apple iPhone 15 Pro Max",
      description: "iPhone 15 Pro Max 256GB white Titanium ",
      price: 148900,
      discountPercentage: 7.0,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "Smartphones",
      thumbnail:
        "https://images.firstpost.com/uploads/2023/10/iPhone-15-Pro-Max-Lead-Image.jpg?im=FitAndFill=(596,336)",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra",
      description: "Buy the new Samsung Galaxy S24 Ultra with new AI Features",
      price: 108050,
      discountPercentage: 18,
      rating: 4.44,
      stock: 100,
      brand: "Samsung",
      category: "Smartphones",
      thumbnail: "https://i.ytimg.com/vi/3hPoEmlBQdY/maxresdefault.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Vivo X Fold-3 Pro",
      description: "16GB RAM , 512GB Storage with AI Features and Foldable",
      price: 159999,
      discountPercentage: 6,
      rating: 4.49,
      stock: 36,
      brand: "Vivo",
      category: "Smartphones",
      thumbnail:
        "data:image/jpeg;base64,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",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "Realme GT-6",
      description: "7th Gen 3 Flagship chipsetIndia's 1st ",
      price: 32998,
      discountPercentage: 8.81,
      rating: 4.5,
      stock: 123,
      brand: "Realme",
      category: "Smartphones",
      thumbnail: "https://i.ytimg.com/vi/y12e75Km2Dg/maxresdefault.jpg",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Oppo Find N3 Flip",
      description:
        "DC OS & Processor Features Operating System Android 13 Processor ",
      price: 64999,
      discountPercentage: 35.24,
      rating: 4.49,
      stock: 32,
      brand: "Oppo",
      category: "Smartphones",
      thumbnail: "https://i.ytimg.com/vi/8GX8POy4aGo/maxresdefault.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
    {
      id: 6,
      title: "Motorola razr 40 Ultra",
      description:
        "Snap dragon 8+ Gen 8GB LPDRS RAM, 256 GB built-in UFS 3.1 Storage",
      price: 69999,
      discountPercentage: 42.13,
      rating: 4.52,
      stock: 50,
      brand: "Motorola",
      category: "Smartphones",
      thumbnail:
        "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/in230720_01rc-sixteen_nine.png?size=948:533",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
  ];

  const [data, setData] = useState(products);

  return (
    <div>
      <MyContext.Provider value={[data, setData]}>
        <Navbar />
        <Cart />
        <Footer />
      </MyContext.Provider>
    </div>
  );
};

export default App;
