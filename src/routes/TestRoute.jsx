import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import DummyComponent from "../components/DummyComponent";

const TestRoute = () => {
  // const [inputData, setInputData] = useState("")
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => calculate(count), [count]);
  // const calculation = calculate(count);
  const [arr, setArr] = useState([]);
  const inc = () => {
    setCount((prev) => prev + 1);
    console.log("inc function called");
  };
  const addProp = useCallback(() => {
    setArr((prev) => [...prev, "newArrValue"]);
  },[arr]);

  function calculate(num) {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  }

  // const mutableValue = useRef(0)
  // const input = useRef()
  // const focusInput = () => {
  //   input.current.focus();
  // }
  // useEffect(() => {
  //   mutableValue.current = mutableValue.current + 100
  // })

  return (
    <>
      {/* <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
      <h1>mutableValue:{mutableValue.current}</h1>
      

      <input type="text" ref={input} />
      <button onClick={focusInput}>focus input</button> */}
      <div>
        <button onClick={() => inc()}>+</button> Count: {count}
        <DummyComponent demoFn={addProp} />
        {JSON.stringify(arr, null)}
        <p>{JSON.stringify(calculation, null)}</p>
      </div>
    </>
  );
};

export default TestRoute;
