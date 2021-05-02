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
            <div className='login-button' onClick={openModal}>Log In</div>
            {showModal && (
                <Modal onClose={closeModal}>
                    <LoginForm></LoginForm>
                </Modal>
            )}
        </>
    )
}

export default LoginFormModal;
