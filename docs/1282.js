"use strict";(self.webpackChunk_blueprintjs_docs_app=self.webpackChunk_blueprintjs_docs_app||[]).push([[1282],{71282:function(e,t,i){i.r(t),i.d(t,{Adapter:function(){return b},CodeActionAdaptor:function(){return N},DefinitionAdapter:function(){return v},DiagnosticsAdapter:function(){return _},FormatAdapter:function(){return P},FormatHelper:function(){return T},FormatOnTypeAdapter:function(){return O},InlayHintsAdapter:function(){return M},Kind:function(){return D},LibFiles:function(){return h},OccurrencesAdapter:function(){return x},OutlineAdapter:function(){return A},QuickInfoAdapter:function(){return k},ReferenceAdapter:function(){return C},RenameAdapter:function(){return K},SignatureHelpAdapter:function(){return S},SuggestAdapter:function(){return y},WorkerManager:function(){return g},flattenDiagnosticMessageText:function(){return m},getJavaScriptWorker:function(){return H},getTypeScriptWorker:function(){return V},setupJavaScript:function(){return E},setupTypeScript:function(){return R}});var s=i(12534),n=i(41293),r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,c=(e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of o(t))l.call(e,n)||n===i||r(e,n,{get:()=>t[n],enumerable:!(s=a(t,n))||s.enumerable});return e},u=(e,t,i)=>(((e,t,i)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),d={};c(d,s,"default");var g=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=d.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(d.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},p={};function m(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const n of e.next)s+=m(n,t,i);return s}function f(e){return e?e.map((e=>e.text)).join(""):""}p["lib.d.ts"]=!0,p["lib.dom.d.ts"]=!0,p["lib.dom.iterable.d.ts"]=!0,p["lib.es2015.collection.d.ts"]=!0,p["lib.es2015.core.d.ts"]=!0,p["lib.es2015.d.ts"]=!0,p["lib.es2015.generator.d.ts"]=!0,p["lib.es2015.iterable.d.ts"]=!0,p["lib.es2015.promise.d.ts"]=!0,p["lib.es2015.proxy.d.ts"]=!0,p["lib.es2015.reflect.d.ts"]=!0,p["lib.es2015.symbol.d.ts"]=!0,p["lib.es2015.symbol.wellknown.d.ts"]=!0,p["lib.es2016.array.include.d.ts"]=!0,p["lib.es2016.d.ts"]=!0,p["lib.es2016.full.d.ts"]=!0,p["lib.es2017.d.ts"]=!0,p["lib.es2017.full.d.ts"]=!0,p["lib.es2017.intl.d.ts"]=!0,p["lib.es2017.object.d.ts"]=!0,p["lib.es2017.sharedmemory.d.ts"]=!0,p["lib.es2017.string.d.ts"]=!0,p["lib.es2017.typedarrays.d.ts"]=!0,p["lib.es2018.asyncgenerator.d.ts"]=!0,p["lib.es2018.asynciterable.d.ts"]=!0,p["lib.es2018.d.ts"]=!0,p["lib.es2018.full.d.ts"]=!0,p["lib.es2018.intl.d.ts"]=!0,p["lib.es2018.promise.d.ts"]=!0,p["lib.es2018.regexp.d.ts"]=!0,p["lib.es2019.array.d.ts"]=!0,p["lib.es2019.d.ts"]=!0,p["lib.es2019.full.d.ts"]=!0,p["lib.es2019.object.d.ts"]=!0,p["lib.es2019.string.d.ts"]=!0,p["lib.es2019.symbol.d.ts"]=!0,p["lib.es2020.bigint.d.ts"]=!0,p["lib.es2020.d.ts"]=!0,p["lib.es2020.full.d.ts"]=!0,p["lib.es2020.intl.d.ts"]=!0,p["lib.es2020.promise.d.ts"]=!0,p["lib.es2020.sharedmemory.d.ts"]=!0,p["lib.es2020.string.d.ts"]=!0,p["lib.es2020.symbol.wellknown.d.ts"]=!0,p["lib.es2021.d.ts"]=!0,p["lib.es2021.full.d.ts"]=!0,p["lib.es2021.intl.d.ts"]=!0,p["lib.es2021.promise.d.ts"]=!0,p["lib.es2021.string.d.ts"]=!0,p["lib.es2021.weakref.d.ts"]=!0,p["lib.es5.d.ts"]=!0,p["lib.es6.d.ts"]=!0,p["lib.esnext.d.ts"]=!0,p["lib.esnext.full.d.ts"]=!0,p["lib.esnext.intl.d.ts"]=!0,p["lib.esnext.promise.d.ts"]=!0,p["lib.esnext.string.d.ts"]=!0,p["lib.esnext.weakref.d.ts"]=!0,p["lib.scripthost.d.ts"]=!0,p["lib.webworker.d.ts"]=!0,p["lib.webworker.importscripts.d.ts"]=!0,p["lib.webworker.iterable.d.ts"]=!0;var b=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:n,column:r}=i,{lineNumber:a,column:o}=s;return{startLineNumber:n,startColumn:r,endLineNumber:a,endColumn:o}}},h=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return!!e&&0===e.path.indexOf("/lib.")&&!!p[e.path.slice(1)]}getOrCreateModel(e){const t=d.Uri.parse(e),i=d.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return d.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=n.typescriptDefaults.getExtraLibs()[e];return s?d.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},_=class extends b{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i;const n=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const n=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),r=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():d.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){n.dispose(),r.dispose(),clearTimeout(s)}},t()},r=e=>{d.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(d.editor.onDidCreateModel((e=>n(e)))),this._disposables.push(d.editor.onWillDisposeModel(r)),this._disposables.push(d.editor.onDidChangeModelLanguage((e=>{r(e.model),n(e.model)}))),this._disposables.push({dispose(){for(const e of d.editor.getModels())r(e)}});const a=()=>{for(const e of d.editor.getModels())r(e),n(e)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),d.editor.getModels().forEach((e=>n(e)))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:n,noSuggestionDiagnostics:r}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),n||i.push(t.getSemanticDiagnostics(e.uri.toString())),r||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const a=await Promise.all(i);if(!a||e.isDisposed())return;const o=a.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),l=o.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?d.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(l),e.isDisposed()||d.editor.setModelMarkers(e,this._selector,o.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:n,column:r}=e.getPositionAt(i),{lineNumber:a,column:o}=e.getPositionAt(i+s),l=[];return t.reportsUnnecessary&&l.push(d.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(d.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:n,startColumn:r,endLineNumber:a,endColumn:o,message:m(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const n=t.start||0,r=t.length||1,{lineNumber:a,column:o}=s.getPositionAt(n),{lineNumber:l,column:c}=s.getPositionAt(n+r);i.push({resource:s.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:c,message:m(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return d.MarkerSeverity.Error;case 3:return d.MarkerSeverity.Info;case 0:return d.MarkerSeverity.Warning;case 2:return d.MarkerSeverity.Hint}return d.MarkerSeverity.Info}},y=class extends b{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,s){const n=e.getWordUntilPosition(t),r=new d.Range(t.lineNumber,n.startColumn,t.lineNumber,n.endColumn),a=e.uri,o=e.getOffsetAt(t),l=await this._worker(a);if(e.isDisposed())return;const c=await l.getCompletionsAtPosition(a.toString(),o);return c&&!e.isDisposed()?{suggestions:c.entries.map((i=>{let s=r;if(i.replacementSpan){const t=e.getPositionAt(i.replacementSpan.start),n=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);s=new d.Range(t.lineNumber,t.column,n.lineNumber,n.column)}const n=[];return-1!==i.kindModifiers?.indexOf("deprecated")&&n.push(d.languages.CompletionItemTag.Deprecated),{uri:a,position:t,offset:o,range:s,label:i.name,insertText:i.name,sortText:i.sortText,kind:y.convertKind(i.kind),tags:n}}))}:void 0}async resolveCompletionItem(e,t){const i=e,s=i.uri,n=i.position,r=i.offset,a=await this._worker(s),o=await a.getCompletionEntryDetails(s.toString(),r,i.label);return o?{uri:s,position:n,label:o.name,kind:y.convertKind(o.kind),detail:f(o.displayParts),documentation:{value:y.createDocumentationString(o)}}:i}static convertKind(e){switch(e){case D.primitiveType:case D.keyword:return d.languages.CompletionItemKind.Keyword;case D.variable:case D.localVariable:return d.languages.CompletionItemKind.Variable;case D.memberVariable:case D.memberGetAccessor:case D.memberSetAccessor:return d.languages.CompletionItemKind.Field;case D.function:case D.memberFunction:case D.constructSignature:case D.callSignature:case D.indexSignature:return d.languages.CompletionItemKind.Function;case D.enum:return d.languages.CompletionItemKind.Enum;case D.module:return d.languages.CompletionItemKind.Module;case D.class:return d.languages.CompletionItemKind.Class;case D.interface:return d.languages.CompletionItemKind.Interface;case D.warning:return d.languages.CompletionItemKind.File}return d.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=f(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${w(i)}`;return t}};function w(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var S=class extends b{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case d.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case d.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case d.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,s){const n=e.uri,r=e.getOffsetAt(t),a=await this._worker(n);if(e.isDisposed())return;const o=await a.getSignatureHelpItems(n.toString(),r,{triggerReason:S._toSignatureHelpTriggerReason(s)});if(!o||e.isDisposed())return;const l={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:f(e.documentation)},t.label+=f(e.prefixDisplayParts),e.parameters.forEach(((i,s,n)=>{const r=f(i.displayParts),a={label:r,documentation:{value:f(i.documentation)}};t.label+=r,t.parameters.push(a),s<n.length-1&&(t.label+=f(e.separatorDisplayParts))})),t.label+=f(e.suffixDisplayParts),l.signatures.push(t)})),{value:l,dispose(){}}}},k=class extends b{async provideHover(e,t,i){const s=e.uri,n=e.getOffsetAt(t),r=await this._worker(s);if(e.isDisposed())return;const a=await r.getQuickInfoAtPosition(s.toString(),n);if(!a||e.isDisposed())return;const o=f(a.documentation),l=a.tags?a.tags.map((e=>w(e))).join("  \n\n"):"",c=f(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}},x=class extends b{async provideDocumentHighlights(e,t,i){const s=e.uri,n=e.getOffsetAt(t),r=await this._worker(s);if(e.isDisposed())return;const a=await r.getOccurrencesAtPosition(s.toString(),n);return a&&!e.isDisposed()?a.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?d.languages.DocumentHighlightKind.Write:d.languages.DocumentHighlightKind.Text}))):void 0}},v=class extends b{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,n=e.getOffsetAt(t),r=await this._worker(s);if(e.isDisposed())return;const a=await r.getDefinitionAtPosition(s.toString(),n);if(!a||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(a.map((e=>d.Uri.parse(e.fileName)))),e.isDisposed())return;const o=[];for(let e of a){const t=this._libFiles.getOrCreateModel(e.fileName);t&&o.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return o}},C=class extends b{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const n=e.uri,r=e.getOffsetAt(t),a=await this._worker(n);if(e.isDisposed())return;const o=await a.getReferencesAtPosition(n.toString(),r);if(!o||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map((e=>d.Uri.parse(e.fileName)))),e.isDisposed())return;const l=[];for(let e of o){const t=this._libFiles.getOrCreateModel(e.fileName);t&&l.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return l}},A=class extends b{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const n=await s.getNavigationBarItems(i.toString());if(!n||e.isDisposed())return;const r=(t,i,s)=>{let n={name:i.text,detail:"",kind:F[i.kind]||d.languages.SymbolKind.Variable,range:this._textSpanToRange(e,i.spans[0]),selectionRange:this._textSpanToRange(e,i.spans[0]),tags:[]};if(s&&(n.containerName=s),i.childItems&&i.childItems.length>0)for(let e of i.childItems)r(t,e,n.name);t.push(n)};let a=[];return n.forEach((e=>r(a,e))),a}},D=class{};u(D,"unknown",""),u(D,"keyword","keyword"),u(D,"script","script"),u(D,"module","module"),u(D,"class","class"),u(D,"interface","interface"),u(D,"type","type"),u(D,"enum","enum"),u(D,"variable","var"),u(D,"localVariable","local var"),u(D,"function","function"),u(D,"localFunction","local function"),u(D,"memberFunction","method"),u(D,"memberGetAccessor","getter"),u(D,"memberSetAccessor","setter"),u(D,"memberVariable","property"),u(D,"constructorImplementation","constructor"),u(D,"callSignature","call"),u(D,"indexSignature","index"),u(D,"constructSignature","construct"),u(D,"parameter","parameter"),u(D,"typeParameter","type parameter"),u(D,"primitiveType","primitive type"),u(D,"label","label"),u(D,"alias","alias"),u(D,"const","const"),u(D,"let","let"),u(D,"warning","warning");var F=Object.create(null);F[D.module]=d.languages.SymbolKind.Module,F[D.class]=d.languages.SymbolKind.Class,F[D.enum]=d.languages.SymbolKind.Enum,F[D.interface]=d.languages.SymbolKind.Interface,F[D.memberFunction]=d.languages.SymbolKind.Method,F[D.memberVariable]=d.languages.SymbolKind.Property,F[D.memberGetAccessor]=d.languages.SymbolKind.Property,F[D.memberSetAccessor]=d.languages.SymbolKind.Property,F[D.variable]=d.languages.SymbolKind.Variable,F[D.const]=d.languages.SymbolKind.Variable,F[D.localVariable]=d.languages.SymbolKind.Variable,F[D.variable]=d.languages.SymbolKind.Variable,F[D.function]=d.languages.SymbolKind.Function,F[D.localFunction]=d.languages.SymbolKind.Function;var I,L,T=class extends b{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},P=class extends T{async provideDocumentRangeFormattingEdits(e,t,i,s){const n=e.uri,r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getFormattingEditsForRange(n.toString(),r,a,T._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},O=class extends T{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,n){const r=e.uri,a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getFormattingEditsAfterKeystroke(r.toString(),a,i,T._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},N=class extends T{async provideCodeActions(e,t,i,s){const n=e.uri,r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=T._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(n);if(e.isDisposed())return;const u=await c.getCodeFixesAtPosition(n.toString(),r,a,l,o);return!u||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:u.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const t of i.changes)for(const i of t.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,i.span),text:i.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},K=class extends b{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const n=e.uri,r=n.toString(),a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getRenameInfo(r,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await o.findRenameLocations(r,a,!1,!1,!1);if(!c||e.isDisposed())return;const u=[];for(const e of c){const t=this._libFiles.getOrCreateModel(e.fileName);if(!t)throw new Error(`Unknown file ${e.fileName}.`);u.push({resource:t.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(t,e.textSpan),text:i}})}return{edits:u}}},M=class extends b{async provideInlayHints(e,t,i){const s=e.uri,n=s.toString(),r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);return e.isDisposed()?null:{hints:(await o.provideInlayHints(n,r,a)).map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)}))),dispose:()=>{}}}_convertHintKind(e){return"Parameter"===e?d.languages.InlayHintKind.Parameter:d.languages.InlayHintKind.Type}};function R(e){L=W(e,"typescript")}function E(e){I=W(e,"javascript")}function H(){return new Promise(((e,t)=>{if(!I)return t("JavaScript not registered!");e(I)}))}function V(){return new Promise(((e,t)=>{if(!L)return t("TypeScript not registered!");e(L)}))}function W(e,t){const i=new g(t,e),s=(...e)=>i.getLanguageServiceWorker(...e),n=new h(s);return d.languages.registerCompletionItemProvider(t,new y(s)),d.languages.registerSignatureHelpProvider(t,new S(s)),d.languages.registerHoverProvider(t,new k(s)),d.languages.registerDocumentHighlightProvider(t,new x(s)),d.languages.registerDefinitionProvider(t,new v(n,s)),d.languages.registerReferenceProvider(t,new C(n,s)),d.languages.registerDocumentSymbolProvider(t,new A(s)),d.languages.registerDocumentRangeFormattingEditProvider(t,new P(s)),d.languages.registerOnTypeFormattingEditProvider(t,new O(s)),d.languages.registerCodeActionProvider(t,new N(s)),d.languages.registerRenameProvider(t,new K(n,s)),d.languages.registerInlayHintsProvider(t,new M(s)),new _(n,e,t,s),s}}}]);