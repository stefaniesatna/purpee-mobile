import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

export const UIColors = {
  white: "#ffffff",
  blueFull: "#00bfeb",
  blueMedium: "#66d9f3",
  blueLight: "#f3fcfe",
  darkPurple: "#a12680",
};

export const defaultFont = {
  fontFamily: "Montserrat_400Regular"
}

export const mainText = {
  ...defaultFont,
  color: UIColors.blueFull,
  fontSize: 24,
};

export const secondaryText = {
  ...defaultFont,
  color: UIColors.blueFull,
  fontSize: 18,
};

export const biggerSecondaryText = {
  ...secondaryText,
  fontSize: 22
}

export const dayHeaderText = {
  ...defaultFont,
  color: UIColors.blueFull,
  width: 50,
  textAlign: "center"
}

export const h1 = {
  ...defaultFont,
  color: UIColors.white,
  textAlign: "center",
  fontSize: 48,
};

export const contentContainer = {
  marginTop: 36,
  width: "100%",
};

export const styleNavigator = {
  height: 83,
};

export const debugging = {
  borderStyle: "solid",
  borderWidth: 2,
  borderColor: "red",
};
