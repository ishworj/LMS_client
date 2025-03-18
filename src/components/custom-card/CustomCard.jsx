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
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          thumbnail.includes("http") ? thumbnail : `${imageUrl}/${thumbnail}`
        }
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <hr />
        <Card.Text>
          {author} - {publishedYear}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
