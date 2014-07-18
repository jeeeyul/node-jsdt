/**
 * @constructor
 */
http.Server = function(){
}

/**
 * <p>Begin accepting connections on the specified port and hostname.  If the
 * hostname is omitted, the server will accept connections directed to any
 * IPv4 address (<code>INADDR_ANY</code>).
 * 
 * </p>
 * <p>To listen to a unix socket, supply a filename instead of port and hostname.
 * 
 * </p>
 * <p>Backlog is the maximum length of the queue of pending connections.
 * The actual length will be determined by your OS through sysctl settings such as
 * <code>tcp_max_syn_backlog</code> and <code>somaxconn</code> on linux. The default value of this
 * parameter is 511 (not 512).
 * 
 * </p>
 * <p>This function is asynchronous. The last parameter <code>callback</code> will be added as
 * a listener for the [&#39;listening&#39;][] event.  See also [net.Server.listen(port)][].
 * 
 * 
 * </p>
 * */
http.Server.prototype.listen = function(port, hostname, backlog, callback){
};

/**
 * <p>Start a UNIX socket server listening for connections on the given <code>path</code>.
 * 
 * </p>
 * <p>This function is asynchronous. The last parameter <code>callback</code> will be added as
 * a listener for the [&#39;listening&#39;][] event.  See also [net.Server.listen(path)][].
 * 
 * 
 * </p>
 * */
http.Server.prototype.listen = function(path, callback){
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
 * <p>This function is asynchronous. The last parameter <code>callback</code> will be added as
 * a listener for the <a href="net.html#event_listening_">&#39;listening&#39;</a> event.
 * See also <a href="net.html#net_server_listen_handle_callback">net.Server.listen()</a>.
 * 
 * </p>
 * */
http.Server.prototype.listen = function(handle, callback){
};

/**
 * <p>Stops the server from accepting new connections.  See [net.Server.close()][].
 * 
 * 
 * </p>
 * */
http.Server.prototype.close = function(callback){
};

/**
 * <p>Sets the timeout value for sockets, and emits a <code>&#39;timeout&#39;</code> event on
 * the Server object, passing the socket as an argument, if a timeout
 * occurs.
 * 
 * </p>
 * <p>If there is a <code>&#39;timeout&#39;</code> event listener on the Server object, then it
 * will be called with the timed-out socket as an argument.
 * 
 * </p>
 * <p>By default, the Server&#39;s timeout value is 2 minutes, and sockets are
 * destroyed automatically if they time out.  However, if you assign a
 * callback to the Server&#39;s <code>&#39;timeout&#39;</code> event, then you are responsible
 * for handling socket timeouts.
 * 
 * </p>
 * */
http.Server.prototype.setTimeout = function(msecs, callback){
};
