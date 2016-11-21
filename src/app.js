import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

function updateShouldRender(state = { shouldRender: false }, action) {
  switch (action.type) {
    case 'UPDATE_SHOULD_RENDER':
      return { shouldRender: true };
    case 'RESET_SHOULD_RENDER':
      return { shouldRender: false };
    default:
      return state;
  }
}

let store = createStore(updateShouldRender);

function mapStateToProps(state) {
  return {
    shouldRender: state.shouldRender
  }
}

class AppRoot extends React.Component {
  render() {
    let { header, main, footer } = this.props;

    return(
      <div>
        { header }
        { main }
        { footer }
      </div>
    );
  }
}

const Header = () => {
  return(
    <header>
      <p>=> pwd</p>
      <p>/users/huntermacd/website</p>
      <br />
      <p>=> ls</p>
      <nav>
        <ul>
          <li><Link to='/'>about-me.txt</Link></li>
          <li><Link to='skills-and-specialties'>skills-and-specialties.txt</Link></li>
          <li><Link to='work-examples'>work-examples.txt</Link></li>
        </ul>
      </nav>
      <br />
    </header>
  );
}

class Cursor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: props.section,
      text: []
    }
  }

  componentDidMount() {
    let split = this.state.section.split('');

    let timer = setInterval(() => {
      if (split.length > 0) {
        this.state.text.push(split.shift());
        this.setState({ text: this.state.text });
      } else {
        clearInterval(timer);
        store.dispatch({ type: 'UPDATE_SHOULD_RENDER' });
      }
    }, 50);
  }

  render() {
    return(
      <div>
        <p>=> cat <span>{ this.state.text }</span><span className="cursor">{ `\u25ae` }</span></p>
        <br />
      </div>
    );
  }
}

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    store.dispatch({ type: 'RESET_SHOULD_RENDER' });
  }

  render() {
    return(
      <div>
        <main>
          <Cursor section='about-me.txt' />
          { this.props.shouldRender &&
            <section className='about'>
              <h4>About Me</h4>
              <br />
              <iframe src='headshot.html'></iframe>
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
                More information about my work history can be found here: <a href="https://www.linkedin.com/in/hunter-macdermut-8162b66b">LinkedIn</a>. My public repos can be found here: <a href="https://github.com/huntermacd/">GitHub</a>. And I may be reached by email at <a href="mailto:whosebluesanyway@gmail.com">whosebluesanyway@gmail.com</a>.
              </p>
            </section>
          }
        </main>
      </div>
    );
  }
}

const AboutMeView = connect(mapStateToProps)(AboutMe);

class SkillsAndSpecialties extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    store.dispatch({ type: 'RESET_SHOULD_RENDER' });
  }

  render() {
    return(
      <div>
        <Cursor section='skills-and-specialties.txt' />
        { this.props.shouldRender &&
          <section className='skills'>
            <h4>Skills and Specialties</h4>
            <br />
            <p>Skills and specialties page.</p>
          </section>
        }
      </div>
    );
  }
}

const SkillsAndSpecialtiesView = connect(mapStateToProps)(SkillsAndSpecialties);

class WorkExamples extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    store.dispatch({ type: 'RESET_SHOULD_RENDER' });
  }

  render() {
    return(
      <div>
        <Cursor section='work-examples.txt' />
        { this.props.shouldRender &&
          <section className='work'>
            <h4>Work Examples</h4>
            <br />
            <p>Work examples page.</p>
          </section>
        }
      </div>
    );
  }
}

const WorkExamplesView = connect(mapStateToProps)(WorkExamples);

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
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ AppRoot }>
          <IndexRoute components={{ header: Header, main: AboutMeView, footer: Footer }} />
          <Route path='skills-and-specialties' components={{ header: Header, main: SkillsAndSpecialtiesView, footer: Footer }} />
          <Route path='work-examples' components={{ header: Header, main: WorkExamplesView, footer: Footer }} />
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('root')
);