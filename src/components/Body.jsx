import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Deteails from './Deteails';


function Body() {
    



    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        },
        {
            path:'/movie/:movieId',
            element: <Deteails />
        }
    ]);

  

    return (
        <div>
            <RouterProvider router={appRouter} />


        </div>
    )
}

export default Body