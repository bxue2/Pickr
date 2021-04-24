import { createContext, useRef, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

export const ModalContext = createContext();

export function ModalProvider(props){
    const modalRef = useRef();
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(modalRef.current);
    }, [])
    return (
        <>
            <ModalContext.Provider value={value}>
                {props.children}
            </ModalContext.Provider>
            <div ref={modalRef}></div>
        </>
    )
}

export function Modal({onClose, children}){
    const modalNode = useContext(ModalContext.value);
    if(!modalNode){
        return null;
    }

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}
