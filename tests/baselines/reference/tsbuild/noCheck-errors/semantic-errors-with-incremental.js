currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/a.ts]
const err: number = "error";
const a: number = "hello"

//// [/src/tsconfig.json]
{
  "compilerOptions": {
    "noCheck": true,
    "emitDeclarationOnly": true,
    "declaration": true
  }
}



Output::
/lib/tsc --b /src/tsconfig.json -v --incremental
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/tsconfig.json' is out of date because output file 'src/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/tsconfig.json'...

[96msrc/a.ts[0m:[93m1[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'string' is not assignable to type 'number'.

[7m1[0m const err: number = "error";
[7m [0m [91m      ~~~[0m

[96msrc/a.ts[0m:[93m2[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'string' is not assignable to type 'number'.

[7m2[0m const a: number = "hello"
[7m [0m [91m      ~[0m

[96msrc/tsconfig.json[0m:[93m3[0m:[93m16[0m - [91merror[0m[90m TS5023: [0mUnknown compiler option 'noCheck'.

[7m3[0m     "noCheck": true,
[7m [0m [91m               ~~~~[0m


Found 3 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/a.ts"
]
Program options: {
  "emitDeclarationOnly": true,
  "declaration": true,
  "incremental": true,
  "tscBuild": true,
  "configFilePath": "/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/a.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/a.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/a.ts (computed .d.ts during emit)


//// [/src/a.d.ts]
declare const err: number;
declare const a: number;


//// [/src/tsconfig.tsbuildinfo]
{"fileNames":["../lib/lib.d.ts","./a.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"9312413704-const err: number = \"error\";\nconst a: number = \"hello\"","signature":"-22763377875-declare const err: number;\ndeclare const a: number;\n","affectsGlobalScope":true}],"root":[2],"options":{"declaration":true,"emitDeclarationOnly":true},"semanticDiagnosticsPerFile":[[2,[{"start":6,"length":3,"code":2322,"category":1,"messageText":"Type 'string' is not assignable to type 'number'."},{"start":35,"length":1,"code":2322,"category":1,"messageText":"Type 'string' is not assignable to type 'number'."}]]],"version":"FakeTSVersion"}

//// [/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../lib/lib.d.ts",
    "./a.ts"
  ],
  "fileInfos": {
    "../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "original": {
        "version": "9312413704-const err: number = \"error\";\nconst a: number = \"hello\"",
        "signature": "-22763377875-declare const err: number;\ndeclare const a: number;\n",
        "affectsGlobalScope": true
      },
      "version": "9312413704-const err: number = \"error\";\nconst a: number = \"hello\"",
      "signature": "-22763377875-declare const err: number;\ndeclare const a: number;\n",
      "affectsGlobalScope": true
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ]
  ],
  "options": {
    "declaration": true,
    "emitDeclarationOnly": true
  },
  "semanticDiagnosticsPerFile": [
    [
      "./a.ts",
      [
        {
          "start": 6,
          "length": 3,
          "code": 2322,
          "category": 1,
          "messageText": "Type 'string' is not assignable to type 'number'."
        },
        {
          "start": 35,
          "length": 1,
          "code": 2322,
          "category": 1,
          "messageText": "Type 'string' is not assignable to type 'number'."
        }
      ]
    ]
  ],
  "version": "FakeTSVersion",
  "size": 1089
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/tsconfig.json -v --incremental
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/tsconfig.json' is out of date because buildinfo file 'src/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/src/tsconfig.json'...

[96msrc/a.ts[0m:[93m1[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'string' is not assignable to type 'number'.

[7m1[0m const err: number = "error";
[7m [0m [91m      ~~~[0m

[96msrc/a.ts[0m:[93m2[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'string' is not assignable to type 'number'.

[7m2[0m const a: number = "hello"
[7m [0m [91m      ~[0m

[96msrc/tsconfig.json[0m:[93m3[0m:[93m16[0m - [91merror[0m[90m TS5023: [0mUnknown compiler option 'noCheck'.

[7m3[0m     "noCheck": true,
[7m [0m [91m               ~~~~[0m


Found 3 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/a.ts"
]
Program options: {
  "emitDeclarationOnly": true,
  "declaration": true,
  "incremental": true,
  "tscBuild": true,
  "configFilePath": "/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/a.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::




Change:: Fix `a` error
Input::
//// [/src/a.ts]
const err: number = "error";
const a = "hello"



Output::
/lib/tsc --b /src/tsconfig.json -v --incremental
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/tsconfig.json' is out of date because buildinfo file 'src/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/src/tsconfig.json'...

[96msrc/a.ts[0m:[93m1[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'string' is not assignable to type 'number'.

[7m1[0m const err: number = "error";
[7m [0m [91m      ~~~[0m

[96msrc/tsconfig.json[0m:[93m3[0m:[93m16[0m - [91merror[0m[90m TS5023: [0mUnknown compiler option 'noCheck'.

[7m3[0m     "noCheck": true,
[7m [0m [91m               ~~~~[0m


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/a.ts"
]
Program options: {
  "emitDeclarationOnly": true,
  "declaration": true,
  "incremental": true,
  "tscBuild": true,
  "configFilePath": "/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/a.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/a.ts

Shape signatures in builder refreshed for::
/src/a.ts (computed .d.ts)


//// [/src/a.d.ts]
declare const err: number;
declare const a = "hello";


//// [/src/tsconfig.tsbuildinfo]
{"fileNames":["../lib/lib.d.ts","./a.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"6909448549-const err: number = \"error\";\nconst a = \"hello\"","signature":"-22441876417-declare const err: number;\ndeclare const a = \"hello\";\n","affectsGlobalScope":true}],"root":[2],"options":{"declaration":true,"emitDeclarationOnly":true},"semanticDiagnosticsPerFile":[[2,[{"start":6,"length":3,"code":2322,"category":1,"messageText":"Type 'string' is not assignable to type 'number'."}]]],"version":"FakeTSVersion"}

//// [/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../lib/lib.d.ts",
    "./a.ts"
  ],
  "fileInfos": {
    "../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "original": {
        "version": "6909448549-const err: number = \"error\";\nconst a = \"hello\"",
        "signature": "-22441876417-declare const err: number;\ndeclare const a = \"hello\";\n",
        "affectsGlobalScope": true
      },
      "version": "6909448549-const err: number = \"error\";\nconst a = \"hello\"",
      "signature": "-22441876417-declare const err: number;\ndeclare const a = \"hello\";\n",
      "affectsGlobalScope": true
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ]
  ],
  "options": {
    "declaration": true,
    "emitDeclarationOnly": true
  },
  "semanticDiagnosticsPerFile": [
    [
      "./a.ts",
      [
        {
          "start": 6,
          "length": 3,
          "code": 2322,
          "category": 1,
          "messageText": "Type 'string' is not assignable to type 'number'."
        }
      ]
    ]
  ],
  "version": "FakeTSVersion",
  "size": 970
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/tsconfig.json -v --incremental
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/tsconfig.json' is out of date because buildinfo file 'src/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/src/tsconfig.json'...

[96msrc/a.ts[0m:[93m1[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'string' is not assignable to type 'number'.

[7m1[0m const err: number = "error";
[7m [0m [91m      ~~~[0m

[96msrc/tsconfig.json[0m:[93m3[0m:[93m16[0m - [91merror[0m[90m TS5023: [0mUnknown compiler option 'noCheck'.

[7m3[0m     "noCheck": true,
[7m [0m [91m               ~~~~[0m


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/a.ts"
]
Program options: {
  "emitDeclarationOnly": true,
  "declaration": true,
  "incremental": true,
  "tscBuild": true,
  "configFilePath": "/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/a.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::




Change:: Disable noCheck
Input::
//// [/src/tsconfig.json]
{
  "compilerOptions": {
    "emitDeclarationOnly": true,
    "declaration": true
  }
}



Output::
/lib/tsc --b /src/tsconfig.json -v --incremental
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/tsconfig.json' is out of date because buildinfo file 'src/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/src/tsconfig.json'...

[96msrc/a.ts[0m:[93m1[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'string' is not assignable to type 'number'.

[7m1[0m const err: number = "error";
[7m [0m [91m      ~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/a.ts"
]
Program options: {
  "emitDeclarationOnly": true,
  "declaration": true,
  "incremental": true,
  "tscBuild": true,
  "configFilePath": "/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/a.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::




Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/tsconfig.json -v --incremental
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/tsconfig.json' is out of date because buildinfo file 'src/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/src/tsconfig.json'...

[96msrc/a.ts[0m:[93m1[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'string' is not assignable to type 'number'.

[7m1[0m const err: number = "error";
[7m [0m [91m      ~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/a.ts"
]
Program options: {
  "emitDeclarationOnly": true,
  "declaration": true,
  "incremental": true,
  "tscBuild": true,
  "configFilePath": "/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/a.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


