window.capture =function capture() {
    let canvas = document.getElementById('canvas');
    let video = document.getElementById('video');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight); 
}

const playImage = new Image();
playImage.src = 'path to image asset';
playImage.onload = () => {
    const startX = (video.videoWidth / 2) - (playImage.width / 2);
    canvas.getContext('2d').drawImage(playImage, startX, startY, playImage.width, playImage.height);
    canvas.toBlob() = (blob) => {
        const img = new Image();
        img.src = window.URL.createObjectUrl(blob);
    }
}