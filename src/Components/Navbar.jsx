import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
       <nav>
      <ul>
        <li>
          <Link to="/post">Post Data</Link>
        </li>
        <li>
          <Link to="/retrive">Retrieve Data</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}