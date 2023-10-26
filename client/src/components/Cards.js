import * as React from 'react';
import './css/design2.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchIconWrapper from '@mui/icons-material/Search';
import StyledInputBase from '@mui/material/InputBase';
import quoteLogo from './images/quote-logo.png';
import newsLogo from './images/news-logo.png'
import fuelpriceLogo from './images/fuelprice-logo.png'
import postofficeLogo from './images/postoffice-logo.png';
import keralacommunityLogo from './images/keralacommunity-logo.png'
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

      </div>

      <div className="cards-container">

        <Card sx={{ maxWidth: 345 }}>
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                image={keralacommunityLogo}
                alt="ASAP Logo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kerala Community
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A community page for posting the events about kerala. People can also become friends and like the post of any people.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <a href="/News">
              <CardMedia
                component="img"
                height="220"
                image={newsLogo}
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
            <a href="/FuelPrice">
              <CardMedia
                component="img"
                height="220"
                image={fuelpriceLogo}
                alt="News Logo"
                className='ksebCard'
              />
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kerala Fuel Prices
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prices of Petrol, Diesal and LPG of Kerala.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <a href="/PostOffice3">
              <CardMedia
                component="img"
                height="220"
                image={postofficeLogo}
                alt="News Logo"
                className='ksebCard'
              />
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kerala Post Office
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get details of Post Office by searching Postal PIN Code or Post Office Branch Name of Kerala.
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
                image={quoteLogo}
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

      </div>
    </>
  );
}
