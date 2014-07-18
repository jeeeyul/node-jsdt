/**
 * @constructor
 */
Verify = function(){
}

/**
 * <p>Updates the verifier object with data.  This can be called many times
 * with new data as it is streamed.
 * 
 * </p>
 * */
Verify.prototype.update = function(data){
};

/**
 * <p>Verifies the signed data by using the <code>object</code> and <code>signature</code>.
 * <code>object</code> is  a string containing a PEM encoded object, which can be
 * one of RSA public key, DSA public key, or X.509 certificate.
 * <code>signature</code> is the previously calculated signature for the data, in
 * the <code>signature_format</code> which can be <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code> or <code>&#39;base64&#39;</code>.
 * If no encoding is specified, then a buffer is expected.
 * 
 * </p>
 * <p>Returns true or false depending on the validity of the signature for
 * the data and public key.
 * 
 * </p>
 * <p>Note: <code>verifier</code> object can not be used after <code>verify()</code> method has been
 * called.
 * 
 * </p>
 * */
Verify.prototype.verify = function(object, signature, signature_format){
};
