export const PRIMARY_COLOR = "PRIMARY_COLOR";
export const ON_EDIT = "ON_EDIT";
export const UN_EDIT = "UN_EDIT";
export const ON_COLOR = "HANDLE_COLOR";

export const edit = {
  LOGO: "TEXT:LOGO:logo",
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

export const logo = () => ({ type: edit.LOGO, payload: inputs.TEXT });
export const hero = () => ({ type: edit.HERO_TITLE, payload: inputs.BOTH });