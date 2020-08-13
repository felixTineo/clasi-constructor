import {
  PRIMARY_COLOR,
  edit,
  inputs,
  ON_EDIT,
  UN_EDIT,
  ON_COLOR,
} from './actions';

export default (state, action) => {
  switch(action.type){
    case PRIMARY_COLOR:
      return Object.assign({}, state, {
        main: Object.assign({}, state.main, {  primaryColor: action.payload }),
       });
    case ON_EDIT:
      return Object.assign({}, state, {
        edit: Object.assign({}, state.edit, {
          visible: true,
          input: action.payload.input,
          nextAction: action.payload.nextAction,
          title: action.payload.title,
        })
      })
    case UN_EDIT:
      return Object.assign({}, state, {
        edit: Object.assign({}, state.edit, { visible: false }),
      });
    case ON_COLOR:
      return Object.assign({}, state, {
        color: !state.color,
      });
    case edit.LOGO:
      return Object.assign({}, state, {
        edit: Object.assign({}, state.edit, { visible: true, type: inputs.TEXT }),
      });
  }
}