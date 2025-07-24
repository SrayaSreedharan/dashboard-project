import React from 'react';
import img from '../images/martin.png'


const Pending = () => {
    const bookings = [
  {
    id: 1,
    name: 'Mr Martin Luther',
    service: 'Dog Walking',
    date: '21-03-2023',
    price: 600,
    image: img
  },
  {
    id: 2,
    name: 'Mr Martin Luther',
    service: 'Dog Walking',
    date: '21-03-2023',
    price: 600,
    image: img
  }
];

const styles = {
  container: {
  width: '100%',
  maxWidth: '600px', // ⬅️ increased from 525px
  background: '#fff',
  border: '1px solid #eee',
  borderRadius: '10px',
  padding: '16px',
},


  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop:'-10px'
  },
  title: {
    fontSize: '20px',
    // fontWeight: '600'
  },
  viewMore: {
    color: '#00c97b',
    fontWeight: '500',
    textDecoration: 'none'
  },
  card: {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#fafafa',
  padding: '12px',                
  maxWidth: '457px',
  minHeight: '100px',            
  borderRadius: '10px',
  marginBottom: '10px',           
  border: '1px solid #eee'
},

 userSection: {
  display: 'flex',
  gap: '16px',
},

  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%'
  },
  name: {
    fontWeight: '700',
    fontSize: '16px',
    whiteSpace: 'nowrap'
  },
  service: {
    color: '#555',
    fontSize: '14px',
    marginBottom: '4px'
  },
  meta: {
    fontSize: '12px',
    color: '#666'
  },
  link: {
    color: '#007bff',
    marginLeft: '4px'
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  
  price: {
    textAlign: 'right'
  },
  amount: {
    fontSize: '20px',
    fontWeight: '700'
  },
  actions: {
    display: 'flex',
    gap: '8px',
    marginTop: '8px'
  },
  viewButton: {
    backgroundColor: '#dceeff',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 10px',
    cursor: 'pointer'
  },
  rejectButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 12px',
    cursor: 'pointer'
  },
  acceptButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 12px',
    cursor: 'pointer'
  }
};
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Pending Bookings</h2>
        <a href="#" style={styles.viewMore}>View More</a>
      </div>
      {bookings.map((item) => (
        <div key={item.id} style={styles.card}>
          <div style={styles.userSection}>
            <img src={item.image} alt="User" style={styles.avatar} />
            <div>
              <div style={styles.name}>{item.name}</div>
              <div style={styles.service}>{item.service}</div>
              <div style={styles.meta}>
                <span>Submitted Date </span>
                <span style={styles.link}>{item.date}</span>
              </div>
              <div style={styles.meta}>
                <span>Service Type </span>
                <span style={styles.link}>lorem</span>
              </div>
            </div>
          </div>
          <div style={styles.rightSection}>
            <div style={styles.price}>
              <div>Price</div>
              <div style={styles.amount}>${item.price}</div>
            </div>
            <div style={styles.actions}>
              <button style={styles.viewButton}>👁</button>
              <button style={styles.rejectButton}>Reject</button>
              <button style={styles.acceptButton}>Accept</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pending;
