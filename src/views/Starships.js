import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../index.css";

const Starships = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="row mb-5">
        <h1 className="text-white position-absolute ml-5">
        </h1>
      </div>
      <div className="row">
        {!!store.Starships &&
          store.Starships.results.map((valor, i) => {
            return (
              <>
                <div className="col-md-3 py-3 mt-2" key={i}>
                  <div className="card w-100 animate__animated animate__fadeIn">
                    <img
                      className="card-img-top"
                      src={`https://starwars-visualguide.com/assets/img/starships/${
                        i + 1
                      }.jpg`}
                      alt="http://placehold.it/700x400"
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to="#">{valor.name}</Link>
                      </h4>
                      <h4 className="card-text">model: {valor.model}</h4>
                      <h4 className="card-text">Pilots: {valor.pilots}</h4>
                      <h4 className="card-text">Manufacturer: {valor.manufacturer}</h4>
                    </div>
                    <div className="card-footer">
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
                            {valor.model}
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <span className="text-danger">Pilots: </span>{" "}
                          {valor.pilots}
                          {", "}{" "}
                          <span className="text-danger">
                            hyperdrive rating:{" "}
                          </span>{" "}
                          {valor.hyperdrive_rating}
                          {", "} <span className="text-danger">length: </span>{" "}
                          {valor.length}
                          {", "}{" "}
                          <span className="text-danger">starship_class: </span>{" "}
                          {valor.starship_class}
                          {", "} <span className="text-danger">cost: </span>{" "}
                          {valor.cost_in_credits}{" "}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary btn-lg"
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

export default Starships;
