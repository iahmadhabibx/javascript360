//Detetct dark mode
if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    console.log('Dark mode active');

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    console.log(`Color scheme updated to: ${newColorScheme}`);
});