/**
 * One or Two Handler
 * 
 * One or two handler will detect if player says one or two.
 * If so, it will render the game as single player or multiplayer accordingly.
 */

 // TODO

 module.exports = {
     canHandle(handlerInput) {
         return // TODO: handlerInput etc
     },

     handle(handlerInput) {

        speechText = "write me";
        
        return handlerInput.responseBuilder
        .speak(speechText)
        .getResponse();
     }
 }