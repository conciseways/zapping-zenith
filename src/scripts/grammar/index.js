// Index file for grammar scripts
import {firstConjugationTemplate} from './conjugations/index.ts'
import {createSecondDeclensionNoun, createDeclensionTemplate} from './declensions/index.ts'
// Add your grammar-related functions and logic here

function handleVerbs(wordData) {
    const wordInfoEl = document.querySelector('.word-info');
    if (wordData) {
        wordInfoEl.innerHTML = createConjugationTemplate(wordData);
    }
}

function handleNouns(wordData) {
    const wordInfoEl = document.querySelector('.word-info');
    if (wordData) {
        console.log("handleNouns", wordData)
        const nounData = createSecondDeclensionNoun(wordData);
        console.log("nounData", nounData)
        wordInfoEl.innerHTML = createDeclensionTemplate(nounData);
    }
}

function conjugateFirstPersonSingular(root) {
    return root.replace(/.$/, 'o');
  }

function createConjugationTemplate(wordData) {
    const root = wordData.root;
    return `
        <h3>${root} (Verb)</h3>
        <p>Definition: ${wordData.definition}</p>
        <p>Conjugation: ${wordData.conjugation}</p>
        <p>Infinitive: ${root}${firstConjugationTemplate.infinitive}</p>
        <p>Present: ${conjugateFirstPersonSingular(root)}</p>
        <p>Imperfect: ${root}${firstConjugationTemplate.imperfect.singular.ego}</p>
        <p>Future: ${root}${firstConjugationTemplate.future.singular.ego}</p>
        <p>Pluperfect: ${root}${firstConjugationTemplate.pluperfect.singular.ego}</p>
        <p>Future Perfect: ${root}${firstConjugationTemplate.futurePerfect.singular.ego}</p>
    `;
}



export { handleVerbs, handleNouns }
