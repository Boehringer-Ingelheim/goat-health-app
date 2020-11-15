/*
 *
 * GlobalProvider actions
 *
 */

import ActionTypes from './global.constants';

export const setActivePage = (page: string) => ({
  type: ActionTypes.SET_ACTIVE_PAGE,
  payload: page,
});

export const resetApp = () => ({
  type: ActionTypes.RESET_APP,
});
