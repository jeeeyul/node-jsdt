/**
 * @constructor
 */
_NPM_crypto = function(){
}

/**
 * <p>Returns an array with the names of the supported ciphers.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var ciphers = crypto.getCiphers();
 * console.log(ciphers); // [&#39;AES-128-CBC&#39;, &#39;AES-128-CBC-HMAC-SHA1&#39;, ...]</code></pre>
 * */
_NPM_crypto.prototype.getCiphers = function(){
};

/**
 * <p>Returns an array with the names of the supported hash algorithms.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var hashes = crypto.getHashes();
 * console.log(hashes); // [&#39;sha&#39;, &#39;sha1&#39;, &#39;sha1WithRSAEncryption&#39;, ...]</code></pre>
 * */
_NPM_crypto.prototype.getHashes = function(){
};

/**
 * <p>Creates a credentials object, with the optional details being a
 * dictionary with keys:
 * 
 * </p>
 * <ul>
 * <li><code>pfx</code> : A string or buffer holding the PFX or PKCS12 encoded private
 * key, certificate and CA certificates</li>
 * <li><code>key</code> : A string holding the PEM encoded private key</li>
 * <li><code>passphrase</code> : A string of passphrase for the private key or pfx</li>
 * <li><code>cert</code> : A string holding the PEM encoded certificate</li>
 * <li><code>ca</code> : Either a string or list of strings of PEM encoded CA
 * certificates to trust.</li>
 * <li><code>crl</code> : Either a string or list of strings of PEM encoded CRLs
 * (Certificate Revocation List)</li>
 * <li><code>ciphers</code>: A string describing the ciphers to use or exclude.
 * Consult
 * <a href="http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT">http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT</a>
 * for details on the format.</li>
 * </ul>
 * <p>If no &#39;ca&#39; details are given, then node.js will use the default
 * publicly trusted list of CAs as given in
 * </p>
 * <p><a href="http://mxr.mozilla.org/mozilla/source/security/nss/lib/ckfw/builtins/certdata.txt">http://mxr.mozilla.org/mozilla/source/security/nss/lib/ckfw/builtins/certdata.txt</a>.
 * 
 * 
 * </p>
 * */
_NPM_crypto.prototype.createCredentials = function(details){
};

/**
 * <p>Creates and returns a hash object, a cryptographic hash with the given
 * algorithm which can be used to generate hash digests.
 * 
 * </p>
 * <p><code>algorithm</code> is dependent on the available algorithms supported by the
 * version of OpenSSL on the platform. Examples are <code>&#39;sha1&#39;</code>, <code>&#39;md5&#39;</code>,
 * <code>&#39;sha256&#39;</code>, <code>&#39;sha512&#39;</code>, etc.  On recent releases, <code>openssl
 * list-message-digest-algorithms</code> will display the available digest
 * algorithms.
 * 
 * </p>
 * <p>Example: this program that takes the sha1 sum of a file
 * 
 * </p>
 * <pre><code>var filename = process.argv[2];
 * var crypto = require(&#39;crypto&#39;);
 * var fs = require(&#39;fs&#39;);
 * 
 * var shasum = crypto.createHash(&#39;sha1&#39;);
 * 
 * var s = fs.ReadStream(filename);
 * s.on(&#39;data&#39;, function(d) {
 *   shasum.update(d);
 * });
 * 
 * s.on(&#39;end&#39;, function() {
 *   var d = shasum.digest(&#39;hex&#39;);
 *   console.log(d + &#39;  &#39; + filename);
 * });</code></pre>
 * */
_NPM_crypto.prototype.createHash = function(algorithm){
};

/**
 * <p>Creates and returns a hmac object, a cryptographic hmac with the given
 * algorithm and key.
 * 
 * </p>
 * <p>It is a <a href="stream.html">stream</a> that is both readable and writable.  The
 * written data is used to compute the hmac.  Once the writable side of
 * the stream is ended, use the <code>read()</code> method to get the computed
 * digest.  The legacy <code>update</code> and <code>digest</code> methods are also supported.
 * 
 * </p>
 * <p><code>algorithm</code> is dependent on the available algorithms supported by
 * OpenSSL - see createHash above.  <code>key</code> is the hmac key to be used.
 * 
 * </p>
 * */
_NPM_crypto.prototype.createHmac = function(algorithm, key){
};

/**
 * <p>Creates and returns a cipher object, with the given algorithm and
 * password.
 * 
 * </p>
 * <p><code>algorithm</code> is dependent on OpenSSL, examples are <code>&#39;aes192&#39;</code>, etc.  On
 * recent releases, <code>openssl list-cipher-algorithms</code> will display the
 * available cipher algorithms.  <code>password</code> is used to derive key and IV,
 * which must be a <code>&#39;binary&#39;</code> encoded string or a <a href="buffer.html">buffer</a>.
 * 
 * </p>
 * <p>It is a <a href="stream.html">stream</a> that is both readable and writable.  The
 * written data is used to compute the hash.  Once the writable side of
 * the stream is ended, use the <code>read()</code> method to get the computed hash
 * digest.  The legacy <code>update</code> and <code>digest</code> methods are also supported.
 * 
 * </p>
 * */
_NPM_crypto.prototype.createCipher = function(algorithm, password){
};

/**
 * <p>Creates and returns a cipher object, with the given algorithm, key and
 * iv.
 * 
 * </p>
 * <p><code>algorithm</code> is the same as the argument to <code>createCipher()</code>.  <code>key</code> is
 * the raw key used by the algorithm.  <code>iv</code> is an <a href="http://en.wikipedia.org/wiki/Initialization_vector">initialization
 * vector</a>.
 * 
 * </p>
 * <p><code>key</code> and <code>iv</code> must be <code>&#39;binary&#39;</code> encoded strings or
 * <a href="buffer.html">buffers</a>.
 * 
 * </p>
 * */
