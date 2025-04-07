import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyBorrowListAction,
  returnBookAction,
} from "../../features/borrows/borrowAction";
import { CustomModal } from "../../modals/CustomModal";
import { ReviewForm } from "../../components/forms/ReviewForm";
import ConfirmModal from "../../modals/ConfirmModal";

const BorrowList = () => {
  const dispatch = useDispatch();
  const { borrows } = useSelector((store) => store.borrowInfo);
  console.log(borrows);
  const { user } = useSelector((state) => state.userInfo);

  const [borrow, setBorrow] = useState({});
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [bookToReturn, setBookToReturn] = useState(null);
  const handleOnReturn = () => {
    if (bookToReturn) {
      dispatch(returnBookAction(bookToReturn._id, bookToReturn.bookId));
      setShowReturnModal(false);
    }
  };
  const handleGiveReivew = (borrowObject) => {
    setBorrow({ ...borrowObject, userName: user.fName });
  };

  const handleReturnButtonClick = (item) => {
    setBookToReturn(item);
    setShowReturnModal(true);
  };
  return (
    <div>
      {borrow?._id ? (
        <CustomModal title={"Leave review"} closeFunction={setBorrow}>
          <ReviewForm borrow={borrow} setBurrow={setBorrow} />
        </CustomModal>
      ) : (
        ""
      )}
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
          {borrows
            .slice()
            .reverse()
            .map((item, index) => (
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
                  {item?.status === "borrowed" ? (
                    <Button
                      variant="danger"
                      onClick={() => handleReturnButtonClick(item)}
                    >
                      Return Book
                    </Button>
                  ) : item?.status === "returned" ? (
                    <Button
                      variant="warning"
                      onClick={() => handleGiveReivew(item)}
                    >
                      Give review
                    </Button>
                  ) : (
                    "Already reviewed"
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ConfirmModal
        show={showReturnModal}
        onHide={() => setShowReturnModal(false)} // Close modal
        onConfirm={handleOnReturn}
        title="Returning Book"
        message="Are you sure you want to return this book?"
      />
    </div>
  );
};

export default BorrowList;
