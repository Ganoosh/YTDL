async function getDuration() {
    var thumbImage = $("#bigpig");
    var urlInput = $("#urlInput").val()

    await $.getJSON('https://ytdl.ganoosh.repl.co/api/ytdli?url=' + urlInput, function(data) {
        $("#Duration").html("Duration: " + data.lengthTotal);
        $("#bigpic").attr('src', data.thumbnail_url);
        $("#title").html("Title: " + data.title);

    });
    $("#multi-menu").css("display", "block");
    $("#multi-menu1").css("display", "block");
}