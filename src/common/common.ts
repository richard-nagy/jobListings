import { Guid } from "./types";

/**
 * Generates a random GUID.
 * 
 * @returns {Guid} A random GUID.
 */
export function newGuid(): Guid {
    /**
     * Generates a random 4-character hexadecimal string.
     * 
     * @returns {string} A random 4-character hexadecimal string.
     */
    function s4(): string {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};
