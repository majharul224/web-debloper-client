
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './component/Blogs/Blogs';
import CartInfo from './component/CartInfo/CartInfo';
import Course from './component/Course/Course';
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import Login from './component/Login/Login';
import Notfound from './component/Notfound/Notfound';
import Register from './component/Register/Register';


function App() {
  const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/course',
        loader: () => fetch('http://localhost:5000/course-categories'),
        element:<Course></Course>
      },
      {
        path:'/course/:id',
        loader:async({ params })=>{
          return fetch(`http://localhost:5000/course-categories/${params.id}`)
        },
        element:<CartInfo></CartInfo>
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
