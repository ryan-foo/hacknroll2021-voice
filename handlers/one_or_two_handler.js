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
        let questions = [2,5,7,4,3,5]

        // ask the first question
        let speechText = strings["QUESTION_" + sessionAttributes.currentQuestion]
        + strings["SONGS"][questions[0]];

        const repromptText = '';

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
    }
}