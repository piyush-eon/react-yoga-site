import { Container } from "@material-ui/core";
import "./Landing.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { info } from "../../data/DummyData";

const Landing = () => {
  return (
    <div className="landing" id="home">
      <Container>
        <div className="landing__container">
          <div className="landing__text">
            <span className="title">{info.title}</span>
            <span className="subTitle">{info.description}</span>
            <a className="learnMore" href="#about">
              Learn More <ArrowForwardIcon />{" "}
            </a>
          </div>
          <div className="imageContainer">
            <img
              src="photo.png"
              alt="yoga"
              width="100%"
              className="landing__img"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Landing;
