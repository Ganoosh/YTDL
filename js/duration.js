async function getDuration() {
    var thumbImage = document.getElementById('bigpic');
    urlInput = document.getElementById('urlInput').value;

    await $.getJSON('https://ytdl.ganoosh.repl.co/api/ytdli?url=' + urlInput, function(data) {
        console.log(data.lengthTotal);
        document.getElementById('Duration').innerHTML = "Duration: " + data.lengthTotal;
        document.getElementById('bigpic').src = data.thumbnail_url;
        document.getElementById('title').innerHTML = "Title: " + data.title;

    });
    document.getElementById('multi-menu').style.display = "block";
    document.getElementById('multi-menu1').style.display = "block";
}