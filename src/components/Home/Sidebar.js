import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {
    function HighLight(e){
        
    }
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: '40vh' , height:"92vh"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi pe-none me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
      <span className="fs-4">Welcom {props.name}</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
          Home
        </a>
      </li>
      <li>
        <Link to="/home/YourPost" className="nav-link link-body-emphasis">
          <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
          Your Posts
        </Link>
      </li>
      <li>
        <Link to="/home/SavedPost" className="nav-link link-body-emphasis ">
          <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#table" /></svg>
          Saved Posts
        </Link>
      </li>
      <li>
        <Link to="/home/LikedPost" className="nav-link link-body-emphasis">
          <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
          Liked Posts
        </Link>
      </li>
      <li>
        <Link to="/home/Reels" className="nav-link link-body-emphasis">
          <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#people-circle" /></svg>
          Reels
        </Link>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
        <strong>{props.name}</strong>
      </a>
      <ul className="dropdown-menu text-small shadow">
        
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" to="/">Sign out</Link></li>
      </ul>
    </div>
  </div>
  )
}
