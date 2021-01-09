/** LaunchRequestHandler
 * Handler to be invoked when the skill receives a Repeat Intent.
 * Whatever was last uttered by Alexa, we will repeat that.
 * Sample Utterances: Alexa, say that again. Repeat. Say that again. Alexa, repeat. One more time.
*/

module.exports = {

    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.intent.name === 'AMAZON.RepeatIntent';
    },
    
    handle(handlerInput) {
      
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

      let speechText = sessionAttributes.lastUtterance;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
  
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
    }
  };

  // DONE