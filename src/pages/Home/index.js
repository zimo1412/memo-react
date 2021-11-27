import { useState, useEffect, useRef } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import { API_GET } from "../../global/constants";

async function fetchMemo(setMemoData) {
    const res = await fetch(API_GET)
    const { data } = await res.json()
    setMemoData(data)
}

async function putMemo(memoData) {
    await fetch(API_GET, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ memoData })
    })
}

const Home = () => {
  const [memoData, setMemoData] = useState([]);
  const shouldSubmit = useRef(false);

  useEffect(() => {
    fetchMemo(setMemoData)
  }, [])

  useEffect(() => {
      if (!shouldSubmit.current) {
          return
      }
      putMemo(memoData)
      .then(memoData => shouldSubmit.current = false)
  })

  return (
    <div className="app">
      <Edit add={setMemoData} shouldSubmit={shouldSubmit} />
      <List memoData={memoData} deleteData={setMemoData} shouldSubmit={shouldSubmit} />
    </div>
  );
};

export default Home;
