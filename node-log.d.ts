import { Log4js, Configuration, } from 'log4js';

export const configure: (type?: string, level?: string, config?: Configuration) => Log4js;

export const info: (message: any, ...args: any[]) => void;
export const warn: (message: any, ...args: any[]) => void;
export const error: (message: any, ...args: any[]) => void;
export const fatal: (message: any, ...args: any[]) => void;
export const debug: (message: any, ...args: any[]) => void;
export const trace: (message: any, ...args: any[]) => void;

export const express: any;
