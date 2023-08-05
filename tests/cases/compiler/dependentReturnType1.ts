// @strict: true
// @noEmit: true

interface A {
    1: number;
    2: string;
}

function f1<T extends 1 | 2>(x: T): A[T] {
    if (x === 1) {
        return 0;
    }
    else {
        return 1;
    }
}

interface C {
    1: number;
    2: string;
    3: boolean;
}

function f2<T extends 1 | 2 | 3>(x: T): C[T] {
    if (x === 1) {
        return 0;
    }
    else {
        return ""; // Error, returned expression needs to have type string & boolean (= never)
    }
}

function f3<T extends 1 | 2 | 3>(x: T): T extends 1 ? number : T extends 2 ? string : T extends 3 ? boolean : never {
    if (x === 1) {
        return 0;
    }
    else {
        return ""; // Error, returned expression needs to have type string & boolean (= never)
    }
}

interface One {
    a: "a";
    b: "b";
    c: "c";
    d: "d";
}

interface Two {
    a: "a";
    b: "b";
    e: "e";
    f: "f";
}

interface Three {
    a: "a";
    c: "c";
    e: "e";
    g: "g";
}

interface Four {
    a: "a";
    d: "d";
    f: "f";
    g: "g";
}

function f10<T extends 1 | 2 | 3 | 4>(x: T): T extends 1 ? One : T extends 2 ? Two : T extends 3 ? Three : Four {
    if (x === 1 || x === 2) {
        // return { a: "a", b: "b", c: "c", d: "d", e: "e", f: "f" };
        return { a: "a" };
    }
    // Excess property becomes a problem with the change,
    // because we now check assignability to a narrower type...
    return { a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g" };
}

// Asymmetry
function conditionalProducingIf<LeftIn, RightIn, LeftOut, RightOut, Arg extends LeftIn | RightIn>(
    arg: Arg,
    cond: (arg: LeftIn | RightIn) => arg is LeftIn,
    produceLeftOut: (arg: LeftIn) => LeftOut,
    produceRightOut: (arg: RightIn) => RightOut):
    Arg extends LeftIn ? LeftOut : RightOut
{
    type OK = Arg extends LeftIn ? LeftOut : RightOut;
    if (cond(arg)) {
        return produceLeftOut(arg);
    } else {
        return produceRightOut(arg as RightIn); // Doesn't work because we don't narrow `arg` to `Arg & RightIn` here
        return produceRightOut(arg as RightIn) as OK;
    }
}

interface Animal {
    name: string;
}

interface Dog extends Animal {
    bark: () => string;
}

declare function isDog(x: Animal): x is Dog;
declare function doggy(x: Dog): number;
function f12<T extends Animal>(x: T): T extends Dog ? number : string {
    if (isDog(x)) { // `x` has type `T & Dog` here
        return doggy(x); // Should work
    }
    return ""; // Should not work because we can't express "not a Dog" in the type system
}

// Cannot narrow `keyof` too eagerly or something like the below breaks
function f<Entry extends { [index: string]: number | boolean }, EntryId extends keyof Entry>(entry: EntryId): Entry[EntryId] {
    const entries = {} as Entry;
    return entries[entry];
}

// Works the same as before
declare function takeA(val: 'A'): void;
export function bounceAndTakeIfA<AB extends 'A' | 'B'>(value: AB): AB {
    if (value === 'A') {
        takeA(value);
        takeAB(value);
        return value;
    }

    return value;
    function takeAB(val: AB): void {}
}

// Works the same as before
export function bbb<AB extends "a" | "b">(value: AB): "a" {
    if (value === "a") {
        return value;
    }
    return "a";
}

class Unnamed {
    root!: { name: string };
    name<T extends string>(name?: T): T extends string ? this : string {
        if (typeof name === 'undefined') {
            return this.root.name;
        }
        return this;
    }

    nameWithError<T extends string>(name?: T): T extends string ? this : string {
        return this; // Investigate error message
    }
}

interface A {
    1: number;
    2: string;
    3: string;
}

function trivialConditional<T extends 1 | 2 | 3>(x: T): A[T] {
    if (x !== 1) {
        return x === 2 ? "" : `${x}`;
    }
    else {
        return 0;
    }
}

// Conditional expressions
function conditional<T extends boolean>(x: T): T extends true ? 1 : 2 {
    return x ? 1 : 2;
}

function contextualConditional<T extends "a" | "b">(x: T): T extends "a" ? "a" : number {
    return x === "a" ? x : parseInt(x);
}

function conditionalWithError<T extends "a" | "b">(x: T): T extends "a" ? number : string {
    return x === "a" ? x : parseInt(x);
}

// Multiple reductions
interface BB {
    "a": number;
    [y: number]: string;
}

interface AA<T extends keyof BB> {
    "c": BB[T];
    "d": boolean,
}

function reduction<T extends keyof BB, U extends "c" | "d">(x: T, y: U): AA<T>[U] {
    if (y === "c" && x === "a") {
        // AA<T>[U='c'] -> BB[T]
        // BB[T='a'] -> number
        return 0;
    }

    return undefined as never;
}

// TODO: test substitution type
// TODO: test non-tail recursive and tail recursive conditionals