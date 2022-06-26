import modalOverlayStyles from './modalOverlay.module.css';

export default function ModalOverlay(props) {
    return (
        <div className={modalOverlayStyles.overlay} onClick={props.unmountModal}></div>
    )
}