const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

// Examples
const res1 = RGBToHex(255, 255, 255); // ffffff
const res2 = RGBToHex(192, 200, 255); // c0c8ff

console.log(res1, res2);