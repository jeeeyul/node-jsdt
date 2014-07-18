/**
 * @constructor
 */
Hmac = function(){
}

/**
 * <p>Update the hmac content with the given <code>data</code>.  This can be called
 * many times with new data as it is streamed.
 * 
 * </p>
 * */
Hmac.prototype.update = function(data){
};

/**
 * <p>Calculates the digest of all of the passed data to the hmac.  The
 * <code>encoding</code> can be <code>&#39;hex&#39;</code>, <code>&#39;binary&#39;</code> or <code>&#39;base64&#39;</code>.  If no encoding
 * is provided, then a buffer is returned.
 * 
 * </p>
 * <p>Note: <code>hmac</code> object can not be used after <code>digest()</code> method has been
 * called.
 * 
 * 
 * </p>
 * */
Hmac.prototype.digest = function(encoding){
};
