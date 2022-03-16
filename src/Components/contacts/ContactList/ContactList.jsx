import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = () => {
  return (
    <>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact Manager{' '}
                  <Link to={'/contacts/add'} className="btn btn-primary">
                    <i className="fa fa-plus-circle me-2" />
                    New
                  </Link>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus, debitis perferendis sequi ipsum numquam totam
                    commodi quibusdam alias dolor, quisquam consectetur? Velit
                    veniam illo eveniet numquam obcaecati qui explicabo
                    consectetur.
                  </p>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                      <img
                        src="https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png"
                        alt=""
                        className="img-fluid contact-img"
                      />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name : <span className="fw-bold">Lucas</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Mobile : <span className="fw-bold">99999-9999</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email :{' '}
                          <span className="fw-bold">lucas@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center ">
                      <Link
                        to={'/contacts/view/:contactId'}
                        className="btn btn-warning my-1"
                      >
                        <i className="fa fa-eye" />
                      </Link>
                      <Link
                        to={'/contacts/edit/:contactId'}
                        className="btn  btn-primary my-1"
                      >
                        <i className="fa fa-pen " />
                      </Link>
                      <button className="btn btn-danger">
                        <i className="fa fa-trash my-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactList;
