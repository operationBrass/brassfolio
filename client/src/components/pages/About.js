import React from 'react'
import { Card,Image, Icon,Container, Divider } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const About = () => (
    <Container text >
        <Divider hidden />
        <Divider hidden />
        <Divider hidden/>
        <Card>
            <Image src="./images/myprofilepic.jfif"/>
            <Card.Content id="aboutme" fluid>IT Service Delivery professional and aspiring Web engineer. Having just completed coding bootcamp with UWA i have developed a strong foundation from which to expand on.
            Please feel free to browse my work or reach out on the contact me page. Thanks for visiting.
            </Card.Content>
            <Card.Content extra>
            <a href="https://github.com/operationBrass/homework-assignment-3">
            <Icon name='github' size="huge" />
     
                        </a>
                        <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
                  </Card.Content>
  </Card>
    </Container>

)

export default About
           
           
