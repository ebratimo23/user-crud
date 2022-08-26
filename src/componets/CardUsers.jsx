import React from 'react'
import axios from 'axios'

const CardUsers = ({user, getAllUsers, setUpdateInfo, handleOpenForm}) => {

    const deleteUsers = () => {
        const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
        axios.delete(URL)
        .then(res => {console.log(res.data)
        getAllUsers()})
        .catch(err => console.log(err))
    }

    const handleUpdateClick = () => {
        setUpdateInfo(user)
        handleOpenForm()
    }
  return (
    <article className='user'>
        <span className='animate'></span>
        <span className='animate01'></span>
        <span className='animate02'></span>
        <span className='animate03'></span>
        <h2>{user.first_name} {user.last_name}</h2>
        <ul>
            <li><span className='sp1'>Email: </span>{user.email}</li>
            <li><span className='sp1'>Birthday: </span>{user.birthday}</li>
        </ul>
        <div className='card__btn'>
            <button onClick={deleteUsers} className='delete'>delete</button>
            <button onClick={handleUpdateClick} className='edit'>edit</button>
        </div>
    </article>
  )
}

export default CardUsers