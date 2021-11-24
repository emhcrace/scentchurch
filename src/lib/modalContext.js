import React from "react";
import useModal from "./hooks/useModal";
import ModalPortal from "../components/Modal/ModalPortal";

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

let ModalProvider = ({ children }) => {
    let { modal, handleModal, openModal, closeModal, modalContent } = useModal();
    return (
        <Provider value={{ modal, handleModal, openModal, closeModal, modalContent }}>
            <ModalPortal />
            {children}
        </Provider>
    );
};

export { ModalContext, ModalProvider };
