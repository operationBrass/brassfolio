import Heading from '../Heading'
import { Card, Segment, Divider, Header, Image, Icon, Container } from 'semantic-ui-react'


function Project() {
    return (
<div>
            <Heading></Heading>


<Divider hidden />

            <Container text>
                
<Card >
    <Image src='./images/passwordGen.png' wrapped ui={false} />
    <Card.Content>
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

            </Container>
            
            <Divider hidden />
            
            <Container text>
  
                <Card >
                    <Image src='./images/weatherForecast.png' wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>City Weather Search</Card.Header>
                      <Card.Meta>
                        <span className='date'>Dynamic Events</span>
                      </Card.Meta>
                      <Card.Description>
                     
                     The Weather Forecast app was the first introduction to using APIs. It taught the use of JS promises as well as dynamically managing content. The app will display a 5 day forecast to any valid City searched. 
                    
                   Search results are saved to local storage and retrieved on page load. In the future, the history will return refreshed weather reports! 
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name='user' />
                        Deployment URL: <a href="https://operationbrass.github.io/homework-assignment-6/"> Weather Forecast </a> <br/> GITHUB: <a href="https://github.com/operationBrass/homework-assignment-6"> Weather-Repo </a> 

                      </a>
                    </Card.Content>
                  </Card>
                
                            </Container>


            <Divider hidden />
            
            <Container text>
  
  <Card >
      <Image src='./images/therealmealApp.PNG' wrapped ui={false} />
      <Card.Content>
        <Card.Header>The Real Meal </Card.Header>
        <Card.Meta>
          <span className='date'>Collobrative Project</span>
        </Card.Meta>
        <Card.Description>
       
 The Real-Meal app was the first real-life project created with a group of aspiring web developers taking part in UWA coding bootcamp 2021. 
  The project introduced a number
  of new frameworks and techniques, including the use of APIs and CSS Framework Bulma. Particular emphasis placed on the planning phase of s/w dev, including story boards, git branching and press release presentations! 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          Deployment URL: <a href="https://michaelshxw.github.io/The-Real-Meal-App/"> The-Real-Meal </a> <br/> GITHUB: <a href="https://github.com/michaelshxw/The-Real-Meal-App"> Project-Repo </a> 

        </a>
      </Card.Content>
    </Card>
  
              </Container>
                   
</div >);
}
                                                
export default Project;