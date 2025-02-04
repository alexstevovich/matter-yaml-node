# Matter YAML (NODE)

A simple utility for parsing, serializing, and validating YAML front matter in Node.js.

## Installation

```sh
npm install matter-yaml
```

## Usage

### Importing the Module
```js
import { parse, serialize, validate } from "matter-yaml";
```

### Parsing YAML Front Matter
```js
const text = `---
title: Example
category: YAML Parsing
---
This is the content of the file.`;

const { data, content } = parse(text);
console.log(data);    // { title: "Example", category: "YAML Parsing" }
console.log(content); // "This is the content of the file."
```

### Serializing Data into YAML Front Matter
```js
const data = { title: "Example", category: "YAML Parsing" };
const content = "This is the content of the file.";

const result = serialize(data, content);
console.log(result);
```

### Validating YAML Front Matter
```js
const isValid = validate(text);
console.log(isValid); // true or false
```

## API Reference

### `parse(text: string): { data: object, content: string }`
Parses YAML front matter from a given text input.

### `serialize(data: object, content: string): string`
Serializes an object and content into a YAML front matter formatted string.

### `validate(text: string): boolean`
Checks if a given text has valid YAML front matter.

## License
MIT

