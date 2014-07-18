/**
 * @constructor
 */
DiffieHellman = function(){
}

/**
 * <p>Generates private and public Diffie-Hellman key values, and returns
 * the public key in the specified encoding. This key should be
 * transferred to the other party. Encoding can be <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>,
 * or <code>&#39;base64&#39;</code>.  If no encoding is provided, then a buffer is returned.
 * 
 * </p>
 * */
DiffieHellman.prototype.generateKeys = function(encoding){
};

/**
 * <p>Computes the shared secret using <code>other_public_key</code> as the other
 * party&#39;s public key and returns the computed shared secret. Supplied
 * key is interpreted using specified <code>input_encoding</code>, and secret is
 * encoded using specified <code>output_encoding</code>. Encodings can be
 * <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>, or <code>&#39;base64&#39;</code>. If the input encoding is not
 * provided, then a buffer is expected.
 * 
 * </p>
 * <p>If no output encoding is given, then a buffer is returned.
 * 
 * </p>
 * */
DiffieHellman.prototype.computeSecret = function(other_public_key, input_encoding, output_encoding){
};

/**
 * <p>Returns the Diffie-Hellman prime in the specified encoding, which can
 * be <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>, or <code>&#39;base64&#39;</code>. If no encoding is provided,
 * then a buffer is returned.
 * 
 * </p>
 * */
DiffieHellman.prototype.getPrime = function(encoding){
};

/**
 * <p>Returns the Diffie-Hellman generator in the specified encoding, which can
 * be <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>, or <code>&#39;base64&#39;</code>. If no encoding is provided,
 * then a buffer is returned.
 * 
 * </p>
 * */
DiffieHellman.prototype.getGenerator = function(encoding){
};

/**
 * <p>Returns the Diffie-Hellman public key in the specified encoding, which
 * can be <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>, or <code>&#39;base64&#39;</code>. If no encoding is provided,
 * then a buffer is returned.
 * 
 * </p>
 * */
DiffieHellman.prototype.getPublicKey = function(encoding){
};

/**
 * <p>Returns the Diffie-Hellman private key in the specified encoding,
 * which can be <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>, or <code>&#39;base64&#39;</code>. If no encoding is
 * provided, then a buffer is returned.
 * 
 * </p>
 * */
DiffieHellman.prototype.getPrivateKey = function(encoding){
};

/**
 * <p>Sets the Diffie-Hellman public key. Key encoding can be <code>&#39;binary&#39;</code>,
 * <code>&#39;hex&#39;</code> or <code>&#39;base64&#39;</code>. If no encoding is provided, then a buffer is
 * expected.
 * 
 * </p>
 * */
DiffieHellman.prototype.setPublicKey = function(public_key, encoding){
};

/**
 * <p>Sets the Diffie-Hellman private key. Key encoding can be <code>&#39;binary&#39;</code>,
 * <code>&#39;hex&#39;</code> or <code>&#39;base64&#39;</code>. If no encoding is provided, then a buffer is
 * expected.
 * 
 * </p>
 * */
DiffieHellman.prototype.setPrivateKey = function(private_key, encoding){
};
