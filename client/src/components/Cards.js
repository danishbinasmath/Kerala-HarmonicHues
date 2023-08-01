import * as React from 'react';
import './design2.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchIconWrapper from '@mui/icons-material/Search';
import StyledInputBase from '@mui/material/InputBase';
import asapLogo from './asap-logo.png';
import ksrtc from './ksrtc-logo.jpg'
import { Link } from 'react-router-dom';

export default function ActionAreaCard() {
  return (
    <>

      <button><Link to="/" className='backbutton'>Home Page</Link></button>
      

      <div>
        <h1 className='heading'>Kerala HarmonicHues</h1>
      </div>


      <div className="search-input-container">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          style={{ backgroundColor: 'white' }}
        />
      </div>

      <div className="cards-container"> 
        <Card sx={{ maxWidth: 345 }}>
        <Link to="/Asap" style={{ textDecoration: 'none', color: 'inherit' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image={asapLogo}
              alt="ASAP Logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kerala ASAP validation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                To validate the certification provided by Kerala Government by the programme Additional Skill Acquisition Programme (ASAP), Kerala (3.0.0)
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
        <Link to="/Quote" style={{ textDecoration: 'none', color: 'inherit' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image={asapLogo}
              alt="ASAP Logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Quote of the Day
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A quote to motivate you
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <a href="https://www.aanavandi.com/"> 
            <CardMedia
              component="img"
              height="220"
              image={ksrtc}
              alt="ASAP Logo"
            />
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                KSRTC Schedule
              </Typography>
              <Typography variant="body2" color="text.secondary">
                To check Bus timings of KSRTC and also to book Bus tickets.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}
