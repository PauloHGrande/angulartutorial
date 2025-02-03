import { CanDeactivateFn } from '@angular/router';

export const authdGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
