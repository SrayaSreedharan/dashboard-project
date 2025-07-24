import React from "react";
import "../App.css";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

const Booking = () => {
  const data = [
  { value: 10 },
  { value: 20 },
  { value: 15 },
  { value: 30 },
  { value: 25 },
  { value: 35 },
  { value: 28 }
];
const styles = {
  card: {
    width: '100%',
    maxWidth: '517px',
    minHeight: '320px',
    maxHeight: '320px',
    height: '320px',
    overflow: 'hidden',
    padding: '16px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 0 2px rgba(0,0,0,0.1)',
    border: '1px solid #eee'
  },
  header: {
    marginBottom: '8px',
    fontSize: '18px',
    fontWeight: '500'
  },
  title: {
    color: '#00c97b',
    fontWeight: '600'
  },
  value: {
    color: '#222'
  }
};

  return (
     <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.title}>Booking Made - </span>
        <span style={styles.value}>97.5k</span>
      </div>
      <ResponsiveContainer width="100%" height={100} style={{marginTop:'70px'}}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00c97b" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#00c97b" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area
            type="monotone" 
            dataKey="value" 
            stroke="#006f4c" 
            fill="url(#colorGreen)" 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Booking;
