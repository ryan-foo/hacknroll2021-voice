const strings = require('../strings');
const utils = require('../utils');

/** Answer Intent Handler
 * The Answer Handler is responsible for handling any 'stop' or 'cancel' intents. It says an error message and resets the game state.
 * Handler to be invoked when a player answers a question
 */

module.exports = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && (handlerInput.requestEnvelope.request.intent.name === 'AnswerIntent')
    },
    handle(handlerInput) {
        const cats = ['SONG', 'MOVIE', 'PHRASE'];
        const slots = handlerInput.requestEnvelope.request.intent.slots['Answer'];
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const round = sessionAttributes.round;
        let cat = cats[round - 1]; //1 - Song, 2 - Movie, 3 - Phrases
        const player = sessionAttributes.currentPlayer - 1; // 0 or 1
        const numPlayers = sessionAttributes.players; // 1 or 2
        const count = sessionAttributes.currentQuestion; // increments - if currently is qn 1 then is player1, qn 2 then is player2

        let questions = sessionAttributes.questions; //randomised array of qn numbers to be asked
        let points = sessionAttributes.score;
        let qn = strings[cat][questions[count]];
        let ans = '';

        if (round === 3) { // song
            qn = utils.getId(slots, round).qn; //cat's qn (1, 2, 3)
        }
        ans = utils.getId(slots, round).id; //player's ans ('A') for phrase, ('1') for movie and song
        let speechText = utils.checkAnswer(cat, ans, qn);

        // add points
        if (cat === 'PHRASE') {
            points[player] += utils.answers[cat][qn][ans][0];
        } else {
            points[player] += utils.answers[cat][ans][0];
        }

        //check if end game
        if (round === 3) {
            speechText = utils.endGame(numPlayers, points);
            sessionAttributes.state = 'ENDED';
        } 
        
        else {
            speechText += strings['SCORE'] + points[player];
            
            if (numPlayers === 2) { //duo

                sessionAttributes.currentQuestion += 1;

                if (player === 1) { //player2:
                    cat = cats[round]; //move on to next cat
                    speechText += strings['PLAYER_1'] + strings['AGAIN'] + strings['QUESTION_' + (sessionAttributes.currentQuestion).toString()] + strings[cat][questions[sessionAttributes.currentQuestion]]
                    sessionAttributes.round += 1;
                } else { //player1
                    speechText += strings['PLAYER_2'] + strings['QUESTION_' + (sessionAttributes.currentQuestion).toString()] + strings[cat][questions[sessionAttributes.currentQuestion]]
                }
                // sessionAttributes.currentQuestion += 1;
                sessionAttributes.currentPlayer = utils.resetPlayer(player);
            } else { //solo
                sessionAttributes.currentQuestion += 2;
                cat = cats[round]; //move on to next cat
                speechText += strings['QUESTION_' + (sessionAttributes.currentQuestion).toString()] + strings[cat][questions[sessionAttributes.currentQuestion - 1]];
                sessionAttributes.round += 1;
            }
        }

        // update sessionAttributes
        sessionAttributes.lastUtterance = speechText;
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(strings['ANSWER_REPROMPT'])
        .getResponse();
    }
};