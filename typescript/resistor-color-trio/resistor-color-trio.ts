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
function reduceUnits(val: number): {reducedVal: number, units: string} {
  let counter = 0
  let reducedVal = val
  while(reducedVal >= 1000) {
    reducedVal = reducedVal/1000
    counter++
  }
  const unitMap = ["ohms", "kiloohms", "megaohms", "gigaohms"]
  const units = unitMap[counter]
  return {reducedVal, units}
}

export function decodedResistorValue(colors: string[]) {
  const firstNumberString = colorMap[colors[0]]
  const secondNumberString = colorMap[colors[1]]
  const factorOf10 = parseInt(colorMap[colors[2]])
  const totalVal = parseInt(firstNumberString + secondNumberString) * Math.pow(10, factorOf10)
  const {reducedVal, units} = reduceUnits(totalVal)

  return `${reducedVal} ${units}`
}
