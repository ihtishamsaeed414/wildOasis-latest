import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";
function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
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
    // <>
    //   <Button onClick={() => setIsOpenModal((show) => !show)}>
    //     Add new cabin
    //   </Button>
    //   {isOpenModal && (
    //     <Modal onClose={() => setIsOpenModal(false)}>
    //       <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
    //     </Modal>
    //   )}
    // </>
  );
}

export default AddCabin;
