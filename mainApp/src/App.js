import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  
    const [counter, setCounter] = useState(0);

    const ButtonLink = ({to, children}) => {
      const navigate = useNavigate();
      const handleClick = () => {
        navigate(to);
      }
      return(
        <button onClick={handleClick}>
          {children}
        </button>
      )
    }

    const globalVariables = useSelector(state => state.globalValues);

    const dispatch = useDispatch();

    const globalIncrementer = () => {
      dispatch({type: 'INCREMENT'})
    }

    useEffect(() => {
      console.log('This useEffect has been executed!')
    }, [counter])

    return (
      <div className="App">
        <p>This is the current state number: {counter}</p>
        <p>This is a global variable called counter! {globalVariables.counter}</p>
        <button type="button" onClick={() => {setCounter(counter + 1)}}>Add to the Counter</button>
        <button type="button" onClick={globalIncrementer}>Add to the global counter</button>
        <ButtonLink to="/secondpage">Go to the second page!</ButtonLink>
      </div>
    );
  }
export default App;
