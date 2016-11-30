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
          <li><Link to='/'>about-me.html</Link></li>
          <li><Link to='skills-and-specialties'>skills-and-specialties.html</Link></li>
          <li><Link to='work-examples'>work-examples.html</Link></li>
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
          <Cursor section='about-me.html' />
          { this.props.shouldRender &&
            <section>
              <h1>About Me</h1>
              <br />
              <img src='imgs/huntermacd.png' alt='A portrait of the developer as a young man.' />
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
        <Cursor section='skills-and-specialties.html' />
        { this.props.shouldRender &&
          <section>
            <h1>Skills and Specialties</h1>
            <br />
            <p>I specialize in front-end web technologies, with a focus on turning design comps into functional web pages. I have experience working with the following:</p>
            <br />
            <div>
              <div className='column languages'>
                <h2>Languages</h2>
                <br />
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript (ECMAScript 5 &amp; 6)</li>
                  <li>Python</li>
                  <li>Elm</li>
                </ul>
              </div>
              <br />
              <div className='column etc'>
                <h2>Libraries, Frameworks, Build Tools, Version Control, APIs, etc.</h2>
                <br />
                <div className='sub-column'>
                  <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>GitLab</li>
                    <br />
                    <li>Gulp</li>
                    <li>Grunt</li>
                    <li>Webpack</li>
                    <li>Browserify</li>
                    <li>Babel</li>
                    <br />
                    <li>Sass</li>
                    <li>Less</li>
                    <li>Bootstrap</li>
                    <li>Post CSS</li>
                    <br />
                    <li>Node</li>
                    <li>Flask</li>
                    <li>Django</li>
                  </ul>
                </div>
                <div className='sub-column'>
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>jQuery</li>
                    <br />
                    <li>Web Audio</li>
                    <li>Geolocation</li>
                    <li>Google Maps</li>
                    <li>Local Storage</li>
                    <br />
                    <li>Firebase</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Heroku</li>
                    <li>AWS</li>
                    <br />
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                  </ul>
                </div>
              </div>
              <br />
              <p>Additionally, I have experience following Agile development processes, which include daily stand-up meetings, grooming and pointing user stories/tickets, and tracking tasks and progress using JIRA and Version One.</p>
            </div>
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
        <Cursor section='work-examples.html' />
        { this.props.shouldRender &&
          <section className='work'>
            <h1>Work Examples</h1>
            <br />
            <article>
              <h2>ex. 01: duckling</h2>
              <br />
              <img src='imgs/duckling.png' alt={`Logo for Caktus Group's social gathering app, Duckling.`} />
              <br />
              <a href='https://duckling.us/'>duckling.us/</a>
              <br />
              <p className='technologies'>CSS, JavaScript, Python, Django, Google Maps API</p>
              <br />
              <p>{`While interning for Caktus Group, I was in charge of making improvements to their social gathering app called Duckling, which they've used at numerous conferences to show off their work. My contributions include integrating Google Maps into the Django admin and creating an embeddable widget for convention websites to advertise the app.`}</p>
            </article>
            <hr />
            <article>
              <h2>ex. 02: Cox Media Group</h2>
              <br />
              <img src='imgs/cox-media-group.png' alt='Cox Media Group logo.' />
              <br />
              <a href='http://membercenter.ajc.com/'>membercenter.ajc.com/</a>
              <br />
              <p className='technologies'>HTML, CSS, JavaScript, Python, Django, React, Redux, AWS</p>
              <br />
              <p>{`My contract work for Cox Media Group included HTML, CSS, Python, and Django for almost 2 years, working on their Medley content management system. This single, enormous Django app served numerous newspapers and television and radio stations across the country. The majority of my work went into implementing the redesign of their Member Center, which is where users can manage their personal information, newspaper subscriptions, and text notifications.`}</p>
              <br />
              <p>{`In early 2016 the Medley project was replaced by a new Java-based system. I was one of three developers chosen to head up the Member Center as-a-service project. This JavaScript/React application is linked to from all of CMG's properties and is customized per property. This project launched in September 2016 and leverages the latest JavaScript version (ECMAScript 6) and libraries (React, Redux).`}</p>
            </article>
            <hr />
            <article>
              <h2>ex. 03: elm-memory</h2>
              <br />
              <img src='imgs/elm-memory.png' alt='Screenshot of Elm memory matching game logo.' />
              <br />
              <a href='https://huntermacd.github.io/elm-memory/'>huntermacd.github.io/elm-memory/</a>
              <br />
              <p className='technologies'>HTML, CSS, Elm</p>
              <br />
              <p>{`This is my first complete Elm project. I appreciate Elm's notion of global app state and reactive UI. Dabbling with Elm has improved my understanding of the React/Redux libraries and has been an enjoyable introduction to functional programming.`}</p>
            </article>
            <hr />
            <article>
              <h2>ex. 04: rag_and_bone</h2>
              <br />
              <img src='imgs/rag_and_bone.png' alt='Screenshot of sleeping dude from white noise app.' />
              <br />
              <a href='https://huntermacd.github.io/rag_and_bone/'>huntermacd.github.io/rag_and_bone/</a>
              <br />
              <p className='technologies'>HTML, CSS, JavaScript, Web Audio API</p>
              <br />
              <p>{`You never know when you'll need some white noise to block out the unwanted sounds around you, so I created this simple white noise application. Click the little dude and he'll go to sleep. Using the Web Audio API, this app generates genuine white noise while a sleeping animation plays. This was a fun introduction to CSS animations for me.`}</p>
            </article>
            <hr />
            <article>
              <h2>ex. 05: dont_touch_no_no</h2>
              <br />
              <img src='imgs/dont_touch_no_no.png' alt='Screenshot of bullet hell-style game built with Phaser JavaScript game framework.' />
              <br />
              <a href='http://huntermacd.github.io/dont_touch_no_no/'>huntermacd.github.io/dont_touch_no_no/</a>
              <br />
              <p className='technologies'>JavaScript, Phaser</p>
              <br />
              <p>{`This is a small HTML5 game I built using the Phaser JavaScript game framework. The game is designed to scale to whatever size screen on which you'd like to play it. It's Helix meets Super Hexagon meets bullet hell. Spin around to reduce the number of baddies coming at you and survive as long as you can!`}</p>
            </article>
            <hr />
            <article>
              <h2>ex. 06: synth</h2>
              <br />
              <img src='imgs/synth.png' alt='Screenshot of mobile synthesizer web app.' />
              <br />
              <a href='http://huntermacd.github.io/synth/'>huntermacd.github.io/synth/</a>
              <br />
              <p className='technologies'>HTML, CSS, JavaScript, Web Audio API</p>
              <br />
              <p>{`One of the more intriguing promises of the mobile web for me is the possibility of carrying a musical instrument around with you wherever you go. This synthesizer was designed for mobile devices and uses the Web Audio API, with your input via a waveform selector, a filter, an ADSR, and an LFO, to synthesize sounds on the go. Turn up the volume and drag your finger across the boxes at the bottom to make some music!`}</p>
            </article>
            <br/>
            <p>See more examples of my work on <a href="https://github.com/huntermacd/">GitHub</a>.</p>
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
