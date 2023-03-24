interface IColor {
  [id: string]: string;
}

const colorMap: IColor = {
  black: "0",
  brown: "1",
  red: "2",
  orange: "3",
  yellow: "4",
  green: "5",
  blue: "6",
  violet: "7",
  grey: "8",
  white: "9",
};

export function decodedValue(colors: string[]): number {
  const firstColor = colors[0];
  const secondColor = colors[1];
  colorMap;

  const str = colorMap[firstColor] + colorMap[secondColor];
  return parseInt(str);
}
