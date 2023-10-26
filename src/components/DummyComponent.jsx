import React, { memo } from 'react'

const DummyComponent = ({ arr, demoFn, ...props}) => {
  console.log('child render')
    return (
    <div>
        <button onClick={() => demoFn()}>add prop</button>
        <h1>{ JSON.stringify(arr, null) }</h1>
    </div>
  )
}

export default memo(DummyComponent)