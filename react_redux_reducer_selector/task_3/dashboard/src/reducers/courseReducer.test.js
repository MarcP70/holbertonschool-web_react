import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// Test data for courses
const courses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('courseReducer', () => {
  it('should return the default state (empty array) when no action is passed', () => {
    const result = courseReducer(undefined, {});
    expect(result).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS and return the correct state', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: courses,
    };
    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    const result = courseReducer(undefined, action);
    expect(result).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE and update the isSelected field of the right course', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    const result = courseReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE and update the isSelected field of the right course', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };

    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    const result = courseReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
});
