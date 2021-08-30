import { Link } from 'react-router-dom'

function Home() {
    return (<div>
    <section className="showcase-intro">
      <div className="showcase-title">
        <h1>Brendan <br />Lewis</h1>
      </div>
      <div className="showcase-enter">
        <p>
          <Link className="butt-styles" to="/projects">
            BROWSE MY WORK
          </Link>
        </p>
      </div>
    </section>
</div>);
}
export default Home;
