import React from 'react';
import { store } from './store';

export class Cursor extends React.Component {
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
