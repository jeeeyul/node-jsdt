/**
 * @constructor
 */
stream.Writable = function(){
}

/**
 * <p>This method writes some data to the underlying system, and calls the
 * supplied callback once the data has been fully handled.
 * 
 * </p>
 * <p>The return value indicates if you should continue writing right now.
 * If the data had to be buffered internally, then it will return
 * <code>false</code>.  Otherwise, it will return <code>true</code>.
 * 
 * </p>
 * <p>This return value is strictly advisory.  You MAY continue to write,
 * even if it returns <code>false</code>.  However, writes will be buffered in
 * memory, so it is best not to do this excessively.  Instead, wait for
 * the <code>drain</code> event before writing more data.
 * 
 * </p>
 * */
stream.Writable.prototype.write = function(chunk, encoding, callback){
};

/**
 * <p>Call this method when no more data will be written to the stream.  If
 * supplied, the callback is attached as a listener on the <code>finish</code> event.
 * 
 * </p>
 * <p>Calling [<code>write()</code>][] after calling [<code>end()</code>][] will raise an error.
 * 
 * </p>
 * <pre><code class="javascript">// write &#39;hello, &#39; and then end with &#39;world!&#39;
 * http.createServer(function (req, res) {
 *   res.write(&#39;hello, &#39;);
 *   res.end(&#39;world!&#39;);
 *   // writing more now is not allowed!
 * });</code></pre>
 * */
stream.Writable.prototype.end = function(chunk, encoding, callback){
};
