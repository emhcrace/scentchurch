export const Features = (props) => {
  return (
    <>
      <div id="features" className="text-center">
        <div className="container">
          <div
            className="col-md-10 col-md-offset-1 section-title"
            style={{ marginTop: "125px" }}
          >
            <h2>{props.title}</h2>
          </div>
          <div className="row" style={{ marginBottom: "120px" }}>
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-xs-6 col-md-4"
                    style={{ marginTop: "60px" }}
                  >
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </>
  );
};
