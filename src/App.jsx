import React from "react";
import "./app.css";

export default function App() {
  const rewardsAmount = [
    { id: 1, amount: "100 FCFA" },
    { id: 2, amount: "200 FCFA" },
    { id: 3, amount: "300 FCFA" },
    { id: 4, amount: "500 FCFA" },
    { id: 5, amount: "1000 FCFA" },
    { id: 6, amount: "2000 FCFA" },
    { id: 7, amount: "4000 FCFA" },
    { id: 8, amount: "8000 FCFA" },
    { id: 9, amount: "16000 FCFA" },
    { id: 10, amount: "32000 FCFA" },
    { id: 11, amount: "64000 FCFA" },
    { id: 12, amount: "125000 FCFA" },
    { id: 13, amount: "25000 FCFA" },
    { id: 14, amount: "500000 FCFA" },
    { id: 15, amount: "1000000 FCFA" },
  ].reverse();
  return (
    <div className="appConatainer">
      <div className="main">main</div>
      <div className="rewards">
        <ul className="rewardList">
          {rewardsAmount.map((m) => (
            <li className="rewardListItem">
              <span className="rewardListItemNumber">{m.id}</span>
              <span className="rewardListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
