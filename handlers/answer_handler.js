const strings = require('../../strings');
const utils = require('../../utils');

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
        const cats = ['SONG', 'MOVIE', 'PHRASES'];
        const slots = handlerInput.requestEnvelope.request.intent.slots.answer;
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        //kiv round
        const round = sessionAttributes.round;
        const cat = cats[round - 1]; //1 - Song, 2 - Movie, 3 - Phrases
        const qn = utils.getId(slots).qn; //cat's qn (1, 2, 3)
        const ans = utils.getId(slots).id; //player's ans ('A')
        const player = sessionAttributes.currentPlayer - 1; //0 or 1
        const numPlayers = sessionAttributes.player; //1 or 2
        //kiv
        const count = sessionAttributes.currentQuestion; //increments - if currently is qn 1 then is player1, qn 2 then is player2
        let questions = sessionAttributes.questions; //array of qn numbers to be asked
        let points = sessionAttributes.score;

        // add points
        let speechText = utils.checkAnswer(cat, qn, ans);
        if (numPlayers === 1) { //solo
            points += utils[cat][qn][ans]; //cat = 0, qn = '1', ans = 'A'
        } else { //duo
            //kiv about how to allocate alternating points
            points[count%2] += utils[cat][qn][ans]; //1 will be player1, 0 will be player2
            sessionAttributes.player = utils.resetPlayer(player);
  ``    }
        const nextQuestion = utils.getRandomQuestion(questions);
        speechText += strings.SCORE; //-1 if the numbers are not the index

        // update sessionAttributes
        sessionAttributes.currentQuestion += 1;
        // sessionAttributes.questions = questions;
        sessionAttributes.lastUtterance = speechText;
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

        // reset questions array
        questions[player].push(nextQuestion);

        //end game
        if (round === 3) {
            speechText += strings['WIN'];
            sessionAttributes.state = 'ENDED';
        } else {
            speechText += strings.cat[nextQuestion - 1];
        }

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(strings.ANSWER_REPROMPT)
        .getResponse();
    }
  };