_NPM_crypto.prototype.createCipheriv = function(algorithm, key, iv){
};

/**
 * <p>Creates and returns a decipher object, with the given algorithm and
 * key.  This is the mirror of the [createCipher()][] above.
 * 
 * </p>
 * */
_NPM_crypto.prototype.createDecipher = function(algorithm, password){
};

/**
 * <p>Creates and returns a decipher object, with the given algorithm, key
 * and iv.  This is the mirror of the [createCipheriv()][] above.
 * 
 * </p>
 * */
_NPM_crypto.prototype.createDecipheriv = function(algorithm, key, iv){
};

/**
 * <p>Creates and returns a signing object, with the given algorithm.  On
 * recent OpenSSL releases, <code>openssl list-public-key-algorithms</code> will
 * display the available signing algorithms. Examples are <code>&#39;RSA-SHA256&#39;</code>.
 * 
 * </p>
 * */
_NPM_crypto.prototype.createSign = function(algorithm){
};

/**
 * <p>Creates and returns a verification object, with the given algorithm.
 * This is the mirror of the signing object above.
 * 
 * </p>
 * */
_NPM_crypto.prototype.createVerify = function(algorithm){
};

/**
 * <p>Creates a Diffie-Hellman key exchange object and generates a prime of
 * the given bit length. The generator used is <code>2</code>.
 * 
 * </p>
 * */
_NPM_crypto.prototype.createDiffieHellman = function(prime_length){
};

/**
 * <p>Creates a Diffie-Hellman key exchange object using the supplied prime.
 * The generator used is <code>2</code>. Encoding can be <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>, or
 * <code>&#39;base64&#39;</code>.  If no encoding is specified, then a buffer is expected.
 * 
 * </p>
 * */
_NPM_crypto.prototype.createDiffieHellman = function(prime, encoding){
};

/**
 * <p>Creates a predefined Diffie-Hellman key exchange object.  The
 * supported groups are: <code>&#39;modp1&#39;</code>, <code>&#39;modp2&#39;</code>, <code>&#39;modp5&#39;</code> (defined in [RFC
 * 2412][]) and <code>&#39;modp14&#39;</code>, <code>&#39;modp15&#39;</code>, <code>&#39;modp16&#39;</code>, <code>&#39;modp17&#39;</code>,
 * <code>&#39;modp18&#39;</code> (defined in [RFC 3526][]).  The returned object mimics the
 * interface of objects created by [crypto.createDiffieHellman()][]
 * above, but will not allow to change the keys (with
 * [diffieHellman.setPublicKey()][] for example).  The advantage of using
 * this routine is that the parties don&#39;t have to generate nor exchange
 * group modulus beforehand, saving both processor and communication
 * time.
 * 
 * </p>
 * <p>Example (obtaining a shared secret):
 * 
 * </p>
 * <pre><code>var crypto = require(&#39;crypto&#39;);
 * var alice = crypto.getDiffieHellman(&#39;modp5&#39;);
 * var bob = crypto.getDiffieHellman(&#39;modp5&#39;);
 * 
 * alice.generateKeys();
 * bob.generateKeys();
 * 
 * var alice_secret = alice.computeSecret(bob.getPublicKey(), null, &#39;hex&#39;);
 * var bob_secret = bob.computeSecret(alice.getPublicKey(), null, &#39;hex&#39;);
 * 
 * /%2F alice_secret and bob_secret should be the same %2F/
 * console.log(alice_secret == bob_secret);</code></pre>
 * */
_NPM_crypto.prototype.getDiffieHellman = function(group_name){
};

/**
 * <p>Asynchronous PBKDF2 applies pseudorandom function HMAC-SHA1 to derive
 * a key of given length from the given password, salt and iterations.
 * The callback gets two arguments <code>(err, derivedKey)</code>.
 * 
 * </p>
 * */
_NPM_crypto.prototype.pbkdf2 = function(password, salt, iterations, keylen, callback){
};

/**
 * <p>Synchronous PBKDF2 function.  Returns derivedKey or throws error.
 * 
 * </p>
 * */
_NPM_crypto.prototype.pbkdf2Sync = function(password, salt, iterations, keylen){
};

/**
 * <p>Generates cryptographically strong pseudo-random data. Usage:
 * 
 * </p>
 * <pre><code>// async
 * crypto.randomBytes(256, function(ex, buf) {
 *   if (ex) throw ex;
 *   console.log(&#39;Have %d bytes of random data: %s&#39;, buf.length, buf);
 * });
 * 
 * // sync
 * try {
 *   var buf = crypto.randomBytes(256);
 *   console.log(&#39;Have %d bytes of random data: %s&#39;, buf.length, buf);
 * } catch (ex) {
 *   // handle error
 *   // most likely, entropy sources are drained
 * }</code></pre>
 * <p>NOTE: Will throw error or invoke callback with error, if there is not enough
 * accumulated entropy to generate cryptographically strong data. In other words,
 * <code>crypto.randomBytes</code> without callback will not block even if all entropy sources
 * are drained.
 * 
 * </p>
 * */
_NPM_crypto.prototype.randomBytes = function(size, callback){
};

/**
 * <p>Generates <em>non</em>-cryptographically strong pseudo-random data. The data
 * returned will be unique if it is sufficiently long, but is not
 * necessarily unpredictable. For this reason, the output of this
 * function should never be used where unpredictability is important,
 * such as in the generation of encryption keys.
 * 
 * </p>
 * <p>Usage is otherwise identical to <code>crypto.randomBytes</code>.
 * 
 * </p>
 * */
_NPM_crypto.prototype.pseudoRandomBytes = function(size, callback){
};
