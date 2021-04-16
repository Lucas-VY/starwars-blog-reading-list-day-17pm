import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../index.css";

function Characters() {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="row mb-5">
        <h1 className="text-white position-absolute ml-5">
          May the Force be with you!
        </h1>
      </div>
      <div className="row">
        {!!store.characters &&
          store.characters.results.map((valor, i) => {
            return (
              <>
                <div className="col-md-3 py-3 mt-2" key={i}>
                  <div className="card w-100 animate__animated animate__fadeIn">
                    <img
                      class="card-img-top"
                      src={`https://starwars-visualguide.com/assets/img/characters/${
                        i + 1
                      }.jpg`}
                      alt="http://placehold.it/400x200"
                    />
                    <div className="card-body">
                      <h2 className="card-title">
                        <Link to="#">{valor.name}</Link>
                      </h2>
                      <h5 className="card-text">gender: {valor.gender}</h5>
                      <h5 className="card-text">height: {valor.height}</h5>
                      <h5 className="card-text">Hair Color: {valor.hair_color}</h5>
                    </div>


                      {/* <!-- Button trigger modal --> */}
                    <div className="card-footer">
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
                          <span className="text-danger">birthyear: </span>{" "}
                          {valor.birth_year}
                          {", "}{" "}
                          <span className="text-danger">hair color: </span>{" "}
                          {valor.hair_color}
                          {", "}{" "}
                          <span className="text-danger">eye color: </span>{" "}
                          {valor.eye_color}
                          {", "}{" "}
                          <span className="text-danger">skin color: </span>{" "}
                          {valor.skin_color}
                          {", "} <span className="text-danger">mass: </span>{" "}
                          {valor.mass}{" "}
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

export default Characters;