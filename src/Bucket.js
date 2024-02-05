import React from 'react';

const Bucket = ({ bucketItems, removeFromBucket }) => {
  // Calculate the total price
  const totalPrice = bucketItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  const handleProceedToPayment = () => {
    // Open a new window with the payment.html file
    window.open('/payment.html', '_blank');
  };

  return (
    <div>
      <h2>Shopping Bucket</h2>
      <ul>
        {bucketItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeFromBucket(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {bucketItems.length > 0 && (
        <div>
          <p>Total Price: ${totalPrice}</p>
          <button onClick={handleProceedToPayment}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default Bucket;