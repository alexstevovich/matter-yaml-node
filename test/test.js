import { parse, serialize, validate } from "../src/matter-yaml.js";

const text = `---
title: Test Title
date: 2024-01-01
---
Sample content.`;

console.log("Parsing test:", parse(text));
console.log("Validation test:", validate(text));
console.log("Serialization test:", serialize({ title: "New Title" }, "Content here"));