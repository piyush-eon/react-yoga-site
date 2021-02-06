import { Container } from "@material-ui/core";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <div className="about__container">
          <span className="title">About</span>
          <span className="subTitle">
            From a personal inward yoga journey to our group yoga classes for
            fitness enthusiasts, the goal of every GoodLife Yoda instructor is
            to help all netizens live a fit and healthy good life.
            <br />
            We are based out of Pune, MH in India. Please book our live classes
            from the schedule provided below.
          </span>
        </div>
      </Container>
    </div>
  );
};

export default About;
