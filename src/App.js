
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
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
        path:'/course',
        element:<Course></Course>
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
