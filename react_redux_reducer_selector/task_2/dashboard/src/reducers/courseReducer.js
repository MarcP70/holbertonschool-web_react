import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// The default state should be an empty array
const initialState = [];

// Reducer function for courses
export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({
        ...course,
        isSelected: false,
      }));

    case SELECT_COURSE:
      return state.map((course) =>
        course.id === action.index ? { ...course, isSelected: true } : course
      );

    case UNSELECT_COURSE:
      return state.map((course) =>
        course.id === action.index ? { ...course, isSelected: false } : course
      );

    default:
      return state;
  }
}

export default courseReducer;
