﻿const button1 = document.getElementById("getGames");
const url = 'http://localhost:49866/api/games/';

let games = {
    next: (value) => {
        console.log(value);
        const list = value.response;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            for (var field in item) {
                document.getElementById("results").innerHTML += field +
                    " : " + item[field] + ", "
            }
            document.getElementById("results").innerHTML += "<br>"
        }
    }
}

function getGames() {
    console.log("working");
    Rx.Observable.ajax(url).subscribe(games);
}
