import { Container } from "@material-ui/core";
import "./Landing.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Landing = () => {
  return (
    <div className="landing" id="home">
      <Container>
        <div className="landing__container">
          <div className="landing__text">
            <span className="title">Goodlife Yoga</span>
            <span className="subTitle">
              Welcome to Goodlife Yoga with Pooja Shah
            </span>
            <a className="learnMore" href="#about">
              Learn More <ArrowForwardIcon />{" "}
            </a>
          </div>
          <div className="imageContainer">
            <img
              src="https://images.unsplash.com/photo-1593164842249-d74fc06dae05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1866&q=80"
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
