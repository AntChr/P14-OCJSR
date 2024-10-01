import PropTypes from 'prop-types';
import '../style/Modal.css';

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span>{message}</span>
          <button className="modal-close" onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
