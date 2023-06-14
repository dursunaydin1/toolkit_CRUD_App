import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import AddModal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { removeTask } from "../app/crudSlice";

const CrudPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.crudReducer);
  const [editTask, setEditTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    setEditTask(null);
  };

  return (
    <div className="m-2">
      <AddModal
        show={showModal}
        handleClose={handleClose}
        editTask={editTask}
      />
      <Button
        className="my-3"
        variant="success"
        onClick={() => setShowModal(true)}
      >
        Yeni Eleman Ekle
      </Button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Görev</th>
            <th>Yazar</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeTask(task.id))}
                  >
                    Sil
                  </Button>
                  <Button
                    onClick={() => {
                      setEditTask(task);
                      setShowModal(true);
                    }}
                  >
                    Düzenle
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
