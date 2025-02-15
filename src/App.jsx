import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState();

  useEffect(()=> {
    axios.get('https://fakestoreapi.com/products').then(res => setData(res.data))
  }, [])

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const handleToggle = (e) => {
    dispatch(increment())
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <>
      <div className="bg-slate-700">
        <div className=" navbar fixed z-10 max-w-[1580px]  border-b">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl bg-white">product</a>
          </div>
          <label  onChange={handleToggle}  className="swap swap-rotate text-white">
              <input type="checkbox" className="theme-controller" value="synthwave" />
              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
              <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            </label>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </div>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 skeleton rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="navbar flex justify-start pr-[30px] mt-[67px]  text-neutral-content">
            <div className="join  mt-5">
              <div>
                <div>
                  <input className="input input-bordered text-black join-item" placeholder="Search"/>
                </div>
              </div>
              <select className="select text-black   select-bordered join-item">
                <option disabled selected>Filter</option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
              </select>
              <div className="indicator">
                <span className="indicator-item badge badge-secondary">new</span> 
                <button className="btn join-item">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[20px] grid grid-cols-2 gap-[50px]">
          {data == null ? 
          <div className='mt-[120px] items-center m-auto'>
            <span className="loading loading-dots w-[60px]"></span>
          </div>
          :
          data?.map(({category, description, id, image, price, rating: rate, title})=> (
            <div key={id} className="card w-96 bg-base-100 m-auto h-96 shadow-xl">
              <figure><img className='w-[50px] h-[50px] ' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <p>{description}</p>
                    <div className="card-actions items-center justify-between">
                      <p>{price}$</p>
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        ))
          }
        </div>
      </div>
    </>
  )
}

export default App
