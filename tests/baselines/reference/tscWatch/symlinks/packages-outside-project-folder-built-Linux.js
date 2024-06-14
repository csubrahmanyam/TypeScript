currentDirectory:: /home/src/projects/b/2/b-impl/b useCaseSensitiveFileNames: false
Input::
//// [/home/src/projects/c/3/c-impl/c/src/c.ts] Inode:: 9
export const c: string = 'test';

//// [/home/src/projects/c/3/c-impl/c/src/index.ts] Inode:: 10
export * from './c';

//// [/home/src/projects/c/3/c-impl/c/tsconfig.json] Inode:: 11
{
  "compilerOptions": {
    "outDir": "lib",
    "declaration": true
  },
  "include": [
    "src/**/*.ts"
  ]
}

//// [/home/src/projects/c/3/c-impl/c/package.json] Inode:: 12
{
  "name": "c",
  "version": "1.0.0",
  "types": "./lib/index.d.ts"
}

//// [/home/src/projects/c/4/unrelated/somefile.ts] Inode:: 15
export const a: string = 'test';

//// [/home/src/projects/a/1/a-impl/a/src/a.ts] Inode:: 21
export const a: string = 'test';

//// [/home/src/projects/a/1/a-impl/a/src/index.ts] Inode:: 22
export * from './a';
export * from 'c';


//// [/home/src/projects/a/1/a-impl/a/tsconfig.json] Inode:: 23
{
  "compilerOptions": {
    "outDir": "lib",
    "declaration": true
  },
  "include": [
    "src/**/*.ts"
  ]
}

//// [/home/src/projects/a/1/a-impl/a/package.json] Inode:: 24
{
  "name": "a",
  "version": "1.0.0",
  "types": "./lib/index.d.ts"
}

//// [/home/src/projects/a/1/a-impl/a/node_modules/c] symlink(/home/src/projects/c/3/c-impl/c) Inode:: 26
//// [/home/src/projects/a/2/unrelated/somefile.ts] Inode:: 29
export const a: string = 'test';

//// [/home/src/projects/b/2/b-impl/b/src/index.ts] Inode:: 35
import { a } from 'a';

//// [/home/src/projects/b/2/b-impl/b/tsconfig.json] Inode:: 36
{
  "compilerOptions": {
    "outDir": "lib"
  },
  "include": [
    "src/**/*.ts"
  ]
}

//// [/home/src/projects/b/2/b-impl/b/node_modules/a] symlink(/home/src/projects/a/1/a-impl/a) Inode:: 38
//// [/a/lib/lib.d.ts] Inode:: 41
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

//// [/home/src/projects/c/3/c-impl/c/lib/c.js] Inode:: 43
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
exports.c = 'test';


//// [/home/src/projects/c/3/c-impl/c/lib/c.d.ts] Inode:: 44
export declare const c: string;


//// [/home/src/projects/c/3/c-impl/c/lib/index.js] Inode:: 45
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./c"), exports);


//// [/home/src/projects/c/3/c-impl/c/lib/index.d.ts] Inode:: 46
export * from './c';


//// [/home/src/projects/c/3/c-impl/c/lib/tsconfig.tsbuildinfo] Inode:: 47
{"root":["../src/c.ts","../src/index.ts"],"version":"FakeTSVersion"}

//// [/home/src/projects/c/3/c-impl/c/lib/tsconfig.tsbuildinfo.readable.baseline.txt] Inode:: 48
{
  "root": [
    "../src/c.ts",
    "../src/index.ts"
  ],
  "version": "FakeTSVersion",
  "size": 68
}

//// [/home/src/projects/a/1/a-impl/a/lib/a.js] Inode:: 50
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 'test';


//// [/home/src/projects/a/1/a-impl/a/lib/a.d.ts] Inode:: 51
export declare const a: string;


//// [/home/src/projects/a/1/a-impl/a/lib/index.js] Inode:: 52
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./a"), exports);
__exportStar(require("c"), exports);


//// [/home/src/projects/a/1/a-impl/a/lib/index.d.ts] Inode:: 53
export * from './a';
export * from 'c';


//// [/home/src/projects/a/1/a-impl/a/lib/tsconfig.tsbuildinfo] Inode:: 54
{"root":["../src/a.ts","../src/index.ts"],"version":"FakeTSVersion"}

//// [/home/src/projects/a/1/a-impl/a/lib/tsconfig.tsbuildinfo.readable.baseline.txt] Inode:: 55
{
  "root": [
    "../src/a.ts",
    "../src/index.ts"
  ],
  "version": "FakeTSVersion",
  "size": 68
}


/a/lib/tsc.js --w -p . --extendedDiagnostics --explainFiles --traceResolution
Output::
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

Current directory: /home/src/projects/b/2/b-impl/b CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/b/tsconfig.json 2000 undefined Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/home/src/projects/b/2/b-impl/b/src/index.ts"]
  options: {"outDir":"/home/src/projects/b/2/b-impl/b/lib","watch":true,"project":"/home/src/projects/b/2/b-impl/b","extendedDiagnostics":true,"explainFiles":true,"traceResolution":true,"configFilePath":"/home/src/projects/b/2/b-impl/b/tsconfig.json"}
FileWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/b/src/index.ts 250 undefined Source file
======== Resolving module 'a' from '/home/src/projects/b/2/b-impl/b/src/index.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module 'a' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/projects/b/2/b-impl/b/src/node_modules' does not exist, skipping all lookups in it.
Found 'package.json' at '/home/src/projects/b/2/b-impl/b/node_modules/a/package.json'.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.ts' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.tsx' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.d.ts' does not exist.
'package.json' does not have a 'typesVersions' field.
'package.json' does not have a 'typings' field.
'package.json' has 'types' field './lib/index.d.ts' that references '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts'.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts' exists - use it as a name resolution result.
'package.json' does not have a 'peerDependencies' field.
Resolving real path for '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts', result '/home/src/projects/a/1/a-impl/a/lib/index.d.ts'.
======== Module name 'a' was successfully resolved to '/home/src/projects/a/1/a-impl/a/lib/index.d.ts' with Package ID 'a/lib/index.d.ts@1.0.0'. ========
FileWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/index.d.ts 250 undefined Source file
======== Resolving module './a' from '/home/src/projects/a/1/a-impl/a/lib/index.d.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module as file / folder, candidate module location '/home/src/projects/a/1/a-impl/a/lib/a', target file types: TypeScript, Declaration.
File '/home/src/projects/a/1/a-impl/a/lib/a.ts' does not exist.
File '/home/src/projects/a/1/a-impl/a/lib/a.tsx' does not exist.
File '/home/src/projects/a/1/a-impl/a/lib/a.d.ts' exists - use it as a name resolution result.
======== Module name './a' was successfully resolved to '/home/src/projects/a/1/a-impl/a/lib/a.d.ts'. ========
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/a 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/a 1 undefined Failed Lookup Locations
======== Resolving module 'c' from '/home/src/projects/a/1/a-impl/a/lib/index.d.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module 'c' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/projects/a/1/a-impl/a/lib/node_modules' does not exist, skipping all lookups in it.
Found 'package.json' at '/home/src/projects/a/1/a-impl/a/node_modules/c/package.json'.
File '/home/src/projects/a/1/a-impl/a/node_modules/c.ts' does not exist.
File '/home/src/projects/a/1/a-impl/a/node_modules/c.tsx' does not exist.
File '/home/src/projects/a/1/a-impl/a/node_modules/c.d.ts' does not exist.
'package.json' does not have a 'typesVersions' field.
'package.json' does not have a 'typings' field.
'package.json' has 'types' field './lib/index.d.ts' that references '/home/src/projects/a/1/a-impl/a/node_modules/c/lib/index.d.ts'.
File '/home/src/projects/a/1/a-impl/a/node_modules/c/lib/index.d.ts' exists - use it as a name resolution result.
'package.json' does not have a 'peerDependencies' field.
Resolving real path for '/home/src/projects/a/1/a-impl/a/node_modules/c/lib/index.d.ts', result '/home/src/projects/c/3/c-impl/c/lib/index.d.ts'.
======== Module name 'c' was successfully resolved to '/home/src/projects/c/3/c-impl/c/lib/index.d.ts' with Package ID 'c/lib/index.d.ts@1.0.0'. ========
FileWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/a.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /home/src/projects/c/3/c-impl/c/lib/index.d.ts 250 undefined Source file
======== Resolving module './c' from '/home/src/projects/c/3/c-impl/c/lib/index.d.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module as file / folder, candidate module location '/home/src/projects/c/3/c-impl/c/lib/c', target file types: TypeScript, Declaration.
File '/home/src/projects/c/3/c-impl/c/lib/c.ts' does not exist.
File '/home/src/projects/c/3/c-impl/c/lib/c.tsx' does not exist.
File '/home/src/projects/c/3/c-impl/c/lib/c.d.ts' exists - use it as a name resolution result.
======== Module name './c' was successfully resolved to '/home/src/projects/c/3/c-impl/c/lib/c.d.ts'. ========
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/c 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/c 1 undefined Failed Lookup Locations
FileWatcher:: Added:: WatchInfo: /home/src/projects/c/3/c-impl/c/lib/c.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 250 undefined Source file
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/b/src 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/b/src 1 undefined Failed Lookup Locations
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules 1 undefined Failed Lookup Locations
FileWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/package.json 2000 undefined File location affecting resolution
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/node_modules 1 undefined Failed Lookup Locations
FileWatcher:: Added:: WatchInfo: /home/src/projects/c/3/c-impl/c/package.json 2000 undefined File location affecting resolution
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Type roots
../../../../../../../a/lib/lib.d.ts
  Default library for target 'es5'
../../../../a/1/a-impl/a/lib/a.d.ts
  Imported via './a' from file '../../../../a/1/a-impl/a/lib/index.d.ts'
../../../../c/3/c-impl/c/lib/c.d.ts
  Imported via './c' from file '../../../../c/3/c-impl/c/lib/index.d.ts'
../../../../c/3/c-impl/c/lib/index.d.ts
  Imported via 'c' from file '../../../../a/1/a-impl/a/lib/index.d.ts' with packageId 'c/lib/index.d.ts@1.0.0'
../../../../a/1/a-impl/a/lib/index.d.ts
  Imported via 'a' from file 'src/index.ts' with packageId 'a/lib/index.d.ts@1.0.0'
src/index.ts
  Matched by include pattern 'src/**/*.ts' in 'tsconfig.json'
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.

DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/b/src 1 undefined Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/b/src 1 undefined Wild card directory


//// [/home/src/projects/b/2/b-impl/b/lib/index.js] Inode:: 57
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });



PolledWatches::
/home/src/projects/a/1/a-impl/a/lib/node_modules: *new*
  {"pollingInterval":500}
/home/src/projects/b/2/b-impl/b/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/b/2/b-impl/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/b/2/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/b/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {"inode":41}
/home/src/projects/a: *new*
  {"inode":16}
/home/src/projects/a/1: *new*
  {"inode":17}
/home/src/projects/a/1/a-impl: *new*
  {"inode":18}
/home/src/projects/a/1/a-impl/a: *new*
  {"inode":19}
/home/src/projects/a/1/a-impl/a/lib: *new*
  {"inode":49}
/home/src/projects/a/1/a-impl/a/lib/a.d.ts: *new*
  {"inode":51}
/home/src/projects/a/1/a-impl/a/lib/index.d.ts: *new*
  {"inode":53}
/home/src/projects/a/1/a-impl/a/node_modules: *new*
  {"inode":25}
/home/src/projects/a/1/a-impl/a/package.json: *new*
  {"inode":24}
/home/src/projects/a/1/a-impl/a/src: *new*
  {"inode":20}
/home/src/projects/a/2: *new*
  {"inode":27}
/home/src/projects/a/2/unrelated: *new*
  {"inode":28}
/home/src/projects/b/2/b-impl/b/node_modules: *new*
  {"inode":37}
/home/src/projects/b/2/b-impl/b/src: *new*
  {"inode":34}
/home/src/projects/b/2/b-impl/b/src/index.ts: *new*
  {"inode":35}
/home/src/projects/b/2/b-impl/b/tsconfig.json: *new*
  {"inode":36}
/home/src/projects/c: *new*
  {"inode":4}
/home/src/projects/c/3: *new*
  {"inode":5}
/home/src/projects/c/3/c-impl: *new*
  {"inode":6}
/home/src/projects/c/3/c-impl/c: *new*
  {"inode":7}
/home/src/projects/c/3/c-impl/c/lib: *new*
  {"inode":42}
/home/src/projects/c/3/c-impl/c/lib/c.d.ts: *new*
  {"inode":44}
/home/src/projects/c/3/c-impl/c/lib/index.d.ts: *new*
  {"inode":46}
/home/src/projects/c/3/c-impl/c/package.json: *new*
  {"inode":12}
/home/src/projects/c/3/c-impl/c/src: *new*
  {"inode":8}
/home/src/projects/c/4: *new*
  {"inode":13}
/home/src/projects/c/4/unrelated: *new*
  {"inode":14}

