webpackJsonp([263],{"./node_modules/json-loader/index.js!./.cache/json/api-int-64-html.json":function(e,n){e.exports={data:{file:{relativePath:"api/Int64.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Int32.html" title="Int32">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Lazy.html" title="Lazy">Next</a>\n</div>\n<h1>Module <a href="type_Int64.html">Int64</a></h1>\n\n<pre><span class="keyword">module</span> Int64: sig .. end</pre><div class="info module top">\n64-bit integers.\n<p>\n\n   This module provides operations on the type <code class="code">int64</code> of\n   signed 64-bit integers.  Unlike the built-in <code class="code">int</code> type,\n   the type <code class="code">int64</code> is guaranteed to be exactly 64-bit wide on all\n   platforms.  All arithmetic operations over <code class="code">int64</code> are taken\n   modulo 2<sup class="superscript">64</sup>\n</p><p>\n\n   Performance notice: values of type <code class="code">int64</code> occupy more memory\n   space than values of type <code class="code">int</code>, and arithmetic operations on\n   <code class="code">int64</code> are generally slower than those on <code class="code">int</code>.  Use <code class="code">int64</code>\n   only when the application requires exact 64-bit arithmetic.<br>\n</p></div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> zero: int64;\n</pre><div class="info ">\nThe 64-bit integer 0.<br>\n</div>\n\n<pre><span class="keyword">let</span> one: int64;\n</pre><div class="info ">\nThe 64-bit integer 1.<br>\n</div>\n\n<pre><span class="keyword">let</span> minus_one: int64;\n</pre><div class="info ">\nThe 64-bit integer -1.<br>\n</div>\n\n<pre><span class="keyword">let</span> neg: int64 =&gt; int64;\n</pre><div class="info ">\nUnary negation.<br>\n</div>\n\n<pre><span class="keyword">let</span> add: int64 =&gt; int64 =&gt; int64;\n</pre><div class="info ">\nAddition.<br>\n</div>\n\n<pre><span class="keyword">let</span> sub: int64 =&gt; int64 =&gt; int64;\n</pre><div class="info ">\nSubtraction.<br>\n</div>\n\n<pre><span class="keyword">let</span> mul: int64 =&gt; int64 =&gt; int64;\n</pre><div class="info ">\nMultiplication.<br>\n</div>\n\n<pre><span class="keyword">let</span> div: int64 =&gt; int64 =&gt; int64;\n</pre><div class="info ">\nInteger division.  Raise <code class="code">Division_by_zero</code> if the second\n   argument is zero.  This division rounds the real quotient of\n   its arguments towards zero, as specified for <a href="Pervasives.html#VAL(/)"><code class="code">Pervasives.(/)</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> rem: int64 =&gt; int64 =&gt; int64;\n</pre><div class="info ">\nInteger remainder.  If <code class="code">y</code> is not zero, the result\n   of <code class="code">Int64.rem x y</code> satisfies the following property:\n   <code class="code">x = Int64.add (Int64.mul (Int64.div x y) y) (Int64.rem x y)</code>.\n   If <code class="code">y = 0</code>, <code class="code">Int64.rem x y</code> raises <code class="code">Division_by_zero</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> succ: int64 =&gt; int64;\n</pre><div class="info ">\nSuccessor.  <code class="code">Int64.succ x</code> is <code class="code">Int64.add x Int64.one</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> pred: int64 =&gt; int64;\n</pre><div class="info ">\nPredecessor.  <code class="code">Int64.pred x</code> is <code class="code">Int64.sub x Int64.one</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> abs: int64 =&gt; int64;\n</pre><div class="info ">\nReturn the absolute value of its argument.<br>\n</div>\n\n<pre><span class="keyword">let</span> max_int: int64;\n</pre><div class="info ">\nThe greatest representable 64-bit integer, 2<sup class="superscript">63</sup> - 1.<br>\n</div>\n\n<pre><span class="keyword">let</span> min_int: int64;\n</pre><div class="info ">\nThe smallest representable 64-bit integer, -2<sup class="superscript">63</sup>.<br>\n</div>\n\n<pre><span class="keyword">let</span> logand: int64 =&gt; int64 =&gt; int64;\n</pre><div class="info ">\nBitwise logical and.<br>\n</div>\n\n<pre><span class="keyword">let</span> logor: int64 =&gt; int64 =&gt; int64;\n</pre><div class="info ">\nBitwise logical or.<br>\n</div>\n\n<pre><span class="keyword">let</span> logxor: int64 =&gt; int64 =&gt; int64;\n</pre><div class="info ">\nBitwise logical exclusive or.<br>\n</div>\n\n<pre><span class="keyword">let</span> lognot: int64 =&gt; int64;\n</pre><div class="info ">\nBitwise logical negation<br>\n</div>\n\n<pre><span class="keyword">let</span> shift_left: int64 =&gt; int =&gt; int64;\n</pre><div class="info ">\n<code class="code">Int64.shift_left x y</code> shifts <code class="code">x</code> to the left by <code class="code">y</code> bits.\n   The result is unspecified if <code class="code">y &lt; 0</code> or <code class="code">y &gt;= 64</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> shift_right: int64 =&gt; int =&gt; int64;\n</pre><div class="info ">\n<code class="code">Int64.shift_right x y</code> shifts <code class="code">x</code> to the right by <code class="code">y</code> bits.\n   This is an arithmetic shift: the sign bit of <code class="code">x</code> is replicated\n   and inserted in the vacated bits.\n   The result is unspecified if <code class="code">y &lt; 0</code> or <code class="code">y &gt;= 64</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> shift_right_logical: int64 =&gt; int =&gt; int64;\n</pre><div class="info ">\n<code class="code">Int64.shift_right_logical x y</code> shifts <code class="code">x</code> to the right by <code class="code">y</code> bits.\n   This is a logical shift: zeroes are inserted in the vacated bits\n   regardless of the sign of <code class="code">x</code>.\n   The result is unspecified if <code class="code">y &lt; 0</code> or <code class="code">y &gt;= 64</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> of_int: int =&gt; int64;\n</pre><div class="info ">\nConvert the given integer (type <code class="code">int</code>) to a 64-bit integer\n    (type <code class="code">int64</code>).<br>\n</div>\n\n<pre><span class="keyword">let</span> to_int: int64 =&gt; int;\n</pre><div class="info ">\nConvert the given 64-bit integer (type <code class="code">int64</code>) to an\n   integer (type <code class="code">int</code>).  On 64-bit platforms, the 64-bit integer\n   is taken modulo 2<sup class="superscript">63</sup>, i.e. the high-order bit is lost\n   during the conversion.  On 32-bit platforms, the 64-bit integer\n   is taken modulo 2<sup class="superscript">31</sup>, i.e. the top 33 bits are lost\n   during the conversion.<br>\n</div>\n\n<pre><span class="keyword">let</span> of_float: float =&gt; int64;\n</pre><div class="info ">\nConvert the given floating-point number to a 64-bit integer,\n   discarding the fractional part (truncate towards 0).\n   The result of the conversion is undefined if, after truncation,\n   the number is outside the range [<a href="Int64.html#VALmin_int"><code class="code">Int64.min_int</code></a>, <a href="Int64.html#VALmax_int"><code class="code">Int64.max_int</code></a>].<br>\n</div>\n\n<pre><span class="keyword">let</span> to_float: int64 =&gt; float;\n</pre><div class="info ">\nConvert the given 64-bit integer to a floating-point number.<br>\n</div>\n\n<pre><span class="keyword">let</span> of_int32: int32 =&gt; int64;\n</pre><div class="info ">\nConvert the given 32-bit integer (type <code class="code">int32</code>)\n   to a 64-bit integer (type <code class="code">int64</code>).<br>\n</div>\n\n<pre><span class="keyword">let</span> to_int32: int64 =&gt; int32;\n</pre><div class="info ">\nConvert the given 64-bit integer (type <code class="code">int64</code>) to a\n   32-bit integer (type <code class="code">int32</code>). The 64-bit integer\n   is taken modulo 2<sup class="superscript">32</sup>, i.e. the top 32 bits are lost\n   during the conversion.<br>\n</div>\n\n<pre><span class="keyword">let</span> of_nativeint: nativeint =&gt; int64;\n</pre><div class="info ">\nConvert the given native integer (type <code class="code">nativeint</code>)\n   to a 64-bit integer (type <code class="code">int64</code>).<br>\n</div>\n\n<pre><span class="keyword">let</span> to_nativeint: int64 =&gt; nativeint;\n</pre><div class="info ">\nConvert the given 64-bit integer (type <code class="code">int64</code>) to a\n   native integer.  On 32-bit platforms, the 64-bit integer\n   is taken modulo 2<sup class="superscript">32</sup>.  On 64-bit platforms,\n   the conversion is exact.<br>\n</div>\n\n<pre><span class="keyword">let</span> of_string: string =&gt; int64;\n</pre><div class="info ">\nConvert the given string to a 64-bit integer.\n   The string is read in decimal (by default) or in hexadecimal,\n   octal or binary if the string begins with <code class="code">0x</code>, <code class="code">0o</code> or <code class="code">0b</code>\n   respectively.\n   Raise <code class="code">Failure &quot;int_of_string&quot;</code> if the given string is not\n   a valid representation of an integer, or if the integer represented\n   exceeds the range of integers representable in type <code class="code">int64</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> to_string: int64 =&gt; string;\n</pre><div class="info ">\nReturn the string representation of its argument, in decimal.<br>\n</div>\n\n<pre><span class="keyword">let</span> bits_of_float: float =&gt; int64;\n</pre><div class="info ">\nReturn the internal representation of the given float according\n   to the IEEE 754 floating-point &apos;double format&apos; bit layout.\n   Bit 63 of the result represents the sign of the float;\n   bits 62 to 52 represent the (biased) exponent; bits 51 to 0\n   represent the mantissa.<br>\n</div>\n\n<pre><span class="keyword">let</span> float_of_bits: int64 =&gt; float;\n</pre><div class="info ">\nReturn the floating-point number whose internal representation,\n   according to the IEEE 754 floating-point &apos;double format&apos; bit layout,\n   is the given <code class="code">int64</code>.<br>\n</div>\n\n<pre><span class="keyword">type</span> t = int64;\n</pre>\n<div class="info ">\nAn alias for the type of 64-bit integers.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> compare: t =&gt; t =&gt; int;\n</pre><div class="info ">\nThe comparison function for 64-bit integers, with the same specification as\n    <a href="Pervasives.html#VALcompare"><code class="code">Pervasives.compare</code></a>.  Along with the type <code class="code">t</code>, this function <code class="code">compare</code>\n    allows the module <code class="code">Int64</code> to be passed as argument to the functors\n    <a href="Set.Make.html"><code class="code">Set.Make</code></a> and <a href="Map.Make.html"><code class="code">Map.Make</code></a>.<br>\n</div>\n<br>\n<h6 id="6_Deprecatedfunctions">Deprecated functions</h6><br>\n\n<pre><span class="keyword">let</span> format: string =&gt; int64 =&gt; string;\n</pre><div class="info ">\nDo not use this deprecated function.  Instead,\n   used <a href="Printf.html#VALsprintf"><code class="code">Printf.sprintf</code></a> with a <code class="code">%L...</code> format.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Int64.html"}}}});
//# sourceMappingURL=path---api-int-64-html-b785799ef690f8eaff50.js.map