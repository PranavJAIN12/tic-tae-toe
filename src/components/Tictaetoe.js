import React, { useRef, useState } from 'react';
import './Tictaetoe.css';
import circle from '../../src/Assets/circle.png';
import cross from '../../src/Assets/cross.png';

export default function Tictaetoe() {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null)

  const reset =()=>{
    console.log("button pressed")
    window.location.reload();
  }

  const toggle = (e, num) => {
    if (lock) {
      return;
    }
    const newData = [...data]; // Create a new array based on the current state
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'>`; // Corrected usage of innerHTML
      newData[num] = "x";
    } else {
      e.target.innerHTML = `<img src='${circle}'>`; // Corrected usage of innerHTML
      newData[num] = "o";
      checkWin();
    }
    setCount(count + 1); // Move count is incremented here
    setData(newData); // Update the state with the new array
  };
  
  const checkWin=()=>{
    if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
      won(data[2]);
    }
    else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){
      won(data[5])
    }
    else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){
      won(data[8])
    }
    else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){
      won(data[6])
    }
    else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){
      won(data[7])
    }
    else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){
      won(data[8])
    }
    else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){
      won(data[8])
    }
    else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!==""){
      won(data[6])
    }
  }


  const won = (winner) => {
    setLock(() => {
      if (winner === 'x') {
        titleRef.current.innerHTML = "Congratulations x won";
      } else {
        titleRef.current.innerHTML = "Congratulations o won";
      }
      return true;
    });
  };
  

  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}>Tic-Tac-Toe game in React</h1>
      <p>{count}, {lock}</p>
      <div className="board">
        <div className="row1">
            <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
            <div className="boxes"  onClick={(e)=>{toggle(e,1)}}></div>
            <div className="boxes"  onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
            <div className="boxes"  onClick={(e)=>{toggle(e,3)}}></div>
            <div className="boxes"  onClick={(e)=>{toggle(e,4)}}></div>
            <div className="boxes"  onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
            <div className="boxes"  onClick={(e)=>{toggle(e,6)}}></div>
            <div className="boxes"  onClick={(e)=>{toggle(e,7)}}></div>
            <div className="boxes"  onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>

      <button className='reset' onClick={reset}>Reset</button>
    </div>
  );
}
