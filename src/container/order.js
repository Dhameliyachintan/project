import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getorder } from '../redux/action/order.action';

function Order(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handlesubmit = (event) => {
        event.preventDefault();

        const data = {
            id: new Date().getTime(),
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value,
        }

        console.log('DATA', data);
        dispatch(getorder(data))
        navigate('/Orderdata')
    }

    return (
        <div className='container'>
            <form onSubmit={handlesubmit}>
                <div>
                    <input type="text" name='name' className="form-control mb-3" placeholder="name" />
                </div>
                <div>
                    <input type="email" name='email' className="form-control mb-3" placeholder="email" />
                </div>
                <div>
                    <input type="phone" name='phone' className="form-control mb-3" placeholder="phone" />
                </div>
                <div>
                    <input type="quantity" name='quantity' className="form-control mb-3" placeholder='quantity' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Order;