import { GrClose } from "react-icons/gr";

interface IModal {
  showModal: boolean;
  label: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;

}

const Modal: React.FC<IModal> = ({ showModal, label, setShowModal }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div onClick={() => setShowModal(false)} className="modal fixed h-screen w-full modal-background z-20">
      <div className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-40 h-52 w-96 bg-white opacity-100 flex flex-col p-4 shadow rounded-lg">
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
