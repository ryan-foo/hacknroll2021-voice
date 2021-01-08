// key: accessing from the answer handler
// value: the score to add for the player.

// for our own reference, we can comment the necessary out.

function getId(slot) {
    return slot.resolutions.resolutionsPerAuthority[0].values[0].value.id;
}

function resetState(sessionAttributes) {
    sessionAttributes.state = "INITIAL";
    sessionAttributes.player = "1";
    sessionAttributes.lastUtterance = "I haven't said anything yet.";
    sessionAttributes.question = 0;
    sessionAttributes.currentPlayer = "1";
    sessionAttributes.round = 0;
    console.log(sessionAttributes);
}

// random question

module.exports = {
    PHRASE:
    {
        1: {
            A: 1, // frustrated
            B: 0, // sad
            C: 0, // surprised
            D: 0 // entertained
        },
        2: {
            A: 0, 
            B: 1,
            C: 0,
            D: 0
        }
    },

    MOVIE: {
        1: 1 // ah boys to men
        // 2: "..."
    },

    SONG: {
        1: 1, // home
        2: 1 // save my world
    },

    getId,
    resetState
}

