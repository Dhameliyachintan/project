import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Users } from "../redux/action/user.action";

function User(props) {

    const [data, setData] = useState([])
    const userdata = useSelector((data) => data.userReducer.user);
    console.log(userdata);
    const dispatch = useDispatch()
    // console.log("DATA", data)

    useEffect(() => {
        dispatch({ type: 'FETCH_USERS' })
        // dispatch(Users())
    }, [])

    // const getData = async () => {
    //     const respons = await fetch('https://dummyjson.com/users')
    //     const res = await respons.json()
    //     setData(res.users)
    //     console.log(res);
    // }

    return (
        <div className="container">
            <div className="row d-flex pb-3">
                {userdata.map((i) => {
                    return (
                        <div className='col-md-3'>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={i.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p>{i.firstName}</p>
                                    <p>{i.lastName}</p>
                                    <p>{i.maidenName}</p>
                                    <p>{i.age}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>


        // <div>
        //     {
        //         userdata?.users.map((i) => {
        //             return (
        //                 <tr>
        //                     <td>{i.firstName}</td>
        //                     <td>{i.lastName}</td>
        //                     <td>{i.maidenName}</td>
        //                     <td>{i.age}</td>
        //                 </tr>
        //             )
        //         })
        //     }
        // </div>
    );
}

export default User;