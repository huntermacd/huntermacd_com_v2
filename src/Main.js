import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { store, mapStateToProps } from './store';
import { AboutMeView } from './AboutMe';
import { SkillsAndSpecialtiesView } from './SkillsAndSpecialties';
import { WorkExamplesView } from './WorkExamples';

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
