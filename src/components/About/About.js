import { Container } from "@material-ui/core";
import { info } from "../../data/DummyData";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <div className="about__container">
          <span className="title">About</span>
          <span className="subTitle">
            {info.about}
            <br />
            {info.location}
          </span>
        </div>
      </Container>
    </div>
  );
};

export default About;
