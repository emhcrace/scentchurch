export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src={"img/scent-logo.png"}
              alt="향기로운교회"
              className="team-img"
              width={220}
            />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                알려드립니다
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                교회소개
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                주일예배영상
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                향기로운 교제
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                우리의 기도
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                향기로운 사역팀
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                문의합니다
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
