import { Link } from 'react-router-dom'
import { Header, Button, Icon,  Grid} from 'semantic-ui-react'

function Home() {
  return (<div style={{
    Height: '100vh', marginTop:"8%"}}>
<Grid textAlign="center" verticalAlign="middle" >
        <Grid.Row>
          <Grid.Column>
        <Link to="/about"><Header as="h1" inverted color="olive">Brendan Lewis</Header></Link>
          </Grid.Column>
          <Grid.Column>
          <Link className="butt-styles" to="/projects">
          <Header as="h1" inverted color="olive"> Web Developer </Header> 
            </Link>
          </Grid.Column>
            
      </Grid.Row>
      
      <Grid.Row>
    <a href="http://wwww.facebook.com"> 
    <Button color='facebook'>
            <Icon name='facebook' /> Facebook
            </Button>
      </a>
      <a href="http://www.twitter.com"><Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button> </a>
    <a href="http://www.linkedin.com"><Button color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button> </a>
    <a href="http://www.youtube.com"><Button color='youtube'>
      <Icon name='youtube' /> YouTube
          </Button> </a>
        </Grid.Row>
      </Grid>
      </div>);
}
export default Home;
