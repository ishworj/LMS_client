import React, { useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../features/users/userSlice";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { profileInput } from "../../assets/profileInput";
import CustomInput from "../../components/custom-input/CustomInput";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";
import { useRef } from "react";
import { updateUserAciton } from "../../features/users/userActions";
import { UpdateProfileModal } from "../../modals/updateProfileModal.jsx";
const imageUrl = import.meta.env.VITE_APP_IMAGE_URL;

const ProfileDetail = () => {
  const [modalShow, setModalShow] = useState(false);
  const { form, handleOnChange, setForm } = useForm({});
  const dispatch = useDispatch();
  dispatch(setMenu("Profile"));
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    setForm(user);
  }, [user]);

  const handleOnSubmit = async (e) => {
    const { __v, createdAt, _id, updatedAt, ...rest } = form;
    e.preventDefault();
    if (window.confirm("Are you sure you want to make this changes?")) {
      dispatch(updateUserAciton(rest));
    }
  };

  return (
    <UserLayout pageTitle="Your profile">
      <Container className="h-100 w-100 pt-md-5">
        <Row className="">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="border border-3 overflow-hidden rounded-circle d-flex justify-content-center mb-3 "
              style={{ height: "300px", width: "300px" }}
            >
              <img
                src={
                  user?.profileImage
                    ? `${imageUrl}/${user.profileImage}`
                    : "/defaultUser.png"
                }
                alt="Ishwor's image"
                className="img-fluid"
              />
            </div>

            <Button onClick={() => setModalShow(true)}>Update Profile</Button>
            <UpdateProfileModal
              show={modalShow}
              handleClose={() => setModalShow(false)}
            />
            <h2 className="text-center pt-3 ">
              {user?.fName + " " + user?.lName}
            </h2>
          </Col>

          <Col>
            <h4>Edit your information here : </h4>
            <Form onSubmit={handleOnSubmit}>
              {profileInput?.map((input, i) => {
                return (
                  <CustomInput
                    disabled={input.name == "role"}
                    key={i}
                    {...input}
                    onChange={handleOnChange}
                    value={form[input.name]}
                  />
                );
              })}
              <Button
                variant="danger"
                disabled={JSON.stringify(user) === JSON.stringify(form)}
                onClick={() => setForm(user)}
              >
                Cancle
              </Button>{" "}
              {"   "}
              <Button
                type="submit"
                variant="success"
                disabled={JSON.stringify(user) === JSON.stringify(form)}
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

export default ProfileDetail;
