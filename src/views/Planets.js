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
                      src={`https://starwars-visualguide.com/assets/img/planets/${ i + 1 }.jpg`}
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
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-toggle="modal"
                        data-target={"#exampleModal" + i}
                      >
                        Read More
                      </button>
                      <button className="btn btn-lg btn-danger d-block float-right" onClick={() => actions.pushFavorite(valor.name)}>
                        <i className="fas fa-star"></i>
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
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            {valor.name}
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">X</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <span className="text-danger">climate:  {valor.climate} </span>{" "}
                         
                          {", "}{" "}
                          <span className="text-danger">population: </span>{" "}
                          {valor.population}
                          {", "} <span className="text-danger">gravity: </span>{" "}
                          {valor.gravity}
                          {", "} <span className="text-danger">diameter: </span>{" "}
                          {valor.diameter}
                          {", "} <span className="text-danger">terrain: </span>:{" "}
                          {valor.terrain}{" "}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            close
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