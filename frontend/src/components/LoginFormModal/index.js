import {useState} from 'react';
import {Modal} from "../../context/Modal"
import LoginForm from "./LoginForm";

const LoginFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <button onClick={openModal}>Log In</button>
            {showModal && (
                <Modal onClose={closeModal}>
                    <LoginForm></LoginForm>
                </Modal>
            )}
        </>
    )
}

export default LoginFormModal;
