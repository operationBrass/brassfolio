import React, { Component } from 'react'
import { Menu, Segment, Container} from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

      return (
        <Container text>
      <Segment inverted>
        <Menu inverted pointing secondary >
          <Menu.Item
            name='Home'
            active={activeItem === 'home'}
                          onClick={this.handleItemClick}
                          href="/"
          />
          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
                          onClick={this.handleItemClick}
                          href="/projects"
                      />
                                <Menu.Item
            name='about'
            active={activeItem === 'about'}
                          onClick={this.handleItemClick}
                          href="/about"
          />
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
                          onClick={this.handleItemClick}
                          href="/contact"
          />
        </Menu>
      </Segment></Container>
    )
  }
}
