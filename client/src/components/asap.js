import {useState, React} from 'react';

import './asap.css';

import {useDispatch} from 'react-redux';

import { addNewTodo } from '../redux/actions';

const Asap = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));

    setText('');
  }

  const onInputChange = (e) => {
    setText(e.target.value);
  }
 
  return (
    <>
    <div className='asap-css'>
      <h1>Hello World</h1>
      <p>This is to test the working of the page Asap</p>
      
      <form className='form' onSubmit={onFormSubmit}>
        <input 
          placeholder='Enter something'
          className='input'
          onChange={onInputChange}
          value={text}
        />
      </form>
    </div>
    </>
  );
}

export default Asap;