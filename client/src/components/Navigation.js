import React, { Component } from 'react'
import { Menu, Segment, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

      return (
        <Container text>
      <Segment inverted>
        <Menu inverted pointing secondary >
          <Link to="/brassfolio">
              <Menu.Item
            name='home'
            active={activeItem === 'home'}
                  onClick={this.handleItemClick}>
                  
                          </Menu.Item>
          </Link>           
          <Link to="/projects">
          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
                          onClick={this.handleItemClick}
                         
                />
              </Link>
              <Link to="/about">
                                <Menu.Item
            name='about'
            active={activeItem === 'about'}
                          onClick={this.handleItemClick}
                      
                /></Link>
              <Link to="/contact">
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
                          onClick={this.handleItemClick}
                  
                />
                </Link>
        </Menu>
        
      </Segment></Container>
    )
  }
}
