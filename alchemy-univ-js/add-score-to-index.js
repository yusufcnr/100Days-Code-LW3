function addScore(players) {
    return players.map(function(player, index) {
        if(index <=2) {
            player.score += 10;
        } 
        return player;
    });
    
}

module.exports = addScore;