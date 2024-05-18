import React, { useReducer, useState } from 'react';
import { Button } from 'react-bootstrap';
function App() {
  // Lab
  const [select, setSelect] = useState([]);
  const [inputs, setInputs] = useState({});
  // Koll
  const [select2, setSelect2] = useState([]);
  const [inputs2, setInputs2] = useState({});
  // serbest is , qayib
  const [state, dispatch] = useReducer(reducer, { serbest: "", qayib: "" })

  function reducer(state, action) {
    if (action.type == 'serbest') {
      return ({ ...state, serbest: action.value })
    }
    if (action.type == "qayib") {
      return ({ ...state, qayib: action.value })
    }
  }

  const [total, setTotal] = useState('')

  function handleSelect(e) {
    const newArr = Array(+e.target.value).fill("");
    setSelect(newArr)
  }
  function handleInput(e) {
    const { id, value } = e.target
    setInputs(item => ({ ...item, [id]: value }))
  }
  function handleSelect2(e) {
    const newArr = Array(+e.target.value).fill("");
    setSelect2(newArr)
  }
  function handleInput2(e) {
    const { id, value } = e.target

    setInputs2(item => ({ ...item, [id]: value }))
  }
  function handleClick() {
    let sum1 = Object.values(inputs).reduce((acc, item) => acc += +item, 0)
    let sum2 = Object.values(inputs2).reduce((acc, item) => acc += +item, 0)
    let subSum1 = sum1 / Object.keys(inputs).length
    let subSum2 = sum2 / Object.keys(inputs2).length
    setTotal(((((subSum1 + subSum2) / 2) * 3) + +state.serbest) + (10 - (state.qayib * 0.3)))
  }
  let arr = []
  for (let i = 0; i <= 10; i++) {
    arr.push(i)
  }
  return (
    <div className='d-flex m-auto text-center flex-column justify-content-center p-5 align-items-center '>
      <div className="">
        <h2 c>BDU Bal Hesablama</h2>
        <p className=''>Laboratoriya sayı</p>
        <select className='rounded-2 px-2' onChange={handleSelect}>
          {arr.map((item, index) => {
            return (
              <option key={index}>{item}</option>
            )
          })}
        </select>
        <br />
        {select.map((item, index) => (
          <div key={index} className='d-flex justify-content-center '>
            <input className='w-25 border-0 border-bottom mb-2 bg-transparent border-dark' type="number" id={`input${index}`} onChange={handleInput} />
          </div>
        ))}
        <div className="">
          <p className=''>Kollekvium sayı</p>
          <select className='rounded-2 px-2' onChange={handleSelect2}>
            {arr.map((item, index) => {
              return (
                <option key={index}>{item}</option>
              )
            })}
          </select>
          <br />
          {select2.map((item, index) => (
            <div key={index} className='d-flex justify-content-center'>
              <input className='w-25 border-0 border-bottom mb-2 bg-transparent border-dark' type="number" id={`input${index}`} onChange={handleInput2} />
            </div>
          ))}
          <div className="my-2">
            <span className='mx-2'>Sərbəst iş balı</span>
            <select onChange={(e) => { dispatch({ type: "serbest", value: e.target.value }) }}>
              {arr.map(item => <option key={item}>{item}</option>)}
            </select>
            <div className='my-2'>
              <span className='mx-2'>Qayıb sayı</span>
              <select onChange={(e) => { dispatch({ type: "qayib", value: e.target.value }) }}>
                {arr.map(item => <option key={item}>{item}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
      <Button variant='dark' className='px-5 py-2' onClick={handleClick}>OK</Button>
      <h1 className="mt-4 text-2xl font-bold">
        Sizin balınız: {total > 45 ? `${total} 😁` : total < 34 ? `${total} 😒` : `${total} 😊`}
      </h1>
    </div>

  );
}

export default App;
