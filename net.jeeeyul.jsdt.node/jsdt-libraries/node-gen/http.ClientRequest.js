/**
 * @constructor
 */
http.ClientRequest = function(){
}

/**
 * <p>Sends a chunk of the body.  By calling this method
 * many times, the user can stream a request body to a
 * server--in that case it is suggested to use the
 * <code>[&#39;Transfer-Encoding&#39;, &#39;chunked&#39;]</code> header line when
 * creating the request.
 * 
 * </p>
 * <p>The <code>chunk</code> argument should be a [Buffer][] or a string.
 * 
 * </p>
 * <p>The <code>encoding</code> argument is optional and only applies when <code>chunk</code> is a string.
 * Defaults to <code>&#39;utf8&#39;</code>.
 * 
 * 
 * </p>
 * */
http.ClientRequest.prototype.write = function(chunk, encoding){
};

/**
 * <p>Finishes sending the request. If any parts of the body are
 * unsent, it will flush them to the stream. If the request is
 * chunked, this will send the terminating <code>&#39;0\r\n\r\n&#39;</code>.
 * 
 * </p>
 * <p>If <code>data</code> is specified, it is equivalent to calling
 * <code>request.write(data, encoding)</code> followed by <code>request.end()</code>.
 * 
 * </p>
 * */
http.ClientRequest.prototype.end = function(data, encoding){
};

/**
 * <p>Aborts a request.  (New since v0.3.8.)
 * 
 * </p>
 * */
http.ClientRequest.prototype.abort = function(){
};

/**
 * <p>Once a socket is assigned to this request and is connected
 * [socket.setTimeout()][] will be called.
 * 
 * </p>
 * */
http.ClientRequest.prototype.setTimeout = function(timeout, callback){
};

/**
 * <p>Once a socket is assigned to this request and is connected
 * [socket.setNoDelay()][] will be called.
 * 
 * </p>
 * */
http.ClientRequest.prototype.setNoDelay = function(noDelay){
};

/**
 * <p>Once a socket is assigned to this request and is connected
 * [socket.setKeepAlive()][] will be called.
 * 
 * 
 * </p>
 * */
http.ClientRequest.prototype.setSocketKeepAlive = function(enable, initialDelay){
};
