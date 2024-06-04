import PropTypes from "prop-types";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa"; 

import "./User.css";

const User = ({ user }) => {
  return (
    <li className="user-card">
      <h2>{user.name}</h2>
      {user.company && (
        <>
          <p className="contact-item company-name">
            {user.company.name}
          </p>
          <p className="contact-item company-phrase">
            {user.company.catchPhrase}
          </p>
        </>
      )}
      <div className="line"></div>
      <p className="contact-item email">
        <MdOutlineMail className="icon" /> {user.email}
      </p>
      <p className="contact-item phone">
        <FaPhoneVolume className="icon" /> {user.phone}
      </p>
      <p className="contact-item website">
        <CgWebsite className="icon" /> {user.website}
      </p>
      {user.address && (
        <p className="contact-item">
          <FaMapMarkerAlt className="icon" />
          {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </p>
      )}
    </li>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
    }),
    company: PropTypes.shape({
      name: PropTypes.string,
      catchPhrase: PropTypes.string,
      bs: PropTypes.string,
    }),
  }).isRequired,
};

export default User;
