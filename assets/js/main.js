// assets/js/main.js

// Existing code for Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// --- Add this new code below ---

// Code for the background video plugin (requires jQuery)
$(document).ready(function() {
  // Find the video element and activate the plugin
  $('.jquery-background-video').backgroundVideo();
});