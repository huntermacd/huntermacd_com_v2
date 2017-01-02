export function updateShouldRender(state = { shouldRender: false }, action) {
  switch (action.type) {
    case 'UPDATE_SHOULD_RENDER':
      return { shouldRender: true };
    case 'RESET_SHOULD_RENDER':
      return { shouldRender: false };
    default:
      return state;
  }
}
