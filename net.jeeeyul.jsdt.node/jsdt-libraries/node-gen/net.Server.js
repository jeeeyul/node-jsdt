/**
 * @constructor
 */
net.Server = function(){
}

/**
 * <p>Begin accepting connections on the specified <code>port</code> and <code>host</code>.  If the
 * <code>host</code> is omitted, the server will accept connections directed to any
 * IPv4 address (<code>INADDR_ANY</code>). A port value of zero will assign a random port.
 * 
 * </p>
 * <p>Backlog is the maximum length of the queue of pending connections.
 * The actual length will be determined by your OS through sysctl settings such as
 * <code>tcp_max_syn_backlog</code> and <code>somaxconn</code> on linux. The default value of this
 * parameter is 511 (not 512).
 * 
 * </p>
 * <p>This function is asynchronous.  When the server has been bound,
 * [&#39;listening&#39;][] event will be emitted.  The last parameter <code>callback</code>
 * will be added as an listener for the [&#39;listening&#39;][] event.
 * 
 * </p>
 * <p>One issue some users run into is getting <code>EADDRINUSE</code> errors. This means that
 * another server is already running on the requested port. One way of handling this
 * would be to wait a second and then try again. This can be done with
 * 
 * </p>
 * <pre><code>server.on(&#39;error&#39;, function (e) {
 *   if (e.code == &#39;EADDRINUSE&#39;) {
 *     console.log(&#39;Address in use, retrying...&#39;);
 *     setTimeout(function () {
 *       server.close();
 *       server.listen(PORT, HOST);
 *     }, 1000);
 *   }
 * });</code></pre>
 * <p>(Note: All sockets in Node set <code>SO_REUSEADDR</code> already)
 * 
 * 
 * </p>
 * */
net.Server.prototype.listen = function(port, host, backlog, callback){
};

/**
 * <p>Start a UNIX socket server listening for connections on the given <code>path</code>.
 * 
 * </p>
 * <p>This function is asynchronous.  When the server has been bound,
 * [&#39;listening&#39;][] event will be emitted.  The last parameter <code>callback</code>
 * will be added as an listener for the [&#39;listening&#39;][] event.
 * 
 * </p>
 * */
net.Server.prototype.listen = function(path, callback){
};

/**
 * <p>The <code>handle</code> object can be set to either a server or socket (anything
 * with an underlying <code>_handle</code> member), or a <code>{fd: &lt;n&gt;}</code> object.
 * 
 * </p>
 * <p>This will cause the server to accept connections on the specified
 * handle, but it is presumed that the file descriptor or handle has
 * already been bound to a port or domain socket.
 * 
 * </p>
 * <p>Listening on a file descriptor is not supported on Windows.
 * 
 * </p>
 * <p>This function is asynchronous.  When the server has been bound,
 * <a href="#event_listening_">&#39;listening&#39;</a> event will be emitted.
 * the last parameter <code>callback</code> will be added as an listener for the
 * <a href="#event_listening_">&#39;listening&#39;</a> event.
 * 
 * </p>
 * */
net.Server.prototype.listen = function(handle, callback){
};

/**
 * <p>Stops the server from accepting new connections and keeps existing
 * connections. This function is asynchronous, the server is finally
 * closed when all connections are ended and the server emits a <code>&#39;close&#39;</code>
 * event. Optionally, you can pass a callback to listen for the <code>&#39;close&#39;</code>
 * event.
 * 
 * </p>
 * */
net.Server.prototype.close = function(callback){
};

/**
 * <p>Returns the bound address, the address family name and port of the server
 * as reported by the operating system.
 * Useful to find which port was assigned when giving getting an OS-assigned address.
 * Returns an object with three properties, e.g.
 * <code>{ port: 12346, family: &#39;IPv4&#39;, address: &#39;127.0.0.1&#39; }</code>
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var server = net.createServer(function (socket) {
 *   socket.end(&quot;goodbye\n&quot;);
 * });
 * 
 * // grab a random port.
 * server.listen(function() {
 *   address = server.address();
 *   console.log(&quot;opened server on %j&quot;, address);
 * });</code></pre>
 * <p>Don&#39;t call <code>server.address()</code> until the <code>&#39;listening&#39;</code> event has been emitted.
 * 
 * </p>
 * */
net.Server.prototype.address = function(){
};

/**
 * <p>Calling <code>unref</code> on a server will allow the program to exit if this is the only
 * active server in the event system. If the server is already <code>unref</code>d calling
 * <code>unref</code> again will have no effect.
 * 
 * </p>
 * */
net.Server.prototype.unref = function(){
};

/**
 * <p>Opposite of <code>unref</code>, calling <code>ref</code> on a previously <code>unref</code>d server will <em>not</em>
 * let the program exit if it&#39;s the only server left (the default behavior). If
 * the server is <code>ref</code>d calling <code>ref</code> again will have no effect.
 * 
 * </p>
 * */
net.Server.prototype.ref = function(){
};

/**
 * <p>Asynchronously get the number of concurrent connections on the server. Works
 * when sockets were sent to forks.
 * 
 * </p>
 * <p>Callback should take two arguments <code>err</code> and <code>count</code>.
 * 
 * </p>
 * <p><code>net.Server</code> is an [EventEmitter][] with the following events:
 * 
 * </p>
 * */
net.Server.prototype.getConnections = function(callback){
};
