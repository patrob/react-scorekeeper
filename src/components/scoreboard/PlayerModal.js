import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function PlayerModal(props) {

    const { isOpen, toggle } = props;

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader>Add Player</ModalHeader>
                <ModalBody>
                    TeST!
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Add</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default PlayerModal;