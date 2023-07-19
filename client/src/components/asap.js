import {useState, React} from 'react';
import './asap.css';

const Asap = () => {
  const [text, setText] = useState("");

  const onFormSubmit = () => {

  }

  const onInputChange = () => {
    
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
        />
      </form>
    </div>
    </>
  );
}

export default Asap;