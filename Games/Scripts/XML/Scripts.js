var url = 'http://localhost:49866/api/games/';

function getGames() {
	var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        clearResults();
        clearForm();
        var list = JSON.parse(req.response).sort();
        console.log(req.reponse)
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            for (var field in item) {
                document.getElementById("results").innerHTML += field +
                    " : " + item[field] + ", "
            }
            document.getElementById("results").innerHTML += "<br>"
        }
    }
	req.onerror = function () {
        alert('error');
	}
    req.send();
}

function getGameById() {
	var id = document.getElementById("inputGameId");
	var req = new XMLHttpRequest();
    req.open('GET', url + id.value);
	req.onload = function () {
        clearResults();
        clearForm();
        id.value = "";
        var game = JSON.parse(req.response);
        console.log(game);
        document.getElementById("gameId").value = game['Id'];
        document.getElementById("gameName").value = game['Game_Name'];
        document.getElementById("playerOne").value = game['Player_One'];
        document.getElementById("playerTwo").value = game['Player_Two'];
        document.getElementById("winner").value = game['Winner'];
	}
	req.onerror = function () {
		alert('error')
	}
    req.send();
}

function getGameByPlayer() {
    clearForm();
    clearResults();
    var name = document.getElementById("inputPlayerName");
	var req = new XMLHttpRequest();
    req.open('GET', url + name.value);
	req.onload = function () {
        clearResults();
        name.value = "";
        var list = JSON.parse(req.response);
        console.log(req.reponse);
		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			for (var field in item) {
				document.getElementById("results").innerHTML += field +
					" : " + item[field] + ", "
			}
			document.getElementById("results").innerHTML += "<br>"
        }
	}
	req.onerror = function () {
		alert('error')
	}
    req.send();
}

function createGame() {
	var req = new XMLHttpRequest();
    req.open('POST', url);
    req.setRequestHeader("Content-Type", "application/json");
	req.onload = function () {
		console.log(req.response);
		document.getElementById("results").innerText = "Game Created";
	}
	req.onerror = function () {
		alert('error')
	}
	var game = {
		Game_Name: document.getElementById("gameName").value,
		Player_One: document.getElementById("playerOne").value,
		Player_Two: document.getElementById("playerTwo").value,
		Winner: document.getElementById("winner").value
	}
	req.send(JSON.stringify(game));
	clearForm();
}

function updateGame() {
	var req = new XMLHttpRequest();
	var id = document.getElementById("gameId");
    req.open('PUT', url + id.value);
    req.setRequestHeader("Content-Type", "application/json");
	req.onload = function () {
		console.log("Game Updated!");
		document.getElementById("results").innerText = "Game Updated";
	}
	req.onerror = function () {
		alert('error')
	}
	var game = {
		Id: document.getElementById("gameId").value,
		Game_Name: document.getElementById("gameName").value,
		Player_One: document.getElementById("playerOne").value,
		Player_Two: document.getElementById("playerTwo").value,
		Winner: document.getElementById("winner").value
	}
	req.send(JSON.stringify(game));
	clearForm();
}

function deleteGameById() {
	var id = document.getElementById("inputGameId");
	var req = new XMLHttpRequest();
    req.open('DELETE', url + id.value);
	req.onload = function () {
		document.getElementById("results").innerText = "Game delete";
	}
	req.onerror = function () {
		alert('error')
	}
    req.send();
}


function clearResults() {
	document.getElementById("results").innerHTML = "";
}

function clearForm() {
	document.getElementById("gameId").value = "";
	document.getElementById("gameName").value = "";
	document.getElementById("playerOne").value = "";
	document.getElementById("playerTwo").value = "";
	document.getElementById("winner").value = "";
}