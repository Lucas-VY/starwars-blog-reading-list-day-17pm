import { useContext } from "react";
import { Context } from "../store/appContext";



const Favorites = () => {
    const { store, actions } = useContext(Context);
    return (
      <div className="row">
          <h1 className="col-md-12 text-center title text-danger">FAVORITES</h1>
          <div className="col-md-6 offset-3">
              
            {/*  LIST OF FAVORITES  */}
              <div className="list-group-item">This is your List of Favorites<span className="float-right">{store.favorites.length}</span></div>
              <ul className="list-group">
                  {
                      !!store.favorites.length !== 0 &&
                      store.favorites.map((valor, index) => {
                          return <li key={index} className="list-group-item" id="favorito2">{valor} {<i onClick={() => actions.deleteFavorite(valor)} className="fa fa-trash-alt float-right"></i>}</li>
                      })
                  }
              </ul>

          </div>
      </div>
  )
}

export default Favorites;

/* !!store.favorites &&
          store.favorites.map((valor, index) => {
            return (
              <>
              <div className="col-md-3 py-3 mt-2" key={index}>
                  <div className="card w-100 animate__animated animate__fadeIn bg-secondary">
                    <img
                      class="card-img-top"
                      src={`https://www.nicepng.com/png/detail/26-261412_stormtrooper-png-stormtrooper.png`}
                      alt="http://placehold.it/700x400"
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <h3 className='d-flex justify-content-center text-warning'>{valor}</h3>
                      </h4>
                    </div>
                    <div className="card-footer">
                    </div>
                  </div>
                  </div>
              </>
            );
          })
      } */