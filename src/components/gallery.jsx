import React from "react";
import { Image } from "./image";
import { ModalContext } from "../lib/modalContext";
import Players from "./Players";

export const Gallery = (props) => {
  const { handleModal, closeModal } = React.useContext(ModalContext);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>주일예배영상</h2>
          <p>
            하나님은 영이시니 예배하는 자가 신령과 진정으로 예배할찌니라.
            (요한복음 4장 24절)
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        handleModal(
                          <Players closeModal={closeModal} url={d.url} />
                        )
                      }
                    >
                      <Image title={d.title} smallImage={d.smallImage} />
                    </p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
