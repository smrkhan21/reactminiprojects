import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import "./styles.css";

export default function App() {
  const [visible, setVisible] = useState(false);
  const toggleStatus = () => {
    setVisible(!visible);
  };
  return (
    <div className="App">
      <label>
        <input type={visible ? "text" : "password"} placeholder="password" />
        <span onClick={toggleStatus}>{visible ? <BiShow /> : <BiHide />}</span>
      </label>
    </div>
  );
}
