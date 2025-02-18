import type { DumpOptions } from "js-yaml";

declare module "matter-yaml" {
    /**
     * Parses YAML front matter and returns the structured data and content.
     * @param text - The full string containing front matter and content.
     * @returns An object with `data` (parsed YAML) and `content` (the remaining text).
     */
    export function parse(text: string): { data: Record<string, any>; content: string };

    /**
     * Serializes an object and content into a front matter formatted string.
     * @param data - The front matter data object.
     * @param content - The raw content as a string.
     * @param options - Optional YAML dump configuration options.
     * @returns A formatted front matter string.
     */
    export function serialize(data: Record<string, any>, content: string, options?: DumpOptions): string;

    /**
     * Validates whether the given text has a valid YAML front matter structure.
     * @param text - The string to validate.
     * @returns `true` if the front matter is correctly formatted and parsable, otherwise `false`.
     */
    export function validate(text: string): boolean;
}
