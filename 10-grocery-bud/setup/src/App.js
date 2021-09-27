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
    if(!name){
      const msg = "name cannot be blank";
      showAlert(true, 'danger', msg);
    } else if (name && isEditing){
      setIsEditing(true);
    } else {
      const msg = "item added to list"
      showAlert(true, 'success', msg);
      const newItem = { id: new Date().getTime().toString, title: name};
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show=false, type='', msg='') => {
    setAlert({show, type, msg});
  }

  const clearList = () => {
    const msg = "list emptied";
    showAlert(true, "danger", msg)
    setList([]);
  }

  const removeItem = (id) => {
    const msg = "removed item"
    showAlert(true, 'danger', msg);
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
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
      {list.length > 0 && (
        <div className="grocery-container">
          <List listItems={list}/>
          <button className='clear-btn' onClick={clearList}>clear items</button>
        </div>
      )}
    </section>
  );
}

export default App
