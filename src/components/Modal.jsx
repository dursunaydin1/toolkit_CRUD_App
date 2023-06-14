import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../app/crudSlice";

const AddModal = (props) => {
  const dispatch = useDispatch();
  const { editTask, show, handleClose } = props;

  const [formState, setFormState] = useState({
    title: "",
    author: "",
    assigned_to: "",
    end_date: "",
  });

  useEffect(() => {
    if (editTask) {
      setFormState(editTask);
    } else {
      setFormState({
        title: "",
        author: "",
        assigned_to: "",
        end_date: "",
      });
    }
  }, [editTask, show]);

  const handleSave = () => {
    dispatch(addTask(formState));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editTask ? "Düzenleme Modu" : "Ekleme Modu"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Başlık</Form.Label>
            <Form.Control
              type="text"
              placeholder="Başlık giriniz"
              value={formState.title}
              onChange={(e) =>
                setFormState({ ...formState, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Yazar</Form.Label>
            <Form.Control
              type="text"
              placeholder="Yazar giriniz"
              value={formState.author}
              onChange={(e) =>
                setFormState({ ...formState, author: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kime Atanacak</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={formState.assigned_to}
              onChange={(e) =>
                setFormState({ ...formState, assigned_to: e.target.value })
              }
            />
            <Form.Text>Görevin atanacağı kişiyi belirleyin</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              type="date"
              placeholder=""
              value={formState.end_date}
              onChange={(e) =>
                setFormState({ ...formState, end_date: e.target.value })
              }
            />
            <Form.Text>Son teslim tarihini belirleyin</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Kapat</Button>
        <Button variant="success" onClick={handleSave}>
          Kaydet
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
