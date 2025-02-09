// src/scripts/grammar/declensions/index.ts
export function createSecondDeclensionNoun(wordData: any) {
    const { gender, root, declension, definition } = wordData;
    const singularForms = {
        nominative: `${root}us`,
        genitive: `${root}i`,
        dative: `${root}o`,
        accusative: `${root}um`,
        ablative: `${root}o`,
    };

    const pluralForms = {
        nominative: `${root}i`,
        genitive: `${root}orum`,
        dative: `${root}is`,
        accusative: `${root}os`,
        ablative: `${root}is`,
    };

    return {
        gender,
        root,
        definition,
        declension: declension,
        singular: singularForms,
        plural: pluralForms,
    };
}

export function createDeclensionTemplate(nounData) {
    const { gender, root, declension, singular, plural, definition } = nounData;

    return `
        <section>
            <h3>Definition: ${definition}</h3>
            <h3>${root} (${declension} Noun)</h3>
            <p>Gender: ${gender}</p>
            <h4>Declension Forms:</h4>
            <article>
                <h5>Singular Forms</h5>
                <dl>
                    <dt>Nominative: ${singular.nominative}</dt>
                    <dd>${singular.nominative}</dd>
                    <dt>Genitive: ${singular.genitive}</dt>
                    <dd>${singular.genitive}</dd>
                    <dt>Dative: ${singular.dative}</dt>
                    <dd>${singular.dative}</dd>
                    <dt>Accusative: ${singular.accusative}</dt>
                    <dd>${singular.accusative}</dd>
                    <dt>Ablative: ${singular.ablative}</dt>
                    <dd>${singular.ablative}</dd>
                </dl>
            </article>
            <article>
                <h5>Plural Forms</h5>
                <dl>
                    <dt>Nominative: ${plural.nominative}</dt>
                    <dd>${plural.nominative}</dd>
                    <dt>Genitive: ${plural.genitive}</dt>
                    <dd>${plural.genitive}</dd>
                    <dt>Dative: ${plural.dative}</dt>
                    <dd>${plural.dative}</dd>
                    <dt>Accusative: ${plural.accusative}</dt>
                    <dd>${plural.accusative}</dd>
                    <dt>Ablative: ${plural.ablative}</dt>   
                    <dd>${plural.ablative}</dd>
                </dl>
            </article>
        </section>
    `;
}