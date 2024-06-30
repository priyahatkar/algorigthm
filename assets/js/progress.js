const progress_bar = document.getElementById("progress_bar");
let progress = 0;

let intervalId = setInterval(() => {
    progress++;
    progress_bar.style.width = `${progress}%`;
    progress_bar.innerHTML = `${progress}%`;

    if (progress >= 100) {
        clearInterval(intervalId);
        progress = 0; 
        setTimeout(() => {
        intervalId = setInterval(() => {
            progress++;
            progress_bar.style.width =` ${progress}%`;
            progress_bar.innerHTML = `${progress}%`;
        }, 60000); 
    }, 1000); 
    }
}, 1000);