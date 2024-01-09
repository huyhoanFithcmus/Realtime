import React from 'react'

export default function CountDownPage() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <div>
        <h1>Vãi lồn anh em ơi</h1>
      </div>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>Ấn count càng nhiều thì có càng nhiều kiến vào máy bạn</p>
      </div>
    </>
  )
}
