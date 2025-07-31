import { IoClose } from "react-icons/io5";

interface ModalProps {
  modalOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, onClose, children }) => {
  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-[95vw] md:max-w-[90vw] lg:max-w-[900px] max-h-[90vh] md:max-h-[85vh] w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <IoClose size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
