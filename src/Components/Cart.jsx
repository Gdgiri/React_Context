import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../App";
import "../index.css";

const Cart = () => {
  const [data, setData] = useContext(MyContext);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const calculateTotals = () => {
      let total = 0;
      let quantity = 0;
      data.forEach((product) => {
        const qty = quantities[product.id] || 0;
        total += product.price * qty;
        quantity += qty;
      });
      setTotalPrice(total);
      setTotalQuantity(quantity);
    };

    calculateTotals();
  }, [quantities, data]);

  const handleAdd = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleSub = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
    }));
  };

  const handleRemove = (id) => {
    setData((prevData) => prevData.filter((product) => product.id !== id));
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  return (
    <div className="container my-5 ">
      <div className="sticky-header d-flex justify-content-between mb-4 m-2">
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
      </div>
      <div className="row">
        {data.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <div className="card h-100">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ₹{product.price}</p>
                <p className="card-text">
                  Discount: {product.discountPercentage}%
                </p>
                <p className="card-text">Brand: {product.brand}</p>
                <p className="card-text">Category: {product.category}</p>
              </div>
              <div className="d-flex justify-content-between m-3 gap-2 align-items-center">
                <div className="input-group input-group-sm align-items-center">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleAdd(product.id)}
                  >
                    ➕
                  </button>
                  <input
                    type="text"
                    className="form-control text-center qty-input"
                    value={quantities[product.id] || 0}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-secondary "
                    type="button"
                    onClick={() => handleSub(product.id)}
                  >
                    ➖
                  </button>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
