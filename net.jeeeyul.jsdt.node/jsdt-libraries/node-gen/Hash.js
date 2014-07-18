/**
 * @constructor
 */
Hash = function(){
}

/**
 * <p>Updates the hash content with the given <code>data</code>, the encoding of which
 * is given in <code>input_encoding</code> and can be <code>&#39;utf8&#39;</code>, <code>&#39;ascii&#39;</code> or
 * <code>&#39;binary&#39;</code>.  If no encoding is provided and the input is a string an
 * encoding of <code>&#39;binary&#39;</code> is enforced. If <code>data</code> is a <code>Buffer</code> then
 * <code>input_encoding</code> is ignored.
 * 
 * </p>
 * <p>This can be called many times with new data as it is streamed.
 * 
 * </p>
 * */
Hash.prototype.update = function(data, input_encoding){
};

/**
 * <p>Calculates the digest of all of the passed data to be hashed.  The
 * <code>encoding</code> can be <code>&#39;hex&#39;</code>, <code>&#39;binary&#39;</code> or <code>&#39;base64&#39;</code>.  If no encoding
 * is provided, then a buffer is returned.
 * 
 * </p>
 * <p>Note: <code>hash</code> object can not be used after <code>digest()</code> method has been
 * called.
 * 
 * 
 * </p>
 * */
Hash.prototype.digest = function(encoding){
};
