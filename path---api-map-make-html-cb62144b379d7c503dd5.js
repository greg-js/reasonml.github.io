webpackJsonp([254],{"./node_modules/json-loader/index.js!./.cache/json/api-map-make-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/Map.Make.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="Map.html" title="Map">Up</a>\n&#xA0;</div>\n<h1>Functor <a href="type_Map.Make.html">Map.Make</a></h1>\n\n<pre><span class="keyword">module</span> Make: (Ord: OrderedType) =&gt; S with type key = Ord.t;\n</pre><div class="info module top">\nFunctor building an implementation of the map structure\n   given a totally ordered type.<br>\n</div>\n<table border="0" cellpadding="3" width="100%">\n<tbody><tr>\n<td align="left" valign="top" width="1%%"><b>Parameters: </b></td>\n<td>\n<table class="paramstable">\n<tbody><tr>\n<td align="center" valign="top" width="15%">\n<code>Ord</code></td>\n<td align="center" valign="top">:</td>\n<td><code class="type">OrderedType</code>\n</td></tr></tbody></table>\n</td>\n</tr>\n</tbody></table>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> key;\n</pre>\n<div class="info ">\nThe type of the map keys.<br>\n</div>\n\n\n<pre><span class="keyword">type</span> t +&apos;a;\n</pre>\n<div class="info ">\nThe type of maps from type <code class="code">key</code> to type <code class="code">&apos;a</code>.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> empty: t &apos;a;\n</pre><div class="info ">\nThe empty map.<br>\n</div>\n\n<pre><span class="keyword">let</span> is_empty: t &apos;a =&gt; bool;\n</pre><div class="info ">\nTest whether a map is empty or not.<br>\n</div>\n\n<pre><span class="keyword">let</span> mem: key =&gt; t &apos;a =&gt; bool;\n</pre><div class="info ">\n<code class="code">mem x m</code> returns <code class="code">true</code> if <code class="code">m</code> contains a binding for <code class="code">x</code>,\n       and <code class="code">false</code> otherwise.<br>\n</div>\n\n<pre><span class="keyword">let</span> add: key =&gt; &apos;a =&gt; t &apos;a =&gt; t &apos;a;\n</pre><div class="info ">\n<code class="code">add x y m</code> returns a map containing the same bindings as\n       <code class="code">m</code>, plus a binding of <code class="code">x</code> to <code class="code">y</code>. If <code class="code">x</code> was already bound\n       in <code class="code">m</code>, its previous binding disappears.<br>\n</div>\n\n<pre><span class="keyword">let</span> singleton: key =&gt; &apos;a =&gt; t &apos;a;\n</pre><div class="info ">\n<code class="code">singleton x y</code> returns the one-element map that contains a binding <code class="code">y</code>\n        for <code class="code">x</code>.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> remove: key =&gt; t &apos;a =&gt; t &apos;a;\n</pre><div class="info ">\n<code class="code">remove x m</code> returns a map containing the same bindings as\n       <code class="code">m</code>, except for <code class="code">x</code> which is unbound in the returned map.<br>\n</div>\n\n<pre><span class="keyword">let</span> merge: (key =&gt; option &apos;a =&gt; option &apos;b =&gt; option &apos;c) =&gt; t &apos;a =&gt; t &apos;b =&gt; t &apos;c;\n</pre><div class="info ">\n<code class="code">merge f m1 m2</code> computes a map whose keys is a subset of keys of <code class="code">m1</code>\n        and of <code class="code">m2</code>. The presence of each such binding, and the corresponding\n        value, is determined with the function <code class="code">f</code>.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> compare: (&apos;a =&gt; &apos;a =&gt; int) =&gt; t &apos;a =&gt; t &apos;a =&gt; int;\n</pre><div class="info ">\nTotal ordering between maps.  The first argument is a total ordering\n        used to compare data associated with equal keys in the two maps.<br>\n</div>\n\n<pre><span class="keyword">let</span> equal: (&apos;a =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; t &apos;a =&gt; bool;\n</pre><div class="info ">\n<code class="code">equal cmp m1 m2</code> tests whether the maps <code class="code">m1</code> and <code class="code">m2</code> are\n       equal, that is, contain equal keys and associate them with\n       equal data.  <code class="code">cmp</code> is the equality predicate used to compare\n       the data associated with the keys.<br>\n</div>\n\n<pre><span class="keyword">let</span> iter: (key =&gt; &apos;a =&gt; unit) =&gt; t &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">iter f m</code> applies <code class="code">f</code> to all bindings in map <code class="code">m</code>.\n       <code class="code">f</code> receives the key as first argument, and the associated value\n       as second argument.  The bindings are passed to <code class="code">f</code> in increasing\n       order with respect to the ordering over the type of the keys.<br>\n</div>\n\n<pre><span class="keyword">let</span> fold: (key =&gt; &apos;a =&gt; &apos;b =&gt; &apos;b) =&gt; t &apos;a =&gt; &apos;b =&gt; &apos;b;\n</pre><div class="info ">\n<code class="code">fold f m a</code> computes <code class="code">(f kN dN ... (f k1 d1 a)...)</code>,\n       where <code class="code">k1 ... kN</code> are the keys of all bindings in <code class="code">m</code>\n       (in increasing order), and <code class="code">d1 ... dN</code> are the associated data.<br>\n</div>\n\n<pre><span class="keyword">let</span> for_all: (key =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; bool;\n</pre><div class="info ">\n<code class="code">for_all p m</code> checks if all the bindings of the map\n        satisfy the predicate <code class="code">p</code>.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> exists: (key =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; bool;\n</pre><div class="info ">\n<code class="code">exists p m</code> checks if at least one binding of the map\n        satisfy the predicate <code class="code">p</code>.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> filter: (key =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; t &apos;a;\n</pre><div class="info ">\n<code class="code">filter p m</code> returns the map with all the bindings in <code class="code">m</code>\n        that satisfy predicate <code class="code">p</code>.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> partition: (key =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; (t &apos;a, t &apos;a);\n</pre><div class="info ">\n<code class="code">partition p m</code> returns a pair of maps <code class="code">(m1, m2)</code>, where\n        <code class="code">m1</code> contains all the bindings of <code class="code">s</code> that satisfy the\n        predicate <code class="code">p</code>, and <code class="code">m2</code> is the map with all the bindings of\n        <code class="code">s</code> that do not satisfy <code class="code">p</code>.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> cardinal: t &apos;a =&gt; int;\n</pre><div class="info ">\nReturn the number of bindings of a map.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> bindings: t &apos;a =&gt; list (key, &apos;a);\n</pre><div class="info ">\nReturn the list of all bindings of the given map.\n       The returned list is sorted in increasing order with respect\n       to the ordering <code class="code">Ord.compare</code>, where <code class="code">Ord</code> is the argument\n       given to <a href="Map.Make.html"><code class="code">Map.Make</code></a>.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> min_binding: t &apos;a =&gt; (key, &apos;a);\n</pre><div class="info ">\nReturn the smallest binding of the given map\n       (with respect to the <code class="code">Ord.compare</code> ordering), or raise\n       <code class="code">Not_found</code> if the map is empty.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> max_binding: t &apos;a =&gt; (key, &apos;a);\n</pre><div class="info ">\nSame as <a href="Map.S.html#VALmin_binding"><code class="code">Map.S.min_binding</code></a>, but returns the largest binding\n        of the given map.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> choose: t &apos;a =&gt; (key, &apos;a);\n</pre><div class="info ">\nReturn one binding of the given map, or raise <code class="code">Not_found</code> if\n       the map is empty. Which binding is chosen is unspecified,\n       but equal bindings will be chosen for equal maps.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> split: key =&gt; t &apos;a =&gt; (t &apos;a, option &apos;a, t &apos;a);\n</pre><div class="info ">\n<code class="code">split x m</code> returns a triple <code class="code">(l, data, r)</code>, where\n          <code class="code">l</code> is the map with all the bindings of <code class="code">m</code> whose key\n        is strictly less than <code class="code">x</code>;\n          <code class="code">r</code> is the map with all the bindings of <code class="code">m</code> whose key\n        is strictly greater than <code class="code">x</code>;\n          <code class="code">data</code> is <code class="code">None</code> if <code class="code">m</code> contains no binding for <code class="code">x</code>,\n          or <code class="code">Some v</code> if <code class="code">m</code> binds <code class="code">v</code> to <code class="code">x</code>.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> find: key =&gt; t &apos;a =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">find x m</code> returns the current binding of <code class="code">x</code> in <code class="code">m</code>,\n       or raises <code class="code">Not_found</code> if no such binding exists.<br>\n</div>\n\n<pre><span class="keyword">let</span> map: (&apos;a =&gt; &apos;b) =&gt; t &apos;a =&gt; t &apos;b;\n</pre><div class="info ">\n<code class="code">map f m</code> returns a map with same domain as <code class="code">m</code>, where the\n       associated value <code class="code">a</code> of all bindings of <code class="code">m</code> has been\n       replaced by the result of the application of <code class="code">f</code> to <code class="code">a</code>.\n       The bindings are passed to <code class="code">f</code> in increasing order\n       with respect to the ordering over the type of the keys.<br>\n</div>\n\n<pre><span class="keyword">let</span> mapi: (key =&gt; &apos;a =&gt; &apos;b) =&gt; t &apos;a =&gt; t &apos;b;\n</pre><div class="info ">\nSame as <a href="Map.S.html#VALmap"><code class="code">Map.S.map</code></a>, but the function receives as arguments both the\n       key and the associated value for each binding of the map.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Map.Make.html"}}}});
//# sourceMappingURL=path---api-map-make-html-cb62144b379d7c503dd5.js.map