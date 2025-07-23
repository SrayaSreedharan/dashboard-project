import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../App.css';

const Calendar = () => {
  return (
    <div className='containers'>
    <div className="calendar-card">
      <h2 className="calendar-heading" style={{marginLeft:'10px'}}>Calendar</h2>
      <div className="calendar-body">
        <div className="calendar-left">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            initialDate="2024-11-01"
            height="auto"
            headerToolbar={{
              start: 'prev,next today',
              center: '',
              end: 'dayGridMonth,dayGridWeek,dayGridDay'
            }}
            events={[
              { title: 'Dog Walking', date: '2024-11-05', color: '#00FFE0' },
              { title: 'Dog Day Care', date: '2024-11-05', color: '#FFC100' },
              { title: 'Cat Boarding', date: '2024-11-05', color: '#00FF57' },
              { start: '2024-11-04', display: 'background', backgroundColor: 'pink' },
            ]}
          />
        </div>
        <div className="calendar-right">
          <div className="legend">
            <label><input type="checkbox" />All</label>
            <label style={{color:'#FF9988'}}><input type="checkbox" /> Dog Boarding</label>
            <label style={{color:'#0047FF'}}><input type="checkbox" /> Dog Walking</label>
            <label style={{color:'#FFC100'}}><input type="checkbox" /> Dog Day Care</label>
            <label style={{color:'#FF00E5'}}><input type="checkbox" /> Cat Boarding</label>
            <label style={{color:'#00FF57'}}><input type="checkbox" /> Cat Sitting</label>
            <label style={{color:'#00FFE0'}}><input type="checkbox" /> Drop In Visit - Cat</label>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Calendar;

