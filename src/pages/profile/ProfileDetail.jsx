import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../features/users/userSlice";
import { Button, Col, Container, Row } from "react-bootstrap";
import { profileInput } from "../../assets/profileInput";
import CustomInput from "../../components/custom-input/CustomInput";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";

const ProfileDetail = () => {
  const { form, handleOnChange, setForm } = useForm({});
  const dispatch = useDispatch();
  dispatch(setMenu("Profile"));
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    setForm(user);
    console.log(form);
  }, [user]);
  return (
    <UserLayout pageTitle="your profile">
      <Container className="h-100 w-100 ">
        <Row className="">
          <Col>
            <img
              src="https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"
              alt=""
            />{" "}
            <h5>{user?.fName + " " + user?.lName}</h5>
          </Col>
          <Col>
            {profileInput?.map((input, i) => {
              return (
                <CustomInput
                  disabled
                  key={i}
                  {...input}
                  onChange={handleOnChange}
                  value={form[input.name]}
                />
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Edit </Button>
          </Col>
          <Col>
            <Button>E </Button>
          </Col>
        </Row>
      </Container>
    </UserLayout>
  );
};

export default ProfileDetail;
