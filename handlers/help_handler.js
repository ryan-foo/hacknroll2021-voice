/**
 * Help Handler
 *
 * Outputs different help texts depending on current state.
 */

const strings = require('../strings');

module.exports = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },

    handle(handlerInput) {

        let speechText;
        const repromptText = strings["HELP_REPROMPT"];

        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        // STATES: ['INITIAL', 'GAME_STARTED', 'PLAY_AGAIN', 'ENDED']
        if (sessionAttributes.state === "INITIAL") {
            speechText = strings["HELP_INITIAL"]
        } else if (sessionAttributes.state === "GAME_STARTED") {
            speechText = `You are playing Quiz Lah. Right now it is ${sessionAttributes.currentPlayer}'s turn. If you need to hear the question again, say 'Alexa, repeat.'`
        } else if (sessionAttributes.state === "PLAY_AGAIN") {
            speechText = strings["HELP_RESTART"]
        }

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(repromptText)
        .getResponse();
    }
}