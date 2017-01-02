import { createStore } from 'redux';
import { updateShouldRender } from './reducers';

export let store = createStore(updateShouldRender);

export function mapStateToProps(state) {
  return {
    shouldRender: state.shouldRender
  }
}
