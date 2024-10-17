import React, {useState} from 'react'

function EventHandler() {

    let [count, setCount] = useState(1)
    let [name, setName] = useState("Usman")

    let [result, setResult] = useState(0)
    let [student, setStudent] = useState({
        name: "Usman",
        age:20,
        address: "Mardan"
    })


    console.log(student)

    function demo(){
        setCount(count + 1)
        setName("Ali khan")

        console.log('Clicked ')
    }
    function writeMe(){
        setName("Ali khan")

        console.log("testing")
    }


    function calculate(){
        let x = 30
        let y = 20

        let z = x+ y
        setResult(z + count)

    }

  return (
    <div>
        <h2>Current state: {count}</h2>
        <h2>My name is: {name}</h2>
        <h2>Result is : {result}</h2>
        <h2>Student : {student.name}</h2>

        <input type='text' className='form-control mb-1' onKeyUp={writeMe} />
        <button className='btn btn-primary' onClick={demo}>Click Me</button>
        <button className='btn btn-danger ml-2' onClick={calculate}>calculate</button>
    </div>
  )
}

export default EventHandler