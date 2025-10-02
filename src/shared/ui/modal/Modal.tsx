import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  heading: string;
  onClose: () => void;
}


export const Modal = ({ isOpen, children, heading, onClose }: ModalProps) => {
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
