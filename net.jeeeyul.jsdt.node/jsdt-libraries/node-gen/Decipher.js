/**
 * @constructor
 */
Decipher = function(){
}

/**
 * <p>Updates the decipher with <code>data</code>, which is encoded in <code>&#39;binary&#39;</code>,
 * <code>&#39;base64&#39;</code> or <code>&#39;hex&#39;</code>.  If no encoding is provided, then a buffer is
 * expected.
 * If <code>data</code> is a <code>Buffer</code> then <code>input_encoding</code> is ignored.
 * 
 * </p>
 * <p>The <code>output_decoding</code> specifies in what format to return the
 * deciphered plaintext: <code>&#39;binary&#39;</code>, <code>&#39;ascii&#39;</code> or <code>&#39;utf8&#39;</code>.  If no
 * encoding is provided, then a buffer is returned.
 * 
 * </p>
 * */
Decipher.prototype.update = function(data, input_encoding, output_encoding){
};

/**
 * <p>Returns any remaining plaintext which is deciphered, with
 * <code>output_encoding</code> being one of: <code>&#39;binary&#39;</code>, <code>&#39;ascii&#39;</code> or <code>&#39;utf8&#39;</code>.  If
 * no encoding is provided, then a buffer is returned.
 * 
 * </p>
 * <p>Note: <code>decipher</code> object can not be used after <code>final()</code> method has been
 * called.
 * 
 * </p>
 * */
Decipher.prototype.final = function(output_encoding){
};

/**
 * <p>You can disable auto padding if the data has been encrypted without
 * standard block padding to prevent <code>decipher.final</code> from checking and
 * removing it. Can only work if the input data&#39;s length is a multiple of
 * the ciphers block size. You must call this before streaming data to
 * <code>decipher.update</code>.
 * 
 * </p>
 * */
Decipher.prototype.setAutoPadding = function(auto_padding){
};
