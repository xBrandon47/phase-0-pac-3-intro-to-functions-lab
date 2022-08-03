function shout(string) {
    return string.toUpperCase();
}
"Hello!".toUpperCase();

function whisper(string) {
    return string.toLowerCase();
}
"hello".toLowerCase();

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    //lowercase.toLowerCase() === lowercase
if (string.toLowerCase() === string) {
    return "I can't hear you!"
} else if (string.toUpperCase() === string) {
    return "YES INDEED!"
} else if (string === "Let's have dinner together!") {
    return "I would love to!"
}
}