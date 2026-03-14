import { useTheme } from "../context/ThemeContext";
import Image from "next/image";
import Checkbox from "./Checkbox";
import Button from "./Button";

type ModalProps = {
  modalVisible?: boolean;
  setModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  setLocation?: (location: string) => void;
  contract?: boolean;
  setContract?: React.Dispatch<React.SetStateAction<boolean>>;
  searchOnClick?: () => void;
};

function FilterModal({
  modalVisible,
  contract,
  setModalVisible,
  setLocation,
  setContract,
  searchOnClick,
}: ModalProps) {
  const { dark } = useTheme();
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-3 w-full">
        <div
          className={`${dark ? "bg-devjobs-slate-900" : "bg-white"} rounded-md w-9/10 shadow-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col`}
        >
          <div className="modal-input-location flex gap-2 border-b p-6 border-devjobs-slate-500 pb-4">
            <Image
              src="/devjobs/icon-location.svg"
              width={20}
              height={20}
              alt="Search"
              className="h-6.5 w-auto"
            />
            <input
              onChange={(e) => {
                setLocation?.(e.target.value);
              }}
              className={`px-2 py-1 w-full placeholder-gray-400 ${dark ? "text-devjobs-slate-100" : "text-devjobs-slate-950"} outline-none focus:outline-none`}
              type="text"
              placeholder="Filter by location..."
            />
            <button
              className="absolute top-2 right-4 cursor-pointer text-devjobs-slate-500 hover:text-devjobs-indigo-500"
              onClick={() => setModalVisible?.(!modalVisible)}
            >
              &times;
            </button>
          </div>
          <div className="modal-checkbox flex gap-4 px-6 pt-8 pb-6">
            {setContract && (
              <Checkbox check={contract ?? false} setCheck={setContract} />
            )}
            <p
              className={`text-[16px] font-bold ${dark ? "text-white" : "text-devjobs-slate-900"}`}
            >
              Full Time Only
            </p>
          </div>
          <div className="modal-btn w-full px-6 pb-4">
            <Button text="Search" onClick={searchOnClick}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterModal;
