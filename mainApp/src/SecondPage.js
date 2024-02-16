import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export const SecondPage = () => {
    const globalVariables = useSelector(state => state.globalValues);

    const dispatch = useDispatch();

    const globalIncrementer = () => {
      dispatch({type: 'INCREMENT'})
    }

    const BackButtonLink = ({children}) => {

        const navigate = useNavigate();
        const handleGoBack = () => {
            navigate(-1);
        }

        return(
            <button onClick={handleGoBack}>
                {children}
            </button>
        )
    }
    return (
        <div className="App">
            <p>This is the second page!</p>
            <p>This is a global variable called counter! {globalVariables.counter}</p>
            <button type="button" onClick={globalIncrementer}>Add to the global counter</button>
            <BackButtonLink>Go Back to the Previous Page!</BackButtonLink>
        </div>
    )
}