const strings = require('../strings');

/** Don't Know Intent Handler
 * The Don't Know Handler is responsible when the player wants to skip the question.
 * This will be as if they answered the question wrongly. It will increment the state to the next round,
 * or possibly to the next player. This code will be taken from the Answer Handler.
 */

module.exports = {
    canHandle(handlerInput) {
  
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.DontKnowIntent'
          || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    
    handle(handlerInput) {
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

      // increment all the necessary, here...
  

      // do the End the Game check here...


      // build the response accordingly here...
 
      const speechText = strings["SKIPPING"] + strings["SCORE"];
      sessionAttributes.lastUtterance = speechText;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
  
      return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
    }
  };

// TODO:
// Take code from Xuehui's Answer handler.