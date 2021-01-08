const strings = require('../strings');
const utils = require('../utils');

/** Launch Handler
 * The Launch Handler is responsible for handling the first time a user invokes the game.
 */

module.exports = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StartOverIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.LaunchIntent';
    },

    handle(handlerInput) {
        const speechText = strings["GREETING"];
        const repromptText = strings["GREETING_PROMPT"];
    
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    
        // Reset game state.
        utils.resetState(sessionAttributes);
        
        sessionAttributes.lastUtterance = speechText;
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .getResponse();
    }
};