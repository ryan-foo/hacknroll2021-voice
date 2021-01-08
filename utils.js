// key: accessing from the answer handler
// value: the score to add for the player.

// for our own reference, we can comment the necessary out.

function getId(slot) {
    return slot.resolutions.resolutionsPerAuthority[0].values[0].value.id;
}

function resetState(sessionAttributes) {
    sessionAttributes.state = "INITIAL";
    sessionAttributes.players = 1;
    sessionAttributes.lastUtterance = "I haven't said anything yet -- it doesn't look like anything to me...";
    sessionAttributes.currentQuestion = 0;
    sessionAttributes.currentPlayer = 1;
    sessionAttributes.round = 0;
    sessionAttributes.score = [0, 0];
    sessionAttributes.questions = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]];
    console.log(sessionAttributes);
    console.log("I reset the state! :)");
}

function getId(slot) {
    const ans = slot.resolutions.resolutionsPerAuthority[0].values[0].value.id;
    return {
        id: ans[-1],
        qn: ans[-3]
    }
}

function getAnswer() {

}

function checkAnswer(cat, ans, qn) {
    let selection = answers.cat.qn;
    const correctAnswer = Object.keys(selection).filter(function(key) {
        return selection[key][0] === 1;
    })[0]; //e.g. 'A'
    if (correctAnswer === ans) {
        return strings['CORRECT'];
    } else {
        return strings['WRONG'] + answers.cat.qn.correctAnswer[1];
    }
}

function getRandomQuestion(array) {
    let qn = array.splice(Math.floor(Math.random()*array.length), 1);
    return array[qn];
}

function resetPlayer(player) {
    if (player === 0) {
        player += 1;
    } else {
        player -= 1;
    }
    return player;
}

const answers = {
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
    }
}
// Random Question

// The system:
// it will be stored in an array. First element is the score.
// second is the actual answer in text format. This will be given to answer handler etc
// because you need that to form a proper response! "I.E wrong, the right answer is "frustrated""."

module.exports = {
    answers,
    getId,
    resetState,
    checkAnswer,
    getRandomQuestion,
    resetPlayer
}

