import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modalOverlay/modalOverlay';
import modalStyles from './modal.module.css';

Modal.propTypes = {
    modalHeader: PropTypes.string,
    unmountModal: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}

const modalRoot = document.getElementById("root");

export default function Modal(props) {
    const unmountModalFunc = props.unmountModal;
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                unmountModalFunc(); // не уверена считается ли это использованием хука useState в условном блоке, т.к. в конечном счете unmountModal вызывает useState, но как изящно выйти из положения учитывая что нужно проверить то, что был нажат именно Esc? 
            }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
    }, [unmountModalFunc]);

    return ReactDOM.createPortal(
        /* Можно было бы решить проблему вынеся непостедственно саму модалку из оверлея,
            не оборачивая её, но тогда нужно будет абсолютно позиционировать отдельно и модальное окно,
            и оверлей, а в варианте со e.stopPropagation() нужно позиционировать только оверлей,
            так что я попробовала оба варианта и выбрала e.stopPropagation()
        */
        <ModalOverlay unmountModal={props.unmountModal}>
            <div className={`pt-10 pr-10 pb-15 pl-10 ${modalStyles.modalBody}`} onClick={e => {e.stopPropagation()}}> 
                <div className={modalStyles.modalHeader}>
                    <p className="text text_type_main-large">
                        {props.modalHeader}
                    </p>
                    <button onClick={props.unmountModal} className={modalStyles.closeButton}>
                        <CloseIcon className={modalStyles.size} type="primary"/>
                    </button>
                </div>
                <div className={modalStyles.modalContent}>
                    {props.children}
                </div>
            </div>
        </ModalOverlay>,
        modalRoot
    )
}