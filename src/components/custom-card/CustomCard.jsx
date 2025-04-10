import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const imageUrl = import.meta.env.VITE_APP_IMAGE_URL;

export const CustomCard = ({
  _id,
  thumbnail,
  title,
  author,
  publishedYear,
}) => {
  return (
    <Card className="custom-card">
      <div className="card-image-container">
        <Card.Img
          variant="top"
          src={
            thumbnail.includes("http") ? thumbnail : `${imageUrl}/${thumbnail}`
          }
          className="card-img"
        />
      </div>
      <Card.Body className="card-body">
        <Card.Title>{title}</Card.Title>
        <hr />
        <Card.Text>
          {author} - {publishedYear}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
