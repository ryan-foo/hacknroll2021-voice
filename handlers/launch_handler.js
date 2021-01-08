// hihi test

const LaunchRequest_Handler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;

        let say = 'hello' + ' and welcome to ' + invocationName + ' ! Say help to hear some options.';

        let skillTitle = capitalize(invocationName);


        return responseBuilder
            .speak(say)
            .reprompt('try again, ' + say)
            .withStandardCard('Welcome!',
              'Hello!\nThis is a card for your skill, ' + skillTitle,
               welcomeCardImg.smallImageUrl, welcomeCardImg.largeImageUrl)
            .getResponse();
    },
};

/** Launch Handler
 * The Launch Handler is responsible for handling the first time a user invokes the game.
 */

const strings = require('../strings');
const utils = require('../utils');

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
        // handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .getResponse();
    }
};