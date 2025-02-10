import { useRef, useState } from "react";
import classNames from "classnames";
import "./index.css";
function Son(props) {
  console.log(props);
  const { onGetMessage } = props;
  return (
    <>
      <div>Son value</div>
      <div>{props.name}</div>
      <input onChange={e => onGetMessage(e.target.value)} />
    </>
  );
}
function App() {
  const [form, setForm] = useState({ name: "倒计时的发达" });
  const [list, setList] = useState([
    { name: "zdjnASD", age: 17, id: "1" },
    { name: "dasd", age: 16, id: "2" },
    { name: "fdh", age: 15, id: "3" },
  ]);
  const [selectItem, setSelectItem] = useState({});
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef();
  const [msg, setMsg] = useState("");
  const style = {
    color: "aqua",
    fontSize: "20px",
  };
  function getDom() {
    console.log(inputRef.current);
  }
  function addItem() {
    setList([...list, { name: inputVal, age: 14, id: inputVal + "4" }]);
    setInputVal("");
    inputRef.current.focus();
  }
  function handleMessage(msg) {
    setMsg(msg);
  }
  return (
    <div className="App">
      <div style={style} className="">
        {form.name}
        {msg}
      </div>
      <button onClick={() => setForm({ ...form, name: "222" })}>点击</button>
      <ul>
        {list.map(item => (
          <li
            key={item.id}
            className={classNames([{ active: selectItem.id === item.id }])}
            onClick={() => setSelectItem(item)}
          >
            <span>{item.name}</span>
            <span>{item.age}</span>
            {selectItem.id === item.id && (
              <button onClick={() => setList(list.filter(el => selectItem.id !== el.id))}>删除</button>
            )}
          </li>
        ))}
      </ul>

      <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} ref={inputRef} onFocus={getDom} />
      <button onClick={addItem}>添加</button>

      <Son name={form.name} onGetMessage={handleMessage}>
        <span>48949498</span>
      </Son>
    </div>
  );
}

export default App;
