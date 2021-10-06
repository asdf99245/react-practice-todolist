import React, { createContext, useReducer, useRef } from 'react';

const initialState = [
  {
    id: 1,
    text: '샤워하기',
    done: false,
  },
  {
    id: 2,
    text: '밥 먹기',
    done: true,
  },
];

const reducer = (state, action) => {
  let idx = undefined,
    tmp = undefined;
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.todo);
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'MOVE_UP_TODO':
      idx = state.findIndex(
        (todo) => JSON.stringify(todo) === JSON.stringify(action.todo)
      );
      if (idx === 0) return state;
      tmp = state[idx - 1];
      return [
        ...state.slice(0, idx - 1),
        action.todo,
        tmp,
        ...state.slice(idx + 1),
      ];
    case 'MOVE_DOWN_TODO':
      idx = state.findIndex(
        (todo) => JSON.stringify(todo) === JSON.stringify(action.todo)
      );
      if (idx === state.length - 1) return state;
      tmp = state[idx + 1];
      return [
        ...state.slice(0, idx),
        tmp,
        action.todo,
        ...state.slice(idx + 2),
      ];
    default:
      return state;
  }
};

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
export const TodoIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentId = useRef(3);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoIdContext.Provider value={currentId}>
          {children}
        </TodoIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
