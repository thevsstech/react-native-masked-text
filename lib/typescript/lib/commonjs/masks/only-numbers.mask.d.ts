export var __esModule: boolean;
declare var _default: typeof OnlyNumbersMask | undefined;
export default _default;
declare const OnlyNumbersMask_base: any;
declare class OnlyNumbersMask extends OnlyNumbersMask_base {
    [x: string]: any;
    static getType(): string;
    getValue(value: any, settings: any): any;
    getRawValue(maskedValue: any, settings: any): any;
    validate(value: any, settings: any): boolean;
    getMask(value: any, settings: any): string;
}