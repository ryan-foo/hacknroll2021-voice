/** Error Handler 
 * 
*/

const strings = require("../strings");

module.exports = {
    canHandle() {
  
      return true;
  
    },
    handle(handlerInput, error) {
      console.log(`Error handled: ${error.message}`);
  
      // If command cannot be understood, based on game state we should let the player know what can be done: restart the game.
  
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        
        let speechText = strings["ERROR"];
        sessionAttributes.lastUtterance = speechText;
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
    },
  };