webpackJsonp([46],{"./node_modules/json-loader/index.js!./.cache/json/guide-javascript-converting.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{html:'<h2 id="preparation"><a href="#preparation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Preparation</h2>\n<p><strong>Before you proceed</strong>, please make sure that Reason is what your team needs! As much as we vouch for Reason and BuckleScript\'s popularity, please don\'t unnecessarily thrash your colleagues and give them a bad first impression. That\'s hard to undo afterward.</p>\n<p>This guide covers a workflow that\'s helped us convert things over rapidly and efficiently. It\'s not intended to go over language/FFI features (though it puts them in context). Basic Reason/BuckleScript knowledge is assumed.</p>\n<h2 id="syntax"><a href="#syntax" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Syntax</h2>\n<p><strong>Goal</strong>: first and foremost, <strong>make the file syntactically valid</strong>. Don\'t care about wrong types, missing modules, bad file organization, too many externals, etc. We\'ll come back to clean these up after setting up the regression test that is "no more syntax errors".</p>\n<p>Since the Reason syntax resembles enough to that of JavaScript, instead of starting a new Reason file, just copy over an existing js file and work on top of it.</p>\n<p><em>Tip</em>: don\'t forget that you can use <code>refmt</code> in your editor/terminal! If you don\'t know e.g. the precedence of some operations, wrap them in as many parentheses as you wish, then <code>refmt</code> your code and see which ones remain. Likewise, no need to lose time on indentations and spacing; <code>refmt</code> takes care of them.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* original JS file you\'ve copied over */</span>\nconst school = require(\'school\');\n\nconst defaultId = <span class="hljs-number">10</span>;\n\nfunction queryResult(usePayload, payload) {\n  <span class="hljs-keyword">if</span> (usePayload) {\n    <span class="hljs-keyword">return</span> payload.student\n  }\n  <span class="hljs-keyword">return</span> school.getStudentById(defaultId);\n}</code></pre>\n      </div>\n<p>Here are some of the things you\'d do at this step:</p>\n<ul>\n<li>\n<p>Convert the function call syntax over.</p>\n</li>\n<li>\n<p>Convert the <code>var</code>/<code>const</code> over to <code>let</code>.</p>\n</li>\n<li>\n<p>Hide the <code>require</code>s.</p>\n</li>\n<li>\n<p>Make other such changes. For idioms that don\'t have a BuckleScript equivalent, use <code>bs.raw</code> (<a href="http://bucklescript.github.io/bucklescript/Manual.html#_embedding_arbitrary_js_code_as_an_expression">documentation</a>).</p>\n</li>\n</ul>\n<p>Again, <strong>worry only about making the file syntactically valid</strong>. Trying to learn all three of syntax, types and other semantics while converting over a file reduces your iteration speed to less than a third.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* syntactically valid, semantically wrong conversion */</span>\n<span class="hljs-comment">/* const school = require(\'school\'); */</span>\n\n<span class="hljs-keyword">let</span> defaultId = <span class="hljs-number">10</span>;\n\n<span class="hljs-keyword">let</span> queryResult usePayload payload =&gt; {\n  <span class="hljs-keyword">if</span> (usePayload) {\n    payload.student\n  } <span class="hljs-keyword">else</span> {\n    <span class="hljs-comment">/* no need for early return in Reason; if-else is an expression */</span>\n    school.getStudentById defaultId;\n  }\n};</code></pre>\n      </div>\n<h2 id="types-pass-1"><a href="#types-pass-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Types, Pass 1</h2>\n<p><strong>Goal</strong>: correct the types, but just enough to move onto the next step.</p>\n<p>You might still occasionally get syntax errors, but not as drastic as the previous step\'s.</p>\n<ul>\n<li>\n<p>Change <code>foo.bar</code> to <code>foo##bar</code>. This escape-hatch <a href="http://bucklescript.github.io/bucklescript/Manual.html#_how_to_consume_js_property_and_methods">BuckleScript feature</a> will be your medium-term friend.</p>\n</li>\n<li>\n<p>Convert <code>{foo: bar}</code> to <code>[%bs.obj {foo: bar}]</code> (<a href="http://bucklescript.github.io/bucklescript/Manual.html#_create_js_objects_using_bs_obj">docs</a>). After <code>refmt</code>, this will sugar to <code>{"foo": bar}</code>.</p>\n</li>\n<li>\n<p>To communicate with external JS files, use <code>external</code>. They\'re BuckleScript\'s <a href="http://bucklescript.github.io/bucklescript/Manual.html#_ffi">foreign function interface</a>.</p>\n<ul>\n<li>\n<p>Inline externals. No need to create clean, well-separated files for externals for now. We\'ll come back to these.</p>\n</li>\n<li>\n<p>If it\'s too cumbersome to correctly type an <code>external</code>\'s input/output, use some placeholder polymorphic types, e.g. <code>external getStudentById: \'whatever => \'whateverElse = ...</code>.</p>\n</li>\n<li>\n<p>For data types &#x26; patterns that are hard to properly convert over, you can occasionally create converters like <code>external unsafeCast : myPayloadType => anotherDataType = "%identity";</code>.</p>\n</li>\n</ul>\n</li>\n</ul>\n<p>This is the first pass; the final types likely look different. For now, reap the rewards! Once you\'re finally done fixing all the type errors, your JS file should now be generated. Keep it open side-by-side. Time to come back and fix all the hacks!</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* syntactically valid, still semantically wrong, but better */</span>\nexternal getStudentById: \'whatever =&gt; \'whateverElse = <span class="hljs-string">"getStudentById"</span> [@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"school"</span>];\n\n<span class="hljs-keyword">let</span> defaultId = <span class="hljs-number">10</span>;\n\n<span class="hljs-keyword">let</span> queryResult usePayload payload =&gt; {\n  <span class="hljs-keyword">if</span> (usePayload) {\n    payload##student <span class="hljs-comment">/* this will be inferred as `Js.t \'a` */</span>\n  } <span class="hljs-keyword">else</span> {\n    getStudentById defaultId;\n  }\n};</code></pre>\n      </div>\n<h2 id="runtime-semantics"><a href="#runtime-semantics" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Runtime Semantics</h2>\n<p><strong>Goal</strong>: fix the errors in the generated JS output.</p>\n<p>Compare it with your old JS file. The output is likely incorrect; you probably mis-converted some idioms and mistyped some externals.</p>\n<ul>\n<li>\n<p>Type the shape of JS objects (the things that required <code>##</code>).</p>\n</li>\n<li>\n<p>Convert whichever parts to records/variants/idiomatic OCaml types.</p>\n</li>\n</ul>\n<p>All this time, check the output for any change.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> student; <span class="hljs-comment">/* abstract type, described later */</span>\nexternal getStudentById: \'whatever =&gt; student = <span class="hljs-string">"getStudentById"</span> [@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"school"</span>];\n\n<span class="hljs-keyword">type</span> payloadType = <span class="hljs-type">Js</span>.t {. student: student};\n\n<span class="hljs-keyword">let</span> defaultId = <span class="hljs-number">10</span>;\n\n<span class="hljs-keyword">let</span> queryResult usePayload (payload: payloadType) =&gt; {\n  <span class="hljs-keyword">if</span> (<span class="hljs-type">Js</span>.to_bool usePayload) {\n    payload##student\n  } <span class="hljs-keyword">else</span> {\n    getStudentById defaultId;\n  }\n};</code></pre>\n      </div>\n<h2 id="clean-up-types-pass-2"><a href="#clean-up-types-pass-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Clean Up (Types, Pass 2)</h2>\n<p><strong>Goal</strong>: make your types legit (aka, sound).</p>\n<p>Go back fix whatever you\'ve left during the first pass.</p>\n<ul>\n<li>\n<p>Make sure you don\'t have any <code>\'whatever</code> types left in <code>external</code>s.</p>\n</li>\n<li>\n<p>You can keep the <code>external</code>s inlined, or pull them out into a file.</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* in the current file */</span>\n<span class="hljs-keyword">type</span> payloadType = <span class="hljs-type">Js</span>.t {. student: <span class="hljs-type">School</span>.student}; <span class="hljs-comment">/* <span class="hljs-doctag">TODO:</span> put this somewhere else! */</span>\n\n<span class="hljs-keyword">let</span> defaultId = <span class="hljs-number">10</span>;\n\n<span class="hljs-keyword">let</span> queryResult usePayload (payload: payloadType) =&gt; {\n  <span class="hljs-keyword">if</span> (<span class="hljs-type">Js</span>.to_bool usePayload) {\n    payload##student\n  } <span class="hljs-keyword">else</span> {\n    <span class="hljs-type">School</span>.getStudentById defaultId;\n  }\n};</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* in a dedicated School.re file */</span>\n<span class="hljs-keyword">type</span> student;\nexternal getStudentById: int =&gt; student = <span class="hljs-string">"getStudentById"</span> [@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"School"</span>];\nexternal getAllStudents: unit =&gt; array student = <span class="hljs-string">"getAllStudents"</span> [@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"School"</span>];</code></pre>\n      </div>\n<p>Type <code>student</code> doesn\'t have an actual content; that\'s called an <a href="/guide/language/module#signatures">abstract type</a>. It\'s a convenient way of specifying the relationship between external calls without knowing what the shape of the data is under the hood.</p>\n<p>And then you\'re done!</p>\n<h2 id="tips"><a href="#tips" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips</h2>\n<p><strong>Don\'t</strong> try to fully convert a JS file into a pristine Reason file in a single shot. Such method might actually slow you down! It\'s fine to have externals and <code>bs.obj</code> left, and temporarily not take advantage of nice OCaml features (variants, labeled arguments, etc.). Once you\'ve converted a few other related files, you can come back and now refactor <strong>faster</strong> by banking on the type system.</p>\n<p>Whatever nice utilities you find (e.g. convert a <code>Js.null_undefined Js.boolean</code> to a <code>bool</code>), put them in a <code>tempUtils.re</code> file or something. They\'re easy examples for your colleagues and removes some conversion churns.</p>\n<p>We <strong>highly recommend</strong> you to check the JS output into version control. It makes your build system integration quasi-nonexistent, and makes sure that when you\'re not there, your teammates can make small changes, audit the output diff, and catch any mistakes. It\'s also a great selling point that the checked in JS output is friendly to emergency hot patches (a big selling point for managers!). Even if you\'re upgrading BuckleScript version, you\'d catch any output difference. It\'s like <a href="https://facebook.github.io/jest/docs/snapshot-testing.html">Jest snapshots</a>, for free!</p>\n<p>As always, ping us on <a href="https://discord.gg/reasonml">Discord</a> for more help!</p>',frontmatter:{title:"Converting from JS"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/javascript/converting.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-javascript-converting-ac799c068f76722fbc64.js.map