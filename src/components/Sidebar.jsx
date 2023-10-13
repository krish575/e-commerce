import React, { useState } from "react";
import "../styles/Sidebar.css";
const Sidebar = () => {
  const obj = {
    a: 1,
    b: 'abc',
    c: 'ddddddd',
    ef: true
}
  const [value, setValue] = useState(0)
  const [object, setObject] = useState(obj)




  const functionOne = () =>{
    setValue((previousValue) => previousValue + 1)
  }
  const functionTwo = () =>{
    setValue((previousValue) => previousValue - 1)
  }


  const close = (elementId)=> {
      const drawer = document.getElementById(`${elementId}`)
      drawer.style.transform = 'translateX(100%)'
      drawer.classList.add('transition');
  }
  

const addKey = (incomingObj) => {
  setObject((previousObj)=> ({...previousObj, ...incomingObj}))
}
  return (
    <div id="sidebar_wrappper" className="sidebar_wrappper">
      <div id="sidebar" className="SideBar">
        <button id="close_btn" className="Siderbar_close_btn" onClick={()=> close('sidebar_wrappper')}>
          <svg
            fill="#000000"
            width="30px"
            height="30px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <button onClick={() => functionOne()}>
          increment
        </button>
        <h2>
          {value}
        </h2>
        <button onClick={() => functionTwo()}>
          increment
        </button>

<button onClick={() => addKey({gh: 'abbbbbb'})}>add key</button>
{JSON.stringify(object)}
        <p>Krish</p>
        <h1>student</h1>
      </div>
    </div>
  );
};

export default Sidebar;
