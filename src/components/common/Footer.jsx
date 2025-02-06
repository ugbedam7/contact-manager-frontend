import { Box, Stack } from '@chakra-ui/react';
import Socials from '../svgs/Socials';
import CompanyDetails from '../CompanyDetails';

const Footer = () => {
  return (
    <Stack>
      <Box className="footer py-3 " style={{ backgroundColor: '#1A202C' }}>
        <Socials />
        <CompanyDetails />
        <div className="container text-white text-center my-4">
          <p>&copy; 2025 Pluralcode. All rights reserved.</p>
        </div>
      </Box>
    </Stack>
  );
};

export default Footer;
