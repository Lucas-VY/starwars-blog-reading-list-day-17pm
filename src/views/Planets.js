import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../index.css";

const Planets = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="row mb-5">
        <h1 className="text-white position-absolute ml-5">
          travel to any planet, right here.
        </h1>
      </div>
      <div className="row">
        {!!store.planets &&
          store.planets.results.map((valor, i) => {
            return (
              <>
                <div className="col-md-3 py-3 mt-2" key={i}>
                  <div className="card w-100 animate__animated animate__fadeIn">
                    <img
                      className="card-img-top"
                      src={`https://starwars-visualguide.com/assets/img/planets/${i + 1}.jpg`}
                      alt="https://via.placeholder.com/400x200.png"
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to="#">{valor.name}</Link>
                      </h4>
                      <h4 className="card-text">Climate: {valor.climate}</h4>
                      <h4 className="card-text">Population: {valor.population}</h4>
                      <h4 className="card-text">Terrain: {valor.terrain}</h4>

                      {/* <!-- Button trigger modal --> */}
                      <button
                        className="btn btn-primary btn-lg"
                        type="button"
                        data-toggle="modal"
                        data-target={"#exampleModal" + i}
                      >
                        Read More
                      </button>

                      
                      <button onClick={() => { actions.addCharacter(valor.name) }} className="btn btn-lg btn-danger d-block float-right">
                        <i className={store.favorites.includes(valor.name)?"colored fas fa-star" : "fas fa-star"}></i>
                      </button>
                    </div>
                  </div>


                  {/* <!-- Modal --> */}

                  <div className="modal fade"
                    id={"exampleModal" + i}
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="false">

                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header bg-dark">
                          <h5 className="modal-title" id="exampleModalLabel">
                            <Link to="#">{valor.name}</Link>
                          </h5>
                          <button
                            className="btn-close btn-sm btn-primary"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">X</span>
                          </button>
                        </div>

                          {/*  MODAL CARD PLANETS */}
                          <div className="modal-body bg-success">
 
                            {/* PLANET CARD */}
                            <div id="card-modal" className="card-md-3 bg-dark border-danger">
                              <div className="row">
                                <div className="col-md-4">
                                  <img src={`https://starwars-visualguide.com/assets/img/planets/${i + 1}.jpg`}
                                    alt="https://placeholder.com/#How_To_Set_Image_Size400x200" />
                                </div>
                                <div className="col-md-7">
                                  <div className="card-body float-right">
                                    <h1 className="card-title">
                                      <Link to="#">MORE DETAILS</Link>
                                    </h1>
                                    <p className="card-text">Climate: {valor.climate}</p>
                                    <p className="card-text">Population: {valor.population}</p>
                                    <p className="card-text">Gravity: {valor.gravity}</p>
                                    <p className="card-text">Diameter: {valor.diameter}</p>
                                    <p className="card-text">Terrain: {valor.terrain}</p>
                                    <p className="card-text">HomeWorld: {valor.homeworld}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                        {/* MODAL FOOTER */}
                        <div className="modal-footer bg-dark">
                          <button
                            type="button"
                            className="btn btn-secondary btn-danger btn-lg"
                            data-dismiss="modal"
                          >
                            Close and Keep Searching!
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

export default Planets;