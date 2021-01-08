// key: accessing from the answer handler
// value: the score to add for the player.

// for our own reference, we can comment the necessary out.

function getId(slot) {
    return slot.resolutions.resolutionsPerAuthority[0].values[0].value.id;
}

function resetState(sessionAttributes) {
    sessionAttributes.state = "INITIAL";
    sessionAttributes.player = "1";
    sessionAttributes.lastUtterance = "I haven't said anything yet -- it doesn't look like anything to me...";
    sessionAttributes.question = 0;
    sessionAttributes.currentPlayer = "1";
    sessionAttributes.round = 0;
    console.log(sessionAttributes);
    console.log("I reset the state! :)");
}

// random question

// The system:
// it will be stored in an array. First element is the score.
// second is the actual answer in text format. This will be given to answer handler etc
// because you need that to form a proper response! "I.E wrong, the right answer is "frustrated""."

module.exports = {
    PHRASE:
    {
        1: {
            A: [1, "frustrated"], // frustrated
            B: [0, "sad"], // sad
            C: [0, "surprised"], // surprised
            D: [0, "entertained"] // entertained
        },
        2: {
            A: [0, ""],
            B: [1, ""],
            C: [0, ""],
            D: [0, ""]
        }
    },

    MOVIE: {
        1: [1, "ah boys to men"]
        // 2: "..."
    },

    SONG: {
        1: [1, "home"],
        2: [1, "save my world"]
    },

    getId,
    resetState
}

