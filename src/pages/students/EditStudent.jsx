import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../features/users/userSlice";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { profileInput } from "../../assets/profileInput";
import CustomInput from "../../components/custom-input/CustomInput";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";
import { updateStudentAciton } from "../../features/students/studentsActions";
import { useNavigate } from "react-router-dom";

const EditStudent = () => {
  const { form, handleOnChange, setForm } = useForm({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(setMenu("Students"));
  const { selectedStudent } = useSelector((state) => state.studentsInfo);

  useEffect(() => {
    !selectedStudent._id && navigate("/admin/students")
  }, []);

  useEffect(() => {
    setForm(selectedStudent);
  }, [selectedStudent]);

  const handleOnSubmit = async (e) => {
    const { __v, createdAt, _id, updatedAt, ...rest } = form;
    e.preventDefault();
    if (window.confirm("Are you sure you want to make this changes?")) {
      dispatch(updateStudentAciton(selectedStudent._id,form));
    }
  };

  return (
    <UserLayout pageTitle="Student profile">
      <Container className="h-100 w-100 pt-md-5">
        <Row className="">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="border border-3 overflow-hidden rounded-circle d-flex justify-content-center"
              style={{ height: "300px", width: "300px" }}
            >
              <img
                src="https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"
                alt="Ishwor's image"
                className="img-fluid p-3"
              />
            </div>
            <h2 className="text-center pt-3">
              {selectedStudent?.fName + " " + selectedStudent?.lName}
            </h2>
          </Col>

          <Col>
            <h4>Edit information here : </h4>
            <Form onSubmit={handleOnSubmit}>
              {profileInput?.map((input, i) => {
                return (
                  <CustomInput
                    key={i}
                    {...input}
                    onChange={handleOnChange}
                    value={form[input.name]}
                  />
                );
              })}
              <Button
                variant="danger"
                disabled={JSON.stringify(selectedStudent) === JSON.stringify(form)}
                onClick={() => setForm(selectedStudent)}
              >
                Cancle
              </Button>{" "}
              {"   "}
              <Button
                type="submit"
                variant="success"
                disabled={JSON.stringify(selectedStudent) === JSON.stringify(form)}
              >
                SAVE
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </UserLayout>
  );
};

export default EditStudent;
