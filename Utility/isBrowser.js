const isBrowser = () => ![typeof window, typeof document].includes('undefined');

console.log(isBrowser());