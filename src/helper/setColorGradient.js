const setColorGradient = ({ position, colorA, colorB }) => `
background: linear-gradient(${position}, ${colorA},${colorB});
color: transparent;
-webkit-background-clip: text;
`;

export default setColorGradient;
