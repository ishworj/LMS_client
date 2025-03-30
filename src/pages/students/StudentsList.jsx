import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedStudent } from "../../features/students/studentSlice";
import {
  deleteStudentAction,
  fetchAllStudentsAction,
} from "../../features/students/studentsActions";
import { setMenu } from "../../features/users/userSlice";
import ConfirmModal from "../../modals/ConfirmModal";

const StudentsList = () => {
  const [showModal, setShowModal] = useState(false);
  const [studentToDeleteId, setStudentToDeleteId] = useState(null); // Store student ID for deletion
  const [displayStudents, setDisplayStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { students } = useSelector((state) => state.studentsInfo);
  const dispatch = useDispatch();
  dispatch(setMenu("Students"));
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllStudentsAction());
  }, [dispatch]);

  useEffect(() => {
    setDisplayStudents(students);
  }, [students]);

  // Handle search input change
  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter students based on search query
  const showStudents = displayStudents.filter(
    (student) =>
      student.fName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.phone.toString().includes(searchQuery)
  );

  // Handle delete student (simulation)
  const handleOnDelete = (id) => {
    console.log("Deleting student with ID:", id);
    dispatch(deleteStudentAction(id));
    setShowModal(false); // Close the modal after deletion
  };

  // Handle edit student
  const handleOnEdit = (id) => {
    const editUser = students.find((student) => {
      return student._id === id;
    });
    dispatch(setSelectedStudent(editUser));
    navigate("/admin/students/profile");
  };

  return (
    <UserLayout pageTitle={"All students"}>
      <div>
        <div className="d-flex justify-content-between mb-4">
          <div>{showStudents.length} Students found!</div>

          <div>
            <label htmlFor="search">Search</label>
            <input
              type="text"
              className="form-control"
              id="search"
              value={searchQuery}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <hr />
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Profile</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {showStudents.map((student, i) => (
              <tr key={student._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <img
                      className="img-fluid border rounded"
                      src="https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"
                      alt="profile"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>
                </td>
                <td>
                  <div>
                    Name : {student.fName} {student.lName}
                  </div>
                  <div>Email: {student.email}</div>
                  <div>Phone: {student.phone}</div>
                  <div>Role: {student.role}</div>
                </td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleOnEdit(student._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setStudentToDeleteId(student._id); // Set student ID for deletion
                      setShowModal(true); // Show the confirmation modal
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Confirm modal for deletion */}
        <ConfirmModal
          show={showModal}
          onHide={() => setShowModal(false)} // Close modal
          onConfirm={() => handleOnDelete(studentToDeleteId)} // Pass the ID to the delete handler
          title="Deleting Student"
          message="Are you sure you want to delete this student?"
        />
      </div>
    </UserLayout>
  );
};

export default StudentsList;
