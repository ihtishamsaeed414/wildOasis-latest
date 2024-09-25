import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
    // <Modal>
    //   <Modal.Toggle opens='new-cabin'>
    //     <Button>Add new cabin</Button>
    //   </Modal.Toggle>
    //   <Modal.Window name='new-cabin'>
    //     <CreateCabinForm />
    //   </Modal.Window>
    // </Modal>
  );
}

export default AddCabin;
