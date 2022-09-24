/**
 * @author WMXPY
 * @namespace MarkedMixinDateMonaco
 * @description Declaration
 */

export const MarkedDateMixinConDeclaration: string[] = [

    `(key: string): string`,
];

export const MarkedDateMixinStaticDeclaration: Record<string, string> = {

    now: `() => number`,
    parse: `(key: string) => number`,
};

export const MarkedDateMixinInstanceDeclaration: Record<string, string> = {

    getDate: `() => number`,
    getDay: `() => number`,
    getFullYear: `() => number`,
    getHours: `() => number`,
    getMilliseconds: `() => number`,
    getMinutes: `() => number`,
    getMonth: `() => number`,
    getSeconds: `() => number`,
    getTime: `() => number`,
    getTimezoneOffset: `() => number`,
    getUTCDate: `() => number`,
    getUTCDay: `() => number`,
    getUTCFullYear: `() => number`,
    getUTCHours: `() => number`,
    getUTCMilliseconds: `() => number`,
    getUTCMinutes: `() => number`,
    getUTCMonth: `() => number`,
    getUTCSeconds: `() => number`,
    setDate: `(value: number) => number`,
    setFullYear: `(value: number) => number`,
    setHours: `(value: number) => number`,
    setMilliseconds: `(value: number) => number`,
    setMinutes: `(value: number) => number`,
    setMonth: `(value: number) => number`,
    setSeconds: `(value: number) => number`,
    setTime: `(value: number) => number`,
    setUTCDate: `(value: number) => number`,
    setUTCFullYear: `(value: number) => number`,
    setUTCHours: `(value: number) => number`,
    setUTCMilliseconds: `(value: number) => number`,
    setUTCMinutes: `(value: number) => number`,
    setUTCMonth: `(value: number) => number`,
    setUTCSeconds: `(value: number) => number`,
    toDateString: `() => string`,
    toISOString: `() => string`,
    toJSON: `() => string`,
    toLocaleDateString: `() => string`,
    toLocaleString: `() => string`,
    toLocaleTimeString: `() => string`,
    toString: `() => string`,
    toTimeString: `() => string`,
    toUTCString: `() => string`,
};
