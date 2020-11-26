var div = document.getElementById('result');
var load = document.getElementById('load');
var i = 0;
var count1 = 0;
var count2 = 2;
var xhr;

function startp() {
    div.innerHTML = '';
    load.innerHTML = '';
    i = 0;
    count2 = 2;
    count1 = 0;
    var input = document.getElementById("searchbox").value;
    document.getElementById("result").innerHTML = "";
    xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=YOUR_API_KEY_&limit=40");
    gifloop();
    load.innerHTML += '</br><button onclick="gifloop();">Load More</button>';

}
function gifloop() {
    count2 = count2 + 2;
    xhr.done(function (data) {
        for (i = count1; i < count2; i++) {
            var p = data.data[i].images.original.url;
            div.innerHTML += '<img src="' + p + '" alt="loading" />';
            count1 = count1 + 1;
        }
    });
}