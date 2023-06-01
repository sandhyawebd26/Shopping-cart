import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

function Checkout() {
  const { items, cartTotal } = useCart();
  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("user_token");

  const navigate = useNavigate();

  const handlePayment = async (value) => {
    const res = await axios.post(
      "http://localhost:4500/api/create-checkout-session",
      
      {
        userId: userId,
        amount: cartTotal,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
   

    if (res.data.url) {
      window.location.href = res.data.url;
    }
  };

  const [country, setCountry] = useState([
    "america",
    "australia",
    "india",
    "china",
    "bangladesh",
    "argentina",
  ]);

  const [data, setData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    state: "",
    pin: "",
    email: "",
    phone: "",
    orderNotes: "",
    coupenCode: "",
    cartId: "",
  });

  const handleCountryChange = (event) => {
    setData({ ...data, country: event.target.value });
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4500/api/checkout", {
        data,
        items: items,
      });
      navigate("/Thankyou");
      alert("Success");
    } catch (err) {
      console.log(err);
      alert("Service error");
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">Contact</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="border p-4 rounded" role="alert">
                  Returning customer? <a href="#">Click here</a> to login
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-5 mb-md-0">
                <h2 className="h3 mb-3 text-black">Billing Details</h2>
                <div className="p-3 p-lg-5 border">
                  <div className="form-group">
                    <label htmlFor="c_country" className="text-black">
                      Country <span className="text-danger">*</span>
                    </label>
                    <select
                      id="c_country"
                      value={data.country}
                      onChange={handleCountryChange}
                      className="form-control"
                    >
                      <option value={1}>Select a country</option>
                      {country.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_fname"
                        name="firstName" // Updated name attribute
                        value={data.firstName}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_lname" className="text-black">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_lname"
                        name="lastName" // Updated name attribute
                        value={data.lastName}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_companyname" className="text-black">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_companyname"
                        name="companyName"
                        value={data.companyName}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_address" className="text-black">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_address"
                        name="address"
                        placeholder="Street address"
                        value={data.address}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_state_country" className="text-black">
                        State<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_state_country"
                        name="state"
                        value={data.state}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_postal_zip" className="text-black">
                        Posta / Zip <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_postal_zip"
                        name="pin"
                        value={data.pin}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-5">
                    <div className="col-md-6">
                      <label htmlFor="c_email_address" className="text-black">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_email_address"
                        name="email"
                        value={data.email}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_phone" className="text-black">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={data.phone}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="c_create_account"
                      className="text-black"
                      data-toggle="collapse"
                      href="#create_an_account"
                      role="button"
                      aria-expanded="false"
                      aria-controls="create_an_account"
                    >
                      <input
                        type="checkbox"
                        defaultValue={1}
                        id="c_create_account"
                      />
                      Create an account?
                    </label>
                    <div className="collapse" id="create_an_account">
                      <div className="py-2">
                        <p className="mb-3">
                          Create an account by entering the information below.
                          If you are a returning customer please login at the
                          top of the page.
                        </p>
                        <div className="form-group">
                          <label
                            htmlFor="c_account_password"
                            className="text-black"
                          >
                            Account Password
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="c_account_password"
                            name="c_account_password"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="form-group">
                    <label htmlFor="c_order_notes" className="text-black">
                      Order Notes
                    </label>
                    <textarea
                      name="c_order_notes"
                      id="c_order_notes"
                      cols={30}
                      rows={5}
                      className="form-control"
                      placeholder="Write your notes here..."
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                    <div className="p-3 p-lg-5 border">
                      <label htmlFor="c_code" className="text-black mb-3">
                        Enter your coupon code if you have one
                      </label>
                      <div className="input-group w-75">
                        <input
                          type="text"
                          className="form-control"
                          id="c_code"
                          placeholder="Coupon Code"
                          aria-label="Coupon Code"
                          aria-describedby="button-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary btn-sm"
                            type="button"
                            id="button-addon2"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h2 className="h3 mb-3 text-black">Your Order</h2>
                    <div className="p-3 p-lg-5 border">
                      <table className="table site-block-order-table mb-5">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {items.map((item, index) => (
                            <tr key={item.id}>
                              <td>
                                {item.productName}
                                <strong className="mx-2">x</strong>
                                {item.quantity}
                              </td>
                              <td>${item.quantity * item.price}</td>
                            </tr>
                          ))}

                          <tr>
                            <td className="text-black font-weight-bold">
                              <strong>Cart Subtotal</strong>
                            </td>
                            <td className="text-black">
                              $
                              {items.reduce(
                                (total, item) =>
                                  total + item.price * item.quantity,
                                0
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td className="text-black font-weight-bold">
                              <strong>Order Total</strong>
                            </td>
                            <td className="text-black font-weight-bold">
                              <strong>
                                $
                                {items.reduce(
                                  (total, item) =>
                                    total + item.price * item.quantity,
                                  0
                                )}
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="border p-3 mb-3">
                        <h3 className="h6 mb-0">
                          <button
                            className="btn btn-success"
                            data-toggle="collapse"
                            type="submit"
                            onClick={handleSubmit}
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapsebank"
                          >
                            Cash on delivery
                          </button>
                        </h3>
                        <div className="collapse" id="collapsebank">
                          <div className="py-2">
                            <p className="mb-0">
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order won’t be shipped until the funds have
                              cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border p-3 mb-5">
                        <h3 className="h6 mb-0">
                          <a
                            className="d-block"
                            data-toggle="collapse"
                            href="#collapsepaypal"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapsepaypal"
                          >
                            Stripe
                          </a>
                        </h3>
                        <div className="collapse" id="collapsepaypal">
                          <div className="py-2">
                            <p className="mb-0">
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order won’t be shipped until the funds have
                              cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg py-3 btn-block"
                          onClick={handlePayment}                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
