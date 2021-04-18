import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../index.css";


const Characters =() => {
  const { store, actions } = useContext(Context);


  return (
      <>
      <div className="row mb-5">
        <h1 className="text-white position-absolute ml-5">
          May the Force be with you!
        </h1>
      </div>

      <div className="row">

        {/* MAP CARDS */}
        {!!store.characters &&
          store.characters.results.map((valor, i) => {
            return (
              <>
                <div className="col-md-3 py-3 mt-2" key={i}>
                  <div className="card w-100 animate__animated animate__fadeIn">
                    
                    <img className="card-img-top"
                          
                      src={`https://starwars-visualguide.com/assets/img/characters/${ i + 1 }.jpg`}
                      alt="https://placeholder.com/#How_To_Set_Image_Size400x200"/>
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
                        className="btn btn-primary btn-lg"
                        type="button"
                        data-toggle="modal"
                        data-target={"#exampleModal" + i}
                      >
                        Read More!
                      </button>




                      {/* Favorite BUTTON */}  {/* fas fa-star */}  {/* onClick={() => actions.pushFavorite(valor.name)} */}
                      <button onClick={() => { actions.addCharacter(valor.name) }} className="btn btn-lg btn-danger d-block float-right" >
                        <i className={store.favorites.includes(valor.name)?"colored fas fa-star" : "fas fa-star"}></i>
                      </button>
                    </div>
                  </div>
       

                  {/* <!-- Modal --> */}

                  {/* MODAL HEADER */}
                  <div
                    className="modal fade"
                    id={"exampleModal" + i}
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="false"
                  >
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content">
                        <div className="modal-header bg-dark">
                          <h5 className="modal-title" id="exampleModalLabel">
                          <Link to="#">{valor.name}</Link>
                          </h5>
                          <button className="btn-close btn-sm btn-primary"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">X</span>
                          </button>
                        </div>
 
                        {/* MODAL BODY CHARACTERS */}

                        <div className="modal-body bg-danger">
                          
                          {/*    HORIZONTAL CARD INSIDE MODAL  */}
                          <div id="card-modal" className="card-md-3 bg-dark border-danger">
                            <div className="row">
                              <div className="col-md-4">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`}
                                  alt="https://placeholder.com/#How_To_Set_Image_Size400x200" />
                              </div>
                              <div className="col-md-7">
                                <div className="card-body float-right">
                                  <h1 className="card-title">
                                  <Link to="#">MORE DETAILS</Link>  
                                  </h1>
                                  <p className="card-text">Eye Color: {valor.eye_color}</p>
                                  <p className="card-text">Skin Color: {valor.skin_color}</p>
                                  <p className="card-text">Mass: {valor.mass}</p>
                                  <p className="card-text">Created: {valor.created}</p>
                                  <p className="card-text">Edited: {valor.edited}</p>
                                  <p className="card-text">HomeWorld: {valor.homeworld}</p>
                                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* MODAL FOOTER */}
                        <div className="modal-footer bg-dark">
                          <button className="btn btn-secondary btn-danger btn-lg"
                            type="button"
                            data-dismiss="modal">
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

export default Characters;



/* */