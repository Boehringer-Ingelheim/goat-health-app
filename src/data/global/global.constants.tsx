/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 */

enum ActionTypes {
  RESET_APP = 'app/global/RESET_APP',
  SET_ACTIVE_PAGE = 'app/global/SET_ACTIVE_PAGE',
}

export default ActionTypes;
