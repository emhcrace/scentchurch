import React from "react";
import { Image } from "./image";
import { ModalContext } from "../lib/modalContext";
import Players from "./Players";

export const Gallery = (props) => {
  const { handleModal, closeModal } = React.useContext(ModalContext);
  const { url } = props;

  return (
    <div id={props.id} className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    {d.url !== undefined && (
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
                    )}
                    {d.url === undefined && (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          handleModal(
                            <Image title={d.title} smallImage={d.largeImage} />
                          )
                        }
                      >
                        <Image title={d.title} smallImage={d.smallImage} />
                      </p>
                    )}
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
