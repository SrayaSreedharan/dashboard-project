import React from 'react';
import '../App.css';
import img1 from '../images/martin.png'
import img2 from '../images/donald.jpg'
import img3 from '../images/sara.jpg'

const RequestPayout = () => {
  const payout= [
  {
    name: 'Mr Martin Luther',
    job: 'Dog Walking',
    date: '21-03-2023',
    price: 1200,
    image: img1,
  },
  {
    name: 'Ms Sara',
    job: 'Dog Walking',
    date: '21-03-2023',
    price: 120,
    image: img2,
  },
  {
    name: 'Mr Donald Modi',
    job: 'Dog Walking',
    date: '21-03-2023',
    price: 800,
    image: img3,
  },
];
  return (
    <div className="request-payout-container">
      <h2>Request Payout</h2>
      {payout.map((user, index) => (
        <div className="payout-card" key={index}>
          <div className="user-info">
            <img src={user.image} alt={user.name} />
            <div className="details">
              <strong>{user.name}</strong>
              <p>{user.job}</p>
              <p className="date">Date<br /><span>{user.date}</span></p>
            </div>
          </div>
          <div className="payout-info">
            <p className="price-label">Price</p>
            <h3>${user.price}</h3>
            <button className="payout-btn">Payout</button>
          </div>
        </div>
      ))}
      <button className="view-more-btn">View More</button>
    </div>
  );
};

export default RequestPayout;
