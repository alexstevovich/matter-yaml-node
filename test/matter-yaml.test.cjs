const { parse, serialize, validate } = require("../src/matter-yaml.cjs");

const text = `---
title: Test Title
date: 2024-01-01
---
Sample content.`;

console.log("Parsing test:", parse(text));
console.log("Validation test:", validate(text));
console.log("Serialization test:", serialize({ title: "New Title" }, "Content here"));