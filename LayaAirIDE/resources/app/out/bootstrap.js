/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function safeStringify(e){var t,n=[];if(e.length)for(var r=0;r<e.length;r++)if("undefined"==typeof e[r])e[r]="undefined";else if(e[r]instanceof Error){var o=e[r];o.stack?e[r]=o.stack:e[r]=o.toString()}try{t=JSON.stringify(e,function(e,t){if(t&&"[object Object]"===Object.prototype.toString.call(t)){if(-1!==n.indexOf(t))return Object.create(null);n.push(t)}return t})}catch(s){return"Output omitted for an object that cannot be inspected ("+s.toString()+")"}return t&&t.length>MAX_LENGTH?"Output omitted for a large object that exceeds the limits":t}function safeSend(e){try{process.send(e)}catch(t){}}if(process.noAsar=!0,process.send&&"true"===process.env.PIPE_LOGGING){var MAX_LENGTH=1e5;"true"===process.env.VERBOSE_LOGGING?(console.log=function(){safeSend({type:"__$console",severity:"log",arguments:safeStringify(arguments)})},console.info=function(){safeSend({type:"__$console",severity:"log",arguments:safeStringify(arguments)})},console.warn=function(){safeSend({type:"__$console",severity:"warn",arguments:safeStringify(arguments)})}):(console.log=function(){},console.warn=function(){},console.info=function(){}),console.error=function(){safeSend({type:"__$console",severity:"error",arguments:safeStringify(arguments)})}}var stream=require("stream"),writable=new stream.Writable({write:function(){}});process.__defineGetter__("stdout",function(){return writable}),process.__defineGetter__("stderr",function(){return writable}),process.__defineGetter__("stdin",function(){return writable}),process.on("uncaughtException",function(e){console.error("Uncaught Exception: ",e.toString()),e.stack&&console.error(e.stack)}),require("./bootstrap-amd").bootstrap(process.env.AMD_ENTRYPOINT);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/fa6d0f03813dfb9df4589c30121e9fcffa8a8ec8/bootstrap.js.map