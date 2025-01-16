const magicRegex = /(?<!-.*)c(?!.*-)/gi;

export function toClassicalPronunciation(text) {

    // Diphthongs
    text = text.replace(diphthongAE, phonenticDiphthongAE)
    text = text.replace(diphthongUI, phonenticDiphthongUI)

    // vowels
    text = text.replace(vowelShortA, phonenticVowelA)


    // consonants
    text = text.replace(consonantC, phonenticConsonantC)
    text = text.replace(consonantJ, phonenticConsonantJ)
    text = text.replace(consonantV, phonenticConsonantV)

    return text
}

// consonants
const consonantC = /c/gi
const phonenticConsonantC = "K"

const consonantJ = /j/gi
const phonenticConsonantJ = "Y"

const consonantV = /v/gi
const phonenticConsonantV = "W"

// Diphthongs
const diphthongAE = /ae/gi
const phonenticDiphthongAE = "ay"

const diphthongUI = /ui/gi
const phonenticDiphthongUI = "ooi"

// vowels
const vowelShortA = /a/gi
const phonenticVowelA = "uh-"