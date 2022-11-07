import { defaultStyle } from "../../../constants/defaultProfile";
import { freeze } from "../../../utils/freeze";

const themes = [
  {
    name: "xodo",
    id: "3082492f-5d87-48c4-8152-9ba37d829cd5",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdc_pViMeba37-qxWAWLBm1Bn5XeQWZoadWA&usqp=CAU",
    colors: {
      primaryColor: "#344e41",
      secondaryColor: "#363537",
    },
  },
  {
    name: "u4c",
    id: "3082492f-5d87-48c4-8152-9ba37d829cd5",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdc_pViMeba37-qxWAWLBm1Bn5XeQWZoadWA&usqp=CAU",
    colors: {
      primaryColor: "#4c2d6e",
      secondaryColor: "#363537",
    },
  },
  {
    name: "hinova",
    id: "3082492f-5d87-48c4-8152-9ba37d829cd5",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdc_pViMeba37-qxWAWLBm1Bn5XeQWZoadWA&usqp=CAU",
    colors: {
      primaryColor: "#00ea00",
      secondaryColor: "#363537",
    },
  },
];

export const getTheme = async (domain) => {
  await freeze();

  if (domain) {
    return themes.find((theme) => theme.name === domain) || defaultStyle;
  }

  return undefined;
};
