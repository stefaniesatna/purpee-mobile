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
