// Theme Toggle Functionality
(function() {
  const STORAGE_KEY = 'theme-preference';

  // Get theme preference from localStorage or system preference
  function getThemePreference() {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme) {
      return storedTheme;
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Set theme on document
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update toggle button state
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  // Initialize theme immediately (before DOM loads to prevent flash)
  const initialTheme = getThemePreference();
  document.documentElement.setAttribute('data-theme', initialTheme);

  // Setup toggle button after DOM loads
  document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('theme-toggle');

    if (toggle) {
      // Set initial state
      setTheme(getThemePreference());

      // Toggle theme on click
      toggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      });
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  });
})();
