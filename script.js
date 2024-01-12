
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

function toggleButton() {
  button.disabled = !button.disabled;
}

async function getJokes() {
  let joke = '';
  const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.error === false) {
      if (data.setup) {
        joke = `${data.setup} ... ${data.delivery}`;
      } else {
        joke = data.joke;
      }
      VoiceAPI.tellMe(joke);
      toggleButton();
    } else {
      console.log('getJokes return an error: ', data.message);
    }
  } catch (error) {
    console.error('getJokes() failed!', error);
  }
}

button.addEventListener('click', getJokes);

audio.addEventListener('ended', (e) => {
  // console.log('VoiceRSS ended event received...', e);
  toggleButton();
});

document.addEventListener('speechSynthesizerEnded', (e) => {
  // console.log('Speech synthesier end event received...', e);
  toggleButton();
});