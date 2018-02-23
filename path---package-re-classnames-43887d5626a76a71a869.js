webpackJsonp([47852471078712],{1146:function(s,a){s.exports={data:{package:{id:"re-classnames",stars:10,name:"re-classnames",version:"0.0.3",category:"library",flags:[],platforms:["any"],description:"Simple reimplementation of classnames in ReasonML",keywords:["utilities"],license:"MIT",updated:"2018-02-18T05:01:18.253Z",type:"published",score:.5971336159096505,quality:.7587341510247834,popularity:.0676242661832693,maintenance:.9881282212516322,readme:'<h1 id="re-classnames"><a href="#re-classnames" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>re-classnames</h1>\n<p>Simple reimplementation of <a href="https://github.com/JedWatson/classnames">classnames</a> in <a href="https://reasonml.github.io">ReasonML</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code><span class="hljs-comment"># yarn / npm</span>\nyarn add re-classnames\nnpm install --save re-classnames</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Cn</span>.make([<span class="hljs-string">"one"</span>, <span class="hljs-string">"two"</span>]) <span class="hljs-comment">/* =&gt; "one two" */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-type">Cn</span>.make [<span class="hljs-string">"one"</span>; <span class="hljs-string">"two"</span>]</code></pre>\n      </div>\n    </div>\n  \n<h3 id="cnifbool"><a href="#cnifbool" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Cn.ifBool</code></h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Cn</span>.make([<span class="hljs-string">"one"</span>, <span class="hljs-string">"two"</span> |&gt; <span class="hljs-type">Cn</span>.ifBool(<span class="hljs-literal">true</span>)]) <span class="hljs-comment">/* =&gt; "one two" */</span>\n<span class="hljs-type">Cn</span>.make([<span class="hljs-string">"one"</span>, <span class="hljs-string">"two"</span> |&gt; <span class="hljs-type">Cn</span>.ifBool(<span class="hljs-literal">false</span>)]) <span class="hljs-comment">/* =&gt; "one" */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2122</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="cnifopt"><a href="#cnifopt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Cn.ifOpt</code></h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Cn.ifOpt */</span>\n<span class="hljs-type">Cn</span>.make([<span class="hljs-string">"one"</span>, <span class="hljs-type">Some</span>(<span class="hljs-string">"two"</span>) |&gt; <span class="hljs-type">Cn</span>.ifOpt]) <span class="hljs-comment">/* =&gt; "one two" */</span>\n<span class="hljs-type">Cn</span>.make([<span class="hljs-string">"one"</span>, <span class="hljs-type">None</span> |&gt; <span class="hljs-type">Cn</span>.ifOpt]) <span class="hljs-comment">/* =&gt; "one" */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2122</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="cnmapopt"><a href="#cnmapopt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Cn.mapOpt</code></h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> t =\n  | <span class="hljs-type">One</span>\n  | <span class="hljs-type">Two</span>\n  | <span class="hljs-type">Tree</span>;\n\n<span class="hljs-type">Cn</span>.make([\n  <span class="hljs-string">"one"</span>,\n  <span class="hljs-type">Cn</span>.mapOpt(\n    <span class="hljs-type">Some</span>(<span class="hljs-type">Two</span>),\n    (v) =&gt;\n      <span class="hljs-keyword">switch</span> v {\n      | <span class="hljs-type">One</span> =&gt; <span class="hljs-string">"one"</span>\n      | <span class="hljs-type">Two</span> =&gt; <span class="hljs-string">"two"</span>\n      | <span class="hljs-type">Tree</span> =&gt; <span class="hljs-string">"three"</span>\n      }\n  )\n]) <span class="hljs-comment">/* =&gt; "one two" */</span>\n\n<span class="hljs-type">Cn</span>.make([\n  <span class="hljs-string">"one"</span>,\n  <span class="hljs-type">Cn</span>.mapOpt(\n    <span class="hljs-type">None</span>,\n    (v) =&gt;\n      <span class="hljs-keyword">switch</span> v {\n      | <span class="hljs-type">One</span> =&gt; <span class="hljs-string">"one"</span>\n      | <span class="hljs-type">Two</span> =&gt; <span class="hljs-string">"two"</span>\n      | <span class="hljs-type">Tree</span> =&gt; <span class="hljs-string">"three"</span>\n      }\n  )\n]) <span class="hljs-comment">/* =&gt; "one" */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2122</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>It\'s MIT.</p>\n',homepageUrl:"https://github.com/alexfedoseev/re-classnames#readme",repositoryUrl:"https://github.com/alexfedoseev/re-classnames",npmUrl:"https://www.npmjs.com/package/re-classnames",issuesUrl:"https://github.com/alexfedoseev/re-classnames/issues",slug:"/package/re-classnames"}},pathContext:{id:"re-classnames"}}}});
//# sourceMappingURL=path---package-re-classnames-43887d5626a76a71a869.js.map