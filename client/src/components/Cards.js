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

export default function ActionAreaCard() {
  return (
    <>
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

      <div className="cards-container"> {/* Added a container for the cards */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
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
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
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
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
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
        </Card>

        
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
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
        </Card>
        
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
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
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
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
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
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
        </Card>
         <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
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
        </Card>
      </div>
    </>
  );
}
