import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateorder } from "../redux/action/order.action";
const EditOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log("id", id);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("");

  const data = useSelector((data) => data.orderReducer.order);

  React.useEffect(() => {
    const values = data?.find((i) => i.id == id);
    setname(values?.name);
    setquantity(values?.quantity);
    setprice(values?.price);
  }, []);

  //   in useEffect first i.id is data's id and secound id is useParams id
  //   useEffect(() => {}, []);

  const onclickHandler = () => {
    const data = {
      id,
      name,
      price,
      quantity,
    };

    dispatch(updateorder(data));
    navigate("/orderdata");
  };


  const onchangeOnName = (event) => {
    setname(event.target.value)
  };
  const onchangeOnprice = (event) => {
    setprice(event.target.value);
  };
  const onchangeOnQuantity = (event) => {
    setquantity(event.target.value);
  };
  return (
    <div>
      <section id="book-a-table" className="book-a-table">
        <div className="container">
          <div className="section-title">
            <h2>
              Update a <span>Meal</span>
            </h2>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>
          <form>
            <div className="d-flex justify-content-center align-item-center">
              <div className="row">
                <div className="col-md-12 form-group">
                  <label>Enter Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    className="form-control"
                    onChange={onchangeOnName}
                  />
                </div>
                <br />
                <div className="col-md-12 form-group my-5">
                  <label>Enter Price</label>
                  <input
                    type="number"
                    name="price"
                    value={price}
                    className="form-control "
                    onChange={onchangeOnprice}
                  />
                </div>
                <br />
                <div className="col-md-12 form-group">
                  <label>Enter Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={quantity}
                    className="form-control"
                    onChange={onchangeOnQuantity}
                  />
                </div>
                <div className="text-center mt-5">
                  <button
                    type="button"
                    onClick={onclickHandler}
                    className="btn btn-warning"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EditOrder;
