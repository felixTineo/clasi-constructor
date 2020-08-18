export const PRIMARY_COLOR = "PRIMARY_COLOR";
export const ON_EDIT = "ON_EDIT";
export const UN_EDIT = "UN_EDIT";
export const ON_COLOR = "HANDLE_COLOR";
export const ON_LOGO = "ON_LOGO";
export const ON_HERO = "ON_HERO";
export const ON_PROPERTIES = "ON_PROPERTIES";
export const ON_ABOUT_BANNER = "ON_ABOUT_BANNER";
export const ON_SERVICES = "ON_ABOUT_SERVICE";
//export const ON_DELETE_SERVICE = "ON_DELETE_SERVICE";

export const edit = {
  LOGO: "LOGO:logo",
  HERO_TITLE: "HERO:hero",
  PROPERTIES: "PROPERTIES:propiedades",
  ABOUT_BANNER: "ABOUT_BANNER:banner",
  ABOUT_SERVICES: "ABOUT_SERVICES:setvicios",
  REVIEWS: "REVIEWS:reseñas"
}

export const inputs = {
  TEXT: "TEXT",
  IMAGE:"IMAGE",
  BOTH: "BOTH",
}

export const primaryColor = (payload) => ({ type: PRIMARY_COLOR, payload });
export const onEdit = (payload) => ({ type: ON_EDIT, payload })
export const unEdit = () => ({ type: UN_EDIT });
export const onColor = () => ({ type: ON_COLOR });

export const onLogo = (payload) => ({ type: ON_LOGO, payload });
export const onHero = (payload) => ({ type: ON_HERO, payload });
export const onProperties = payload => ({ type: ON_PROPERTIES, payload });
export const onAboutBanner = (payload) => ({ type: ON_ABOUT_BANNER, payload });
export const onServices = (payload) => ({ type: ON_SERVICES, payload });