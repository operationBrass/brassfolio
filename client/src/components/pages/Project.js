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
       <Image className="projectImages" src='./images/passwordGen.png'/>
                    <Card.Content  id="passgen">
            
                    
              <Card.Header>Password Generator</Card.Header>
              <Card.Meta>
                <span className='date' >Create unique passwords</span>
              </Card.Meta>
                <Card.Description>
                  The Password Generator was one of my first appications using basic Javascript. The app generates a password between 8-128 characters with added selection crtiera. It helped to develop skills with 
                  accepting user input, validating user input and returning password based on users specific criteria.
                </Card.Description>
            </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/operationBrass/homework-assignment-3">
            <Icon name='github' size="huge" />
     
                        </a>
                        <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
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
                    <Image src='./images/quiz.png' className="projectImages" />
            <Card.Content id="quiz" >
     
      
        <Card.Header>Code Quiz</Card.Header>
        <Card.Meta>
          <span className='date'>Test your JS knowledge</span>
        </Card.Meta>
          <Card.Description>
          Test your Javascript knowledge with this 5 question Quiz. Utilising bootstrap and jQuery to manage the animated 'carousel' and overall styling, consideration for mobile users and make sure to add your score to the leaderboard!
          </Card.Description>
      </Card.Content>
    <Card.Content extra>
      <a href="https://github.com/operationBrass/homework-assignment-4">
      <Icon textAlign="center" name='github' size="huge" />
            
                        </a>
                        <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
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
                    <Image src='./images/weatherForecast.png'className="projectImages"  />
                  <Card.Content id="weather">
    
            
              <Card.Header>Weather Forecast</Card.Header>
              <Card.Meta>
                <span className='date'>Search local weather reports</span>
              </Card.Meta>
                <Card.Description>
                          The Weather Dashboard uses API service to return to you a weather forecast with a 5 day outlook. You can search for any valid city and add to your history for easy refresh!
                          During this assignment i was introduced to API calls and Javascript Promises


                </Card.Description>
            </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/operationBrass/homework-assignment-6">
             <Icon name='github' size="huge" />
                        </a>
                        <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
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
                    <Image src='./images/techBlog.png' className="projectImages" />
              <Card.Content  id="techblog">

    
        <Card.Header>Tech Blog</Card.Header>
        <Card.Meta>
          <span className='date' >Signup and Blog</span>
        </Card.Meta>
          <Card.Description>
            The Password Generator was one of my first appications using basic Javascript. The app generates a password between 8-128 characters with added selection crtiera. It helped to develop skills with 
            accepting user input, validating user input and returning password based on users specific criteria. 
            Interesting learnings from  producing a consistant result when all criteria selected and only 8 character password choosen.
          </Card.Description>
      </Card.Content>
    <Card.Content extra>
      <a href="https://github.com/operationBrass/homework-assignment-14">
      <Icon name='github' size="huge" />
                        </a>
                        <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
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
                    <Image src='./images/teamgen.png' className="projectImages"/>
          <Card.Content id="teamprof">
  
    
      <Card.Header>Team Profile</Card.Header>
      <Card.Meta>
        <span className='date'>Manage your teams</span>
      </Card.Meta>
        <Card.Description>
        CLI application takes in employee information and provides a HTML report of the team members. This project being a nice introduction to the Inqurier package in particular.
        </Card.Description>
    </Card.Content>
  <Card.Content extra>
    <a href="https://github.com/operationBrass/homework-assignment-10">
    <Icon name='github' size="huge" />

                        </a>
                        <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
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
                    <Image src='./images/therealmealApp.PNG' className="projectImages" />
      <Card.Content  id="realmeal">


<Card.Header>The Real Meal</Card.Header>
<Card.Meta>
  <span className='date' >Real Meal Planning</span>
</Card.Meta>
  <Card.Description>
  The Real-Meal app was the first real-life project created with a group of aspiring web developers taking part in UWA coding bootcamp 2021. 
                The project introduced a number
                of new frameworks and techniques, including the use of APIs and CSS Framework Bulma. Particular emphasis placed on the planning phase of s/w dev, including story boards, git branching and press release presentations! 

  </Card.Description>
</Card.Content>
<Card.Content extra>
<a href="https://github.com/michaelshxw/The-Real-Meal-v2">
<Icon name='github' size="huge" />
                        </a>
                        <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
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