import { freeze } from "../../../utils/freeze";

export const getTheme = async (domain) => {
  await freeze();

  if (domain) {
    return {
      id: "3082492f-5d87-48c4-8152-9ba37d829cd5",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdc_pViMeba37-qxWAWLBm1Bn5XeQWZoadWA&usqp=CAU",
      colors: {
        primaryColor: "#344e41",
        secondaryColor: "#363537",
      },
    };
  }

  return undefined;
};
