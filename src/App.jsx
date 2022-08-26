import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import CardUsers from './componets/CardUsers'
import { Form } from './componets/Form'

function App() {
 const [users, setUsers] = useState()
 const [updateInfo, setUpdateInfo] = useState()
 const [formOpen, setFormOpen] = useState(false)

 const getAllUsers = () =>{
   const URL = 'https://users-crud1.herokuapp.com/users/'
   axios.get(URL)
   .then(res => setUsers(res.data))
   .catch(err => console.log(err))
 }

 useEffect(() => {
  getAllUsers()
 }, [])

 const handleOpenForm = () => setFormOpen(true)
 const handleCloseForm = () => setFormOpen(false)

  return (
    <div className="App">
      <div className={formOpen ? 'form__conta': 'form_none'}>
        <Form getAllUsers={getAllUsers}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        handleCloseForm={handleCloseForm}/>
      </div>

      <div className='card__container'>
        <div className='title__app'>
          <h2>Create Users CRUDS</h2>
          <button onClick={handleOpenForm} className="btn-open">Open Form</button>
        </div>

        <div className='card__users'>
          {
            users?.map(user => (
              <CardUsers 
              key={user.id}
              user={user}
              getAllUsers={getAllUsers}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}/>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default App
