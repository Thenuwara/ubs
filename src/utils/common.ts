export const splitCamelCase = (text : string): string => text.replace(/([a-z])([A-Z])/g, '$1 $2');