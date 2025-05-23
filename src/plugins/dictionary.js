import { fetchDefinition } from "../utils/api";

export default {
  async execute(word) {
    if (!word) throw new Error("Please provide a word (e.g., /define hello)");

    const data = await fetchDefinition(word);
    const entry = data[0];

    return {
      word: entry.word,
      phonetic: entry.phonetic,
      definitions: entry.meanings
        .flatMap((meaning) =>
          meaning.definitions.map((def) => ({
            partOfSpeech: meaning.partOfSpeech,
            definition: def.definition,
            example: def.example || null,
          }))
        )
        .slice(0, 3),
    };
  },
};
