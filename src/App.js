import {useState, useEffect} from "react";

function Hello() {
    useEffect(() => {
        console.log("hi :)");
        return () => console.log("bi :(");
    }, []);
    return <div>Hello</div>;
}

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState([""]);
    const onClick = () => setValue((prev) => prev+1);
    const onChange = (event) => setKeyword(event.target.value);

    const [showing, setShowing] = useState(false);
    const onClick2 = () => setShowing(prev => !prev);
    useEffect(() => {
        console.log("I run only once.");
    }, []);
    useEffect(() => {
        console.log("I run when 'keyword' changes.");
    }, [keyword]);
    useEffect(() => {
        console.log("I run when 'counter' changes.");
    }, [counter]);
    useEffect(() => {
        console.log("I run when counter & keyword change.");
    }, [counter, keyword]);
  return (
    <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="Search here" />
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
        {showing ? <Hello /> : null}
        <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
