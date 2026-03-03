import React from 'react'
import { useDispatch } from 'react-redux'
import authSetvice from '../../appwrite/config1'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authSetvice.logout().then(() => {
            dispatch(logout())
        }).catch((error) => {
            console.error("Logout failed:", error)
        })
    }
    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={handleLogout}
        >Logout</button>
    )
}

export default LogoutBtn
