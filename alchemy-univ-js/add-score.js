function addScore(players) {    

    return players.map(function (player) {
        player.score += 10;
        return player; 
    });

}

module.exports = addScore;