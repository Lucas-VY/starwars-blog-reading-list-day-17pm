import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../index.css";

const Vehicles = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="row mb-5">
        <h1 className="text-white position-absolute ml-5">
          hop on any vehicle this series has to offer.
        </h1>
      </div>
      <div className="row">
        {!!store.vehicles &&
          store.vehicles.results.map((valor, i) => {
            return (
              <>
                <div className="col-md-3 py-3 mt-2" key={i}>
                  <div className="card w-100 animate__animated animate__fadeIn">
                    <img
                      class="card-img-top"
                      src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to="#">{valor.name}</Link>
                      </h4>
                      <h4 className="card-text">model: {valor.model}</h4>
                      <h4 className="card-text">Consumables: {valor.consumables}</h4>
                      <h4 className="card-text">crew: {valor.crew}</h4>
                    </div>
                    <div className="card-footer">
                      {/* <!-- Button trigger modal --> */}
                      <button
                        className="btn btn-primary btn-lg"
                        type="button"
                        data-toggle="modal"
                        data-target={"#exampleModal" + i}
                      >
                        Read More
                      </button>

                      {/*  FAVORITE BUTTON */}

                      <button onClick={() => { actions.addCharacter(valor.name) }} className="btn btn-lg btn-danger d-block float-right">
                        <i className={store.favorites.includes(valor.name)?"colored fas fa-star" : "fas fa-star"}></i>
                      </button>
                    </div>
                  </div>




                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id={"exampleModal" + i}
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="false"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header bg-dark">
                          <h5 className="modal-title" id="exampleModalLabel">
                            <Link to="#">{valor.name} </Link>
                          </h5>
                          <button
                            className="btn-close -btn-sm btn-primary"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">X</span>
                          </button>
                        </div>

                        {/*  MODAL BODY  */}


                        {/*  MODAL CARD PLANETS */}
                        <div className="modal-body bg-warning">

                          {/* PLANET CARD */}
                          <div id="card-modal" className="card-md-3 bg-dark border-warning">
                            <div className="row">
                              <div className="col-md-4">
                                <img src="http://via.placeholder.com/500x500/"
                                  alt="" />
                              </div>
                              <div className="col-md-7">
                                <div className="card-body float-right">
                                  <h1 className="card-title">
                                    <Link to="#">MORE DETAILS</Link>
                                  </h1>
                                  <p className="card-text">Consumables: {valor.consumables}</p>
                                  <p className="card-text">Hypedrive Rating: {valor.hyperdrive_rating}</p>
                                  <p className="card-text">Length: {valor.length}</p>
                                  <p className="card-text">StarShip Class: {valor.starship_class}</p>
                                  <p className="card-text">Credit Cost: {valor.cost_in_credits}</p>
                                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/*   MODA FOOTER */}
                        <div className="modal-footer bg-dark">
                          <button
                            type="button"
                            class="btn btn-secondary btn-danger btn-lg"
                            data-dismiss="modal"
                          >
                            Close and Keep Searching
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Vehicles;
