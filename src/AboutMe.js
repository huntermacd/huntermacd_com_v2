import React from 'react';
import { connect } from 'react-redux';
import { store, mapStateToProps } from './store';
import { Cursor } from './Cursor';

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
                My name is Hunter MacDermut and I'm a front-end web developer in Boulder, CO. I'm a self-taught programmer, having picked up much of what I know doing contract work with <a href="https://www.caktusgroup.com/">Caktus Group</a> and <a href="http://www.coxmediagroup.com/">Cox Media Group</a> since May 2014. I keep on top of new tools and frameworks by regularly taking courses on <a href="https://teamtreehouse.com/huntermacdermut">Treehouse</a> and <a href="https://www.codeschool.com/users/353167">Code School</a>.
              </p>
              <br />
              <p>
                Prior to getting into web development, I taught guitar lessons for 7 and a half years. I enjoy learning new things and find that teaching is the best way to do that.
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

export const AboutMeView = connect(mapStateToProps)(AboutMe);
