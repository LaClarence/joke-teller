# Joke teller

## Goal

Get a joke from an API and provide it to a text to speech API that will tell us.

## Text-To-Speech API

### Using Voice RSS API

Create an account on [Voice RSS](https://www.voicerss.org/api/)
to get an API Key: 1404...0768

The uses of an API that exposed the key is not secured!

### Using browser embedded Speech Synthesiser

* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
* [Specification](https://wicg.github.io/speech-api/#tts-section)


## Joke API

[Error response](https://v2.jokeapi.dev/joke/Programming?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single)
```
{
    "error": true,
    "internalError": false,
    "code": 106,
    "message": "No matching joke found",
    "causedBy": [
        "No jokes were found that match your provided filter(s)."
    ],
    "additionalInfo": "Error while finalizing joke filtering: No jokes were found that match your provided filter(s).",
    "timestamp": 1704744844945
}
```
[Single response](https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single)
```
{
    "error": false,
    "category": "Programming",
    "type": "single",
    "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
    "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
    },
    "id": 27,
    "safe": false,
    "lang": "en"
}
```

[Two part response](https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit)
```
{
    "error": false,
    "category": "Programming",
    "type": "twopart",
    "setup": ".NET developers are picky when it comes to food.",
    "delivery": "They only like chicken NuGet.",
    "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
    },
    "id": 49,
    "safe": true,
    "lang": "en"
}
```