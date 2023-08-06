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
import ksrtc from './ksrtc-logo.jpg';
import quoteLogo from './quote-logo.png';
import ksebLogo from './kseb-logo.png';
import rationcardLogo from './rationcard-logo.png';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

export default function ActionAreaCard() {
  

  return (
    <>

     {/* //020e1d283ee64b97bf32b788a9f44003 new api key */}
      

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

        {/* <form action="/" >
          <button className='backbutton'>Home page</button>
        </form> */}

      </div>

      <div className="cards-container"> 

      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <a href="/News"> 
            <CardMedia
              component="img"
              height="220"
              image={null}
              alt="News Logo"
              className='ksebCard'
            />
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kerala News
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Latest News About Kerala.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <a href="https://wss.kseb.in/selfservices/quickpay"> 
            <CardMedia
              component="img"
              // height="220"
              image={ksebLogo}
              alt="ASAP Logo"
              className='ksebCard'
            />
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                KSEB
              </Typography>
              <Typography variant="body2" color="text.secondary">
                To pay the bills of Electricity.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        

        <Card sx={{ maxWidth: 345 }}>
        <Link to="/Quote" style={{ textDecoration: 'none', color: 'inherit' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image ={quoteLogo}
              alt="ASAP Logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Quote of the Day
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A quote to motivate you.
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
          <CardActionArea>
            <a href="https://etso.civilsupplieskerala.gov.in/index.php/c_checkrcard_details"> 
            <CardMedia
              component="img"
              height="220"
              image={rationcardLogo}
              alt="ASAP Logo"
              className='ksebCard'
            />
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kerala Ration Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                To verify Ration Card.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>


      </div>
    </>
  );
}
