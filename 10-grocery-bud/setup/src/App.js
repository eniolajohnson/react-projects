import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getList = () => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getList());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});

  const handleSubmit = (e)=> {
    e.preventDefault();
    if(!name){
      const msg = "name cannot be blank";
      showAlert(true, 'danger', msg);
    } else if (name && isEditing){
      setList(
        list.map((item) => {
        if (item.id === editId) {
          return {... item, title: name}
        }
        return item;
      }));
      setIsEditing(false);
      setEditId(null);
      setName('');
      const msg = "item edited";
    showAlert(true, 'success', msg);
    } else {
      const msg = "item added to list"
      showAlert(true, 'success', msg);
      const newItem = { id: new Date().getTime().toString(), title: name};
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
    const msg = "removed item";
    showAlert(true, 'danger', msg);
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const itemEdit = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(itemEdit.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
          <List listItems={list} delItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>clear items</button>
        </div>
      )}
    </section>
  );
}

export default App
