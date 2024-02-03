import React, { useState } from 'react';

const Order = ({ bucketItems, removeFromBucket }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    surname: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleProceedOrder = () => {
    // You can handle the order processing logic here
    // For simplicity, let's just log the user info and clear the bucketItems
    console.log('User Info:', userInfo);
    alert('Order placed successfully!');
    removeFromBucket();
  };

  return (
    <div>
      <h2>Order Details</h2>
      <ul>
        {bucketItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <div>
        <h2>Enter Your Information</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} />
          </label>
          <label>
            Surname:
            <input type="text" name="surname" value={userInfo.surname} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={userInfo.address} onChange={handleInputChange} />
          </label>
          <button type="button" onClick={handleProceedOrder}>
            Proceed Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;