import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LanguageIcon from "@material-ui/icons/Language";
import { links } from "../../data/DummyData";

const Footer = () => {
  return (
    <div className="footer">
      <a href={links.fb}>
        <FacebookIcon />
      </a>
      <a href={links.insta}>
        <InstagramIcon />
      </a>
      <a href={links.youtube}>
        <YouTubeIcon />
      </a>
      <a href={links.website}>
        <LanguageIcon />
      </a>
    </div>
  );
};

export default Footer;
