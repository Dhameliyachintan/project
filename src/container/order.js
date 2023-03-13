import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addorder } from "../redux/action/order.action";
const BookMeal = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [quantity, setquantity] = useState("");

    const onclickHandler = () => {
        const data = {
            id: new Date().getTime(),
            name,
            price,
            quantity,
        };

        console.info(data);

        navigator("/orderdata");
        dispatch(addorder(data));
    };

    const onchangeOnName = (event) => {
        setname(event.target.value);
    };
    const onchangeOnprice = (event) => {
        setprice(event.target.value);
    };
    const onchangeOnQuantity = (event) => {
        setquantity(event.target.value);
    };
    return (
        <div>
            {/* ======= Book A Table Section ======= */}
            <section id="book-a-table" className="book-a-table">
                <div className="container">x
                    <div className="section-title">
                        <h2>
                            Book a <span>Meal</span>
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
            {/* End Book A Table Section */}
        </div>
    );
};

export default BookMeal;