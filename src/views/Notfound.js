import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1 className="notFound"> 404</h1>
      <h1 className="notFound"> Not found, sorry.</h1>
      <h1 className="notFound"><i class="fas fa-user-astronaut text-warning"></i></h1>
      <Link to='/' className='btn btn-light btn-lg mt-5 w-50 gohome'>Go Back Home</Link>
    </>
  );
}

export default NotFound;