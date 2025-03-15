import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { returnBookAction } from "../../features/borrows/borrowAction";

const BorrowList = () => {
  const dispatch = useDispatch();
  const { borrows } = useSelector((store) => store.borrowInfo);

  const handleOnReturn = (id,bookId) => {
    alert("Returning book with ID: " + id);
    dispatch(returnBookAction(id,bookId));
  };

  const handleOnReview = (id) => {
    alert("Leaving a review for book with ID: " + id);
    // Implement review action here
  };

  return (
    <div>
      <table className="border w-100">
        <thead>
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Book Title</th>
            <th className="border p-2">Due Date</th>
            <th className="border p-2">Return Date</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {borrows.map((item, index) => (
            <tr key={item._id}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.title}</td>
              <td className="border p-2">
                {new Date(item.dueDate).toLocaleDateString()}
              </td>
              <td className="border p-2">
                {item.returnDate
                  ? new Date(item.returnDate).toLocaleDateString()
                  : "Not Returned"}
              </td>
              <td className="border p-2">
                {item.status !== "borrowed" ? (
                  <Button
                    variant="info"
                    onClick={() => handleOnReview(item._id)}
                  >
                    Leave Review
                  </Button>
                ) : (
                  <Button
                    variant="danger"
                    onClick={() => handleOnReturn(item._id,item.bookId)}
                  >
                    Return Book
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowList;
