import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteReviewAction,
  getReviews,
  updateReviewAction,
} from "../../features/reviews/reviewAction";
import { Button, Table, Form } from "react-bootstrap";
import { Stars } from "../../components/stars/Stars";
import { Link } from "react-router-dom";
import { setMenu } from "../../features/users/userSlice";
import UserLayout from "../../components/layout/UserLayout";
const imageUrl = import.meta.env.VITE_APP_IMAGE_URL;
const isPrivate = true;
const Reviews = () => {
  const { allReviews } = useSelector((state) => state.reviewInfo);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    dispatch(setMenu("All Reviews"));
    dispatch(getReviews(isPrivate));
  }, [dispatch]);

  const handleOnSwitchChange = (e) => {
    const { checked, value } = e.target;

    if (window.confirm("Are you sure, you want to change the status?")) {
      dispatch(
        updateReviewAction({
          status: checked ? "active" : "inactive",
          _id: value,
        })
      );
    }
  };

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure, you want to delete this review?")) {
      dispatch(DeleteReviewAction(id));
    }
  };

  const filteredReviews = allReviews.filter((review) => {
    const reviewDate = new Date(review.createdAt).toISOString().split("T")[0];
    return (
      (!startDate || reviewDate >= startDate) &&
      (!endDate || reviewDate <= endDate)
    );
  });

  return (
    <UserLayout pageTitle="All Reviews List">
      <div>
        <div className="d-flex justify-content-between mb-4">
          <div>{filteredReviews.length} Reviews found!</div>
          <div className="d-flex">
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Start Date"
              className="me-2"
            />
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="End Date"
            />

            <Button
              variant="danger"
              onClick={() => {
                setEndDate("");
                setStartDate("");
              }}
            >
              Reset filter
            </Button>
          </div>
        </div>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Book image</th>
              <th>Student Name</th>
              <th>Review</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredReviews?.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={item.status === "active"}
                    onChange={handleOnSwitchChange}
                    value={item._id}
                  />
                  {item.status}
                </td>
                <td>
                  <Link to={`/book/${item.bookId}`} target="_blank">
                    <img
                      src={
                        item.thumbnail.includes("http")
                          ? item.thumbnail
                          : `${imageUrl}/${item.thumbnail}`
                      }
                      alt=""
                      width={"70px"}
                    />
                  </Link>
                </td>
                <td>{item.userName}</td>
                <td>
                  <h2>{item.title}</h2>
                  <div>
                    <Stars stars={item.ratings} />
                  </div>
                  <div>{item.message}</div>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleOnDelete(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
};

export default Reviews;
