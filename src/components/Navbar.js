import React from 'react';
import { Link } from 'react-router-dom';
// import Changelog from './pages/Changelog';

function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content shadow-lg">
      {/* Burger Menu - For Mobile */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabindex="0" role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to="/" className="hover:bg-primary-focus rounded-md px-3 py-2">Home</Link></li>
            <li><Link to="/lessons" className="hover:bg-primary-focus rounded-md px-3 py-2">Lessons</Link></li>
            <li><Link to="/practice" className="hover:bg-primary-focus rounded-md px-3 py-2">Practice</Link></li>
          </ul>
        </div>
      </div>

      {/* Center Logo */}
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Learn Urdu</Link>
      </div>

      {/* Navbar End - Bell, Search, Profile */}
      <div className="navbar-end space-x-4">
        {/* Search Button */}
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Bell Notification with Changelog */}
        <div className="dropdown dropdown-end">
          <div tabindex="0" role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </div>
          <ul
            tabindex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {/* Recent Updates / Changelog */}
            {/* <li><a>New Feature: Lessons Progress Tracker</a></li>
            <li><a>Added: Profile page for users</a></li>
            <li><a>Improvement: UI/UX design update</a></li> */}
            {/* See More Link */}
            <li><Link to="/changelog" className="text-blue-600 hover:text-blue-800">See More</Link></li>
          </ul>
        </div>

        {/* Profile Picture with Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src="https://avatar.iran.liara.run/public/boy?username=Ash" />
            </div>
          </div>
          <ul
            tabindex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to="/profile" className="justify-between">Profile</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;