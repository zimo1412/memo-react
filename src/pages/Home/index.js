import { useState } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [memoData, setMemoData] = useState([]);

  return (
    <div className="app">
      <Edit add={setMemoData} />
      <List memoData={memoData} />
    </div>
  );
};

export default Home;
