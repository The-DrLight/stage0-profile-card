function updateTimeInMilliseconds() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    
    if (timeElement) {
        const currentTime = Date.now();
        timeElement.textContent = currentTime;
    }
}

updateTimeInMilliseconds();

setInterval(updateTimeInMilliseconds, 100);
