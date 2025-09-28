import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  heading: string;
  onClose: () => void;
}


export const Modal: React.FC<ModalProps> = ({ isOpen, children, heading, onClose }) => {


  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div onClick={onClose} className="modal-close">
          <span>×</span>
        </div>
        <div className="modal-header">
          <h1>{heading}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};
