import PropTypes from 'prop-types';
import modalOverlayStyles from './modalOverlay.module.css';

ModalOverlay.propTypes = {
    children: PropTypes.element // ? не обязательно isRequired потому что потенциально может быть использоваться без children?
}

export default function ModalOverlay(props) {
    return (
        <div className={modalOverlayStyles.overlay} onClick={props.unmountModal}>
            {props.children}
        </div>
    )
}