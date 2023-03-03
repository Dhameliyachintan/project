import React from 'react';
import { useSelector } from 'react-redux';

function Orderdata(props) {
  const data = useSelector(state => state.orderreducer.order)
  console.log(data);
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