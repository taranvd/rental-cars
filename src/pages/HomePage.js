import React from 'react';

const HomePage = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1 style={{ textAlign: 'center' }}>Welcome to our car rental</h1>

      <h2
        style={{ textAlign: 'center', marginBottom: '20px', fontSize: '30px' }}
      >
        Our advantages:
      </h2>

      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 0,
        }}
      >
        <li style={{ marginBottom: '10px' }}>
          Wide Range of Cars: From economy to premium, we provide various models
          to suit your needs.
        </li>
        <li style={{ marginBottom: '10px' }}>
          Transparent and Competitive Prices: We offer affordable and
          transparent rates with no hidden fees.
        </li>
        <li style={{ marginBottom: '10px' }}>
          Convenient Booking: An intuitive and easy car booking process right on
          our website.
        </li>
        <li style={{ marginBottom: '10px' }}>
          24/7 Customer Support: Our team is ready to assist you at any time and
          answer all your inquiries.
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
