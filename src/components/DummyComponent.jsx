import React from 'react'

const DummyComponent = ({data, ...props}) => {
    // const data = props;
    console.log(data
      );
    return (
    <div>
        <h1>id:{data.id} </h1>
        <h1>name:{data.name}</h1>
        <h1>residence:{data.residence}</h1>
        <h1>age:{data.age}</h1>
    </div>
  )
}

export default DummyComponent