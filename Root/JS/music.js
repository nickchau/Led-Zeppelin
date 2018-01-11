/*function for stopping two audio classes play together*/
function onlyPlayOneIn(container) {
  container.addEventListener("play", function(event) {
  audio_elements = container.getElementsByTagName("audio")
  /*finding the amount of audio files*/
    for(i=0; i < audio_elements.length; i++) {
      audio_element = audio_elements[i];
	  /*testing if any others are being played*/ 
      if (audio_element !== event.target) {
        audio_element.pause();
      }
    }
  }, true);
}

document.addEventListener("DOMContentLoaded", function() {
  onlyPlayOneIn(document.body);
});