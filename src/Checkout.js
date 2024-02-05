import React from 'react';

const Checkout = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Surname:
          <input type="text" name="surname" />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <br />
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Checkout;
