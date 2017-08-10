## using Redux Thunk middleware

Normal action creators are functions return an action. Action is an object with a 'type' property

Action creators with Thunk returns a function. The function will be called with dispatch

To use redux middleware, we should import 
```
  import { createStore, applyMiddleware } from 'redux';

  <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
  </Provider>
```