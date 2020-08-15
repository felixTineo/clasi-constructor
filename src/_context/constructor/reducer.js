import {
  PRIMARY_COLOR,
  ON_EDIT,
  UN_EDIT,
  ON_COLOR,
  ON_LOGO,
  ON_HERO,
  ON_ABOUT_BANNER,
  ON_SERVICES,
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
          type: action.payload.type,
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
            visible: action.payload.visible ? action.payload.visible : state.home.hero.visible,
            title: action.payload.title ? action.payload.title : state.home.hero.title,
            background: action.payload.background ? action.payload.background : state.home.hero.background,
            visible: action.payload.visible,
          }),
        })
      })
    case ON_ABOUT_BANNER:
      return Object.assign({}, state, {
        home: Object.assign({}, state.home, {
          about: Object.assign({}, state.home.about, {
            banner: Object.assign({}, state.home.about.banner, {
              visible: action.payload.visible ? action.payload.visible : state.home.about.banner.visible ,
              title: action.payload.title ? action.payload.title : state.home.about.banner.title,
              subTitle: action.payload.subTitle ? action.payload.subTitle : state.home.about.banner.subTitle,
              image: action.payload.image ? action.payload.image : state.home.about.banner.image,
              buttonText: action.payload.buttonText ? action.payload.buttonText : state.home.about.banner.buttonText,
            })
          })
        })
      })
    case ON_SERVICES:
      return Object.assign({}, state, {
        home: Object.assign({}, state.home, {
          services: Object.assign({}, state.home.services, {
            visible: action.payload.visible ? action.payload.visible : state.home.services.visible,
            items: action.payload.items.length ? action.payload.items : state.home.services.items,
          })
        })
      })
  }
}