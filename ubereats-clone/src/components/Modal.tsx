import { GrClose } from "react-icons/gr";

const Modal = ({ showModal, label, setShowModal }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-20 h-40 w-80 bg-white flex flex-col p-4 shadow rounded-lg">
        <div className="flex justify-end cursor-pointer">
          <GrClose onClick={() => setShowModal(false)} />
        </div>
        <div className="flex h-full justify-center items-center">
          {label} Clicked
        </div>
      </div>
    </div>
  );
};

export default Modal;
