/**
 * One or Two Handler
 *
 * One or two handler will detect if player says one or two.
 * If so, it will render the game as single player or multiplayer accordingly.
 */

const strings = require('../strings');
const { getId } = require('../utils');

module.exports = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.intent.name === 'AMAZON.OneOrTwoIntent';
    },

    handle(handlerInput) {

        const request = handlerInput.requestEnvelope.request;
        const slots = request.intent.slots;
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        let totalPlayers = slots.oneOrTwo.value; // number of players
        sessionAttributes.players = totalPlayers;

        console.log(`We have ${totalPlayers} players.`)

        // start game! handled by Xuehui.
        sessionAttributes.state = 'STARTED';
        sessionAttributes.currentQuestion += 1;
        sessionAttributes.currentPlayer = 1;
        sessionAttributes.lastUtterance = speechText;

        // ask the first question
        let speechText = strings["QUESTION_" + sessionAttributes.currentQuestion] + strings["SONG"][sessionAttributes.questions[0]];

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
    }
}   