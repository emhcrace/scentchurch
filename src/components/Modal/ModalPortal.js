import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ModalContext } from "../../lib/modalContext";

const MyModal = styled.div`
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

const ContentWrap = styled.div`
    border: solid 0px red;
    background: rgba(0, 0, 0, 0);
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    @media only screen and (max-width: 320px) {
        width: 98%;
        position: relative;
    }
`;

const ModalPortal = (props) => {
    const el = document.getElementById("app-modal");
    let { modalContent, handleModal, modal, closeModal } = React.useContext(ModalContext);
    if (modal) {
        return ReactDOM.createPortal(
            <a href={"#n"} onClick={closeModal}>
                <MyModal>
                    <ContentWrap>{modalContent}</ContentWrap>
                </MyModal>
            </a>,
            el,
        );
    } else return null;
};

export default ModalPortal;
