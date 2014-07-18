/**
 * @constructor
 */
stream.Readable = function(){
}

/**
 * <p>The <code>read()</code> method pulls some data out of the internal buffer and
 * returns it.  If there is no data available, then it will return
 * <code>null</code>.
 * 
 * </p>
 * <p>If you pass in a <code>size</code> argument, then it will return that many
 * bytes.  If <code>size</code> bytes are not available, then it will return <code>null</code>.
 * 
 * </p>
 * <p>If you do not specify a <code>size</code> argument, then it will return all the
 * data in the internal buffer.
 * 
 * </p>
 * <p>This method should only be called in non-flowing mode.  In
 * flowing-mode, this method is called automatically until the internal
 * buffer is drained.
 * 
 * </p>
 * <pre><code class="javascript">var readable = getReadableStreamSomehow();
 * readable.on(&#39;readable&#39;, function() {
 *   var chunk;
 *   while (null !== (chunk = readable.read())) {
 *     console.log(&#39;got %d bytes of data&#39;, chunk.length);
 *   }
 * });</code></pre>
 * */
stream.Readable.prototype.read = function(size){
};

/**
 * <p>Call this function to cause the stream to return strings of the
 * specified encoding instead of Buffer objects.  For example, if you do
 * <code>readable.setEncoding(&#39;utf8&#39;)</code>, then the output data will be
 * interpreted as UTF-8 data, and returned as strings.  If you do
 * <code>readable.setEncoding(&#39;hex&#39;)</code>, then the data will be encoded in
 * hexadecimal string format.
 * 
 * </p>
 * <p>This properly handles multi-byte characters that would otherwise be
 * potentially mangled if you simply pulled the Buffers directly and
 * called <code>buf.toString(encoding)</code> on them.  If you want to read the data
 * as strings, always use this method.
 * 
 * </p>
 * <pre><code class="javascript">var readable = getReadableStreamSomehow();
 * readable.setEncoding(&#39;utf8&#39;);
 * readable.on(&#39;data&#39;, function(chunk) {
 *   assert.equal(typeof chunk, &#39;string&#39;);
 *   console.log(&#39;got %d characters of string data&#39;, chunk.length);
 * })</code></pre>
 * */
stream.Readable.prototype.setEncoding = function(encoding){
};

/**
 * <p>This method will cause the readable stream to resume emitting <code>data</code>
 * events.
 * 
 * </p>
 * <p>This method will switch the stream into flowing-mode.  If you do <em>not</em>
 * want to consume the data from a stream, but you <em>do</em> want to get to
 * its <code>end</code> event, you can call <code>readable.resume()</code> to open the flow of
 * data.
 * 
 * </p>
 * <pre><code class="javascript">var readable = getReadableStreamSomehow();
 * readable.resume();
 * readable.on(&#39;end&#39;, function(chunk) {
 *   console.log(&#39;got to the end, but did not read anything&#39;);
 * })</code></pre>
 * */
stream.Readable.prototype.resume = function(){
};

/**
 * <p>This method will cause a stream in flowing-mode to stop emitting
 * <code>data</code> events.  Any data that becomes available will remain in the
 * internal buffer.
 * 
 * </p>
 * <p>This method is only relevant in flowing mode.  When called on a
 * non-flowing stream, it will switch into flowing mode, but remain
 * paused.
 * 
 * </p>
 * <pre><code class="javascript">var readable = getReadableStreamSomehow();
 * readable.on(&#39;data&#39;, function(chunk) {
 *   console.log(&#39;got %d bytes of data&#39;, chunk.length);
 *   readable.pause();
 *   console.log(&#39;there will be no more data for 1 second&#39;);
 *   setTimeout(function() {
 *     console.log(&#39;now data will start flowing again&#39;);
 *     readable.resume();
 *   }, 1000);
 * })</code></pre>
 * */
stream.Readable.prototype.pause = function(){
};

/**
 * <p>This method pulls all the data out of a readable stream, and writes it
 * to the supplied destination, automatically managing the flow so that
 * the destination is not overwhelmed by a fast readable stream.
 * 
 * </p>
 * <p>Multiple destinations can be piped to safely.
 * 
 * </p>
 * <pre><code class="javascript">var readable = getReadableStreamSomehow();
 * var writable = fs.createWriteStream(&#39;file.txt&#39;);
 * // All the data from readable goes into &#39;file.txt&#39;
 * readable.pipe(writable);</code></pre>
 * <p>This function returns the destination stream, so you can set up pipe
 * chains like so:
 * 
 * </p>
 * <pre><code class="javascript">var r = fs.createReadStream(&#39;file.txt&#39;);
 * var z = zlib.createGzip();
 * var w = fs.createWriteStream(&#39;file.txt.gz&#39;);
 * r.pipe(z).pipe(w);</code></pre>
 * <p>For example, emulating the Unix <code>cat</code> command:
 * 
 * </p>
 * <pre><code class="javascript">process.stdin.pipe(process.stdout);</code></pre>
 * <p>By default [<code>end()</code>][] is called on the destination when the source stream
 * emits <code>end</code>, so that <code>destination</code> is no longer writable. Pass <code>{ end:
 * false }</code> as <code>options</code> to keep the destination stream open.
 * 
 * </p>
 * <p>This keeps <code>writer</code> open so that &quot;Goodbye&quot; can be written at the
 * end.
 * 
 * </p>
 * <pre><code class="javascript">reader.pipe(writer, { end: false });
 * reader.on(&#39;end&#39;, function() {
 *   writer.end(&#39;Goodbye\n&#39;);
 * });</code></pre>
 * <p>Note that <code>process.stderr</code> and <code>process.stdout</code> are never closed until
 * the process exits, regardless of the specified options.
 * 
 * </p>
 * */
