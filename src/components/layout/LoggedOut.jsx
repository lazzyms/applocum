const LoggedOut = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-5 p-5 m-5">
          <div className="shadow border-0 card" style={{borderRadius: '20px'}}>
            <div className="card-body m-2">{props.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedOut;
