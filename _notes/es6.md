## Key interpolation
  ```
  // action.payload === {prop:'name', value:'ben'}
  // [action.payload.prop] is key interpolation
  return { ...state, [action.payload.prop]: action.payload.value }
  ```

## Transform object to array
  map the {key: values} to [{v1, v2, v3, key}...]
```
  import _ from 'lodash';

  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };  // {shift:'Monday', name:'s', id:'xxxx' }
  });
  return { employees };
```