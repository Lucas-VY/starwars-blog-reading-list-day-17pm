const Home = () => {
  return (
    <>
    <div className="row">
    <div className="col-md-9">
      <div className="jumbotron align-item-center">
        <div className="container">
          <h1 className="display-4">Welcome young padawan  <i className="fab fa-old-republic"></i></h1>
          <p className="lead">Let's see if the force it's strong in you...</p>

          <div className="embed-responsive embed-responsive-1by1 w-50 float-right ">
            <iframe className="embed-responsive-item auto-play" 
            src="https://www.youtube.com/embed/iQHJARqk_-c?autoplay=1" 
            title="video"
            allow="autoplay"
            ></iframe>
          </div>

        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Home;

