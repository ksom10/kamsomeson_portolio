import React from 'react';
import './Contact.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { color } from '@mui/system';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


function Contact() {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedTwo, setExpandedTwo] = React.useState(false);
  const [expandedThree, setExpandedThree] = React.useState(false);

  
  return (
    <div className='contact'>
        <div className='contact-container'>
            <div className='contact-header'>
            <h1>Let's Get in Touch: Contact Me!</h1>
            </div>
            <div className='contact-icons'>
              <IconButton href='https://github.com/ksom10'>
            <GitHubIcon  style = {!expanded ? { fontSize: '80px', color: 'white'} : {fontSize: '100px', color: 'cyan', cursor: 'pointer'}} 
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)} />
            </IconButton>

          <IconButton component="a" href='mailto:someson1569@gmail.com'>
            <EmailIcon style = {!expandedTwo ? { fontSize: '80px', color: 'white'} : {fontSize: '100px', color: 'cyan', cursor: 'pointer'}} 
            onMouseEnter={() => setExpandedTwo(true)}
            onMouseLeave={() => setExpandedTwo(false)} />
          </IconButton>

          <IconButton href='https://www.linkedin.com/in/kameron-someson-18b303227/'>
            <LinkedInIcon style = {!expandedThree ? { fontSize: '80px', color: 'white'} : {fontSize: '100px', color: 'cyan', cursor: 'pointer'}} 
            onMouseEnter={() => setExpandedThree(true)}
            onMouseLeave={() => setExpandedThree(false)} />
            </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Contact