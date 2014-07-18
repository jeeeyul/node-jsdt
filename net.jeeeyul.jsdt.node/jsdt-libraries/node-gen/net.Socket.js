/**
 * @constructor
 */
net.Socket = function(){
}

/**
 * <p>Construct a new socket object.
 * 
 * </p>
 * <p><code>options</code> is an object with the following defaults:
 * 
 * </p>
 * <pre><code>{ fd: null
 *   allowHalfOpen: false,
 *   readable: false,
 *   writable: false
 * }</code></pre>
 * <p><code>fd</code> allows you to specify the existing file descriptor of socket.
 * Set <code>readable</code> and/or <code>writable</code> to <code>true</code> to allow reads and/or writes on this
 * socket (NOTE: Works only when <code>fd</code> is passed).
 * About <code>allowHalfOpen</code>, refer to <code>createServer()</code> and <code>&#39;end&#39;</code> event.
 * 
 * </p>
 * */
net.Socket.prototype.Socket = function(options){
};

/**
 * <p>Opens the connection for a given socket. If <code>port</code> and <code>host</code> are given,
 * then the socket will be opened as a TCP socket, if <code>host</code> is omitted,
 * <code>localhost</code> will be assumed. If a <code>path</code> is given, the socket will be
 * opened as a unix socket to that path.
 * 
 * </p>
 * <p>Normally this method is not needed, as <code>net.createConnection</code> opens the
 * socket. Use this only if you are implementing a custom Socket.
 * 
 * </p>
 * <p>This function is asynchronous. When the [&#39;connect&#39;][] event is emitted the
 * socket is established. If there is a problem connecting, the <code>&#39;connect&#39;</code> event
 * will not be emitted, the <code>&#39;error&#39;</code> event will be emitted with the exception.
 * 
 * </p>
 * <p>The <code>connectListener</code> parameter will be added as an listener for the
 * [&#39;connect&#39;][] event.
 * 
 * 
 * </p>
 * */
net.Socket.prototype.connect = function(path, connectListener){
};

/**
 * <p>Opens the connection for a given socket. If <code>port</code> and <code>host</code> are given,
 * then the socket will be opened as a TCP socket, if <code>host</code> is omitted,
 * <code>localhost</code> will be assumed. If a <code>path</code> is given, the socket will be
 * opened as a unix socket to that path.
 * 
 * </p>
 * <p>Normally this method is not needed, as <code>net.createConnection</code> opens the
 * socket. Use this only if you are implementing a custom Socket.
 * 
 * </p>
 * <p>This function is asynchronous. When the [&#39;connect&#39;][] event is emitted the
 * socket is established. If there is a problem connecting, the <code>&#39;connect&#39;</code> event
 * will not be emitted, the <code>&#39;error&#39;</code> event will be emitted with the exception.
 * 
 * </p>
 * <p>The <code>connectListener</code> parameter will be added as an listener for the
 * [&#39;connect&#39;][] event.
 * 
 * 
 * </p>
 * */
net.Socket.prototype.connect = function(path, connectListener){
};

/**
 * <p>Set the encoding for the socket as a Readable Stream. See
 * [stream.setEncoding()][] for more information.
 * 
 * </p>
 * */
net.Socket.prototype.setEncoding = function(encoding){
};

/**
 * <p>Sends data on the socket. The second parameter specifies the encoding in the
 * case of a string--it defaults to UTF8 encoding.
 * 
 * </p>
 * <p>Returns <code>true</code> if the entire data was flushed successfully to the kernel
 * buffer. Returns <code>false</code> if all or part of the data was queued in user memory.
 * <code>&#39;drain&#39;</code> will be emitted when the buffer is again free.
 * 
 * </p>
 * <p>The optional <code>callback</code> parameter will be executed when the data is finally
 * written out - this may not be immediately.
 * 
 * </p>
 * */
net.Socket.prototype.write = function(data, encoding, callback){
};

/**
 * <p>Half-closes the socket. i.e., it sends a FIN packet. It is possible the
 * server will still send some data.
 * 
 * </p>
 * <p>If <code>data</code> is specified, it is equivalent to calling
 * <code>socket.write(data, encoding)</code> followed by <code>socket.end()</code>.
 * 
 * </p>
 * */
net.Socket.prototype.end = function(data, encoding){
};

/**
 * <p>Ensures that no more I/O activity happens on this socket. Only necessary in
 * case of errors (parse error or so).
 * 
 * </p>
 * */
net.Socket.prototype.destroy = function(){
};

/**
 * <p>Pauses the reading of data. That is, <code>&#39;data&#39;</code> events will not be emitted.
 * Useful to throttle back an upload.
 * 
 * </p>
 * */
net.Socket.prototype.pause = function(){
};

/**
 * <p>Resumes reading after a call to <code>pause()</code>.
 * 
 * </p>
 * */
net.Socket.prototype.resume = function(){
};

/**
 * <p>Sets the socket to timeout after <code>timeout</code> milliseconds of inactivity on
 * the socket. By default <code>net.Socket</code> do not have a timeout.
 * 
 * </p>
 * <p>When an idle timeout is triggered the socket will receive a <code>&#39;timeout&#39;</code>
 * event but the connection will not be severed. The user must manually <code>end()</code>
 * or <code>destroy()</code> the socket.
 * 
 * </p>
 * <p>If <code>timeout</code> is 0, then the existing idle timeout is disabled.
 * 
 * </p>
 * <p>The optional <code>callback</code> parameter will be added as a one time listener for the
 * <code>&#39;timeout&#39;</code> event.
 * 
 * </p>
 * */
net.Socket.prototype.setTimeout = function(timeout, callback){
};

/**
 * <p>Disables the Nagle algorithm. By default TCP connections use the Nagle
 * algorithm, they buffer data before sending it off. Setting <code>true</code> for
 * <code>noDelay</code> will immediately fire off data each time <code>socket.write()</code> is called.
 * <code>noDelay</code> defaults to <code>true</code>.
 * 
 * </p>
 * */
net.Socket.prototype.setNoDelay = function(noDelay){
};

/**
 * <p>Enable/disable keep-alive functionality, and optionally set the initial
 * delay before the first keepalive probe is sent on an idle socket.
 * <code>enable</code> defaults to <code>false</code>.
 * 
 * </p>
 * <p>Set <code>initialDelay</code> (in milliseconds) to set the delay between the last
 * data packet received and the first keepalive probe. Setting 0 for
 * initialDelay will leave the value unchanged from the default
 * (or previous) setting. Defaults to <code>0</code>.
 * 
 * </p>
 * */
net.Socket.prototype.setKeepAlive = function(enable, initialDelay){
};

/**
 * <p>Returns the bound address, the address family name and port of the
 * socket as reported by the operating system. Returns an object with
 * three properties, e.g.
 * <code>{ port: 12346, family: &#39;IPv4&#39;, address: &#39;127.0.0.1&#39; }</code>
 * 
 * </p>
 * */
net.Socket.prototype.address = function(){
};

/**
 * <p>Calling <code>unref</code> on a socket will allow the program to exit if this is the only
 * active socket in the event system. If the socket is already <code>unref</code>d calling
 * <code>unref</code> again will have no effect.
 * 
 * </p>
 * */
net.Socket.prototype.unref = function(){
};

/**
 * <p>Opposite of <code>unref</code>, calling <code>ref</code> on a previously <code>unref</code>d socket will <em>not</em>
 * let the program exit if it&#39;s the only socket left (the default behavior). If
 * the socket is <code>ref</code>d calling <code>ref</code> again will have no effect.
 * 
 * </p>
 * */
net.Socket.prototype.ref = function(){
};
