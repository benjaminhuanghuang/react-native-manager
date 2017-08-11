## Key interpolation
  ```
  // action.payload === {prop:'name', value:'ben'}
  // [action.payload.prop] is key interpolation
  return { ...state, [action.payload.prop]: action.payload.value }
  ```

## Transform object to array
```
  import _ from 'lodash';

  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };  // {shift:'Monday', name:'s', id:'xxxx' }
  });
  return { employees };
```