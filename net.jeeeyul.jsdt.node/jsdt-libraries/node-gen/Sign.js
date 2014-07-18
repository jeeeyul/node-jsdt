/**
 * @constructor
 */
Sign = function(){
}

/**
 * <p>Updates the sign object with data.  This can be called many times
 * with new data as it is streamed.
 * 
 * </p>
 * */
Sign.prototype.update = function(data){
};

/**
 * <p>Calculates the signature on all the updated data passed through the
 * sign.  <code>private_key</code> is a string containing the PEM encoded private
 * key for signing.
 * 
 * </p>
 * <p>Returns the signature in <code>output_format</code> which can be <code>&#39;binary&#39;</code>,
 * <code>&#39;hex&#39;</code> or <code>&#39;base64&#39;</code>. If no encoding is provided, then a buffer is
 * returned.
 * 
 * </p>
 * <p>Note: <code>sign</code> object can not be used after <code>sign()</code> method has been
 * called.
 * 
 * </p>
 * */
Sign.prototype.sign = function(private_key, output_format){
};
