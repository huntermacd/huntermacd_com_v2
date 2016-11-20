import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

class Header extends React.Component {
  componentDidMount() {
    this.cursor = document.getElementById('cursor');
    this.cursorBlink = setInterval(() => {
      this.cursor.style.visibility === 'visible' ? this.cursor.style.visibility = 'hidden' : this.cursor.style.visibility = 'visible';
    }, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return(
      <header>
        <p>=> pwd</p>
        <p>/user/huntermacd/website</p>
        <br />
        <p>=> ls</p>
        <nav>
          <ul>
            <li><Link to='/'>about-me.txt</Link></li>
            <li><Link to='skills-and-specialties'>skills-and-specialities.txt</Link></li>
            <li><Link to='work-examples'>work-examples.txt</Link></li>
          </ul>
        </nav>
        <br />
        <p className="prompt">=> <span id="cursor">{ `\u25ae` }</span></p>
        <br />
      </header>
    );
  }
}

const AboutMe = () => {
  return(
    <div>
      <Header />
      <main>
        <section className='about'>
          <h4>about-me.txt</h4>
          <br />
          <div className='headshot'>
            <iframe src='headshot.html'></iframe>
          </div>
          <br />
          <p>
            My name is Hunter MacDermut and I'm a front-end web developer currently living in Boulder, CO. I'm a self-taught programmer, having picked up much of what I know doing contract work with <a href="https://www.caktusgroup.com/">Caktus Group</a> and <a href="http://www.coxmediagroup.com/">Cox Media Group</a> since May 2014. I keep on top of new tools and frameworks by regularly taking courses on <a href="https://teamtreehouse.com/huntermacdermut">Treehouse</a> and <a href="https://www.codeschool.com/users/353167">Code School</a>.
          </p>
          <br />
          <p>
            Prior to getting into web development, I taught guitar lessons for seven and a half years. I enjoy learning new things and find that teaching is the best way to do that.
          </p>
          <br />
          <p>
            Outside of doing computer work, I enjoy skateboarding, practicing the guitar, and playing board and video games.
          </p>
          <br />
          <p>
            More information about my work history can be found here: <a href="https://www.linkedin.com/in/hunter-macdermut-8162b66b">LinkedIn</a>. In addition to the <a href="#">work-examples.txt</a> section, my public repos can be found here: <a href="https://github.com/huntermacd/">GitHub</a>. And I may be reached by email at <a href="mailto:whosebluesanyway@gmail.com">whosebluesanyway@gmail.com</a>.
          </p>
        </section>
        <Footer />
      </main>
    </div>
  );
}

const SkillsAndSpecialties = () => {
  return(
    <div>
      <Header />
      <section className='skills'>
        <h4>skills-and-specialties.txt</h4>
        <br />
        <p>Skills and specialties page.</p>
      </section>
      <Footer />
    </div>
  );
}

const WorkExamples = () => {
  return(
    <div>
      <Header />
      <section className='work'>
        <h4>work-examples.txt</h4>
        <br />
        <p>Work examples page.</p>
      </section>
      <Footer />
    </div>
  );
}

const Footer = () => {
  let date = new Date;
  return(
    <footer>
      <br />
      <p>{ `\u00a9 ${ date.getFullYear() } Hunter MacDermut` }</p>
    </footer>
  );
}

ReactDOM.render((
    <Router history={ hashHistory }>
      <Route path='/' component={ AboutMe } />
      <Route path='/skills-and-specialties' component={ SkillsAndSpecialties } />
      <Route path='/work-examples' component={ WorkExamples } />
    </Router>
  ), document.getElementById('root')
);
