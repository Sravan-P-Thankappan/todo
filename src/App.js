import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  let [toDos, setTodos] = useState([])
  let [toDo, setTodo] = useState('')

  let reset = ()=>{
    setTodo('')
  }
  return (
    <div className="app">

      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2> </h2>
      </div>

      <div className="input">
        <input type="text" value={toDo} onChange={(event) => setTodo(event.target.value)} placeholder="🖊️ Add task..." />
        <i onClick={
          () => {
            if (toDo==='') {
               alert('Field is Empty')
            }
            else{
              setTodos(  [...toDos, { id: Date.now(),date:new Date(), text: toDo, status: false }])
              reset()
            }       
          }
          } 
          className="fas fa-plus"></i>
      </div>
      

      {   
      
        toDos.map((element, index) => 
        { 
          return (
            <div className="todos">
              <div className="todo">
                <div className="left">
                  <input type="checkbox" value={element.status} onChange={(e) => {

                    setTodos(toDos.filter((obj) => {

                      if (obj.id === element.id) {
                        obj.status = e.target.checked
                      }

                      return obj

                    }))

                  }} />

              
              <p>
                  <span style={{ marginLeft: '0.5rem' }}>{index + 1}</span><span style={{ marginLeft: '0.5rem' }}>{element.text}</span>
                  <span style={{ marginLeft: '9rem' }}>{element.date.toLocaleDateString()}</span>
                  </p>

                </div>

                <div className="right">
                  <i className="fas fa-times" onClick={

                    () => { 
                      console.log(toDos);
                      let confirm = window.confirm('Do you want to  delete?')
                      if(confirm) {
                         
                        let newTodo = [...toDos]
                        newTodo.splice(index,1)

                        setTodos(newTodo)

                      } 
                 
                    }

                  }>

                  </i>
                </div>

              </div>
            </div>
          )

        })
      }


      {
        toDos.map((element) => {
          if (element.status) {
            let completedDate= new Date()
            return (
              <div style={{ marginTop: '2rem' }} className="todos" >
                <h2>Completed Task</h2>
                <div className="todo">
                  <div className="left">
                    <p>{element.text} <span style={{marginLeft:'13rem'}}>{completedDate.toLocaleDateString()}</span></p>
                  </div>

                </div>
              </div>)

          }
          return null

        })

      }

    </div>
  );
}

export default App;
