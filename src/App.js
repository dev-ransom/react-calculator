import React, { useState } from 'react'

const App = () => {
  return (
    <div>
      <TipCalculator />
    </div>
  )
}

export default App

function TipCalculator() {
  const [bill, setBill] = useState('')
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)
  const tip = bill * ((percentage1 + percentage2) / 2 / 100)
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        <label>How did you like the service?</label>
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        <label>How did your friend like the service?</label>
      </SelectPercentage>

      {bill > 0 &&
        <>
          <Output bill={bill} tip={tip} />
          <Reset />
        </>
      }
    </div>
  )
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  )
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      {children}
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  )
}
function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay {bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  )
}
function Reset() {
  return <button>Reset</button>
}
