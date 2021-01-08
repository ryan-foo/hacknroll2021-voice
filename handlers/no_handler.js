const strings = require('../strings');

/** No Intent Handler
 * This intent handler will detect if a player says no.
 * Depending on the game state, it may warn you, before asking you for confirmation to start a new quiz on the artist.
 * If in 'PLAY_AGAIN', no will send you to the 'SESSION_ENDED' state.
 * Sample utterances: No, no thanks, no.
 */
 
module.exports = {
    

    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'AMAZON.NoIntent';
    },
  
    handle(handlerInput) {  
  
      let speechText;
  
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();  
  
      if (sessionAttributes.state === 'PLAY_AGAIN') {

        // TODO: clean up game State in Session Attributes
        
        speechText = strings["EXIT"];
        sessionAttributes.state = 'ENDED';
      }
  
      else {
          speechText = strings["NO_FALLBACK"]; // Ask them to repeat.
      }
      
      sessionAttributes.lastUtterance = speechText;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
  
      return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
    }
  };