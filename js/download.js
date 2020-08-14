let serverURL = 'https://ytdl.ganoosh.repl.co';
urlInput = document.getElementById('urlInput').value;

function redirectMp4() {
    console.log(urlInput)
    window.location.href = `${serverURL}/api/ytdlv?url=${urlInput}`;
}

function redirectMp3() {
    console.log(urlInput)
    window.location.href = `${serverURL}/api/ytdla?url=${urlInput}`;
}