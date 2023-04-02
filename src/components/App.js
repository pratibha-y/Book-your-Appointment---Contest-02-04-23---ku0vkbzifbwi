import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment } from '../action';
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const dispatch =useDispatch();
  const appointements = useSelector(state => stete.appointments);
  const handleSubmit =(e) =>{
    e.preventDefault();
    const appointment ={ name,time,discription};
    dispatch(addAppointment(appointment));
    setName(");
            setTime(");
            setDescription(");
            };
  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" className="name-input" value={name} onchange={(e)=>setName(e.target.value)}/>
        <br />
        <label>Time:</label>
        <input type="text" className="time-input" value={time} onchange={(e)=> setTime(e.target.value)}/>
        <br />
        <label>Description:</label>
        <textarea className="description-input"  value={description} onchange={(e)=> setDescription(e.target.value)}/>
        <br />
        <button type="submit">Add Appointment</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
            {/* Appointment HTML */}
                {appointments.map((appointment,index)=>

            (<tr key={index}>
                   <td>{appointment.name}</td>
                     <td>{appointment.time}</td>
                       <td>{appointment.description}</td>
             
            </tr>
))}
        </tbody>
      </table>
    </div>
  )
}


export default App;
