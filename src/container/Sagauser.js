import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Saga } from '../redux/action/Saga.action';

function Sagauser(props) {
    const Sagareducer = useSelector((data) => data.Sagareducer.data);
    console.log("HII",Sagareducer);

    const dispatch = useDispatch()

    useEffect(() => {
        console.log();
        // dispatch({ type: 'FETCH_USERS' })
        // dispatch(Users())
        dispatch(Saga())
    }, [])

    return (
        <div className="container">
            <div className="row d-flex pb-3">
                {Sagareducer.map((i) => {
                    return (
                        <div className='col-md-3'>
                            <div className="card" style={{ width: '18rem' }}>
                                {/* <img src={i.image} className="card-img-top" alt="..." /> */}
                                <div className="card-body">
                                    <p>{i.name}</p>
                                    <p>{i.username}</p>
                                    <p>{i.email}</p>
                                    <p>{i.phone}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Sagauser;