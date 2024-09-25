import { useState } from "react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    // <Modal>
    //   <Modal.Toggle opens='new-cabin'>
    //     <Button>Add new cabin</Button>
    //   </Modal.Toggle>
    //   <Modal.Window name='new-cabin'>
    //     <CreateCabinForm />
    //   </Modal.Window>
    // </Modal>
    <>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
