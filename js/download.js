var serverURL = 'https://ytdl.ganoosh.repl.co';
var urlInput = $("#urlInput").val()

function redirectMp4() {
    window.location.href = `${serverURL}/api/ytdlv?url=${urlInput}`;
}

function redirectMp3() {
    window.location.href = `${serverURL}/api/ytdla?url=${urlInput}`;
}