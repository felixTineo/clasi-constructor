export const PRIMARY_COLOR = "PRIMARY_COLOR";
export const ON_EDIT = "ON_EDIT";
export const UN_EDIT = "UN_EDIT";
export const ON_COLOR = "HANDLE_COLOR";
export const ON_LOGO = "ON_LOGO";
export const ON_HERO = "ON_HERO";

export const edit = {
  LOGO: "BOTH:LOGO:logo",
  HERO_TITLE: "BOTH:HERO:hero",
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