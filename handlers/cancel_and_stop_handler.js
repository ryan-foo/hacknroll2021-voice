const strings = require('../strings');

/** Cancel and Stop Intent Handler
 * The Cancel and Stop Handler is responsible for handling any 'stop' or 'cancel' intents. It says an error message and resets the game state.
 */

module.exports = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent';
    },
    
    handle(handlerInput) {
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  
      const speechText = strings["CANCEL_AND_STOP"];
  
      sessionAttributes.lastUtterance = speechText;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
  
      return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
    }
  };

  // TODO: carry on after pushing