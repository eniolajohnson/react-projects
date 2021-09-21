import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});

  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log('submit')
  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input className="grocery" type="text" 
          placeholder='e.g. sausages' 
          value={name} 
          onChange={(e) => setName(e.target.value)}/>
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        {/* <List /> */}
        <button className='clear-btn' onClick={() => console.log('cleared')}>clear items</button>
      </div>
    </section>
     //   <h2>grocery bud setup</h2>
    // </>
  );
}

export default App
