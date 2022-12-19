import "./styles.css";
import { useRef, useState, React } from "react";

export default function App() {
  const [name, setName] = useState("");
  const refElement = useRef("");

  const Reset = () => {
    setName("");
    refElement.current.style.color = "";
    refElement.current.focus();
  };

  const HandleChange = () => {
    refElement.current.style.color = "green";
  };
  return (
    <div className="App">
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={Reset}>reset</button>
      <button onClick={HandleChange}> Change </button>
    </div>
  );
}
