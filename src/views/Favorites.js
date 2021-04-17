import { useContext } from "react";
import { Context } from "../store/appContext";



const Favorites = () => {
  const { store, actions } = useContext(Context);
  return (
      <div className="row">
          <h1 className="col-md-12 text-center title">FAVORITES</h1>
          <div className="col-md-6 offset-3">

              <div className="list-group-item" id="favorito">Favorites<span className="float-right">{store.favorites.length}</span></div>
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