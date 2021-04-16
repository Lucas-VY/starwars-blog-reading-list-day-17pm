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
                      src={`https://starwars-visualguide.com/assets/img/startships/${
                        i + 1
                      }.jpg`}
                      alt="http://placehold.it/400x200"
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to="#">{valor.name}</Link>
                      </h4>
                      <h4 className="card-text">model: {valor.model}</h4>
                      <h4 className="card-text">Pilots: {valor.pilots}</h4>
                      <h4 className="card-text">crew: {valor.crew}</h4>
                    </div>
                    <div className="card-footer">
                      {/* <!-- Button trigger modal --> */}
                      <button
                        type="button"
                        class="btn btn-primary btn-lg"
                        data-toggle="modal"
                        data-target={"#exampleModal" + i}
                      >
                        Read More
                      </button>
                      <button className="btn btn-lg btn-danger d-block float-right" onClick={() => actions.pushFavorite(valor.name)}>
                        <i class="fas fa-star"></i>
                      </button>
                    </div>
                  </div>
                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id={"exampleModal" + i}
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="false"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            {valor.name}
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <span className="text-danger">consumables: </span>{" "}
                          {valor.consumables}
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
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary btn-lg"
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
