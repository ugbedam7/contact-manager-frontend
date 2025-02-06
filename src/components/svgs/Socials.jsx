import { Box } from '@chakra-ui/react';
import { TfiLinkedin } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { IoLogoYoutube } from 'react-icons/io';

const Socials = () => {
  return (
    <div className="container my-4">
      <Box className="">
        <Link
          to="https://www.youtube.com/"
          className="social-icon"
          target="_blank">
          <IoLogoYoutube className="icon" color="white" />
        </Link>
        <Link to="https://x.com/" className="social-icon" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            viewBox="0 0 512 512">
            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              fill="#e4e3e1"
              width="20%"></path>
          </svg>
        </Link>
        <Link
          to="https://www.linkedin.com/"
          className="social-icon"
          target="_blank">
          <TfiLinkedin className="icon" color="white" />
        </Link>
      </Box>
    </div>
  );
};

export default Socials;
