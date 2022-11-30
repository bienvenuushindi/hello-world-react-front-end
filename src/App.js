import './App.css';
import Greeting from "./components/greeting";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchRandomGreeting} from "./redux/greeting/action";

function App() {
    const dispatch = useDispatch()
    const greeting = useSelector((state) => state.randomGreeting)
    useEffect(() => {
       if(greeting.length === 0 ) dispatch(fetchRandomGreeting())
    }, [])
    return (
        <div className="App">
            <Greeting message={ greeting}/>
        </div>
    );
}

export default App;
