import {useState} from 'react';
import {Modal} from "../../context/Modal";
import AboutDiv from './AboutDiv';

const AboutModal = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className='about-button' onClick={openModal}>
                <i className="far fa-question-circle"></i>
                {" About"}
            </div>
            {showModal && (
                <Modal onClose={closeModal}>
                    <AboutDiv />
                </Modal>
            )}
        </>
    )
}

export default AboutModal;
