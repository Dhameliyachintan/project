import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Orderedit = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("");
  const [email, setEmail] = useState("");


  React.useEffect(() => {
    getData()
  }, []);


  const getData = async() => {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/get/${id}`,
    });

    console.log(res , "res")
    setname(res.name)
    setprice(res.data.price)
    setquantity(res.data.quantity)
    setEmail(res.data.email)

  }
  //   in useEffect first i.id is data's id and secound id is useParams id
  //   useEffect(() => {}, []);

  const onclickHandler = async () => {
    const data = {
      id,
      name,
      email,
      price,
      quantity,
    };

    await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BASE_URL}/get/${id}`,
      data: data
    });

    // console.log(response.data);
    // dispatch(updateorder(data));
    navigate("/Orderdata");
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
  const onchangeOnemail = (event) => {
    setEmail(event.target.value);
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
                <div className="col-md-12 form-group">
                  <label>Enter email</label>
                  <input
                    type="text"
                    name="quantity"
                    value={email}
                    className="form-control"
                    onChange={onchangeOnemail}
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

export default Orderedit;

