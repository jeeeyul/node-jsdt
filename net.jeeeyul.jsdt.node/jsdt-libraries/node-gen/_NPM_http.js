/**
 * @constructor
 */
_NPM_http = function(){
}

/**
 * <p>Returns a new web server object.
 * 
 * </p>
 * <p>The <code>requestListener</code> is a function which is automatically
 * added to the <code>&#39;request&#39;</code> event.
 * 
 * </p>
 * */
_NPM_http.prototype.createServer = function(requestListener){
};

/**
 * <p>This function is <strong>deprecated</strong>; please use [http.request()][] instead.
 * Constructs a new HTTP client. <code>port</code> and <code>host</code> refer to the server to be
 * connected to.
 * 
 * </p>
 * */
_NPM_http.prototype.createClient = function(port, host){
};

/**
 * <p>Node maintains several connections per server to make HTTP requests.
 * This function allows one to transparently issue requests.
 * 
 * </p>
 * <p><code>options</code> can be an object or a string. If <code>options</code> is a string, it is
 * automatically parsed with [url.parse()][].
 * 
 * </p>
 * <p>Options:
 * 
 * </p>
 * <ul>
 * <li><code>host</code>: A domain name or IP address of the server to issue the request to.
 * Defaults to <code>&#39;localhost&#39;</code>.</li>
 * <li><code>hostname</code>: To support <code>url.parse()</code> <code>hostname</code> is preferred over <code>host</code></li>
 * <li><code>port</code>: Port of remote server. Defaults to 80.</li>
 * <li><code>localAddress</code>: Local interface to bind for network connections.</li>
 * <li><code>socketPath</code>: Unix Domain Socket (use one of host:port or socketPath)</li>
 * <li><code>method</code>: A string specifying the HTTP request method. Defaults to <code>&#39;GET&#39;</code>.</li>
 * <li><code>path</code>: Request path. Defaults to <code>&#39;/&#39;</code>. Should include query string if any.
 * E.G. <code>&#39;/index.html?page=12&#39;</code></li>
 * <li><code>headers</code>: An object containing request headers.</li>
 * <li><code>auth</code>: Basic authentication i.e. <code>&#39;user:password&#39;</code> to compute an
 * Authorization header.</li>
 * <li><code>agent</code>: Controls [Agent][] behavior. When an Agent is used request will
 * default to <code>Connection: keep-alive</code>. Possible values:<ul>
 * <li><code>undefined</code> (default): use [global Agent][] for this host and port.</li>
 * <li><code>Agent</code> object: explicitly use the passed in <code>Agent</code>.</li>
 * <li><code>false</code>: opts out of connection pooling with an Agent, defaults request to
 * <code>Connection: close</code>.</li>
 * </ul>
 * </li>
 * </ul>
 * <p>The optional <code>callback</code> parameter will be added as a one time listener for
 * the [&#39;response&#39;][] event.
 * 
 * </p>
 * <p><code>http.request()</code> returns an instance of the [http.ClientRequest][]
 * class. The <code>ClientRequest</code> instance is a writable stream. If one needs to
 * upload a file with a POST request, then write to the <code>ClientRequest</code> object.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var options = {
 *   hostname: &#39;www.google.com&#39;,
 *   port: 80,
 *   path: &#39;/upload&#39;,
 *   method: &#39;POST&#39;
 * };
 * 
 * var req = http.request(options, function(res) {
 *   console.log(&#39;STATUS: &#39; + res.statusCode);
 *   console.log(&#39;HEADERS: &#39; + JSON.stringify(res.headers));
 *   res.setEncoding(&#39;utf8&#39;);
 *   res.on(&#39;data&#39;, function (chunk) {
 *     console.log(&#39;BODY: &#39; + chunk);
 *   });
 * });
 * 
 * req.on(&#39;error&#39;, function(e) {
 *   console.log(&#39;problem with request: &#39; + e.message);
 * });
 * 
 * // write data to request body
 * req.write(&#39;data\n&#39;);
 * req.write(&#39;data\n&#39;);
 * req.end();</code></pre>
 * <p>Note that in the example <code>req.end()</code> was called. With <code>http.request()</code> one
 * must always call <code>req.end()</code> to signify that you&#39;re done with the request -
 * even if there is no data being written to the request body.
 * 
 * </p>
 * <p>If any error is encountered during the request (be that with DNS resolution,
 * TCP level errors, or actual HTTP parse errors) an <code>&#39;error&#39;</code> event is emitted
 * on the returned request object.
 * 
 * </p>
 * <p>There are a few special headers that should be noted.
 * 
 * </p>
 * <ul>
 * <li><p>Sending a &#39;Connection: keep-alive&#39; will notify Node that the connection to
 * the server should be persisted until the next request.</p>
 * </li>
 * <li><p>Sending a &#39;Content-length&#39; header will disable the default chunked encoding.</p>
 * </li>
 * <li><p>Sending an &#39;Expect&#39; header will immediately send the request headers.
 * Usually, when sending &#39;Expect: 100-continue&#39;, you should both set a timeout
 * and listen for the <code>continue</code> event. See RFC2616 Section 8.2.3 for more
 * information.</p>
 * </li>
 * <li><p>Sending an Authorization header will override using the <code>auth</code> option
 * to compute basic authentication.</p>
 * </li>
 * </ul>
 * */
_NPM_http.prototype.request = function(options, callback){
};

/**
 * <p>Since most requests are GET requests without bodies, Node provides this
 * convenience method. The only difference between this method and <code>http.request()</code>
 * is that it sets the method to GET and calls <code>req.end()</code> automatically.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>http.get(&quot;http://www.google.com/index.html&quot;, function(res) {
 *   console.log(&quot;Got response: &quot; + res.statusCode);
 * }).on(&#39;error&#39;, function(e) {
 *   console.log(&quot;Got error: &quot; + e.message);
 * });</code></pre>
 * */
_NPM_http.prototype.get = function(options, callback){
};
