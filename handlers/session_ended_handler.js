const strings = require('../strings');

/** Session Ended Request Handler
 * If a session is requested to end, (for example, when a player says NO to playing again), then gracefully exit.
 */

module.exports = {
    canHandle(handlerInput) {
  
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  
      return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest'
      || (sessionAttributes.state === 'ENDED');
    },
    handle(handlerInput) {
      //any cleanup logic goes here
  
      let speechText;
  
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

      // todo: cleanup.
  
      sessionAttributes.lastUtterance = speechText;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
      
      return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
    }
  };