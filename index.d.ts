declare module "matter-yaml" {
    /**
     * Parses YAML front matter and returns the structured data and content.
     * @param text - The full string containing front matter and content.
     * @returns An object with `data` (parsed YAML) and `content` (the remaining text).
     */
    export function parseMatter(text: string): { data: Record<string, any>; content: string };

    /**
     * Serializes an object and content into a front matter formatted string.
     * @param data - The front matter data object.
     * @param content - The raw content as a string.
     * @returns A formatted front matter string.
     */
    export function serializeMatter(data: Record<string, any>, content: string): string;

    /**
     * Validates whether the given text has a valid YAML front matter structure.
     * @param text - The string to validate.
     * @returns `true` if the front matter is correctly formatted and parsable, otherwise `false`.
     */
    export function validateMatter(text: string): boolean;
}
