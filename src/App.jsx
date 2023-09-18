import React from "react";
import { useState } from "react";
import "./app.css";

export default function App() {
  const [questionNum, setQuestionNum] = useState(1);
  const rewardsAmount = [
    { id: 1, amount: "100" },
    { id: 2, amount: "200" },
    { id: 3, amount: "300" },
    { id: 4, amount: "500" },
    { id: 5, amount: "1000" },
    { id: 6, amount: "2000" },
    { id: 7, amount: "4000" },
    { id: 8, amount: "8000" },
    { id: 9, amount: "16000" },
    { id: 10, amount: "32000" },
    { id: 11, amount: "64000" },
    { id: 12, amount: "125000" },
    { id: 13, amount: "25000" },
    { id: 14, amount: "500000" },
    { id: 15, amount: "1000000" },
  ].reverse();
  return (
    <div className="appConatainer">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">question and answers</div>
      </div>
      <div className="rewards">
        <ul className="rewardList">
          {rewardsAmount.map((m) => (
            <li
              key={m.id}
              className={
                questionNum === m.id ? "rewardListItem active" : "rewardListItem"
              }
            >
              <span className="rewardListItemNumber">{m.id}</span>
              <span className="rewardListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
