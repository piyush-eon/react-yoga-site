import { Button, Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ClassDetails.css";
import { Dummy } from "../../data/DummyData";

const ClassDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    window.scroll(0, 0);
    setDetails(Dummy.find((data) => data.id === parseInt(id)));
    // eslint-disable-next-line
  }, []);

  return (
    <Container className="classdetails" maxWidth="md">
      <div className="class__container">
        <div className="headerImage">
          <img
            src="https://images.unsplash.com/photo-1510024161681-8a1f66ed1a25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="yoga"
            width="100%"
            className="header__img"
          />
          <span className="imgText">Book Your Class</span>
        </div>
        {details && (
          <div className="detailContent">
            <span className="detailTitle">{details.title}</span>
            <div className="date">
              <span>{details.date}</span>
              <span>{details.time}</span>
            </div>
            <span className="detailDesc">{details.description}</span>

            <span>{details.student}</span>
            <div className="date">
              <span>{details.recurrence}</span>
              <b style={{ color: "green" }}>{details.price}</b>
            </div>

            <Button
              variant="contained"
              color="primary"
              size="large"
              // can add this to disable
              disableElevation
            >
              Register Now
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ClassDetails;
