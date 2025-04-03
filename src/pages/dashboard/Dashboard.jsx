import { useDispatch } from "react-redux";
import { UserLayout } from "../../components/layout/UserLayout";
import { setMenu } from "../../features/users/userSlice";
import { Col, Container, Row } from "react-bootstrap";
import { FaUsers } from "react-icons/fa";
import { LiaUserSolid } from "react-icons/lia";
import { LiaUserSlashSolid } from "react-icons/lia";
import { GiBookshelf } from "react-icons/gi";
import { TbBooks } from "react-icons/tb";
import { TbBooksOff } from "react-icons/tb";
import { MdReviews } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { FaBookOpen, FaCheckCircle, FaClock } from "react-icons/fa";
import BookGenreChart from "../../components/charts/BookGenreChart.jsx";
import BorrowHistoryChart from "../../components/charts/BorrowHistoryChart.jsx";
import GenrePieChart from "../../components/charts/GenrePieChart.jsx";

const Dashboard = () => {
  const dispatch = useDispatch();
  dispatch(setMenu("Dashboard"));
  return (
    <UserLayout pageTitle="Analytics Dashboard">
      <Container>
        <Row>
          <Col>
            <div
              className="card p-3 shadow"
              style={{ backgroundColor: "#cfd3d87d" }}
            >
              <h4 className="text-center ">
                Users <FaUsers />
              </h4>

              <div className=" text-center">
                Total registered: <b>400</b>
              </div>
              <div className="d-flex justify-content-around pt-3">
                <div className="bg-success p-2">
                  {" "}
                  <LiaUserSolid /> Active: <b>100</b> {"  "}
                </div>
                <div className="bg-warning p-2">
                  {""}
                  <LiaUserSlashSolid />
                  Inactive: <b>200</b> {""}
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="card p-3 shadow"
              style={{ backgroundColor: "#cfd3d87d" }}
            >
              <h4 className="text-center ">
                Books <GiBookshelf />
              </h4>

              <div className=" text-center">
                Total Books: <b>400</b>
              </div>
              <div className="d-flex justify-content-around pt-3">
                <div className="bg-success p-2">
                  {" "}
                  <TbBooks /> Active: <b>100</b> {"  "}
                </div>
                <div className="bg-warning p-2">
                  {""}
                  <TbBooksOff />
                  Inactive: <b>200</b> {""}
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="card p-3 shadow"
              style={{ backgroundColor: "#cfd3d87d" }}
            >
              <h4 className="text-center ">
                Borrows <FaBookOpen />
              </h4>

              <div className=" text-center">
                Total Borrowed: <b>400</b>
              </div>
              <div className="d-flex justify-content-around pt-3">
                <div className="bg-success p-2">
                  {" "}
                  <FaCheckCircle />
                  Returned:<b>100</b> {"  "}
                </div>

                <div className="bg-warning p-2">
                  {""}
                  Due Return:<b>200</b> {""}
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="card p-3 shadow"
              style={{ backgroundColor: "#cfd3d87d" }}
            >
              <h4 className="text-center ">
                Reviews <MdReviews />
              </h4>

              <div className=" text-center">
                Total Returned: <b>400</b>
              </div>
              <div className="d-flex justify-content-around pt-3">
                <div className="bg-success p-2">
                  {" "}
                  <MdOutlineReviews />
                  Rewiewed:<b>100</b> {"  "}
                </div>

                <div className="bg-warning p-2">
                  {""}
                  <MdOutlineReviews />
                  Pending:<b>200</b> {""}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <BookGenreChart />
          </Col>
          <Col>
            <BorrowHistoryChart />
          </Col>
        </Row>

        <Row>
          <Col>
           <GenrePieChart/>
          </Col>
        </Row>
      </Container>
    </UserLayout>
  );
};

export default Dashboard;
