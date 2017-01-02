import React from 'react';
import { connect } from 'react-redux';
import { store, mapStateToProps } from './store';
import { Cursor } from './Cursor';

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

export const SkillsAndSpecialtiesView = connect(mapStateToProps)(SkillsAndSpecialties);
