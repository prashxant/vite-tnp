import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: "lightblue"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
            Central Institute of Technology Kokrajhar <br />
            PO: Rangalikhata/Balagaon <br />
            Kokrajhar (BTC) <br />
            Assam, 783370 <br />
            India <br />
              <br />
              Email: <Link href="mailto:tnpcell@cit.ac.in">tnpcell@cit.ac.in</Link>
              <br />
              Phone: <Link href="tel:+919957817471">9957817471</Link>
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0  }}>
              <li>
                <Link href="https://www.cit.ac.in/" color="inherit">
                  CIT Main Site 
                </Link>
              </li>
              <li>
                <Link href="http://centrallibrary.cit.ac.in/" color="inherit">
                  Central Library CIT Kokrajhar
                </Link>
              </li>
              <li>
                <Link href="https://alumni.cit.ac.in/" color="inherit">
                  Alumni Associaton
                </Link>
              </li>
              <li>
                <Link href="http://technicalclubs.cit.ac.in/" color="inherit">
                Technical clubs
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex',flexDirection:'column', gap: 2 }}>
              <Link href="https://www.facebook.com/OfficialCITKokrajhar" color="inherit" aria-label="Facebook">
                Facebook
              
              </Link>
              <Link href="https://x.com/CitKokrajhar" color="inherit" aria-label="Twitter">
                Twitter
              </Link>
              <Link href="https://www.linkedin.com/school/t-p-cell-cit-kokrajhar/" color="inherit" aria-label="LinkedIn">
                LinkedIn
              </Link>
              <Link href="#/" color="inherit" aria-label="Instagram">
                Instagram
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            {'Copyright © '}
            <Link color="inherit" href="https://cit.ac.in">
            DEVELOPED & MANAGED BY TNP Cell Central Institute of Technology,Kokrajhar,
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
