import React, {Component} from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import './NavBar.css';



export default class NavBar extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Segment inverted className = "NavBarSegment">
          <Menu inverted secondary  className = "NavBarMenu">

          {/* <NavLink to="/">
            <Menu.Item
              className = "MenuItem"
              name='home_page'
              active={activeItem === 'home_page'}
              onClick={this.handleItemClick}
            />
          </NavLink> */}

          <NavLink to="/user/to_do_list">    
            <Menu.Item
              className = "MenuItem"
              name='to_do_list'
              active={activeItem === 'to_do_list'}
              onClick={this.handleItemClick}
            />
          </NavLink>

          <NavLink to="/user/callendar">
            <Menu.Item
              className = "MenuItem"
              name='calendar'
              active={activeItem === 'calendar'}
              onClick={this.handleItemClick}
            />
          </NavLink>

          <NavLink to="/user/current_day">
            <Menu.Item
              className = "MenuItem"
              name='current_day'
              active={activeItem === 'current_day'}
              onClick={this.handleItemClick}
            />
          </NavLink>

          <NavLink to="/login">
            <Menu.Item
              className = "MenuItem"
              name='log_out'
              active={activeItem === 'log_out'}
              onClick={this.handleItemClick}
            />
          </NavLink>

          </Menu>
        </Segment>
      )
    }
  }

