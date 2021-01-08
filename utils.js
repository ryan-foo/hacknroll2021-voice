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
            B: [0, "exciting"],
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
            A: [0, "embarrassed"],
            B: [1, "touchwood"],
            C: [0, "lucky"],
            D: [0, "awkward"]
        },
        6: {
            A: [0, "fortunate"],
            B: [1, "greeting"],
            C: [0, "invasion"],
            D: [0, "joyful"]
        },
        7: {
            A: [0, "reasonable"],
            B: [0, "friendly"],
            C: [0, "cheap"],
            D: [1, "fancy"]
        }
    },

    MOVIE: {
        1: [1, "ah boys to men"],
        2: [1, "i not stupid"],
        3: [1, "the ghosts must be crazy"],
        4: [1, "ilo ilo"],
        5: [1, "money no enough"]
    },

    SONG: {
        1: [1, "home"],
        2: [1, "save my world"],
        3: [1, "singapore town"],
        4: [1, "i wouldn't know any better than you"],
        5: [1, "room at the table"]
    }
}

let questions = [3,2,1,2,1,2];
let count = 1;
let correctAnswer = answers["SONG"][questions[count]][1];
console.log(correctAnswer);

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
    if (round === 3) { // round 3 = PHRASE
        res.id = ans.charAt(ans.length-1);
        res.qn = ans.charAt(ans.length-3);
    }
    res.id = ans.charAt(ans.length-1);
    return res;
}

function getAnswer(cat, qn) {
    // Only for phrases
    let selection = answers.cat.qn;
    return Object.keys(selection).filter(function(key) {
        return selection[key][0] === 1;
    })[0]; //e.g. 'A'
}

function checkAnswer(cat, ans, qn) {
    let correctAnswer = '';
    let res = strings['CORRECT'] + strings['QUESTION'];
    if (cat === 'PHRASE') {
        correctAnswer = getAnswer(cat, qn);
        if (! ans === correctAnswer) {
            res = strings['WRONG'] + ' The correct answer is ' + answers.cat.qn.correctAnswer[1] +'.';
        }
    } else {
        if (! ans === qn) { //qn number and slot id
            res = strings['WRONG'] + ' The correct answer is ' + answers.cat.qn[1] + '.';
        }
    }
    return res;
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

function shuffleArray(array_len) {
    let array = []
    for (let i = 1; i < array_len + 1; i++) {
        array.push(i);
    };
    let res = array.sort(() => 0.5 - Math.random())
    
    return res;
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
    let shuffledSongArray = shuffleArray(Object.keys(answers.SONG).length);
    let shuffledMovieArray = shuffleArray(Object.keys(answers.MOVIE).length);
    let shuffledPhraseArray = shuffleArray(Object.keys(answers.PHRASE).length);
    return questionsArray.concat(shuffledSongArray.slice(0, n), shuffledMovieArray.slice(0, n),
        shuffledPhraseArray.slice(0, n));
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

const slots_test = {
    "Answer": {
        "name": "Answer",
        "value": "home",
        "resolutions": {
            "resolutionsPerAuthority": [
                {
                    "authority": "amzn1.er-authority.echo-sdk.amzn1.ask.skill.b2dd4717-f26f-4aa2-bfe6-b0626b05b18b.Answer",
                    "status": {
                        "code": "ER_SUCCESS_MATCH"
                    },
                    "values": [
                        {
                            "value": {
                                "name": "home",
                                "id": "SONG_1"
                            }
                        }
                    ]
                }
            ]
        },
        "confirmationStatus": "NONE",
        "source": "USER",
        "slotValue": {
            "type": "Simple",
            "value": "home",
            "resolutions": {
                "resolutionsPerAuthority": [
                    {
                        "authority": "amzn1.er-authority.echo-sdk.amzn1.ask.skill.b2dd4717-f26f-4aa2-bfe6-b0626b05b18b.Answer",
                        "status": {
                            "code": "ER_SUCCESS_MATCH"
                        },
                        "values": [
                            {
                                "value": {
                                    "name": "home",
                                    "id": "SONG_1"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    }
}

console.log(getId(slots_test.Answer, 1));

function getId(slot, round) {
    const ans = slot.resolutions.resolutionsPerAuthority[0].values[0].value.id;
    let res = {};
    if (round === 3) {
        res.id = ans.charAt(ans.length-1);
        res.qn = ans.charAt(ans.length-3);
    }
    res.id = ans.charAt(ans.length-1);
    return res;
}






module.exports = {
    answers,
    getId,
    resetState,
    getAnswer,
    checkAnswer,
    resetPlayer,
    endGame
}