webpackJsonp([0x7ee53dfbcf6e],{1235:function(e,o){e.exports={data:{package:{id:"upgrade-reason-syntax",stars:13,name:"upgrade-reason-syntax",version:"1.0.5",category:"tool",flags:[],platforms:["node"],description:"## What is Reason 2/3?",keywords:["development tools"],license:"ISC",updated:"2018-02-22T13:59:56.702Z",type:"published",score:.5178483103249718,quality:.5116105589986311,popularity:.054562799056554374,maintenance:.9864804655873958,readme:'<h1 id="convert-your-reason-project-from-reason-2-to-3"><a href="#convert-your-reason-project-from-reason-2-to-3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Convert your Reason project from Reason 2 to 3</h1>\n<h2 id="what-is-reason-23"><a href="#what-is-reason-23" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is Reason 2/3?</h2>\n<p>See the <a href="https://reasonml.github.io/community/blog/#reason-3">announcement</a>\nand the <a href="https://github.com/facebook/reason/blob/master/HISTORY.md#300">changelog guide</a>.</p>\n<h2 id="how-do-i-upgrade-my-project"><a href="#how-do-i-upgrade-my-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I upgrade my project?</h2>\n<h3 id="before-you-start"><a href="#before-you-start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Before you start</h3>\n<p>Converting your code to to the new syntax is done by running the\n<code>upgradeSyntaxFrom2To3</code> converter on your project\'s Reason code.\nMake sure that your project is syntactically valid in Reason 2.\nInvalid code will fail to convert.</p>\n<h3 id="convert-your-code"><a href="#convert-your-code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Convert your code</h3>\n<p>Do this at the root of your project:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install -g upgrade-reason-syntax\nnpm install --save-dev bs-platform@2.1.0\nupgradeSyntaxFrom2To3 mySource/*</code></pre></div>\n<p><strong>Make sure you did install bs-platform 2.1.0</strong>. Sometimes your lockfile might have locked it to <code>1.x.x</code>.</p>\n<p>The script accepts a list of files/globs to convert. Pass as many as you want. It\'ll intelligently skip over any file that\'s not Reason.</p>\n<p>After you\'re done converting your projects:</p>\n<ul>\n<li>Remove the backup files at <code>mySource/*.backup</code></li>\n<li>Add <code>"refmt": 3</code> to your bsconfig.json to make BuckleScript use the new syntax.</li>\n<li>Feel free to uninstall this library!</li>\n</ul>\n<p><strong>If you\'re on native</strong>, this is also your workflow. (So you\'ll need node.js).</p>\n<h2 id="how-does-it-work"><a href="#how-does-it-work" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How does it work?</h2>\n<p>It\'s a simple node.js script that takes the old <code>refmt</code> and the new <code>refmt3</code> from your project\'s BuckleScript 2.0.0\'s source at <code>node_modules/bs-platform</code>, and then:</p>\n<ul>\n<li>Iterates over all your relevant files, making a backup copy</li>\n<li>Turns your Reason files into an AST (abstract syntax tree) using <code>refmt</code></li>\n<li>Turns the ASTs into the new syntax using <code>refmt3</code> and writes them back</li>\n</ul>\n<p>That\'s it! Enjoy =)</p>\n',homepageUrl:"https://github.com/reasonml/upgradeSyntaxFrom2To3#readme",repositoryUrl:"https://github.com/reasonml/upgradeSyntaxFrom2To3",npmUrl:"https://www.npmjs.com/package/upgrade-reason-syntax",issuesUrl:"https://github.com/reasonml/upgradeSyntaxFrom2To3/issues",slug:"/package/upgrade-reason-syntax"}},pathContext:{id:"upgrade-reason-syntax"}}}});
//# sourceMappingURL=path---package-upgrade-reason-syntax-bc98ac5655721823ae1a.js.map