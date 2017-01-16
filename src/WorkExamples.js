import React from 'react';
import { connect } from 'react-redux';
import { store, mapStateToProps } from './store';
import { Cursor } from './Cursor';

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
            <h1>Client Work:</h1>
            <br />
            <article>
              <h2>ex. 01: Member Center, Cox Media Group</h2>
              <br />
              <img src='../imgs/mc/mc_logo.png' alt={`Cox Media Group logo.`} />
              <br />
              <p className='technologies'>HTML, CSS, Sass, JavaScript, React, Redux, Express, Gulp, Babel</p>
              <br />
              <p>{`I worked for Cox Media Group from September 2014 to November 2016, principally on their Member Center application. This app began as a section of their various newspaper, television, and radio homepages where users could manage their profile info, newsletter subscriptions, and SMS alerts. In April 2016, as their Python/Django-based CMS was being replaced, I was 1 of 3 developers chosen to spearhead the Member Center-as-a-service project, which would recreate Member Center as a standalone app to which any Cox property could link their users.`}</p>
              <br />
              <img src='../imgs/mc/mc_loginmodal.png' alt={`Member Center login modal.`} />
              <br />
              <p>{`My main contribution was working with the design team to match their comps. We used Sass on this project and kept the .scss file right alongside the matching component so we always knew to what component the styles would be applied.`}</p>
              <br />
              <img src='../imgs/mc/mc_youraccount_mobile.png' alt={`Member Center account manage page on the small screen.`} />
              <br />
              <p>{`This application is fully responsive and leverages React's strengths in building single-page apps. It was challenging meeting business desires to offer different experiences on larger screens than on smaller screens. For example, the accordion nav shown above is replaced with a hamburger drop-down menu on wider screens.`}</p>
              <br />
              <img src='../imgs/mc/mc_formvalidation.png' alt={`Member Center mobile number edit form with validation.`} />
              <br />
              <p>{`I was in charge of wiring-up form validation on the various user info inputs across the app. This involved working with third-party user-management service Janrain, and in the case of the mobile phone input, also with mGage. As the user types we're checking first for proper length and formatting, then we ping the mGage API to determine if the number is a valid, connected one before allowing the user to save.`}</p>
              <br />
              <img src='../imgs/mc/mc_highschoolsports.png' alt={`Member Center high school sports search widget.`} />
              <br />
              <p>{`Another task of mine that involved working with JavaScript was getting the high school sports search widget in place. We decided to use a pre-written predictive search React component. I rewrote this component in ECMAScript 6, made modifications to limit the number of results shown, highlight where in each result the user's query was found, and styled the whole thing to match design comps and UX specifications.`}</p>
              <br />
              <p>{`Member Center launched successfully in September 2016.`}</p>
            </article>
            <hr />
            <h1>Side Projects:</h1>
            <br />
            <article>
              <h2>ex. 01: huntermacd_com</h2>
              <br />
              <img src='../imgs/huntermacd_com.png' alt={`"HM" logo for Hunter MacDermut's blog.`} />
              <br />
              <p>(version 1)</p>
              <a href='https://github.com/huntermacd/huntermacd_com'>github.com/huntermacd/huntermacd_com</a>
              <br />
              <p className='technologies'>HTML, CSS, JavaScript, Express, MongoDB</p>
              <br />
              <p>(version 2)</p>
              <a href='https://github.com/huntermacd/huntermacd_com_v2'>github.com/huntermacd/huntermacd_com_v2</a>
              <br />
              <p className='technologies'>HTML, CSS, JavaScript, React, Redux, Gulp, Babel</p>
              <br />
              <p>{`My personal website and blog was my first experience building a full-stack JavaScript application. I used the (now-defunct) Swig templating engine for the front-end, Node/Express for the server-side code, and MongoDB as a data-store. I never quite developed as a blogger, however, and have since replaced this site with a new version.`}</p>
              <br />
              <p>{`Version 2 of my personal website (which you're looking at right now) is a React/Redux-powered application built using ECMAScript 6, Babel, Gulp, and Yarn. The design is meant to replicate working on the command line. Clicking a link at the top will fire-off some JavaScript to simulate typing in a filename and hitting the return key.`}</p>
              <br />
              <p>{`This latest version is representative of the work I did on Cox Media Group's Member Center project from April to November of 2016.`}</p>
            </article>
            <hr />
            <article>
              <h2>ex. 02: elm-memory</h2>
              <br />
              <img src='../imgs/elm-memory.png' alt='Screenshot of Elm memory matching game logo.' />
              <br />
              <a href='https://huntermacd.github.io/elm-memory/'>huntermacd.github.io/elm-memory/</a>
              <br />
              <p className='technologies'>HTML, CSS, Elm</p>
              <br />
              <p>{`This is my first complete Elm project. I appreciate Elm's notion of global app state and reactive UI. Dabbling with Elm has improved my understanding of the React/Redux libraries and has been an enjoyable introduction to functional programming.`}</p>
              <br />
              <p>{`I completed a salary transparency calculator for Caktus Group in December 2016; the first Elm project in Caktus' history.`}</p>
            </article>
            <hr />
            <article>
              <h2>ex. 03: rag_and_bone</h2>
              <br />
              <img src='../imgs/rag_and_bone.png' alt='Screenshot of sleeping dude from white noise app.' />
              <br />
              <a href='https://huntermacd.github.io/rag_and_bone/'>huntermacd.github.io/rag_and_bone/</a>
              <br />
              <p className='technologies'>HTML, CSS, JavaScript, Web Audio API</p>
              <br />
              <p>{`You never know when you'll need some white noise to block out the unwanted sounds around you, so I created this simple white noise application. Click the little dude and he'll go to sleep. Using the Web Audio API, this app generates genuine white noise while a sleeping animation plays. This was a fun introduction to CSS animations for me.`}</p>
            </article>
            <hr />
            <article>
              <h2>ex. 04: dont_touch_no_no</h2>
              <br />
              <img src='../imgs/dont_touch_no_no.png' alt='Screenshot of bullet hell-style game built with Phaser JavaScript game framework.' />
              <br />
              <a href='http://huntermacd.github.io/dont_touch_no_no/'>huntermacd.github.io/dont_touch_no_no/</a>
              <br />
              <p className='technologies'>JavaScript, Phaser</p>
              <br />
              <p>{`This is a small HTML5 game I built using the Phaser JavaScript game framework. The game is designed to scale to whatever size screen on which you'd like to play it. It's Helix meets Super Hexagon meets bullet hell. Spin around to reduce the number of baddies coming at you and survive as long as you can!`}</p>
            </article>
            <hr />
            <article>
              <h2>ex. 05: synth</h2>
              <br />
              <img src='../imgs/synth.png' alt='Screenshot of mobile synthesizer web app.' />
              <br />
              <a href='http://huntermacd.github.io/synth/'>huntermacd.github.io/synth/</a>
              <br />
              <p className='technologies'>HTML, CSS, JavaScript, Web Audio API</p>
              <br />
              <p>{`An intriguing promise of the mobile web for me is the possibility of carrying a musical instrument around with you wherever you go. This synthesizer was designed for mobile devices and uses the Web Audio API, with your input via a waveform selector, a filter, an ADSR, and an LFO, to synthesize sounds on the go. Turn up the volume and drag your finger across the boxes at the bottom to make some music!`}</p>
            </article>
            <hr />
            <article>
              <h2>ex. 06: North Carolina Pipper Peeper</h2>
              <br />
              <img src='../imgs/ncpp/ncpp.jpg' alt='Picture of a rose-breasted grosbeak.' />
              <br />
              <a href='http://ncpipperpeeper.herokuapp.com/'>ncpipperpeeper.herokuapp.com/</a>
              <br />
              <p className='technologies'>HTML, CSS, Python, Django, Heroku</p>
              <br />
              <p>{`During my internship at Caktus Group and throughout the first two years with Cox Media Group I worked on Python/Django apps. The North Carolina Pipper Peeper is a bird-watching app I built in Django as a showcase of what I learned during my internship. This was my first experience building and deploying a Django app from scratch.`}</p>
            </article>
            <br/>
            <p>See more examples of my work on <a href="https://github.com/huntermacd/">GitHub</a>.</p>
          </section>
        }
      </div>
    );
  }
}

export const WorkExamplesView = connect(mapStateToProps)(WorkExamples);
