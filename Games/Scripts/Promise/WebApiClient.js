class WebApiClient {
    constructor(mock) {
        this.mock = mock;
    }

    getGames() {
        if (!this.mock) {
            const promise = $.ajax({
                url: 'http://localhost:49866/api/games/'
            });
            return promise;
        } else {
            const promise = new Promise(function (resolve, reject) {
                const games = [{ Id: 0, Game_Name: "Dota 2", Player_One: "Niv", Player_Two: "Idan", Winner: 0 },
                { Id: 1, Game_Name: "Dota 2", Player_One: "Erez", Player_Two: "Niv", Winner: 1 }];
                setTimeout(() => { resolve(games), 3000 });
            });
            return promise;
        }
    }

}

