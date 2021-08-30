import Heading from '../Heading'
import { Card, Reveal, Divider, Segment, Image, Icon, Grid, Container } from 'semantic-ui-react'


function Project() {
    return (
<div>
        <Heading>Project History </Heading>
        <Divider hidden />
     
       
        
 
        <Container text>
          
        <Grid columns={2} >
          <Grid.Row stretched>
      
            <Grid.Column>
                  <Reveal animated='move up'>
                <Reveal.Content hidden>
                    <Card fluid>
                    <Card.Content  id="passgen">
            <Image src='./images/passwordGen.png' fluid />
          
              <Card.Header>Password Generator</Card.Header>
              <Card.Meta>
                <span className='date' >City Weather Forecast</span>
              </Card.Meta>
                <Card.Description>
                  The Password Generator was one of my first appications using basic Javascript. The app generates a password between 8-128 characters with added selection crtiera. It helped to develop skills with 
                  accepting user input, validating user input and returning password based on users specific criteria. 
                  Interesting learnings from  producing a consistant result when all criteria selected and only 8 character password choosen.
                </Card.Description>
            </Card.Content>
          <Card.Content extra>
            <a>
            <Icon name='user' />
            Contact me
            </a>
                  </Card.Content>
                </Card>
                  </Reveal.Content>
                  <Reveal.Content visible>
                      <Image className="setSize" src="./images/passgenLogo-2.PNG"/>
                    </Reveal.Content>
              </Reveal> </Grid.Column>
            
              <Grid.Column>

              <Reveal animated='move up'>
        <Reveal.Content hidden>
            <Card fluid>
            <Card.Content id="weather">
      <Image src='./images/weatherForecast.png' fluid />
      
        <Card.Header>Password Generator</Card.Header>
        <Card.Meta>
          <span className='date'>Vanilla Javascript</span>
        </Card.Meta>
          <Card.Description>
            The Password Generator was one of my first appications using basic Javascript. The app generates a password between 8-128 characters with added selection crtiera. It helped to develop skills with 
            accepting user input, validating user input and returning password based on users specific criteria. 
            Interesting learnings from  producing a consistant result when all criteria selected and only 8 character password choosen.
          </Card.Description>
      </Card.Content>
    <Card.Content extra>
      <a>
      <Icon name='user' />
      Contact me
      </a>
            </Card.Content>
          </Card>
          </Reveal.Content>
          <Reveal.Content visible>
                <Image className="setSize" src="./images/quizlogo-1.PNG"/>
              </Reveal.Content>
        </Reveal>

              
                
                
                
          </Grid.Column>

            </Grid.Row>

            <Grid.Row stretched>
      
              <Grid.Column>
              <Reveal animated='move up'>
              <Reveal.Content hidden>
                  <Card fluid>
                  <Card.Content id="weather">
            <Image src='./images/weatherForecast.png' fluid />
            
              <Card.Header>Password Generator</Card.Header>
              <Card.Meta>
                <span className='date'>Vanilla Javascript</span>
              </Card.Meta>
                <Card.Description>
                  The Password Generator was one of my first appications using basic Javascript. The app generates a password between 8-128 characters with added selection crtiera. It helped to develop skills with 
                  accepting user input, validating user input and returning password based on users specific criteria. 
                  Interesting learnings from  producing a consistant result when all criteria selected and only 8 character password choosen.
                </Card.Description>
            </Card.Content>
          <Card.Content extra>
            <a>
            <Icon name='user' />
            Contact me
            </a>
                  </Card.Content>
                </Card>
                </Reveal.Content>
                <Reveal.Content visible>
                      <Image className="setSize" src="./images/weatherLogo.PNG"/>
                    </Reveal.Content>
              </Reveal>
              </Grid.Column>
          
      
              <Grid.Column>

              <Reveal animated='move up'>
          <Reveal.Content hidden>
              <Card fluid>
              <Card.Content  id="passgen">
      <Image src='./images/techBlog.png' fluid />
    
        <Card.Header>Password Generator</Card.Header>
        <Card.Meta>
          <span className='date' >City Weather Forecast</span>
        </Card.Meta>
          <Card.Description>
            The Password Generator was one of my first appications using basic Javascript. The app generates a password between 8-128 characters with added selection crtiera. It helped to develop skills with 
            accepting user input, validating user input and returning password based on users specific criteria. 
            Interesting learnings from  producing a consistant result when all criteria selected and only 8 character password choosen.
          </Card.Description>
      </Card.Content>
    <Card.Content extra>
      <a>
      <Icon name='user' />
      Contact me
      </a>
            </Card.Content>
          </Card>
            </Reveal.Content>
            <Reveal.Content visible>
                <Image className="setSize" src="./images/techblog-logo.PNG"/>
              </Reveal.Content>
        </Reveal>
                

        </Grid.Column>

            </Grid.Row>
            
            <Grid.Row stretched>
      
      <Grid.Column>
      <Reveal animated='move up'>
      <Reveal.Content hidden>
          <Card fluid>
          <Card.Content id="weather">
    <Image src='./images/weatherForecast.png' fluid />
    
      <Card.Header>Password Generator</Card.Header>
      <Card.Meta>
        <span className='date'>Vanilla Javascript</span>
      </Card.Meta>
        <Card.Description>
          The Password Generator was one of my first appications using basic Javascript. The app generates a password between 8-128 characters with added selection crtiera. It helped to develop skills with 
          accepting user input, validating user input and returning password based on users specific criteria. 
          Interesting learnings from  producing a consistant result when all criteria selected and only 8 character password choosen.
        </Card.Description>
    </Card.Content>
  <Card.Content extra>
    <a>
    <Icon name='user' />
    Contact me
    </a>
          </Card.Content>
        </Card>
        </Reveal.Content>
        <Reveal.Content visible>
              <Image className="setSize" src="./images/teamgen-logo.PNG"/>
            </Reveal.Content>
      </Reveal>
      </Grid.Column>
  

      <Grid.Column>

      <Reveal animated='move up'>
  <Reveal.Content hidden>
      <Card fluid>
      <Card.Content  id="passgen">
<Image src='./images/realmeal.PNG' fluid />

<Card.Header>Password Generator</Card.Header>
<Card.Meta>
  <span className='date' >City Weather Forecast</span>
</Card.Meta>
  <Card.Description>
    The Password Generator was one of my first appications using basic Javascript. The app generates a password between 8-128 characters with added selection crtiera. It helped to develop skills with 
    accepting user input, validating user input and returning password based on users specific criteria. 
    Interesting learnings from  producing a consistant result when all criteria selected and only 8 character password choosen.
  </Card.Description>
</Card.Content>
<Card.Content extra>
<a>
<Icon name='user' />
Contact me
</a>
    </Card.Content>
  </Card>
    </Reveal.Content>
    <Reveal.Content visible>
        <Image className="setSize" src="./images/realmealLogo.PNG"/>
      </Reveal.Content>
</Reveal>
        

</Grid.Column>

</Grid.Row>
            </Grid>
            </Container>
      
        
            
          
</div>);
}
                                                
export default Project;