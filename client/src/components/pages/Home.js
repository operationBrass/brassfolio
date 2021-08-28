
function Home() {
    return (<div>

<header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <ul>
            <li><a href="#"> Home </a></li>
            <li><a href="./Assets/about-me.html"> About </a></li>
            <li><a href="./Assets/projects.html"> Projects</a></li>
            <li><a href="./Assets/contact.html"> Contact </a></li>
          </ul>
        </nav>
      </div>
    </header>

    <section className="showcase-intro">
      <div className="showcase-title">
        <h1>Brendan <br />Lewis</h1>
      </div>
      <div className="showcase-enter">
        <p>
          <a href="./Assets/projects.html" className="butt-styles">
            VIEW MY WORK
          </a>
        </p>
      </div>
    </section>
    <footer><p></p> </footer>
</div>);
}
export default Home;
