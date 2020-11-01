/**
 * API response interface
 */
export interface APIResponse {
    "Kushi Tsuru": string;
    "Mon-Sun 11:30 am - 9 pm": string;
}
/**
 * ## Interface used to transform API response into more readable format
 */
export interface APIResponseModified {
    name: string;
    time: string;
    days: string[]
}