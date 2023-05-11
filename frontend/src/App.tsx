import React from 'react';
import './App.css';
// import Login from './Pages/Login';
import "./tailwind.css"
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-red-900">Maindful Movement</h2>
      <div className='border-1'>Hello</div>
      <ul className="divide-y divide-gray-200">
      {/* {people.map((person) => ( */}
        <li  className="py-4 flex">
          {/* <img className="h-10 w-10 rounded-full" src=image alt="" /> */}
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">name</p>
            <p className="text-sm text-gray-500">email</p>
          </div>
        </li>
      {/* ))} */}
    </ul>
    <Login/>
    </div>
  );
}

export default App;
