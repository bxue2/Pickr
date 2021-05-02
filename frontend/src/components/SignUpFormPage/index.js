import {useState} from 'react';
import {Modal} from "../../context/Modal"
import SignUpForm from "./SignUpForm";

const SignUpFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className='signup-button' onClick={openModal}>Log In</div>
            {showModal && (
                <Modal onClose={closeModal}>
                    <SignUpForm></SignUpForm>
                </Modal>
            )}
        </>
    )
}

export default SignUpFormModal;
