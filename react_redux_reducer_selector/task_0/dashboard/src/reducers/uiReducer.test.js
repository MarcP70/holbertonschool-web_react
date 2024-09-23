import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER
} from '../actions/uiActionTypes';

// Initial state
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

describe('uiReducer', () => {
  // Test 1: No action should return the initial state
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  // Test 2: An unrelated action should return the initial state
  it('should return the initial state when an unrelated action is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initialState);
  });

  // Test 3: DISPLAY_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to true
  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toBe(true);
  });

});
