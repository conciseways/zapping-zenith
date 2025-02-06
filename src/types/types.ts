export type Noun = {
    root: string; // The root of the noun
    type: "noun"; // The type of the word
    gender: "male" | "female" | "neuter"; // The gender of the noun
    definition: string; // The definition of the noun
    declension?: number; // The declension number (optional)
};
