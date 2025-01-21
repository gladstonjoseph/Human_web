// Mouse movement event for desktop
document.addEventListener("mousemove", function(event) {
    createSmoke(event.pageX, event.pageY);
});

// Touch events for mobile devices
document.addEventListener("touchmove", function(event) {
    // Prevent default scrolling behavior
    event.preventDefault();
    
    // Get touch coordinates
    const touch = event.touches[0];
    createSmoke(touch.pageX, touch.pageY);
}, { passive: false });

// Single touch for mobile devices
document.addEventListener("touchstart", function(event) {
    // Prevent default behavior
    event.preventDefault();
    
    // Get touch coordinates
    const touch = event.touches[0];
    createSmoke(touch.pageX, touch.pageY);
}, { passive: false });

function createSmoke(x, y) {
    const smoke = document.createElement("div");
    smoke.className = "smoke";
    document.body.appendChild(smoke);

    // Random size and opacity for realism
    let size = Math.random() * 20 + 10; // Between 10px and 30px
    smoke.style.width = size + "px";
    smoke.style.height = size + "px";
    smoke.style.left = x + "px";
    smoke.style.top = y + "px";
    smoke.style.opacity = Math.random() * 0.5 + 0.5; // 50% - 100%

    // Random animation duration
    let duration = Math.random() * 1.5 + 0.5; // Between 0.5s and 2s
    smoke.style.animationDuration = duration + "s";

    // Remove element after animation
    setTimeout(() => {
        smoke.remove();
    }, duration * 1000);
}
