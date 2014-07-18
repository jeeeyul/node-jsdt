/**
 * @constructor
 */
Cipher = function(){
}

/**
 * <p>Updates the cipher with <code>data</code>, the encoding of which is given in
 * <code>input_encoding</code> and can be <code>&#39;utf8&#39;</code>, <code>&#39;ascii&#39;</code> or <code>&#39;binary&#39;</code>.  If no
 * encoding is provided, then a buffer is expected.
 * If <code>data</code> is a <code>Buffer</code> then <code>input_encoding</code> is ignored.
 * 
 * </p>
 * <p>The <code>output_encoding</code> specifies the output format of the enciphered
 * data, and can be <code>&#39;binary&#39;</code>, <code>&#39;base64&#39;</code> or <code>&#39;hex&#39;</code>.  If no encoding is
 * provided, then a buffer is returned.
 * 
 * </p>
 * <p>Returns the enciphered contents, and can be called many times with new
 * data as it is streamed.
 * 
 * </p>
 * */
Cipher.prototype.update = function(data, input_encoding, output_encoding){
};

/**
 * <p>Returns any remaining enciphered contents, with <code>output_encoding</code>
 * being one of: <code>&#39;binary&#39;</code>, <code>&#39;base64&#39;</code> or <code>&#39;hex&#39;</code>.  If no encoding is
 * provided, then a buffer is returned.
 * 
 * </p>
 * <p>Note: <code>cipher</code> object can not be used after <code>final()</code> method has been
 * called.
 * 
 * </p>
 * */
Cipher.prototype.final = function(output_encoding){
};

/**
 * <p>You can disable automatic padding of the input data to block size. If
 * <code>auto_padding</code> is false, the length of the entire input data must be a
 * multiple of the cipher&#39;s block size or <code>final</code> will fail.  Useful for
 * non-standard padding, e.g. using <code>0x0</code> instead of PKCS padding. You
 * must call this before <code>cipher.final</code>.
 * 
 * 
 * </p>
 * */
Cipher.prototype.setAutoPadding = function(auto_padding){
};
