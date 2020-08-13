import {
  PRIMARY_COLOR,
  ON_EDIT,
  UN_EDIT,
  ON_COLOR,
  ON_LOGO,
  ON_HERO,
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
    case ON_LOGO:
      return Object.assign({}, state, {
        main: Object.assign({}, state.main, {
          logo: action.payload,
        })
      });
    case ON_HERO:
      return Object.assign({}, state, {
        home: Object.assign({}, state.home, {
          hero: Object.assign({}, state.home.hero, {
            title: action.payload.title ? action.payload.title : state.home.hero.title,
            background: action.payload.background ? action.payload.background : state.home.hero.background,
            visible: action.payload.visible,
          }),
        })
      })
  }
}