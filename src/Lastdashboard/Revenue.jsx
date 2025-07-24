import React from 'react';
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer} from 'recharts';
import "../App.css";


const data = [
  { name: '1w', value: 11 },
  { name: '2w', value: 12 },
  { name: '2w', value: 9 },
  { name: '4w', value: 15 }
];

const styles = {
  card: {
    width: '100%',
    maxWidth: '525px',
    padding: '16px',
    minHeight: '320px',
    maxHeight: '320px',
    height: '320px',
    overflow: 'hidden',
    borderRadius: '10px',
    backgroundColor: '#fff',
    border: '1px solid #eee',
  },
  header: {
    marginBottom: '12px',
    fontSize: '18px',
    fontWeight: '500'
  },
  title: {
    color: '#00c97b',
    fontWeight: '600'
  },
  value: {
    color: '#222'
  },
  chartRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    backgroundColor: '#e9fff4',
    padding: '12px',
    borderRadius: '10px',
    marginTop:'30px'
  },
  box: {
    width: '80px',
    height: '80px',
    backgroundColor: '#ccc',
    borderRadius: '10px'
  }
};


const Revenue = () => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.title}>Revenue Generated - </span>
        <span style={styles.value}>97.5k</span>
      </div>
      <div style={styles.chartRow} >
        <ResponsiveContainer width="70%" height={120} style={{marginTop:'70px'}}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(val) => `${val}$`} />
            <Tooltip formatter={(value) => `${value}$`} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00c97b"
              strokeWidth={2}
              dot={{ stroke: '#00c97b', strokeWidth: 2, fill: '#00c97b', r: 5 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div style={styles.box}></div>
      </div>
    </div>
  );
};

export default Revenue;
