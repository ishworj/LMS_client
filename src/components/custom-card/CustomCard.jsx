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
    <Card style={{ width: "12rem", marginTop: "20px", height: "25rem" }}>
      <div style={{ width: "100%", height: "75%", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={
            thumbnail.includes("http") ? thumbnail : `${imageUrl}/${thumbnail}`
          }
          style={{
            width: "100%",
            height: "100%", 
            objectFit: "cover", 
          }}
        />
      </div>
      <Card.Body style={{ height: "25%", padding: "0.75rem" }}>
        <Card.Title>{title}</Card.Title>
        <hr />
        <Card.Text>
          {author} - {publishedYear}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
