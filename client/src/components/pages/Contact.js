import { Message, Divider, Header, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Contact() {
    return (<div >
              
              <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />

        <Grid stackable container centered columns="1" textAlign="center" verticalAlign="middle" >

            <Grid.Row>
            <Header as="h3" color="white"><Message color="black"> Name: Brendan Lewis   <Divider hidden/>Location: Perth, WA<Divider hidden/>Email: <Link to="mailto:lewis_brendan@outlook.com"> lewis_brendan@outlook.com </Link> </Message></Header>
            </Grid.Row>
<Grid.Row> <Header as="h2"> <Link to="https://docs.google.com/document/d/1BmqqYQBU_gJC4MhWgm7r5Dqm4ZrA-Z6C/edit?usp=sharing&ouid=113365640444249883892&rtpof=true&sd=true"> Résumé of Brendan Lewis </Link> </Header>

            </Grid.Row>
            <Grid.Row>
<Link to="www.github.com/operationBrass" className="fa fa-github"></Link>

<Link to="www.linkedin.com/in/brendanlewis-brass/" className="fa fa-linkedin"></Link>

<Link to="www.youtube.com" className="fa fa-youtube"></Link>

<Link to="www.facebook.com" className="fa fa-facebook"></Link></Grid.Row>
</Grid>
</div>
    )
}

export default Contact;