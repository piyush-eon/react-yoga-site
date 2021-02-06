import { Container } from "@material-ui/core";
import ClassCard from "./ClassCard/ClassCard";
import "./LiveClasses.css";
import { Dummy } from "../../data/DummyData";

const LiveClasses = () => {
  return (
    <div className="live" id="classes">
      <Container>
        <div className="about__container">
          <span className="title">Live Classes</span>
          <div className="cardsContainer">
            {Dummy.map((data) => (
              <ClassCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LiveClasses;
