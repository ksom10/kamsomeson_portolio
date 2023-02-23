import React from 'react'
import { Sidenav, Nav, Toggle } from 'rsuite';
import { Link } from 'react-router-dom';
import './SideNav.css';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import DeviceIcon from '@rsuite/icons/Device';
import EmailIcon from '@rsuite/icons/Email';
import ToolsIcon from '@rsuite/icons/Tools';
import logo from '../images/logo.png';



const SideNav = () => {
const [expanded, setExpanded] = React.useState(false);
const [activeKey, setActiveKey] = React.useState('1');
    return (
    <div className='sideNav'
    style={!expanded ? {width: '8rem'} : {width: '13rem'}}>
      <Sidenav >
        <Sidenav.Body 
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        >
        
          <Nav className='navItem-container' activeKey="1">
            <Link to='/' className='link'>
            <img className='logo' src={logo}/>
            </Link>
          <Nav.Item className='navItem' eventKey="1" icon={<ToolsIcon />}>
          <Link to='/skills' className='link'>
              <p>{expanded ? "Skills" : null}</p>
              </Link>
            </Nav.Item>
           
            <Nav.Item className='navItem' eventKey="2" icon={<DeviceIcon />}>
                <Link to='/showcase' className='link'>
                <p>{expanded ? "Showcase" : null}</p>
                </Link>
            </Nav.Item>
            <Nav.Item className='navItem' eventKey="3" icon={<UserInfoIcon />}>
                <Link to='/about' className='link'>
                <p>{expanded ? "About" : null}</p>
                </Link>
            </Nav.Item>
            <Nav.Item className='navItem' eventKey="4" icon={<EmailIcon />}>
                <Link to='/contact' className='link'>
                <p>{expanded ? "Contact" : null}</p>
                </Link>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};
export default SideNav