import React from 'react'
import MainLayout from '../layout/MainLayout'
import Login from '../pages/Login'
import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../context'

export default function MainRouter() {

    const { user, token } = useContext(DataContext)

    return (
        <>
            {user?._id ? <MainLayout /> : <Login />}
            {/* {<MainLayout /> } */}
        </>
    )
}
