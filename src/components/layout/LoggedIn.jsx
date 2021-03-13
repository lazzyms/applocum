const LoggedIn = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1>{props.title}</h1>
        <div className="card shadow rounded">
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
