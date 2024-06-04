import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <div>
      <h1 className="header">{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
