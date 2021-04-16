import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";


const Favorites = () => {

  const { store } = useContext(Context);

    return (
      <>
       <h1 className='text-white ml-5'>the ones you can't get enough of.</h1>
       <div className="row">
      {
          !!store.globalName &&
          store.globalName.map((valor, i) => {
            return (
              <>
              <div className="col-md-3 py-3 mt-2" key={i}>
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
      }
      </div>
      </>
    );
  }
  
  export default Favorites;