Program root files: [
  "/home/src/projects/b/2/b-impl/b/src/index.ts"
]
Program options: {
  "outDir": "/home/src/projects/b/2/b-impl/b/lib",
  "watch": true,
  "project": "/home/src/projects/b/2/b-impl/b",
  "extendedDiagnostics": true,
  "explainFiles": true,
  "traceResolution": true,
  "configFilePath": "/home/src/projects/b/2/b-impl/b/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/home/src/projects/a/1/a-impl/a/lib/a.d.ts
/home/src/projects/c/3/c-impl/c/lib/c.d.ts
/home/src/projects/c/3/c-impl/c/lib/index.d.ts
/home/src/projects/a/1/a-impl/a/lib/index.d.ts
/home/src/projects/b/2/b-impl/b/src/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/home/src/projects/a/1/a-impl/a/lib/a.d.ts
/home/src/projects/c/3/c-impl/c/lib/c.d.ts
/home/src/projects/c/3/c-impl/c/lib/index.d.ts
/home/src/projects/a/1/a-impl/a/lib/index.d.ts
/home/src/projects/b/2/b-impl/b/src/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/home/src/projects/a/1/a-impl/a/lib/a.d.ts (used version)
/home/src/projects/c/3/c-impl/c/lib/c.d.ts (used version)
/home/src/projects/c/3/c-impl/c/lib/index.d.ts (used version)
/home/src/projects/a/1/a-impl/a/lib/index.d.ts (used version)
/home/src/projects/b/2/b-impl/b/src/index.ts (used version)

exitCode:: ExitStatus.undefined

Change:: change in unrelated folder in a

Input::
//// [/home/src/projects/a/2/unrelated/somethingUnrelated.ts] Inode:: 58
export const a = 10;


Timeout callback:: count: 1
1: timerToUpdateChildWatches *new*

Before running Timeout callback:: count: 1
1: timerToUpdateChildWatches

Host is moving to new time
After running Timeout callback:: count: 1
Output::
sysLog:: onTimerToUpdateChildWatches:: 1
sysLog:: invokingWatchers:: Elapsed:: *ms:: 0
DirectoryWatcher:: Triggered with /home/src/projects/a/2/unrelated/somethingUnrelated.ts 0:: WatchInfo: /home/src/projects/a 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/a/2/unrelated/somethingUnrelated.ts 0:: WatchInfo: /home/src/projects/a 1 undefined Failed Lookup Locations
sysLog:: Elapsed:: *ms:: onTimerToUpdateChildWatches:: 0 undefined



Timeout callback:: count: 1
2: timerToInvalidateFailedLookupResolutions *new*

Before running Timeout callback:: count: 1
2: timerToInvalidateFailedLookupResolutions

Host is moving to new time
After running Timeout callback:: count: 0


exitCode:: ExitStatus.undefined

Change:: change in unrelated folder in c

Input::
//// [/home/src/projects/c/4/unrelated/somethingUnrelated.ts] Inode:: 59
export const a = 10;


Timeout callback:: count: 1
3: timerToUpdateChildWatches *new*

Before running Timeout callback:: count: 1
3: timerToUpdateChildWatches

Host is moving to new time
After running Timeout callback:: count: 1
Output::
sysLog:: onTimerToUpdateChildWatches:: 1
sysLog:: invokingWatchers:: Elapsed:: *ms:: 0
DirectoryWatcher:: Triggered with /home/src/projects/c/4/unrelated/somethingUnrelated.ts 0:: WatchInfo: /home/src/projects/c 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/c/4/unrelated/somethingUnrelated.ts 0:: WatchInfo: /home/src/projects/c 1 undefined Failed Lookup Locations
sysLog:: Elapsed:: *ms:: onTimerToUpdateChildWatches:: 0 undefined



Timeout callback:: count: 1
4: timerToInvalidateFailedLookupResolutions *new*

Before running Timeout callback:: count: 1
4: timerToInvalidateFailedLookupResolutions

Host is moving to new time
After running Timeout callback:: count: 0


exitCode:: ExitStatus.undefined

Change:: change in unrelated folder in a

Input::
//// [/home/src/projects/a/2/unrelated/anotherFile.ts] Inode:: 60
export const a = 10;


Timeout callback:: count: 1
5: timerToUpdateChildWatches *new*

Before running Timeout callback:: count: 1
5: timerToUpdateChildWatches

Host is moving to new time
After running Timeout callback:: count: 1
Output::
sysLog:: onTimerToUpdateChildWatches:: 1
sysLog:: invokingWatchers:: Elapsed:: *ms:: 0
DirectoryWatcher:: Triggered with /home/src/projects/a/2/unrelated/anotherFile.ts 0:: WatchInfo: /home/src/projects/a 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/a/2/unrelated/anotherFile.ts 0:: WatchInfo: /home/src/projects/a 1 undefined Failed Lookup Locations
sysLog:: Elapsed:: *ms:: onTimerToUpdateChildWatches:: 0 undefined



Timeout callback:: count: 1
6: timerToInvalidateFailedLookupResolutions *new*

Before running Timeout callback:: count: 1
6: timerToInvalidateFailedLookupResolutions

Host is moving to new time
After running Timeout callback:: count: 0


exitCode:: ExitStatus.undefined

Change:: change in unrelated folder in c

Input::
//// [/home/src/projects/c/4/unrelated/anotherFile.ts] Inode:: 61
export const a = 10;


Timeout callback:: count: 1
7: timerToUpdateChildWatches *new*

Before running Timeout callback:: count: 1
7: timerToUpdateChildWatches

Host is moving to new time
After running Timeout callback:: count: 1
Output::
sysLog:: onTimerToUpdateChildWatches:: 1
sysLog:: invokingWatchers:: Elapsed:: *ms:: 0
DirectoryWatcher:: Triggered with /home/src/projects/c/4/unrelated/anotherFile.ts 0:: WatchInfo: /home/src/projects/c 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/c/4/unrelated/anotherFile.ts 0:: WatchInfo: /home/src/projects/c 1 undefined Failed Lookup Locations
sysLog:: Elapsed:: *ms:: onTimerToUpdateChildWatches:: 0 undefined



Timeout callback:: count: 1
8: timerToInvalidateFailedLookupResolutions *new*

Before running Timeout callback:: count: 1
8: timerToInvalidateFailedLookupResolutions

Host is moving to new time
After running Timeout callback:: count: 0


exitCode:: ExitStatus.undefined

Change:: Clean dependencies build

Input::
//// [/home/src/projects/c/3/c-impl/c/lib/c.js] deleted
//// [/home/src/projects/c/3/c-impl/c/lib/c.d.ts] deleted
//// [/home/src/projects/c/3/c-impl/c/lib/index.js] deleted
//// [/home/src/projects/c/3/c-impl/c/lib/index.d.ts] deleted
//// [/home/src/projects/c/3/c-impl/c/lib/tsconfig.tsbuildinfo] deleted
//// [/home/src/projects/c/3/c-impl/c/lib/tsconfig.tsbuildinfo.readable.baseline.txt] deleted
//// [/home/src/projects/a/1/a-impl/a/lib/a.js] deleted
//// [/home/src/projects/a/1/a-impl/a/lib/a.d.ts] deleted
//// [/home/src/projects/a/1/a-impl/a/lib/index.js] deleted
//// [/home/src/projects/a/1/a-impl/a/lib/index.d.ts] deleted
//// [/home/src/projects/a/1/a-impl/a/lib/tsconfig.tsbuildinfo] deleted
//// [/home/src/projects/a/1/a-impl/a/lib/tsconfig.tsbuildinfo.readable.baseline.txt] deleted

Output::
FileWatcher:: Triggered with /home/src/projects/c/3/c-impl/c/lib/c.d.ts 2:: WatchInfo: /home/src/projects/c/3/c-impl/c/lib/c.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/c/3/c-impl/c/lib/c.d.ts 2:: WatchInfo: /home/src/projects/c/3/c-impl/c/lib/c.d.ts 250 undefined Source file
sysLog:: /home/src/projects/c/3/c-impl/c/lib/c.d.ts:: Changing watcher to MissingFileSystemEntryWatcher
FileWatcher:: Triggered with /home/src/projects/c/3/c-impl/c/lib/index.d.ts 2:: WatchInfo: /home/src/projects/c/3/c-impl/c/lib/index.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/c/3/c-impl/c/lib/index.d.ts 2:: WatchInfo: /home/src/projects/c/3/c-impl/c/lib/index.d.ts 250 undefined Source file
sysLog:: /home/src/projects/c/3/c-impl/c/lib/index.d.ts:: Changing watcher to MissingFileSystemEntryWatcher
DirectoryWatcher:: Triggered with /home/src/projects/c/3/c-impl/c/lib :: WatchInfo: /home/src/projects/c 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/c/3/c-impl/c/lib :: WatchInfo: /home/src/projects/c 1 undefined Failed Lookup Locations
sysLog:: /home/src/projects/c/3/c-impl/c/lib:: Changing watcher to MissingFileSystemEntryWatcher
FileWatcher:: Triggered with /home/src/projects/a/1/a-impl/a/lib/a.d.ts 2:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/a.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/a/1/a-impl/a/lib/a.d.ts 2:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/a.d.ts 250 undefined Source file
sysLog:: /home/src/projects/a/1/a-impl/a/lib/a.d.ts:: Changing watcher to MissingFileSystemEntryWatcher
FileWatcher:: Triggered with /home/src/projects/a/1/a-impl/a/lib/index.d.ts 2:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/index.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/a/1/a-impl/a/lib/index.d.ts 2:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/index.d.ts 250 undefined Source file
sysLog:: /home/src/projects/a/1/a-impl/a/lib/index.d.ts:: Changing watcher to MissingFileSystemEntryWatcher
DirectoryWatcher:: Triggered with /home/src/projects/a/1/a-impl/a/lib :: WatchInfo: /home/src/projects/a 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup, Cancelled earlier one
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/a/1/a-impl/a/lib :: WatchInfo: /home/src/projects/a 1 undefined Failed Lookup Locations
sysLog:: /home/src/projects/a/1/a-impl/a/lib:: Changing watcher to MissingFileSystemEntryWatcher


PolledWatches::
/home/src/projects/a/1/a-impl/a/lib: *new*
  {"pollingInterval":500}
/home/src/projects/a/1/a-impl/a/lib/a.d.ts: *new*
  {"pollingInterval":250}
/home/src/projects/a/1/a-impl/a/lib/index.d.ts: *new*
  {"pollingInterval":250}
/home/src/projects/a/1/a-impl/a/lib/node_modules:
  {"pollingInterval":500}
/home/src/projects/b/2/b-impl/b/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/b/2/b-impl/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/b/2/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/b/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/c/3/c-impl/c/lib: *new*
  {"pollingInterval":500}
/home/src/projects/c/3/c-impl/c/lib/c.d.ts: *new*
  {"pollingInterval":250}
/home/src/projects/c/3/c-impl/c/lib/index.d.ts: *new*
  {"pollingInterval":250}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {"inode":41}
/home/src/projects/a:
  {"inode":16}
/home/src/projects/a/1:
  {"inode":17}
/home/src/projects/a/1/a-impl:
  {"inode":18}
/home/src/projects/a/1/a-impl/a:
  {"inode":19}
/home/src/projects/a/1/a-impl/a/node_modules:
  {"inode":25}
/home/src/projects/a/1/a-impl/a/package.json:
  {"inode":24}
/home/src/projects/a/1/a-impl/a/src:
  {"inode":20}
/home/src/projects/a/2:
  {"inode":27}
/home/src/projects/a/2/unrelated:
  {"inode":28}
/home/src/projects/b/2/b-impl/b/node_modules:
  {"inode":37}
/home/src/projects/b/2/b-impl/b/src:
  {"inode":34}
/home/src/projects/b/2/b-impl/b/src/index.ts:
  {"inode":35}
/home/src/projects/b/2/b-impl/b/tsconfig.json:
  {"inode":36}
/home/src/projects/c:
  {"inode":4}
/home/src/projects/c/3:
  {"inode":5}
/home/src/projects/c/3/c-impl:
  {"inode":6}
/home/src/projects/c/3/c-impl/c:
  {"inode":7}
/home/src/projects/c/3/c-impl/c/package.json:
  {"inode":12}
/home/src/projects/c/3/c-impl/c/src:
  {"inode":8}
/home/src/projects/c/4:
  {"inode":13}
/home/src/projects/c/4/unrelated:
  {"inode":14}

FsWatches *deleted*::
/home/src/projects/a/1/a-impl/a/lib:
  {"inode":49}
/home/src/projects/a/1/a-impl/a/lib/a.d.ts:
  {"inode":51}
/home/src/projects/a/1/a-impl/a/lib/index.d.ts:
  {"inode":53}
/home/src/projects/c/3/c-impl/c/lib:
  {"inode":42}
/home/src/projects/c/3/c-impl/c/lib/c.d.ts:
  {"inode":44}
/home/src/projects/c/3/c-impl/c/lib/index.d.ts:
  {"inode":46}

Timeout callback:: count: 3
22: timerToUpdateProgram *new*
27: timerToInvalidateFailedLookupResolutions *new*
28: timerToUpdateChildWatches *new*

Before running Timeout callback:: count: 3
22: timerToUpdateProgram
27: timerToInvalidateFailedLookupResolutions
28: timerToUpdateChildWatches

After running Timeout callback:: count: 1
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/home/src/projects/b/2/b-impl/b/src/index.ts"]
  options: {"outDir":"/home/src/projects/b/2/b-impl/b/lib","watch":true,"project":"/home/src/projects/b/2/b-impl/b","extendedDiagnostics":true,"explainFiles":true,"traceResolution":true,"configFilePath":"/home/src/projects/b/2/b-impl/b/tsconfig.json"}
FileWatcher:: Close:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/a.d.ts 250 undefined Source file
======== Resolving module 'a' from '/home/src/projects/b/2/b-impl/b/src/index.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module 'a' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/projects/b/2/b-impl/b/src/node_modules' does not exist, skipping all lookups in it.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/package.json' exists according to earlier cached lookups.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.ts' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.tsx' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.d.ts' does not exist.
'package.json' does not have a 'typings' field.
'package.json' has 'types' field './lib/index.d.ts' that references '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts'.
Loading module as file / folder, candidate module location '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts', target file types: TypeScript, Declaration.
File name '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts' has a '.d.ts' extension - stripping it.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.ts' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.tsx' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.d.ts' does not exist.
Directory '/home/src/projects/b/2/b-impl/b/node_modules/@types' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/2/b-impl/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/2/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
Loading module 'a' from 'node_modules' folder, target file types: JavaScript.
Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Directory '/home/src/projects/b/2/b-impl/b/src/node_modules' does not exist, skipping all lookups in it.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/package.json' exists according to earlier cached lookups.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.js' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.jsx' does not exist.
'package.json' does not have a 'main' field.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.js' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.jsx' does not exist.
Directory '/home/src/projects/b/2/b-impl/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/2/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
Resolution of non-relative name failed; trying with '--moduleResolution bundler' to see if project may need configuration update.
Loading module 'a' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/projects/b/2/b-impl/b/src/node_modules' does not exist, skipping all lookups in it.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/package.json' exists according to earlier cached lookups.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.ts' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.tsx' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.d.ts' does not exist.
'package.json' does not have a 'typings' field.
'package.json' has 'types' field './lib/index.d.ts' that references '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts'.
Loading module as file / folder, candidate module location '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts', target file types: TypeScript, Declaration.
File name '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts' has a '.d.ts' extension - stripping it.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.ts' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.tsx' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.d.ts' does not exist.
Directory '/home/src/projects/b/2/b-impl/b/node_modules/@types' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/2/b-impl/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/2/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name 'a' was not resolved. ========
FileWatcher:: Close:: WatchInfo: /home/src/projects/c/3/c-impl/c/lib/c.d.ts 250 undefined Source file
FileWatcher:: Close:: WatchInfo: /home/src/projects/c/3/c-impl/c/lib/index.d.ts 250 undefined Source file
FileWatcher:: Close:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/index.d.ts 250 undefined Source file
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules/a 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules/a 1 undefined Failed Lookup Locations
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/b-impl/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/2/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/b/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/a 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/a 1 undefined Failed Lookup Locations
DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/c 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/c 1 undefined Failed Lookup Locations
DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/a/1/a-impl/a/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/a/1/a-impl/a/node_modules 1 undefined Failed Lookup Locations
FileWatcher:: Close:: WatchInfo: /home/src/projects/c/3/c-impl/c/package.json 2000 undefined File location affecting resolution
[96msrc/index.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2307: [0mCannot find module 'a' or its corresponding type declarations.

[7m1[0m import { a } from 'a';
[7m [0m [91m                  ~~~[0m

../../../../../../../a/lib/lib.d.ts
  Default library for target 'es5'
src/index.ts
  Matched by include pattern 'src/**/*.ts' in 'tsconfig.json'
[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.

sysLog:: onTimerToUpdateChildWatches:: 4
sysLog:: invokingWatchers:: Elapsed:: *ms:: 0
DirectoryWatcher:: Triggered with /home/src/projects/b/2/b-impl/b/node_modules :: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/b/2/b-impl/b/node_modules :: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Triggered with /home/src/projects/b/2/b-impl/b/node_modules/a :: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules/a 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup, Cancelled earlier one
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/b/2/b-impl/b/node_modules/a :: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules/a 1 undefined Failed Lookup Locations
sysLog:: Elapsed:: *ms:: onTimerToUpdateChildWatches:: 0 undefined


//// [/home/src/projects/b/2/b-impl/b/lib/index.js] file written with same contents Inode:: 57

PolledWatches::
/home/src/projects/b/2/b-impl/b/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/b/2/b-impl/node_modules: *new*
  {"pollingInterval":500}
/home/src/projects/b/2/b-impl/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/b/2/node_modules: *new*
  {"pollingInterval":500}
/home/src/projects/b/2/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/b/node_modules: *new*
  {"pollingInterval":500}
/home/src/projects/b/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/node_modules: *new*
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/home/src/projects/a/1/a-impl/a/lib:
  {"pollingInterval":500}
/home/src/projects/a/1/a-impl/a/lib/a.d.ts:
  {"pollingInterval":250}
/home/src/projects/a/1/a-impl/a/lib/index.d.ts:
  {"pollingInterval":250}
/home/src/projects/a/1/a-impl/a/lib/node_modules:
  {"pollingInterval":500}
/home/src/projects/c/3/c-impl/c/lib:
  {"pollingInterval":500}
/home/src/projects/c/3/c-impl/c/lib/c.d.ts:
  {"pollingInterval":250}
/home/src/projects/c/3/c-impl/c/lib/index.d.ts:
  {"pollingInterval":250}

FsWatches::
/a/lib/lib.d.ts:
  {"inode":41}
/home/src/projects/a/1/a-impl/a:
  {"inode":19}
/home/src/projects/a/1/a-impl/a/node_modules:
  {"inode":25}
/home/src/projects/a/1/a-impl/a/package.json:
  {"inode":24}
/home/src/projects/a/1/a-impl/a/src:
  {"inode":20}
/home/src/projects/b/2/b-impl/b/node_modules:
  {"inode":37}
/home/src/projects/b/2/b-impl/b/node_modules/a: *new*
  {"inode":19}
/home/src/projects/b/2/b-impl/b/src:
  {"inode":34}
/home/src/projects/b/2/b-impl/b/src/index.ts:
  {"inode":35}
/home/src/projects/b/2/b-impl/b/tsconfig.json:
  {"inode":36}

FsWatches *deleted*::
/home/src/projects/a:
  {"inode":16}
/home/src/projects/a/1:
  {"inode":17}
/home/src/projects/a/1/a-impl:
  {"inode":18}
/home/src/projects/a/2:
  {"inode":27}
/home/src/projects/a/2/unrelated:
  {"inode":28}
/home/src/projects/c:
  {"inode":4}
/home/src/projects/c/3:
  {"inode":5}
/home/src/projects/c/3/c-impl:
  {"inode":6}
/home/src/projects/c/3/c-impl/c:
  {"inode":7}
/home/src/projects/c/3/c-impl/c/package.json:
  {"inode":12}
/home/src/projects/c/3/c-impl/c/src:
  {"inode":8}
/home/src/projects/c/4:
  {"inode":13}
/home/src/projects/c/4/unrelated:
  {"inode":14}

Timeout callback:: count: 1
27: timerToInvalidateFailedLookupResolutions *deleted*
30: timerToInvalidateFailedLookupResolutions *new*


Program root files: [
  "/home/src/projects/b/2/b-impl/b/src/index.ts"
]
Program options: {
  "outDir": "/home/src/projects/b/2/b-impl/b/lib",
  "watch": true,
  "project": "/home/src/projects/b/2/b-impl/b",
  "extendedDiagnostics": true,
  "explainFiles": true,
  "traceResolution": true,
  "configFilePath": "/home/src/projects/b/2/b-impl/b/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/home/src/projects/b/2/b-impl/b/src/index.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/b/2/b-impl/b/src/index.ts

Shape signatures in builder refreshed for::
/home/src/projects/b/2/b-impl/b/src/index.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: After updating childs

Input::

Before running Timeout callback:: count: 1
30: timerToInvalidateFailedLookupResolutions

Host is moving to new time
After running Timeout callback:: count: 1
Output::
Scheduling update



Timeout callback:: count: 1
31: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
31: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/home/src/projects/b/2/b-impl/b/src/index.ts"]
  options: {"outDir":"/home/src/projects/b/2/b-impl/b/lib","watch":true,"project":"/home/src/projects/b/2/b-impl/b","extendedDiagnostics":true,"explainFiles":true,"traceResolution":true,"configFilePath":"/home/src/projects/b/2/b-impl/b/tsconfig.json"}
======== Resolving module 'a' from '/home/src/projects/b/2/b-impl/b/src/index.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module 'a' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/projects/b/2/b-impl/b/src/node_modules' does not exist, skipping all lookups in it.
Found 'package.json' at '/home/src/projects/b/2/b-impl/b/node_modules/a/package.json'.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.ts' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.tsx' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.d.ts' does not exist.
'package.json' does not have a 'typesVersions' field.
'package.json' does not have a 'typings' field.
'package.json' has 'types' field './lib/index.d.ts' that references '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts'.
Loading module as file / folder, candidate module location '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts', target file types: TypeScript, Declaration.
File name '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts' has a '.d.ts' extension - stripping it.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.ts' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.tsx' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.d.ts' does not exist.
Directory '/home/src/projects/b/2/b-impl/b/node_modules/@types' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/2/b-impl/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/2/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
Loading module 'a' from 'node_modules' folder, target file types: JavaScript.
Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Directory '/home/src/projects/b/2/b-impl/b/src/node_modules' does not exist, skipping all lookups in it.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/package.json' exists according to earlier cached lookups.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.js' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.jsx' does not exist.
'package.json' does not have a 'main' field.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.js' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.jsx' does not exist.
Directory '/home/src/projects/b/2/b-impl/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/2/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
Resolution of non-relative name failed; trying with '--moduleResolution bundler' to see if project may need configuration update.
Loading module 'a' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/projects/b/2/b-impl/b/src/node_modules' does not exist, skipping all lookups in it.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/package.json' exists according to earlier cached lookups.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.ts' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.tsx' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.d.ts' does not exist.
'package.json' does not have a 'typings' field.
'package.json' has 'types' field './lib/index.d.ts' that references '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts'.
Loading module as file / folder, candidate module location '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts', target file types: TypeScript, Declaration.
File name '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts' has a '.d.ts' extension - stripping it.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.ts' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.tsx' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/index.d.ts' does not exist.
Directory '/home/src/projects/b/2/b-impl/b/node_modules/@types' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/2/b-impl/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/2/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/b/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name 'a' was not resolved. ========
[96msrc/index.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2307: [0mCannot find module 'a' or its corresponding type declarations.

[7m1[0m import { a } from 'a';
[7m [0m [91m                  ~~~[0m

../../../../../../../a/lib/lib.d.ts
  Default library for target 'es5'
src/index.ts
  Matched by include pattern 'src/**/*.ts' in 'tsconfig.json'
[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.




Before running Timeout callback:: count: 0

After running Timeout callback:: count: 0


Program root files: [
  "/home/src/projects/b/2/b-impl/b/src/index.ts"
]
Program options: {
  "outDir": "/home/src/projects/b/2/b-impl/b/lib",
  "watch": true,
  "project": "/home/src/projects/b/2/b-impl/b",
  "extendedDiagnostics": true,
  "explainFiles": true,
  "traceResolution": true,
  "configFilePath": "/home/src/projects/b/2/b-impl/b/tsconfig.json"
}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/home/src/projects/b/2/b-impl/b/src/index.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: Build dependencies

Input::
//// [/home/src/projects/c/3/c-impl/c/lib/c.js] Inode:: 63
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
exports.c = 'test';


//// [/home/src/projects/c/3/c-impl/c/lib/c.d.ts] Inode:: 64
export declare const c: string;


//// [/home/src/projects/c/3/c-impl/c/lib/index.js] Inode:: 65
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./c"), exports);


//// [/home/src/projects/c/3/c-impl/c/lib/index.d.ts] Inode:: 66
export * from './c';


//// [/home/src/projects/c/3/c-impl/c/lib/tsconfig.tsbuildinfo] Inode:: 67
{"root":["../src/c.ts","../src/index.ts"],"version":"FakeTSVersion"}

//// [/home/src/projects/c/3/c-impl/c/lib/tsconfig.tsbuildinfo.readable.baseline.txt] Inode:: 68
{
  "root": [
    "../src/c.ts",
    "../src/index.ts"
  ],
  "version": "FakeTSVersion",
  "size": 68
}

//// [/home/src/projects/a/1/a-impl/a/lib/a.js] Inode:: 70
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 'test';


//// [/home/src/projects/a/1/a-impl/a/lib/a.d.ts] Inode:: 71
export declare const a: string;


//// [/home/src/projects/a/1/a-impl/a/lib/index.js] Inode:: 72
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./a"), exports);
__exportStar(require("c"), exports);


//// [/home/src/projects/a/1/a-impl/a/lib/index.d.ts] Inode:: 73
export * from './a';
export * from 'c';


//// [/home/src/projects/a/1/a-impl/a/lib/tsconfig.tsbuildinfo] Inode:: 74
{"root":["../src/a.ts","../src/index.ts"],"version":"FakeTSVersion"}

//// [/home/src/projects/a/1/a-impl/a/lib/tsconfig.tsbuildinfo.readable.baseline.txt] Inode:: 75
{
  "root": [
    "../src/a.ts",
    "../src/index.ts"
  ],
  "version": "FakeTSVersion",
  "size": 68
}


Timeout callback:: count: 1
33: timerToUpdateChildWatches *new*

Before running Timeout callback:: count: 1
33: timerToUpdateChildWatches

After running Timeout callback:: count: 1
Output::
DirectoryWatcher:: Triggered with /home/src/projects/b/2/b-impl/b/node_modules :: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/b/2/b-impl/b/node_modules :: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Triggered with /home/src/projects/b/2/b-impl/b/node_modules/a :: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules/a 1 undefined Failed Lookup Locations
Scheduling invalidateFailedLookup, Cancelled earlier one
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/b/2/b-impl/b/node_modules/a :: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules/a 1 undefined Failed Lookup Locations



PolledWatches::
/home/src/projects/b/2/b-impl/b/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/b/2/b-impl/node_modules:
  {"pollingInterval":500}
/home/src/projects/b/2/b-impl/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/b/2/node_modules:
  {"pollingInterval":500}
/home/src/projects/b/2/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/b/node_modules:
  {"pollingInterval":500}
/home/src/projects/b/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {"inode":41}
/home/src/projects/a/1/a-impl/a:
  {"inode":19}
/home/src/projects/a/1/a-impl/a/lib: *new*
  {"inode":69}
/home/src/projects/a/1/a-impl/a/node_modules:
  {"inode":25}
/home/src/projects/a/1/a-impl/a/package.json:
  {"inode":24}
/home/src/projects/a/1/a-impl/a/src:
  {"inode":20}
/home/src/projects/b/2/b-impl/b/node_modules:
  {"inode":37}
/home/src/projects/b/2/b-impl/b/node_modules/a:
  {"inode":19}
/home/src/projects/b/2/b-impl/b/src:
  {"inode":34}
/home/src/projects/b/2/b-impl/b/src/index.ts:
  {"inode":35}
/home/src/projects/b/2/b-impl/b/tsconfig.json:
  {"inode":36}

Timeout callback:: count: 1
35: timerToInvalidateFailedLookupResolutions *new*

Before running Timeout callback:: count: 1
35: timerToInvalidateFailedLookupResolutions

Host is moving to new time
After running Timeout callback:: count: 1
Output::
Scheduling update



Timeout callback:: count: 1
36: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
36: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/home/src/projects/b/2/b-impl/b/src/index.ts"]
  options: {"outDir":"/home/src/projects/b/2/b-impl/b/lib","watch":true,"project":"/home/src/projects/b/2/b-impl/b","extendedDiagnostics":true,"explainFiles":true,"traceResolution":true,"configFilePath":"/home/src/projects/b/2/b-impl/b/tsconfig.json"}
======== Resolving module 'a' from '/home/src/projects/b/2/b-impl/b/src/index.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module 'a' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/projects/b/2/b-impl/b/src/node_modules' does not exist, skipping all lookups in it.
Found 'package.json' at '/home/src/projects/b/2/b-impl/b/node_modules/a/package.json'.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.ts' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.tsx' does not exist.
File '/home/src/projects/b/2/b-impl/b/node_modules/a.d.ts' does not exist.
'package.json' does not have a 'typesVersions' field.
'package.json' does not have a 'typings' field.
'package.json' has 'types' field './lib/index.d.ts' that references '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts'.
File '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts' exists - use it as a name resolution result.
'package.json' does not have a 'peerDependencies' field.
Resolving real path for '/home/src/projects/b/2/b-impl/b/node_modules/a/lib/index.d.ts', result '/home/src/projects/a/1/a-impl/a/lib/index.d.ts'.
======== Module name 'a' was successfully resolved to '/home/src/projects/a/1/a-impl/a/lib/index.d.ts' with Package ID 'a/lib/index.d.ts@1.0.0'. ========
FileWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/index.d.ts 250 undefined Source file
======== Resolving module './a' from '/home/src/projects/a/1/a-impl/a/lib/index.d.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module as file / folder, candidate module location '/home/src/projects/a/1/a-impl/a/lib/a', target file types: TypeScript, Declaration.
File '/home/src/projects/a/1/a-impl/a/lib/a.ts' does not exist.
File '/home/src/projects/a/1/a-impl/a/lib/a.tsx' does not exist.
File '/home/src/projects/a/1/a-impl/a/lib/a.d.ts' exists - use it as a name resolution result.
======== Module name './a' was successfully resolved to '/home/src/projects/a/1/a-impl/a/lib/a.d.ts'. ========
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/a 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/a 1 undefined Failed Lookup Locations
======== Resolving module 'c' from '/home/src/projects/a/1/a-impl/a/lib/index.d.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module 'c' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/projects/a/1/a-impl/a/lib/node_modules' does not exist, skipping all lookups in it.
File '/home/src/projects/a/1/a-impl/a/node_modules/c/package.json' exists according to earlier cached lookups.
File '/home/src/projects/a/1/a-impl/a/node_modules/c.ts' does not exist.
File '/home/src/projects/a/1/a-impl/a/node_modules/c.tsx' does not exist.
File '/home/src/projects/a/1/a-impl/a/node_modules/c.d.ts' does not exist.
'package.json' does not have a 'typings' field.
'package.json' has 'types' field './lib/index.d.ts' that references '/home/src/projects/a/1/a-impl/a/node_modules/c/lib/index.d.ts'.
File '/home/src/projects/a/1/a-impl/a/node_modules/c/lib/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/a/1/a-impl/a/node_modules/c/lib/index.d.ts', result '/home/src/projects/c/3/c-impl/c/lib/index.d.ts'.
======== Module name 'c' was successfully resolved to '/home/src/projects/c/3/c-impl/c/lib/index.d.ts' with Package ID 'c/lib/index.d.ts@1.0.0'. ========
FileWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/a.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /home/src/projects/c/3/c-impl/c/lib/index.d.ts 250 undefined Source file
======== Resolving module './c' from '/home/src/projects/c/3/c-impl/c/lib/index.d.ts'. ========
Module resolution kind is not specified, using 'Node10'.
Loading module as file / folder, candidate module location '/home/src/projects/c/3/c-impl/c/lib/c', target file types: TypeScript, Declaration.
File '/home/src/projects/c/3/c-impl/c/lib/c.ts' does not exist.
File '/home/src/projects/c/3/c-impl/c/lib/c.tsx' does not exist.
File '/home/src/projects/c/3/c-impl/c/lib/c.d.ts' exists - use it as a name resolution result.
======== Module name './c' was successfully resolved to '/home/src/projects/c/3/c-impl/c/lib/c.d.ts'. ========
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/c 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/c 1 undefined Failed Lookup Locations
FileWatcher:: Added:: WatchInfo: /home/src/projects/c/3/c-impl/c/lib/c.d.ts 250 undefined Source file
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/lib/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/a/1/a-impl/a/node_modules 1 undefined Failed Lookup Locations
FileWatcher:: Added:: WatchInfo: /home/src/projects/c/3/c-impl/c/package.json 2000 undefined File location affecting resolution
DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules/a 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/b/2/b-impl/b/node_modules/a 1 undefined Failed Lookup Locations
DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/b/2/b-impl/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/b/2/b-impl/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/b/2/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/b/2/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/b/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/b/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
../../../../../../../a/lib/lib.d.ts
  Default library for target 'es5'
../../../../a/1/a-impl/a/lib/a.d.ts
  Imported via './a' from file '../../../../a/1/a-impl/a/lib/index.d.ts'
../../../../c/3/c-impl/c/lib/c.d.ts
  Imported via './c' from file '../../../../c/3/c-impl/c/lib/index.d.ts'
../../../../c/3/c-impl/c/lib/index.d.ts
  Imported via 'c' from file '../../../../a/1/a-impl/a/lib/index.d.ts' with packageId 'c/lib/index.d.ts@1.0.0'
../../../../a/1/a-impl/a/lib/index.d.ts
  Imported via 'a' from file 'src/index.ts' with packageId 'a/lib/index.d.ts@1.0.0'
src/index.ts
  Matched by include pattern 'src/**/*.ts' in 'tsconfig.json'
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/home/src/projects/b/2/b-impl/b/lib/index.js] file written with same contents Inode:: 57

PolledWatches::
/home/src/projects/a/1/a-impl/a/lib/node_modules: *new*
  {"pollingInterval":500}
/home/src/projects/b/2/b-impl/b/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/b/2/b-impl/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/b/2/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/b/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/home/src/projects/b/2/b-impl/node_modules:
  {"pollingInterval":500}
/home/src/projects/b/2/node_modules:
  {"pollingInterval":500}
/home/src/projects/b/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {"inode":41}
/home/src/projects/a: *new*
  {"inode":16}
/home/src/projects/a/1: *new*
  {"inode":17}
/home/src/projects/a/1/a-impl: *new*
  {"inode":18}
/home/src/projects/a/1/a-impl/a:
  {"inode":19}
/home/src/projects/a/1/a-impl/a/lib:
  {"inode":69}
/home/src/projects/a/1/a-impl/a/lib/a.d.ts: *new*
  {"inode":71}
/home/src/projects/a/1/a-impl/a/lib/index.d.ts: *new*
  {"inode":73}
/home/src/projects/a/1/a-impl/a/node_modules:
  {"inode":25}
/home/src/projects/a/1/a-impl/a/package.json:
  {"inode":24}
/home/src/projects/a/1/a-impl/a/src:
  {"inode":20}
/home/src/projects/a/2: *new*
  {"inode":27}
/home/src/projects/a/2/unrelated: *new*
  {"inode":28}
/home/src/projects/b/2/b-impl/b/node_modules:
  {"inode":37}
/home/src/projects/b/2/b-impl/b/src:
  {"inode":34}
/home/src/projects/b/2/b-impl/b/src/index.ts:
  {"inode":35}
/home/src/projects/b/2/b-impl/b/tsconfig.json:
  {"inode":36}
/home/src/projects/c: *new*
  {"inode":4}
/home/src/projects/c/3: *new*
  {"inode":5}
/home/src/projects/c/3/c-impl: *new*
  {"inode":6}
/home/src/projects/c/3/c-impl/c: *new*
  {"inode":7}
/home/src/projects/c/3/c-impl/c/lib: *new*
  {"inode":62}
/home/src/projects/c/3/c-impl/c/lib/c.d.ts: *new*
  {"inode":64}
/home/src/projects/c/3/c-impl/c/lib/index.d.ts: *new*
  {"inode":66}
/home/src/projects/c/3/c-impl/c/package.json: *new*
  {"inode":12}
/home/src/projects/c/3/c-impl/c/src: *new*
  {"inode":8}
/home/src/projects/c/4: *new*
  {"inode":13}
/home/src/projects/c/4/unrelated: *new*
  {"inode":14}

FsWatches *deleted*::
/home/src/projects/b/2/b-impl/b/node_modules/a:
  {"inode":19}


Program root files: [
  "/home/src/projects/b/2/b-impl/b/src/index.ts"
]
Program options: {
  "outDir": "/home/src/projects/b/2/b-impl/b/lib",
  "watch": true,
  "project": "/home/src/projects/b/2/b-impl/b",
  "extendedDiagnostics": true,
  "explainFiles": true,
  "traceResolution": true,
  "configFilePath": "/home/src/projects/b/2/b-impl/b/tsconfig.json"
}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/home/src/projects/a/1/a-impl/a/lib/a.d.ts
/home/src/projects/c/3/c-impl/c/lib/c.d.ts
/home/src/projects/c/3/c-impl/c/lib/index.d.ts
/home/src/projects/a/1/a-impl/a/lib/index.d.ts
/home/src/projects/b/2/b-impl/b/src/index.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/a/1/a-impl/a/lib/a.d.ts
/home/src/projects/c/3/c-impl/c/lib/c.d.ts
/home/src/projects/c/3/c-impl/c/lib/index.d.ts
/home/src/projects/a/1/a-impl/a/lib/index.d.ts
/home/src/projects/b/2/b-impl/b/src/index.ts

Shape signatures in builder refreshed for::
/home/src/projects/a/1/a-impl/a/lib/a.d.ts (used version)
/home/src/projects/a/1/a-impl/a/lib/index.d.ts (used version)
/home/src/projects/b/2/b-impl/b/src/index.ts (computed .d.ts)
/home/src/projects/c/3/c-impl/c/lib/c.d.ts (used version)
/home/src/projects/c/3/c-impl/c/lib/index.d.ts (used version)

exitCode:: ExitStatus.undefined
