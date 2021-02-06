import { Link } from "react-router-dom";
import "./ClassCard.css";

const ClassCard = ({ data }) => {
  return (
    <div className="card">
      <div className="classTitle">
        <b>{data.title}</b> <span className="price">{data.price}</span>
      </div>
      <div className="cardContent">
        <div className="date">
          <span>{data.date}</span>
          <span>{data.time}</span>
        </div>

        <hr style={{ width: "100%" }} />
        <div className="repeat">
          <span>{data.recurrence}</span>
          <span>{data.student}</span>
        </div>
      </div>
      <Link to={`/class/${data.id}`} className="book">
        Book
      </Link>
    </div>
  );
};

export default ClassCard;
