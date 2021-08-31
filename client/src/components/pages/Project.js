import { Card, Reveal, Image, Icon, Divider, Grid, Container, Message } from 'semantic-ui-react'
import passLogo from '../../images/passgenLogo-2.PNG'
import passwordGen from '../../images/passwordGen.png'
import quiz from '../../images/quiz.PNG'
import quizLogo from '../../images/quizLogo-1.PNG'
import realmeallogo from '../../images/realmealLogo.PNG'
import teamgenlogo from '../../images/teamgen-logo.PNG'
import teamgen from '../../images/teamgen.PNG'
import techblog from '../..//images/techBlog.PNG'
import techbloglogo from '../../images/techblog-logo.PNG'
import weatherForecast from '../../images/weatherForecast.png'
import weatherLogo from '../../images/weatherLogo.PNG'
import realmeal from '../../images/therealmealApp.PNG'

function Project() {
    return (
<div>
      
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />


          
        <Grid stackable container centered columns="2" textAlign="center" verticalAlign="middle" >
          <Grid.Row stretched>
      
            <Grid.Column width={5}>
                  <Reveal animated='move up'>
                <Reveal.Content hidden>
                    <Card fluid>
       <Image className="projectImages" src={passwordGen}/>
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
          <Card.Content extra textAlign="center">
                        <a href="https://github.com/operationBrass/homework-assignment-3">
            <Icon name='github' size="huge" />
                        </a>
                        <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
                        <a href="https://operationbrass.github.io/homework-assignment-3"> <Icon name='eye' size="huge" />     </a>
                  </Card.Content>
                </Card>
                  </Reveal.Content>
                  <Reveal.Content visible>
                    <Image className="setSize" src={passLogo}/>
                    </Reveal.Content>
              </Reveal> </Grid.Column>
            
              <Grid.Column width={5}>

              <Reveal animated='move up'>
        <Reveal.Content hidden>
                    <Card fluid>
                    <Image src={quiz} className="projectImages" />
            <Card.Content id="quiz" >
     
      
        <Card.Header>Code Quiz</Card.Header>
        <Card.Meta>
          <span className='date'>Test your JS knowledge</span>
        </Card.Meta>
          <Card.Description>
          Test your Javascript knowledge with this 5 question Quiz. Utilising bootstrap and jQuery to manage the animated 'carousel' and overall styling, consideration for mobile users and make sure to add your score to the leaderboard!
          </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign="center">
      <a href="https://github.com/operationBrass/homework-assignment-4">
      <Icon textAlign="center" name='github' size="huge" /></a>
      <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
      <a href="https://operationbrass.github.io/homework-assignment-4"> <Icon name='eye' size="huge" />     </a>
            </Card.Content>
          </Card>
          </Reveal.Content>
          <Reveal.Content visible>
                <Image className="setSize" src={quizLogo}/>
              </Reveal.Content>
        </Reveal>

              
                
                
                
          </Grid.Column>

            </Grid.Row>

            <Grid.Row stretched>
      
              <Grid.Column width={5}>
              <Reveal animated='move up'>
              <Reveal.Content hidden>
                    <Card fluid>
                    <Image src={weatherForecast} className="projectImages"  />
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
          <Card.Content extra textAlign="center">
                        <a href="https://github.com/operationBrass/homework-assignment-6">
             <Icon name='github' size="huge" />
                        </a>
                        <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
                        <a href="https://operationbrass.github.io/homework-assignment-6"> <Icon name='eye' size="huge" />     </a>
                  </Card.Content>
                </Card>
                </Reveal.Content>
                <Reveal.Content visible>
                      <Image className="setSize" src={weatherLogo}/>
                    </Reveal.Content>
              </Reveal>
              </Grid.Column>
          
      
              <Grid.Column width={5}>

              <Reveal animated='move up'>
          <Reveal.Content hidden>
                    <Card fluid>
                    <Image src={techblog} className="projectImages" />
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
    <Card.Content extra textAlign="center">
                        <a href="https://github.com/operationBrass/homework-assignment-14">
      <Icon name='github' size="huge" />
                        </a>
                        <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
                        <a href="https://brasstech.herokuapp.com/"> <Icon name='eye' size="huge" />     </a>
            </Card.Content>
          </Card>
            </Reveal.Content>
            <Reveal.Content visible>
                <Image className="setSize" src={techbloglogo}/>
              </Reveal.Content>
        </Reveal>
                

        </Grid.Column>

            </Grid.Row>
            
            <Grid.Row stretched>
      
      <Grid.Column width={5}>
      <Reveal animated='move up'>
      <Reveal.Content hidden>
                    <Card fluid>
                    <Image src={teamgen} className="projectImages"/>
          <Card.Content id="teamprof">
  
    
      <Card.Header>Team Profile</Card.Header>
      <Card.Meta>
        <span className='date'>Manage your teams</span>
      </Card.Meta>
        <Card.Description>
        CLI application takes in employee information and provides a HTML report of the team members. This project being a nice introduction to the Inqurier package in particular.
        <Divider hidden/><Message color="red">This application is command line and has no deployable link.</Message>
                        </Card.Description>
    </Card.Content>
  <Card.Content extra textAlign="center">
    <a href="https://github.com/operationBrass/homework-assignment-10">
    <Icon name='github' size="huge" />

                        </a>
                        <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
                        <Icon name='eye slash' size="huge" />  
          </Card.Content>
        </Card>
        </Reveal.Content>
        <Reveal.Content visible>
              <Image className="setSize" src={teamgenlogo}/>
            </Reveal.Content>
      </Reveal>
      </Grid.Column>
  

      <Grid.Column width={5}>

      <Reveal animated='move up'>
  <Reveal.Content hidden>
                    <Card fluid>
                    <Image src={realmeal} className="projectImages" />
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
<Card.Content extra textAlign="center">
<a href="https://github.com/michaelshxw/The-Real-Meal-v2">
<Icon name='github' size="huge" />
                        </a>
                        <a href="/contact"> <Icon name='question circle outline' size="huge" />     </a>
                        <a href="https://realmealplanning.herokuapp.com/"> <Icon name='eye' size="huge" />     </a>
    </Card.Content>
  </Card>
    </Reveal.Content>
    <Reveal.Content visible>
        <Image className="setSize" src={realmeallogo}/>
      </Reveal.Content>
</Reveal>
        

</Grid.Column>

</Grid.Row>
            </Grid>
            
</div>);
}
                                                
export default Project;