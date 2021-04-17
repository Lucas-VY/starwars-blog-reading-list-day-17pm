import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-responsive">
      <div className="col-md-12">
      <div className="row">
        <div className="container">
          {/*  LOGO */}
          <a className="navbar-brand float-left" href=".."> 

            <Link className="navbar-brand text-white" to="/"> 
              <img className="img-responsive" id="headImg" src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" alt="" />
            </Link>

          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          {/*  BOTONES INDEX  */}
          <div className="collapse navbar-collapse text-align" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item lead px-2 rounded bg-danger mx-3">
                <Link className="nav-link active" to="/characters">
                  <i className="fas fa-user"></i> CHARACTERS
                </Link>
              </li>
              <li className="nav-item lead px-1 rounded bg-danger mx-3">
                <Link className="nav-link active" to="/planets">
                  <i className="fas fa-globe-americas"></i> PLANETS
                </Link>
              </li>
              <li className="nav-item lead px-2 rounded bg-danger mx-3">
                <Link className="nav-link active" to="/vehicles">
                  <i className="fas fa-space-shuttle"></i> VEHICLES
                </Link>
              </li>
              <li className="nav-item btn-outline-danger mx-3 float-right" id="favorite-btn">
                <Link className="nav-link active favs"  to="/favorites">
                  <i className="fas fa-star"></i> FAVORITES
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;