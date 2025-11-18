// Immediately invoked function to set the theme on initial load
(() => {
    // Check for saved theme in localStorage or system preference
    if (localStorage.getItem('theme') === 'light' || (!('theme' in localStorage) && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
})();

// Use event delegation to handle the theme toggle click.
// This is more robust as it doesn't depend on DOMContentLoaded.
document.addEventListener('click', (event) => {
    // The user might click on the SVG inside the button, so we use `closest`
    // to find the button element.
    const themeToggleButton = event.target.closest('#theme-toggle');
    
    if (themeToggleButton) {
        // Toggle the 'dark' class on the <html> element
        document.documentElement.classList.toggle('dark');

        // Update localStorage with the new theme preference
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }
});
