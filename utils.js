// key: accessing from the answer handler
// value: the score to add for the player.

// for our own reference, we can comment the necessary out.
const strings = require('./strings.js')

const answers = {
    PHRASE:
    {
        1: { // SCORE, correct or wrong, then the string itself 
            A: [1, "frustrated"], // frustrated
            B: [0, "sad"], // sad
            C: [0, "surprised"], // surprised
            D: [0, "entertained"] // entertained
        },
        2: {
            A: [0, "delicious"],
            B: [1, "terrible"],
            C: [0, "tired"],
            D: [0, "nervous"]
        },
        3: {
            A: [0, "interesting"],
            B: [0, "one"],
            C: [0, "entertaining"],
            D: [1, "disgusting"]
        },
        4: {
            A: [0, "awesome"],
            B: [0, "enlightening"],
            C: [1, "disappointed"],
            D: [0, "nervous"]
        },
        5: {
            A: [0, "delicious"],
            B: [1, "terrible"],
            C: [0, "tired"],
            D: [0, "nervous"]
        },
        6: {
            A: [0, "delicious"],
            B: [1, "terrible"],
            C: [0, "tired"],
            D: [0, "nervous"]
        },
        7: {
            A: [0, "delicious"],
            B: [1, "terrible"],
            C: [0, "tired"],
            D: [0, "nervous"]
        }
    },

    MOVIE: {
        1: [1, "ah boys to men"],
        2: [0, ""],
        3: [0, ""],
        4: [0, ""]
    },

    SONG: {
        1: [1, "home"],
        2: [1, "save my world"],
        3: [1, ""],
        4: [1, ""]
    }
}

function resetState(sessionAttributes) {
    sessionAttributes.state = "INITIAL";
    sessionAttributes.players = 1;
    sessionAttributes.lastUtterance = "I haven't said anything yet -- it doesn't look like anything to me...";
    sessionAttributes.currentQuestion = 0;
    sessionAttributes.currentPlayer = 0;
    sessionAttributes.round = 0;
    sessionAttributes.score = [0, 0];
    sessionAttributes.questions = initializeRandomQuestions(2);
    console.log(sessionAttributes);
    console.log("I reset the state! :)");
    console.log(`Randomized questions: ${sessionAttributes.questions}`);
}

function getId(slot, round) {
    const ans = slot.resolutions.resolutionsPerAuthority[0].values[0].value.id;
    let res = {};
    if (round === 1) {
        res.id = ans.charAt(ans.length-1);
        res.qn = ans.charAt(ans.length-3);
    }
    res.id = ans.charAt(ans.length-1);
    return res;
}

function getAnswer(cat, qn) {
    let ans = '';
    let selection = '';
    if (cat === 'PHRASE') {
        selection = answers.cat.qn;
        ans = Object.keys(selection).filter(function(key) {
            return selection[key][0] === 1;
        })[0]; //e.g. 'A'
    } else {
        //KIV
        selection = answers.cat
        ans = selection[qn]
    }

}

function checkAnswer(cat, ans, qn) {
    const correctAnswer = getAnswer(cat, qn);
    if (ans === correctAnswer) {
        return strings['CORRECT'];
    } else {
        return strings['WRONG'] + answers.cat.qn.correctAnswer[1];
    }
}

function endGame(numPlayers, scores) {
    let reply = ''
    if (numPlayers === 1) {
        const players = ['Player 1', 'Player 2'];
        const winningScore = Math.max(...scores);
        const winner = scores.indexOf(winningScore);
        reply = strings['WIN'] + winningScore + strings['WINNER'] + players[winner] + strings['END'];
    } else {
        reply = strings['SINGLE_END'] + scores[0] + strings['WINNER'] + strings['END'];
    }
    return reply;
}

/**
 * shuffleArray
 * as the title suggests... it shuffles an array
 * [1,2,3,4,5,6] can become [3,2,5,4,1,6], or any crazy permutation! wizardry!
 * @param {Array} array 
 */

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * initializeRandomQuestions
 * @param {Number} n (how many questions per category)
 * we know that the first n are songs
 * next n will be movies
 * and next n will be phrases
 * 
 * for example of n = 2,
 * we shuffle arrays that are the length of each category.
 * then take the first two from each of these newly shuffled arrays, our and return that.
 * so
 * [2,4,3,4,1,2]
 * would imply that 1st question = SONG_2, 2nd question = SONG_4,
 * 3rd question = MOVIE_3, 4th question = MOVIE_4,
 * 5th question = PHRASE_1, 6th question = PHRASE_2
 */

console.log(Object.keys(answers.SONG).length);

function initializeRandomQuestions(n) {
    let questionsArray = [];
    let shuffledSongArray = shuffleArray([...Array(Object.keys(answers.SONG).length).keys()]);
    let shuffledMovieArray = shuffleArray([...Array(Object.keys(answers.MOVIE).length).keys()]);
    let shuffledPhraseArray = shuffleArray([...Array(Object.keys(answers.PHRASE).length).keys()]);
    return questionsArray.concat(shuffledSongArray.slice(0, n), shuffledMovieArray.slice(0,n),
    shuffledPhraseArray.slice(0,n));
}

// console.log(initializeRandomQuestions(2));


// function getRandomQuestion(array) {
//     let qn = array.splice(Math.floor(Math.random()*array.length), 1);
//     return array[qn];
// }

function resetPlayer(player) {
    if (player === 0) {
        player += 1;
    } else {
        player -= 1;
    }
    return player;
}

// The system:
// it will be stored in an array. First element is the score.
// second is the actual answer in text format. This will be given to answer handler etc
// because you need that to form a proper response! "I.E wrong, the right answer is "frustrated""."

module.exports = {
    answers,
    getId,
    resetState,
    getAnswer,
    checkAnswer,
    resetPlayer,
    endGame
}