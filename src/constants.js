const title = 'KN Animal Rescue';
const titleShort = 'KN AR';

const {
  VITE_API_PROTOCOL: API_PROTOCOL,
  VITE_API_SERVER: SERVER_PORT,
  VITE_API_PORT: SERVER_URL
} = import.meta.env;
const urlApi = `${API_PROTOCOL}${SERVER_PORT}:${SERVER_URL}/`

const attrAnimalCol01 = ['bday', 'species', 'breed', 'colorFur'];
const attrAnimalCol02 = ['eyes', 'size', 'sizeFur'];

const Species = {
  CAT: 'cat',
  DOG: 'dog',
  COW: 'cow',
}

const Sex = {
  MALE: 'male',
  FEMALE: 'female',
}

const ColorFur = {
  BLACK: 'black',
  WHITE: 'white',
  GRAY: 'gray',
  RED: 'red',
  BLUE: 'blue',
  BROWN: 'brown',
  DARK_BROWN: 'dark_brown',
  BLONDE: 'blonde',
}

const ColorEyes = {
  BLUE: 'blue',
  GREEN: 'green',
  YELLOW: 'yellow',
  BROWN: 'brown',
  RED: 'red',
}

const Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

const SizeFur = {
  NONE: 'none',
  SHORT: 'short',
  LARGE: 'large',
}

const socialTwitter = {
  name: 'Twitter',
  url: 'https://twitter.com/KodenekoFront',
  icon: 'mdi-twitter',
};
const socialGithub = {
  name: 'Github',
  url: 'https://github.com/kode-neko',
  icon: 'mdi-github',
};
const socialLinkedin = {
  name: 'LinkedIn',
  url: 'https://es.linkedin.com/',
  icon: 'mdi-linkedin',
};

const socialList = [socialTwitter, socialGithub, socialLinkedin];
const limitListRest = 5;

export {
  title,
  titleShort,
  urlApi,

  Species,
  Sex,
  ColorFur,
  ColorEyes,
  Size,
  SizeFur,
  
  socialList,
  limitListRest,
  attrAnimalCol01,
  attrAnimalCol02
};
