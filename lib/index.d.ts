/**
 * Changes date by an offset. Can be negative.
 *
 * @param ms
 * @default 0
 */
export declare function advanceBy(ms: number): void;

/**
 * Sets date to a timestamp or Date.
 *
 * @param ms
 * @default 0
 */
export declare function advanceTo(ms?: number | Date): void;

/**
 * Un-mocks the Date class.
 */
export declare function clear(): void;