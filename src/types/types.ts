export type Verb = {
    root: string; // The root of the verb
    conjugation: string; // The conjugation of the verb (required)
    definition: string; // The definition of the verb (required)
};


export type Noun = {
    root: string; // The root of the noun
    type: "noun"; // The type of the word
    gender: "male" | "female" | "neuter"; // The gender of the noun
    definition: string; // The definition of the noun
    declension?: number; // The declension number (optional)
};

export type Vocabulary = (Noun | Verb)[];

