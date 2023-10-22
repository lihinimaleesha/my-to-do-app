import { useState } from 'react';
import './App.css';
import { Button, Input,remove,Add,update, List} from 'antd';
import Item from 'antd/es/list/Item';

function App() {
  const [list, setList] = useState([
    { id: 1, task:'Play', done: false }
  ]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);

  function Add() {
    if (editId) {
      const newList = list.map(item => {
        if (item.id === editId) {
          return { ...item, task: task };
        }
        return Item;
      });
      setList(newList);
      setEditId(null);
      setTask('');
    } else {
      const newObj = { id: list.length + 1, task: task, done: false };
      setList(prevList => [...prevList, newObj]);
      setTask('');
    }
  }

  function update(id) {
    setEditId(id);
    const selectedTask = list.find(item => item.id === id);
    setTask(selectedTask.task);
  }

  function remove(id) {
    const newList = list.filter(f => f.id !== id);
    setList(newList);
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <h1>Todo List</h1>
      <div className="header text-center">
        <div className="container">
          <div className='inputpart'>
            <Input type='text' placeholder='add task' value={task} onChange={e => setTask(e.target.value)} />
            <Button className='addBtn' onClick={Add}>{editId ? 'Update' : 'Add'}</Button>
          </div>
          <div className='taskList'>
            <ul>
              {list.map((item) => (
                <li key={item.id} onClick={() =>update(item.id)} className={item.done ? "done" : ""}>
                  <span>{item.task}</span>
                  <span onClick={() => remove(item.id)}>x</span>
                </li>
              ))}
            </ul>
            <div className='icon position'>
              <i className='far fa-circle-check'></i>
              <i className='far fa-pen-to-square'></i>
              <i className='far fa-pen-to-square'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
