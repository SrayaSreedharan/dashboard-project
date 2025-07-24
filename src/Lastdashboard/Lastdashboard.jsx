import React from 'react';
import Booking from './Booking';
import Revenue from './Revenue';
import Pending from './Pending';

const Lastdashboard = () => {
    const styles = {
  containerss: {
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'stretch',    
    gap: '20px',
    padding: '20px',
    maxWidth: '1600px',
    margin: '0 auto',
    flexWrap: 'nowrap'        
  }
};

  return (
    <div style={styles.containerss}>
      <Booking/>
      <Revenue />
      <Pending/>
    </div>
  );
};

export default Lastdashboard;
