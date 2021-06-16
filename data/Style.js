export const UIColors = {
  white: "#ffffff",
  blueFull: "#00bfeb",
  blueMedium: "#66d9f3",
  blueLight: "#f3fcfe",
  darkPurple: "#a12680",
};

export const mainText = {
  color: UIColors.blueFull,
  fontSize: 24,
  fontFamily: "Helvetica"
};

export const secondaryText = {
  color: UIColors.blueFull,
  fontSize: 18,
  fontFamily: "Helvetica"
};

export const biggerSecondaryText = {
  ...secondaryText,
  fontSize: 22
}

export const h1 = {
  color: UIColors.white,
  textAlign: "center",
  fontSize: 48,
  fontWeight: "400",
  fontFamily: "Helvetica",
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
