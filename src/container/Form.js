import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getorder } from '../redux/action/order.action';

function Form(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handlesubmit = (event) => {
        event.preventDefault();

        const data = {
            id: new Date().getTime(),
            username: event.target.username.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            quentity: event.target.quentity.value,
        }

        if (localStorage.getItem('formdata')) {
            const fdata = JSON.parse(localStorage.getItem('formdata'))
            console.log("fdata",fdata)
            fdata.push(data)
            localStorage.setItem('formdata', JSON.stringify(fdata))
        }
        else {
            const Array = JSON.stringify([data])
            localStorage.setItem('formdata', Array)
        }

        console.log('DATA', data)
        navigate('/Appoinment')
    }

    return (
        <div className='container'>
            <form onSubmit={handlesubmit}>
                <div>
                    <input type="text" name='username' className="form-control mb-3" placeholder="username" />
                </div>
                <div>
                    <input type="email" name='email' className="form-control mb-3" placeholder="email" />
                </div>
                <div>
                    <input type="phone" name='phone' className="form-control mb-3" placeholder="phone" />
                </div>
                <div>
                    <input type="quentity" name='quentity' className="form-control mb-3" placeholder='quentity' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Form;