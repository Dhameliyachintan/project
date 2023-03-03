import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteorder } from '../redux/action/order.action';

function Orderdata(props) {
  const data = useSelector((data) => data.orderreducer.order)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handledelete = (id) => {
    dispatch(deleteorder(id))
  }

  const handleedit = (id) => {
    // dispatch(deleteorder(id))
    navigate("/order", id)
  }

  return (
    <>
      <div className="container">
        <table className='table table-bordered table-hover' >
          <thead style={{ textAlign: "center", textTransform: 'uppercase', }}>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              <th>quantity</th>
            </tr>
          </thead>
          {
            data.map((i, index) => {
              return (
                <tr className='text-center'>
                  <td>{i.name}</td>
                  <td>email{i.email}</td>
                  <td>phone{i.phone}</td>
                  <td>Quantity:-{i.quantity}</td>
                  <td>
                    <button onClick={() => handledelete(i?.id)}>delete</button>
                  </td>
                  <td>
                    <button onClick={() => handleedit(i?.id)}>edit</button>
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </>
  );
}

export default Orderdata;