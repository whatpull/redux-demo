// [액션타입]
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// [기타]
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// [액션생성자] ADD_TODO
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

// [액션생성자] TOGGLE_TODO
export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

// [액션생성자] SET_VISIBILITY_FILTER
export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}