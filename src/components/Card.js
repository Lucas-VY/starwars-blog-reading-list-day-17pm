import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="col py-3 mt-2">
      <div className="card w-100 animate__animated animate__bounceIn">
          <img class="card-img-top" src="http://placehold.it/700x400" alt="" />
        <div className="card-body">
          <h4 className="card-title">
            <Link to="#">{props.name}</Link>
          </h4>
          <h5>{props.species}</h5>
          <p className="card-text">
            {props.bio}
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
          <button className='btn btn-lg btn-primary d-block float-left'>LEARN MORE</button>
            <button className='btn btn-lg btn-danger d-block float-right'><i class="fas fa-star"></i></button>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Card;