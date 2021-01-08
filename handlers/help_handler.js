/**
 * Help Handler
 *
 * Outputs different help texts depending on current state.
 */

const strings = require('../strings');
const utils = require('../utils');

module.exports = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },

    handle(handlerInput) {

        let speechText, repromptText;

        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        // STATES: ['INITIAL', 'GAME_STARTED', 'PLAY_AGAIN', 'ENDED']
        if (sessionAttributes.state === "INITIAL") {

        } else if (sessionAttributes.state === "GAME_STARTED") {

        } else if (sessionAttributes.state === "PLAY_AGAIN") {

        } else if (sessionAttributes.state === "ENDED") {

        }

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(repromptText)
        .getResponse();
    }
}