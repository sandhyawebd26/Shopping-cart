import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function FindProductByCategory() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [pro, setPro] = useState([]);

  useEffect(() => {
    const FetchProByCat = async () => {
      try {
        const res = await axios.get(`http://localhost:4500/api/getcat/${id}`);
        console.log("DATAA=>", res.data);
        setPro(res.data.category.productId);
      } catch (err) {
        console.log("Error fetching Products", err);
      }
    };
    FetchProByCat();
    fetchCats();
  }, [id]);
//   console.log(pro);

  const fetchCats = async () => {
    try {
      const res = await axios.get("http://localhost:4500/api/get-category");
      console.log("first", res.data.categories);
      setCategories(res.data.categories);
    } catch (err) {
      console.log("Error fetching categories", err);
    }
  };
  return (
    <>
      <Header />
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
              <strong className="text-black">Shop</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-9 order-2">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="float-md-left mb-4">
                    <h2 className="text-black h5">Shop All</h2>
                  </div>
                  <div className="d-flex">
                    <div className="dropdown mr-1 ml-md-auto">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        id="dropdownMenuOffset"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Latest
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuOffset"
                      >
                        {categories.map((category) => (
                          <NavLink
                            className="dropdown-item"
                            key={categories.id}
                            to={`/Shop/productbycat/${category._id}`}
                          >
                            {category.category}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        id="dropdownMenuReference"
                        data-toggle="dropdown"
                      >
                        Reference
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuReference"
                      >
                        <a className="dropdown-item" href="#">
                          Relevance
                        </a>
                        <a className="dropdown-item" href="#">
                          Name, A to Z
                        </a>
                        <a className="dropdown-item" href="#">
                          Name, Z to A
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Price, low to high
                        </a>
                        <a className="dropdown-item" href="#">
                          Price, high to low
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                {pro?.length &&
                  pro?.map((d, index) => {
                    // console.log("D=>", d);
                    return (
                      <div
                        className="col-sm-6 col-lg-4 mb-4"
                        data-aos="fade-up"
                        key={index}
                        onClick={() => navigate(`/ShopSingle/${d._id}`)}
                      >
                        <div className="block-4 text-center border">
                          <figure className="block-4-image">
                            <Link to="/Shopsingle">
                              <img
                                src={`http://localhost:4500/api/v1/uploads/${d.image}`}
                                alt="Image placeholder"
                                className="img-fluid"
                              />
                            </Link>
                          </figure>
                          <div className="block-4-text p-4">
                            <h3>
                              <Link to="/Shopsingle">{d?.productName}</Link>
                            </h3>
                            <p className="mb-0">{d.description}</p>
                            <p className="text-primary font-weight-bold">
                              ${d.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="row" data-aos="fade-up">
                <div className="col-md-12 text-center">
                  <div className="site-block-27">
                    <ul>
                      <li>
                        <a href="#">&lt;</a>
                      </li>
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#">&gt;</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 order-1 mb-5 mb-md-0">
              <div className="border p-4 rounded mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">
                  Categories
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1">
                    <a href="#" className="d-flex">
                      <span>Men</span>
                      <span className="text-black ml-auto">
                        ( {categories[0]?.productId?.length})
                      </span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="d-flex">
                      <span>Women</span>
                      <span className="text-black ml-auto">
                        ({categories[1]?.productId?.length})
                      </span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="d-flex">
                      <span>Children</span>
                      <span className="text-black ml-auto">
                        ({categories[2]?.productId?.length})
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="border p-4 rounded mb-4">
                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Filter by Price
                  </h3>
                  <div id="slider-range" className="border-primary" />
                  <input
                    type="text"
                    name="text"
                    id="amount"
                    className="form-control border-0 pl-0 bg-white"
                    disabled=""
                  />
                </div>
                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Size
                  </h3>
                  <label htmlFor="s_sm" className="d-flex">
                    <input type="checkbox" id="s_sm" className="mr-2 mt-1" />
                    <span className="text-black">Small (2,319)</span>
                  </label>
                  <label htmlFor="s_md" className="d-flex">
                    <input type="checkbox" id="s_md" className="mr-2 mt-1" />
                    <span className="text-black">Medium (1,282)</span>
                  </label>
                  <label htmlFor="s_lg" className="d-flex">
                    <input type="checkbox" id="s_lg" className="mr-2 mt-1" />
                    <span className="text-black">Large (1,392)</span>
                  </label>
                </div>
                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Color
                  </h3>
                  <a href="#" className="d-flex color-item align-items-center">
                    <span className="bg-danger color d-inline-block rounded-circle mr-2" />
                    <span className="text-black">Red (2,429)</span>
                  </a>
                  <a href="#" className="d-flex color-item align-items-center">
                    <span className="bg-success color d-inline-block rounded-circle mr-2" />
                    <span className="text-black">Green (2,298)</span>
                  </a>
                  <a href="#" className="d-flex color-item align-items-center">
                    <span className="bg-info color d-inline-block rounded-circle mr-2" />
                    <span className="text-black">Blue (1,075)</span>
                  </a>
                  <a href="#" className="d-flex color-item align-items-center">
                    <span className="bg-primary color d-inline-block rounded-circle mr-2" />
                    <span className="text-black">Purple (1,075)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="site-section site-blocks-2">
                <div className="row justify-content-center text-center mb-5">
                  <div className="col-md-7 site-section-heading pt-4">
                    <h2>Categories</h2>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0"
                    data-aos="fade"
                    data-aos-delay=""
                  >
                    <a className="block-2-item" href="#">
                      <figure className="image">
                        <img
                          src="images/women.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </figure>
                      <div className="text">
                        <span className="text-uppercase">Collections</span>
                        <h3>Women</h3>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
                    data-aos="fade"
                    data-aos-delay={100}
                  >
                    <a className="block-2-item" href="#">
                      <figure className="image">
                        <img
                          src="images/children.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </figure>
                      <div className="text">
                        <span className="text-uppercase">Collections</span>
                        <h3>Children</h3>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
                    data-aos="fade"
                    data-aos-delay={200}
                  >
                    <a className="block-2-item" href="#">
                      <figure className="image">
                        <img
                          src="images/men.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </figure>
                      <div className="text">
                        <span className="text-uppercase">Collections</span>
                        <h3>Men</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FindProductByCategory;
