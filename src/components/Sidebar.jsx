import React from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";

function Sidebar({selectedTab, setSelectedTab}) {
  return (
    <div className="col-md-3 col-lg-2 p-0 text-bg-dark" style={{ width: '280px' }}>
    <a href="javascript.void(0)" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={() => setSelectedTab('')}>
        <NavLink to='/' className='nav-link text-white' aria-current="page"> 
          Post
        </NavLink>
      </li>
      <li>
      <NavLink to='/create-post' className={  ({ isActive }) =>  isActive ? "nav-link text-white active" : "nav-link text-white" }> 
          Create Post
        </NavLink>
      </li>
       
    </ul>
    <hr />
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  );
}

export default Sidebar;