stream.Readable.prototype.pipe = function(destination, options){
};

/**
 * <p>This method will remove the hooks set up for a previous <code>pipe()</code> call.
 * 
 * </p>
 * <p>If the destination is not specified, then all pipes are removed.
 * 
 * </p>
 * <p>If the destination is specified, but no pipe is set up for it, then
 * this is a no-op.
 * 
 * </p>
 * <pre><code class="javascript">var readable = getReadableStreamSomehow();
 * var writable = fs.createWriteStream(&#39;file.txt&#39;);
 * // All the data from readable goes into &#39;file.txt&#39;,
 * // but only for the first second
 * readable.pipe(writable);
 * setTimeout(function() {
 *   console.log(&#39;stop writing to file.txt&#39;);
 *   readable.unpipe(writable);
 *   console.log(&#39;manually close the file stream&#39;);
 *   writable.end();
 * }, 1000);</code></pre>
 * */
stream.Readable.prototype.unpipe = function(destination){
};

/**
 * <p>This is useful in certain cases where a stream is being consumed by a
 * parser, which needs to &quot;un-consume&quot; some data that it has
 * optimistically pulled out of the source, so that the stream can be
 * passed on to some other party.
 * 
 * </p>
 * <p>If you find that you must often call <code>stream.unshift(chunk)</code> in your
 * programs, consider implementing a [Transform][] stream instead.  (See API
 * for Stream Implementors, below.)
 * 
 * </p>
 * <pre><code class="javascript">// Pull off a header delimited by \n\n
 * // use unshift() if we get too much
 * // Call the callback with (error, header, stream)
 * var StringDecoder = require(&#39;string_decoder&#39;).StringDecoder;
 * function parseHeader(stream, callback) {
 *   stream.on(&#39;error&#39;, callback);
 *   stream.on(&#39;readable&#39;, onReadable);
 *   var decoder = new StringDecoder(&#39;utf8&#39;);
 *   var header = &#39;&#39;;
 *   function onReadable() {
 *     var chunk;
 *     while (null !== (chunk = stream.read())) {
 *       var str = decoder.write(chunk);
 *       if (str.match(/\n\n/)) {
 *         // found the header boundary
 *         var split = str.split(/\n\n/);
 *         header += split.shift();
 *         var remaining = split.join(&#39;\n\n&#39;);
 *         var buf = new Buffer(remaining, &#39;utf8&#39;);
 *         if (buf.length)
 *           stream.unshift(buf);
 *         stream.removeListener(&#39;error&#39;, callback);
 *         stream.removeListener(&#39;readable&#39;, onReadable);
 *         // now the body of the message can be read from the stream.
 *         callback(null, header, stream);
 *       } else {
 *         // still reading the header.
 *         header += str;
 *       }
 *     }
 *   }
 * }</code></pre>
 * */
stream.Readable.prototype.unshift = function(chunk){
};

/**
 * <p>Versions of Node prior to v0.10 had streams that did not implement the
 * entire Streams API as it is today.  (See &quot;Compatibility&quot; below for
 * more information.)
 * 
 * </p>
 * <p>If you are using an older Node library that emits <code>&#39;data&#39;</code> events and
 * has a <code>pause()</code> method that is advisory only, then you can use the
 * <code>wrap()</code> method to create a [Readable][] stream that uses the old stream
 * as its data source.
 * 
 * </p>
 * <p>You will very rarely ever need to call this function, but it exists
 * as a convenience for interacting with old Node programs and libraries.
 * 
 * </p>
 * <p>For example:
 * 
 * </p>
 * <pre><code class="javascript">var OldReader = require(&#39;./old-api-module.js&#39;).OldReader;
 * var oreader = new OldReader;
 * var Readable = require(&#39;stream&#39;).Readable;
 * var myReader = new Readable().wrap(oreader);
 * 
 * myReader.on(&#39;readable&#39;, function() {
 *   myReader.read(); // etc.
 * });</code></pre>
 * */
stream.Readable.prototype.wrap = function(stream){
};
