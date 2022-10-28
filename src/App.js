
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './component/Blogs/Blogs';
import CartInfo from './component/CartInfo/CartInfo';
import Course from './component/Course/Course';
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import Login from './component/Login/Login';
import Notfound from './component/Notfound/Notfound';
import Privat from './component/Privat/Privat';
import Register from './component/Register/Register';


function App() {
  const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader: () => fetch('https://wd-learning-server.vercel.app/course-categories'),
        element:<Course></Course>
      },
      // {
      //   path:'/home',
      //   element:<Home></Home>
      // },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/course',
        loader: () => fetch('https://wd-learning-server.vercel.app/course-categories'),
        element:<Course></Course>
      },
      {
        path:'/course/:id',
        loader:async({ params })=>{
          return fetch(`https://wd-learning-server.vercel.app/course-categories/${params.id}`)
        },
        element:<Privat><CartInfo></CartInfo></Privat>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
     
    ]
  }  ,

  {
    path:'*',
    element:<Notfound></Notfound>
  }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
