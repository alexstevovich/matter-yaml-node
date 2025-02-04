import { parseMatter, serializeMatter, validateMatter } from "../src/matter-yaml.js";

const text = `---
title: Test Title
date: 2024-01-01
---
Sample content.`;

console.log("Parsing test:", parseMatter(text));
console.log("Validation test:", validateMatter(text));
console.log("Serialization test:", serializeMatter({ title: "New Title" }, "Content here"));