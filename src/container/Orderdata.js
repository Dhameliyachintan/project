import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteorder } from '../redux/action/order.action';

function Orderdata() {
  const data = useSelector((data) => data.orderReducer.order)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handledelete = (id) => {
    dispatch(deleteorder(id))
  }

  const handleedit = (data) => {
    navigate(`/orderedit/${data}`)
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
              <th>price</th>
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
                  <td>price:-{i.price}</td>
                  <td>
                    <button onClick={() => handledelete(i?.id)}>delete</button>
                  </td>
                  <td>
                    <button onClick={() => handleedit(i.id)}>edit</button>
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