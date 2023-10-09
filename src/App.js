// App.js
import React, {useEffect, useState} from 'react';
import RewardPointsCalculator from './components/RewardPointsCalculator';
import axios from "axios";

function App() {
    const [transactions, setTransactions] = useState([])
    useEffect(()=>{
        updateUi()
    },[])

    const updateUi = async ()=> {
        const url = "https://api.jsonbin.io/v3/qs/6522efe40574da7622b61bb8";
        const result = await axios.get(url);
        setTransactions(result.data.record.data);
    }

  return (
      <div className="App">
        <RewardPointsCalculator transactions={transactions} />
      </div>
  );
}

export default App;
