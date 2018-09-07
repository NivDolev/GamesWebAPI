var siteUrl = 'http://localhost:49866/api/games/';

function getGames() {
    clearResults();
    $.ajax({
        url: siteUrl
    }).then(
        function (data) {
            var list = data.sort();
            console.log(data)
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                for (var field in item) {
                    $('#results').append(" " + field +
                        " : " + item[field] + ", ")
                }
                $('#results').append("<br>")
            }
        }
    );
}

function getGameById() {
    var id = $("#inputGameId").val();
    console.log(id);
    clearForm();
    $.ajax({
        url: siteUrl + id
    }).then(
        function (game) {
            console.log(game)
            $("#gameId").val(game.Id);
            $("#gameName").val(game.Game_Name);
            $("#playerOne").val(game.Player_One);
            $("#playerTwo").val(game.Player_Two);
            $("#winner").val(game.Winner);
        }
    );
}

function getGameByPlayer() {
    var name = $("#inputPlayerName").val();
    console.log(name);
    clearResults();
    $.ajax({
        url: siteUrl + name
    }).then(
        function (data) {
            console.log(data)
            $("#inputPlayerName").val("");
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                for (var field in item) {
                    $('#results').append(" " + field +
                        " : " + item[field] + ", ")
                }
                $('#results').append("<br>")
            }
        }
    );
}

function createGame() {
    var game = {
        Game_Name: $("#gameName").val(),
        Player_One: $("#playerOne").val(),
        Player_Two: $("#playerTwo").val(),
        Winner: $("#winner").val()
    }
    var ajaxPostDataConfig = {
        type: "POST",
        url: siteUrl,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(game)
    }

    $.ajax(ajaxPostDataConfig).then(
        function (data) {
            console.log(data)
        }
    ).fail(
        function (err) {
            console.error(err)
        }
    )
}

function updateGame() {
    var id = $("#inputGameId").val()
    var game = {
        Id: id,
        Game_Name: $("#gameName").val(),
        Player_One: $("#playerOne").val(),
        Player_Two: $("#playerTwo").val(),
        Winner: $("#winner").val()
    }
    var ajaxPostDataConfig = {
        type: "PUT",
        url: siteUrl + id,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(game)
    }

    $.ajax(ajaxPostDataConfig).then(
        function (data) {
            console.log(data)
        }
    ).fail(
        function (err) {
            console.error(err)
        }
    )
}

function deleteGameById() {
    var the_id = $("#inputGameId").val()
    var ajaxPostDataConfig = {
        type: "DELETE",
        url: siteUrl + the_id,
    }

    $.ajax(ajaxPostDataConfig).then(
        function (resp) {
            console.log(resp)
        }
    ).fail(
        function (err) {
            console.error(err)
        }
    )
}


function clearResults() {
    $("#results").text("");
}

function clearForm() {
    $("#gameId").val("");
    $("#gameName").val("");
    $("#playerOne").val("");
    $("#playerTwo").val("");
    $("#winner").val("");
}