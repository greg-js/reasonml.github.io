webpackJsonp([276],{"./node_modules/json-loader/index.js!./.cache/json/api-hashtbl-seeded-s-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/Hashtbl.SeededS.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Hashtbl.SeededHashedType.html" title="Hashtbl.SeededHashedType">Previous</a>\n&#xA0;<a class="up" href="Hashtbl.html" title="Hashtbl">Up</a>\n&#xA0;</div>\n<h1>Module type <a href="type_Hashtbl.SeededS.html">Hashtbl.SeededS</a></h1>\n\n<pre><span class="keyword">module</span> type SeededS = sig .. end</pre><div class="info modtype top">\nThe output signature of the functor <a href="Hashtbl.MakeSeeded.html"><code class="code">Hashtbl.MakeSeeded</code></a>.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> key;\n</pre>\n\n\n<pre><span class="keyword">type</span> t &apos;a;\n</pre>\n\n\n<pre><span class="keyword">let</span> create: random::bool? =&gt; int =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> clear: t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> reset: t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> copy: t &apos;a =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> add: t &apos;a =&gt; key =&gt; &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> remove: t &apos;a =&gt; key =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> find: t &apos;a =&gt; key =&gt; &apos;a;\n</pre>\n<pre><span class="keyword">let</span> find_all: t &apos;a =&gt; key =&gt; list &apos;a;\n</pre>\n<pre><span class="keyword">let</span> replace: t &apos;a =&gt; key =&gt; &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> mem: t &apos;a =&gt; key =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> iter: (key =&gt; &apos;a =&gt; unit) =&gt; t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> fold: (key =&gt; &apos;a =&gt; &apos;b =&gt; &apos;b) =&gt; t &apos;a =&gt; &apos;b =&gt; &apos;b;\n</pre>\n<pre><span class="keyword">let</span> length: t &apos;a =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> stats: t &apos;a =&gt; Hashtbl.statistics;\n</pre></div>'}}},pathContext:{relativePath:"api/Hashtbl.SeededS.html"}}}});
//# sourceMappingURL=path---api-hashtbl-seeded-s-html-cbf1f87a8a6fa8e5d3fd.js.map