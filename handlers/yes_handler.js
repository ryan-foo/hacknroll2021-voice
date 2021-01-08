const utils = require('../utils');
const strings = require('../strings');

/** Yes Intent Handler
 * This intent handler will detect if a player says yes.
 * Depending on the game state, it may warn you, before asking you for confirmation to start a new quiz on the artist.
 * If in 'PLAY_AGAIN', yes will send you to the 'GAME_STARTED' state.
 * Sample utterances: Yes, yes please, let's go, let's do this, alright.
 */

module.exports = {

    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';
    },

    handle(handlerInput) {  
  
      let speechText;

      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

      if (sessionAttributes.state == 'PLAY_AGAIN') {
        utils.resetState(sessionAttributes);
        speechText = strings['RESTART'] + strings['GREETING'];
      }

      else {
          speechText = strings['YES_FALLBACK']; // Ask them to repeat since yes is not valid in other states.
      }

      sessionAttributes.lastUtterance = speechText;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

      return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
    }
  };

  // DONE