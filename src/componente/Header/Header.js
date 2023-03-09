import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
import { Context } from '../../context/theamcontext';

function Header(props) {
    const theam = useContext(Context)
    console.log("theam", theam);
    return (
        <div>
            <nav className={theam} >
                {/* <button className='btn btn-primary' onClick={props.onclickHandler}>change theam</button> */}
                <div  className={theam} >
                    <h1 className="navbar-brand" href="#">Navbar</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link exact to={"/Orderdata"} className="nav-link">Orderdata</Link>
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
                            <Link exact to="/order" className="nav-link">order</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
}

export default Header;

