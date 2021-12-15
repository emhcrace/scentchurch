export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>교회소개</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/*<h3>향기로운 교회 변천사</h3>*/}
              {/*<div className="list-style">*/}
              {/*  <div className="col-lg-6 col-sm-6 col-xs-12">*/}
              {/*    <ul>*/}
              {/*      {props.data*/}
              {/*        ? props.data.Why2.map((d, i) => (*/}
              {/*            <li key={`${d}-${i}`}> {d}</li>*/}
              {/*          ))*/}
              {/*        : "loading"}*/}
              {/*    </ul>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "120px" }}>
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <h3>향기로운 교회 변천사</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                {/*<div className="col-lg-6 col-sm-6 col-xs-12">*/}
                {/*  <ul>*/}
                {/*    {props.data*/}
                {/*      ? props.data.Why2.map((d, i) => (*/}
                {/*          <li key={`${d}-${i}`}> {d}</li>*/}
                {/*        ))*/}
                {/*      : "loading"}*/}
                {/*  </ul>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
