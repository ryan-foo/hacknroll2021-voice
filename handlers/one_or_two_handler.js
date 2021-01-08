/**
 * One or Two Handler
 *
 * One or two handler will detect if player says one or two.
 * If so, it will render the game as single player or multiplayer accordingly.
 */

const strings = require('../strings');

module.exports = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.intent.name === 'AMAZON.OneOrTwoIntent';
    },

    handle(handlerInput) {

        const speechText = strings["PLAYER_NUM"];
        const repromptText = strings["SORRY"] + strings["PLAYER_NUM"];

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(repromptText)
        .getResponse();
    }
}