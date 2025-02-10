import { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "111" });
  return (
    <div className="App">
      <div>{form.name}</div>
      <button onClick={() => setForm({ ...form, name: "222" })}>点击</button>
    </div>
  );
}

export default App;
