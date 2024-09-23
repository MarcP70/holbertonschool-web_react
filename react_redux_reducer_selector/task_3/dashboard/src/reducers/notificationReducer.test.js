import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const notifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New data available" },
  ];

  it('should return the default state when no action is passed', () => {
    const result = notificationReducer(undefined, {});
    expect(result).toEqual({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: []
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and return the correct state', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    };

    const expectedState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };

    const result = notificationReducer(undefined, action);
    expect(result).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ and update the correct notification', () => {
    const initialState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const expectedState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: true, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };

    const result = notificationReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER and update the filter', () => {
    const initialState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [],
    };

    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };

    const expectedState = {
      filter: NotificationTypeFilters.URGENT,
      notifications: [],
    };

    const result = notificationReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
});
