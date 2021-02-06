import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LanguageIcon from "@material-ui/icons/Language";

const Footer = () => {
  return (
    <div className="footer">
      <a href="/#">
        <FacebookIcon />
      </a>
      <a href="/#">
        <InstagramIcon />
      </a>
      <a href="/#">
        <YouTubeIcon />
      </a>
      <a href="/#">
        <LanguageIcon />
      </a>
    </div>
  );
};

export default Footer;
