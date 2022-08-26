import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useEffect } from 'react';

export const Form = ({getAllUsers, updateInfo, setUpdateInfo, handleCloseForm}) => {



    const defaultValues = {
        first_name: '',
        last_name: '',
        password: '',
        email: '',
        birthday: '',
    }

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])
    
    const createUsers = data =>{
        const URL = 'https://users-crud1.herokuapp.com/users/'

       axios.post(URL, data)
       .then(res => {console.log(res.data)
        getAllUsers()}) 
       .catch(err => console.log(err))
       
       
    }
    const {register, handleSubmit, reset} = useForm()

    const updateUsers = data => {
        const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
        axios.patch(URL, data)
        .then(res => {console.log(res.data)
            getAllUsers()})
        .catch(err => console.log(err))

    }

    const submit = data => {
        if(updateInfo){
            // Update users
            updateUsers(data)
            setUpdateInfo()
        }else {
            createUsers(data)
        }
        reset(defaultValues)
        handleCloseForm()
    }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <button onClick={handleCloseForm} className='btn-x'>X</button>
        <h2 className='form__title'>{updateInfo ? 'Update User Information': 'Create new User'}</h2>

        <ul className='form__container'>
            <li className='form__group'>
                <input className='form__input' {...register("first_name")} type="text" id='name' placeholder=' '/>
                <label className='for__label' htmlFor="name">Name</label>
                <span className='form__line'></span>
            </li>
    
            <li className='form__group'>
                <input className='form__input'{...register("last_name")} type="text" id="lastName" placeholder=' '/>
                <label className='for__label' htmlFor="lastName">Last Name</label>
                <span className='form__line'></span>
            </li>

            <li className='form__group'>
                <input className='form__input' {...register("password")} type="password" id='pass' placeholder=' ' />
                <label className='for__label' htmlFor="pass">Password</label>
                <span className='form__line'></span>
            </li>

            <li className='form__group'>
                <input className='form__input' {...register("email")} type="email" id='email'  placeholder=' '/>
                <label className='for__label' htmlFor="email">Email</label>
                <span className='form__line'></span>
            </li>

            <li className='form__group'>
                <input className='form__input' {...register("birthday")} type="date" id='birdthday' placeholder=' '/>
                <label className='for__label' htmlFor="birdthday">Birdthday</label>
                <span className='form__line'></span>
            </li>
        </ul>
        
        <button className='form__btn'>{updateInfo ? 'Update': 'Create'}</button>
    </form>
  )
}
