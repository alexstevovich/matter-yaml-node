const yaml = require("js-yaml");

const FRONT_MATTER_REGEX = /^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/;

/**
 * Parses YAML front matter and returns the data and content.
 * @param {string} text - The full content containing front matter and content.
 * @returns {object} - An object containing `data` (parsed YAML) and `content` (raw content).
 * @throws {Error} - If the input is not a string or the format is invalid.
 */
function parse(text) {
    if (typeof text !== "string") {
        throw new TypeError(`parse expected a string, but received ${typeof text}.`);
    }

    const match = text.match(FRONT_MATTER_REGEX);
    if (!match) {
        throw new Error(`Invalid front matter format. Ensure the document starts with "---" and follows YAML syntax.`);
    }

    try {
        const data = yaml.load(match[1]);
        return { data, content: match[2] };
    } catch (error) {
        throw new Error(`YAML Parsing Error: ${error.message}`);
    }
}

/**
 * Serializes data and content into a combined string.
 * @param {object} data - An object representing the front matter (YAML).
 * @param {string} content - The main content as a string.
 * @returns {string} - The serialized front matter and content.
 * @throws {Error} - If the data is not an object or the content is not a string.
 */
function serialize(data, content) {
    if (typeof data !== "object" || data === null) {
        throw new TypeError(`serialize expected an object, but received ${typeof data}.`);
    }
    if (typeof content !== "string") {
        throw new TypeError(`serialize expected a string, but received ${typeof content}.`);
    }

    const frontMatter = yaml.dump(data).trim();
    return `---\n${frontMatter}\n---\n${content}`;
}

/**
 * Validates whether a given text has properly formatted front matter and content.
 * @param {string} text - The full content to validate.
 * @returns {boolean} - `true` if the format is valid and YAML is parsable, otherwise `false`.
 */
function validate(text) {
    if (typeof text !== "string") {
        return false;
    }

    const match = text.match(FRONT_MATTER_REGEX);
    if (!match) {
        return false;
    }

    try {
        yaml.load(match[1]); // Ensure YAML is valid
        return true;
    } catch {
        return false; // YAML parsing failed, meaning invalid front matter
    }
}

// Export the functions for CommonJS
module.exports = { parse, serialize, validate };
