import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     // errorElement:<Error></Error>
//   },
//   {
//     path: '/about',
//     element:<About></About>
//   },
//   {
//     path: '/contact',
//     element:<Contact></Contact>
//   }

// ]);
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/friend/:friendID',
        element:<FriendDetail></FriendDetail>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
