import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
import { Context } from '../../context/theamcontext';

function Header(props) {
    const theam = useContext(Context)
    console.log("theam", theam);
    return (
        <div className='navbar-expand-lg'>
            <nav className={theam}>
                {/* <button className='btn btn-primary' onClick={props.onclickHandler}>change theam</button> */}
                <div  className={theam} >
                    <h1 className="navbar-brand" href="#">Navbar</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link exact to={"/Orderdata"} className="nav-link px-2">Orderdata</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link exact to={"/Form"} className="nav-link">Form</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link exact to={"/Data"} className="nav-link">Data</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link exact to={"/Appoinment"} className="nav-link">Appoinment</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link exact to="/order" className="nav-link px-2">order</Link>
                        </li>
                        <li className="nav-item">
                            <Link exact to="/UseReducer" className="nav-link px-2">UseReducer</Link>
                        </li>
                        <li className="nav-item">
                            <Link exact to="/Usememo" className="nav-link px-2">Usememo</Link>
                        </li>
                        <li className="nav-item">
                            <Link exact to="/User" className="nav-link px-2">User</Link>
                        </li>
                        <li className="nav-item">
                            <Link exact to="/Sagauser" className="nav-link px-2">Sagauser</Link>
                        </li>
                        <li className="nav-item">
                            <Link exact to="/Forms" className="nav-link px-2">Forms</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
}

export default Header;

