/**
 * @constructor
 */
Buffer = function(){
}

/**
 * <p>Writes <code>string</code> to the buffer at <code>offset</code> using the given encoding.
 * <code>offset</code> defaults to <code>0</code>, <code>encoding</code> defaults to <code>&#39;utf8&#39;</code>. <code>length</code> is
 * the number of bytes to write. Returns number of octets written. If <code>buffer</code> did
 * not contain enough space to fit the entire string, it will write a partial
 * amount of the string. <code>length</code> defaults to <code>buffer.length - offset</code>.
 * The method will not write partial characters.
 * 
 * </p>
 * <pre><code>buf = new Buffer(256);
 * len = buf.write(&#39;\u00bd + \u00bc = \u00be&#39;, 0);
 * console.log(len + &quot; bytes: &quot; + buf.toString(&#39;utf8&#39;, 0, len));</code></pre>
 * <p>The number of characters written (which may be different than the number of
 * bytes written) is set in <code>Buffer._charsWritten</code> and will be overwritten the
 * next time <code>buf.write()</code> is called.
 * 
 * 
 * </p>
 * */
Buffer.prototype.write = function(string, offset, length, encoding){
};

/**
 * <p>Decodes and returns a string from buffer data encoded with <code>encoding</code>
 * (defaults to <code>&#39;utf8&#39;</code>) beginning at <code>start</code> (defaults to <code>0</code>) and ending at
 * <code>end</code> (defaults to <code>buffer.length</code>).
 * 
 * </p>
 * <p>See <code>buffer.write()</code> example, above.
 * 
 * 
 * </p>
 * */
Buffer.prototype.toString = function(encoding, start, end){
};

/**
 * <p>Returns a JSON-representation of the Buffer instance, which is identical to the
 * output for JSON Arrays. <code>JSON.stringify</code> implicitly calls this function when
 * stringifying a Buffer instance.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(&#39;test&#39;);
 * var json = JSON.stringify(buf);
 * 
 * console.log(json);
 * // &#39;[116,101,115,116]&#39;
 * 
 * var copy = new Buffer(JSON.parse(json));
 * 
 * console.log(copy);
 * // &lt;Buffer 74 65 73 74&gt;</code></pre>
 * */
Buffer.prototype.toJSON = function(){
};

/**
 * <p>Does copy between buffers. The source and target regions can be overlapped.
 * <code>targetStart</code> and <code>sourceStart</code> default to <code>0</code>.
 * <code>sourceEnd</code> defaults to <code>buffer.length</code>.
 * 
 * </p>
 * <p>All values passed that are <code>undefined</code>/<code>NaN</code> or are out of bounds are set equal
 * to their respective defaults.
 * 
 * </p>
 * <p>Example: build two Buffers, then copy <code>buf1</code> from byte 16 through byte 19
 * into <code>buf2</code>, starting at the 8th byte in <code>buf2</code>.
 * 
 * </p>
 * <pre><code>buf1 = new Buffer(26);
 * buf2 = new Buffer(26);
 * 
 * for (var i = 0 ; i &lt; 26 ; i++) {
 *   buf1[i] = i + 97; // 97 is ASCII a
 *   buf2[i] = 33; // ASCII !
 * }
 * 
 * buf1.copy(buf2, 8, 16, 20);
 * console.log(buf2.toString(&#39;ascii&#39;, 0, 25));
 * 
 * // !!!!!!!!qrst!!!!!!!!!!!!!</code></pre>
 * */
Buffer.prototype.copy = function(targetBuffer, targetStart, sourceStart, sourceEnd){
};

/**
 * <p>Returns a new buffer which references the same memory as the old, but offset
 * and cropped by the <code>start</code> (defaults to <code>0</code>) and <code>end</code> (defaults to
 * <code>buffer.length</code>) indexes.  Negative indexes start from the end of the buffer.
 * 
 * </p>
 * <p><strong>Modifying the new buffer slice will modify memory in the original buffer!</strong>
 * 
 * </p>
 * <p>Example: build a Buffer with the ASCII alphabet, take a slice, then modify one
 * byte from the original Buffer.
 * 
 * </p>
 * <pre><code>var buf1 = new Buffer(26);
 * 
 * for (var i = 0 ; i &lt; 26 ; i++) {
 *   buf1[i] = i + 97; // 97 is ASCII a
 * }
 * 
 * var buf2 = buf1.slice(0, 3);
 * console.log(buf2.toString(&#39;ascii&#39;, 0, buf2.length));
 * buf1[0] = 33;
 * console.log(buf2.toString(&#39;ascii&#39;, 0, buf2.length));
 * 
 * // abc
 * // !bc</code></pre>
 * */
Buffer.prototype.slice = function(start, end){
};

/**
 * <p>Reads an unsigned 8 bit integer from the buffer at the specified offset.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * 
 * buf[0] = 0x3;
 * buf[1] = 0x4;
 * buf[2] = 0x23;
 * buf[3] = 0x42;
 * 
 * for (ii = 0; ii &lt; buf.length; ii++) {
 *   console.log(buf.readUInt8(ii));
 * }
 * 
 * // 0x3
 * // 0x4
 * // 0x23
 * // 0x42</code></pre>
 * */
Buffer.prototype.readUInt8 = function(offset, noAssert){
};

/**
 * <p>Reads an unsigned 16 bit integer from the buffer at the specified offset with
 * specified endian format.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * 
 * buf[0] = 0x3;
 * buf[1] = 0x4;
 * buf[2] = 0x23;
 * buf[3] = 0x42;
 * 
 * console.log(buf.readUInt16BE(0));
 * console.log(buf.readUInt16LE(0));
 * console.log(buf.readUInt16BE(1));
 * console.log(buf.readUInt16LE(1));
 * console.log(buf.readUInt16BE(2));
 * console.log(buf.readUInt16LE(2));
 * 
 * // 0x0304
 * // 0x0403
 * // 0x0423
 * // 0x2304
 * // 0x2342
 * // 0x4223</code></pre>
 * */
Buffer.prototype.readUInt16LE = function(offset, noAssert){
};

/**
 * <p>Reads an unsigned 16 bit integer from the buffer at the specified offset with
 * specified endian format.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * 
 * buf[0] = 0x3;
 * buf[1] = 0x4;
 * buf[2] = 0x23;
 * buf[3] = 0x42;
 * 
 * console.log(buf.readUInt16BE(0));
 * console.log(buf.readUInt16LE(0));
 * console.log(buf.readUInt16BE(1));
 * console.log(buf.readUInt16LE(1));
 * console.log(buf.readUInt16BE(2));
 * console.log(buf.readUInt16LE(2));
 * 
 * // 0x0304
 * // 0x0403
 * // 0x0423
 * // 0x2304
 * // 0x2342
 * // 0x4223</code></pre>
 * */
Buffer.prototype.readUInt16BE = function(offset, noAssert){
};

/**
 * <p>Reads an unsigned 32 bit integer from the buffer at the specified offset with
 * specified endian format.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * 
 * buf[0] = 0x3;
 * buf[1] = 0x4;
 * buf[2] = 0x23;
 * buf[3] = 0x42;
 * 
 * console.log(buf.readUInt32BE(0));
 * console.log(buf.readUInt32LE(0));
 * 
 * // 0x03042342
 * // 0x42230403</code></pre>
 * */
Buffer.prototype.readUInt32LE = function(offset, noAssert){
};

/**
 * <p>Reads an unsigned 32 bit integer from the buffer at the specified offset with
 * specified endian format.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * 
 * buf[0] = 0x3;
 * buf[1] = 0x4;
 * buf[2] = 0x23;
 * buf[3] = 0x42;
 * 
 * console.log(buf.readUInt32BE(0));
 * console.log(buf.readUInt32LE(0));
 * 
 * // 0x03042342
 * // 0x42230403</code></pre>
 * */
Buffer.prototype.readUInt32BE = function(offset, noAssert){
};

/**
 * <p>Reads a signed 8 bit integer from the buffer at the specified offset.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Works as <code>buffer.readUInt8</code>, except buffer contents are treated as two&#39;s
 * complement signed values.
 * 
 * </p>
 * */
Buffer.prototype.readInt8 = function(offset, noAssert){
};

/**
 * <p>Reads a signed 16 bit integer from the buffer at the specified offset with
 * specified endian format.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Works as <code>buffer.readUInt16%2F</code>, except buffer contents are treated as two&#39;s
 * complement signed values.
 * 
 * </p>
 * */
Buffer.prototype.readInt16LE = function(offset, noAssert){
};

/**
 * <p>Reads a signed 16 bit integer from the buffer at the specified offset with
 * specified endian format.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Works as <code>buffer.readUInt16%2F</code>, except buffer contents are treated as two&#39;s
 * complement signed values.
 * 
 * </p>
 * */
Buffer.prototype.readInt16BE = function(offset, noAssert){
};

/**
 * <p>Reads a signed 32 bit integer from the buffer at the specified offset with
 * specified endian format.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Works as <code>buffer.readUInt32%2F</code>, except buffer contents are treated as two&#39;s
 * complement signed values.
 * 
 * </p>
 * */
Buffer.prototype.readInt32LE = function(offset, noAssert){
};

/**
 * <p>Reads a signed 32 bit integer from the buffer at the specified offset with
 * specified endian format.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Works as <code>buffer.readUInt32%2F</code>, except buffer contents are treated as two&#39;s
 * complement signed values.
 * 
 * </p>
 * */
Buffer.prototype.readInt32BE = function(offset, noAssert){
};

/**
 * <p>Reads a 32 bit float from the buffer at the specified offset with specified
 * endian format.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * 
 * buf[0] = 0x00;
 * buf[1] = 0x00;
 * buf[2] = 0x80;
 * buf[3] = 0x3f;
 * 
 * console.log(buf.readFloatLE(0));
 * 
 * // 0x01</code></pre>
 * */
Buffer.prototype.readFloatLE = function(offset, noAssert){
};

/**
 * <p>Reads a 32 bit float from the buffer at the specified offset with specified
 * endian format.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * 
 * buf[0] = 0x00;
 * buf[1] = 0x00;
 * buf[2] = 0x80;
 * buf[3] = 0x3f;
 * 
 * console.log(buf.readFloatLE(0));
 * 
 * // 0x01</code></pre>
 * */
Buffer.prototype.readFloatBE = function(offset, noAssert){
};

/**
 * <p>Reads a 64 bit double from the buffer at the specified offset with specified
 * endian format.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(8);
 * 
 * buf[0] = 0x55;
 * buf[1] = 0x55;
 * buf[2] = 0x55;
 * buf[3] = 0x55;
 * buf[4] = 0x55;
 * buf[5] = 0x55;
 * buf[6] = 0xd5;
 * buf[7] = 0x3f;
 * 
 * console.log(buf.readDoubleLE(0));
 * 
 * // 0.3333333333333333</code></pre>
 * */
Buffer.prototype.readDoubleLE = function(offset, noAssert){
};

/**
 * <p>Reads a 64 bit double from the buffer at the specified offset with specified
 * endian format.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>
 * may be beyond the end of the buffer. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(8);
 * 
 * buf[0] = 0x55;
 * buf[1] = 0x55;
 * buf[2] = 0x55;
 * buf[3] = 0x55;
 * buf[4] = 0x55;
 * buf[5] = 0x55;
 * buf[6] = 0xd5;
 * buf[7] = 0x3f;
 * 
 * console.log(buf.readDoubleLE(0));
 * 
 * // 0.3333333333333333</code></pre>
 * */
Buffer.prototype.readDoubleBE = function(offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset. Note, <code>value</code> must be a
 * valid unsigned 8 bit integer.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * buf.writeUInt8(0x3, 0);
 * buf.writeUInt8(0x4, 1);
 * buf.writeUInt8(0x23, 2);
 * buf.writeUInt8(0x42, 3);
 * 
 * console.log(buf);
 * 
 * // &lt;Buffer 03 04 23 42&gt;</code></pre>
 * */
Buffer.prototype.writeUInt8 = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset with specified endian
 * format. Note, <code>value</code> must be a valid unsigned 16 bit integer.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * buf.writeUInt16BE(0xdead, 0);
 * buf.writeUInt16BE(0xbeef, 2);
 * 
 * console.log(buf);
 * 
 * buf.writeUInt16LE(0xdead, 0);
 * buf.writeUInt16LE(0xbeef, 2);
 * 
 * console.log(buf);
 * 
 * // &lt;Buffer de ad be ef&gt;
 * // &lt;Buffer ad de ef be&gt;</code></pre>
 * */
Buffer.prototype.writeUInt16LE = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset with specified endian
 * format. Note, <code>value</code> must be a valid unsigned 16 bit integer.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * buf.writeUInt16BE(0xdead, 0);
 * buf.writeUInt16BE(0xbeef, 2);
 * 
 * console.log(buf);
 * 
 * buf.writeUInt16LE(0xdead, 0);
 * buf.writeUInt16LE(0xbeef, 2);
 * 
 * console.log(buf);
 * 
 * // &lt;Buffer de ad be ef&gt;
 * // &lt;Buffer ad de ef be&gt;</code></pre>
 * */
Buffer.prototype.writeUInt16BE = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset with specified endian
 * format. Note, <code>value</code> must be a valid unsigned 32 bit integer.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * buf.writeUInt32BE(0xfeedface, 0);
 * 
 * console.log(buf);
 * 
 * buf.writeUInt32LE(0xfeedface, 0);
 * 
 * console.log(buf);
 * 
 * // &lt;Buffer fe ed fa ce&gt;
 * // &lt;Buffer ce fa ed fe&gt;</code></pre>
 * */
Buffer.prototype.writeUInt32LE = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset with specified endian
 * format. Note, <code>value</code> must be a valid unsigned 32 bit integer.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * buf.writeUInt32BE(0xfeedface, 0);
 * 
 * console.log(buf);
 * 
 * buf.writeUInt32LE(0xfeedface, 0);
 * 
 * console.log(buf);
 * 
 * // &lt;Buffer fe ed fa ce&gt;
 * // &lt;Buffer ce fa ed fe&gt;</code></pre>
 * */
Buffer.prototype.writeUInt32BE = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset. Note, <code>value</code> must be a
 * valid signed 8 bit integer.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Works as <code>buffer.writeUInt8</code>, except value is written out as a two&#39;s complement
 * signed integer into <code>buffer</code>.
 * 
 * </p>
 * */
Buffer.prototype.writeInt8 = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset with specified endian
 * format. Note, <code>value</code> must be a valid signed 16 bit integer.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Works as <code>buffer.writeUInt16%2F</code>, except value is written out as a two&#39;s
 * complement signed integer into <code>buffer</code>.
 * 
 * </p>
 * */
Buffer.prototype.writeInt16LE = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset with specified endian
 * format. Note, <code>value</code> must be a valid signed 16 bit integer.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Works as <code>buffer.writeUInt16%2F</code>, except value is written out as a two&#39;s
 * complement signed integer into <code>buffer</code>.
 * 
 * </p>
 * */
Buffer.prototype.writeInt16BE = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset with specified endian
 * format. Note, <code>value</code> must be a valid signed 32 bit integer.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Works as <code>buffer.writeUInt32%2F</code>, except value is written out as a two&#39;s
 * complement signed integer into <code>buffer</code>.
 * 
 * </p>
 * */
Buffer.prototype.writeInt32LE = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset with specified endian
 * format. Note, <code>value</code> must be a valid signed 32 bit integer.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Works as <code>buffer.writeUInt32%2F</code>, except value is written out as a two&#39;s
 * complement signed integer into <code>buffer</code>.
 * 
 * </p>
 * */
Buffer.prototype.writeInt32BE = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset with specified endian
 * format. Note, behavior is unspecified if <code>value</code> is not a 32 bit float.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * buf.writeFloatBE(0xcafebabe, 0);
 * 
 * console.log(buf);
 * 
 * buf.writeFloatLE(0xcafebabe, 0);
 * 
 * console.log(buf);
 * 
 * // &lt;Buffer 4f 4a fe bb&gt;
 * // &lt;Buffer bb fe 4a 4f&gt;</code></pre>
 * */
Buffer.prototype.writeFloatLE = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset with specified endian
 * format. Note, behavior is unspecified if <code>value</code> is not a 32 bit float.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(4);
 * buf.writeFloatBE(0xcafebabe, 0);
 * 
 * console.log(buf);
 * 
 * buf.writeFloatLE(0xcafebabe, 0);
 * 
 * console.log(buf);
 * 
 * // &lt;Buffer 4f 4a fe bb&gt;
 * // &lt;Buffer bb fe 4a 4f&gt;</code></pre>
 * */
Buffer.prototype.writeFloatBE = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset with specified endian
 * format. Note, <code>value</code> must be a valid 64 bit double.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(8);
 * buf.writeDoubleBE(0xdeadbeefcafebabe, 0);
 * 
 * console.log(buf);
 * 
 * buf.writeDoubleLE(0xdeadbeefcafebabe, 0);
 * 
 * console.log(buf);
 * 
 * // &lt;Buffer 43 eb d5 b7 dd f9 5f d7&gt;
 * // &lt;Buffer d7 5f f9 dd b7 d5 eb 43&gt;</code></pre>
 * */
Buffer.prototype.writeDoubleLE = function(value, offset, noAssert){
};

/**
 * <p>Writes <code>value</code> to the buffer at the specified offset with specified endian
 * format. Note, <code>value</code> must be a valid 64 bit double.
 * 
 * </p>
 * <p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means
 * that <code>value</code> may be too large for the specific function and <code>offset</code> may be
 * beyond the end of the buffer leading to the values being silently dropped. This
 * should not be used unless you are certain of correctness. Defaults to <code>false</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var buf = new Buffer(8);
 * buf.writeDoubleBE(0xdeadbeefcafebabe, 0);
 * 
 * console.log(buf);
 * 
 * buf.writeDoubleLE(0xdeadbeefcafebabe, 0);
 * 
 * console.log(buf);
 * 
 * // &lt;Buffer 43 eb d5 b7 dd f9 5f d7&gt;
 * // &lt;Buffer d7 5f f9 dd b7 d5 eb 43&gt;</code></pre>
 * */
Buffer.prototype.writeDoubleBE = function(value, offset, noAssert){
};

/**
 * <p>Fills the buffer with the specified value. If the <code>offset</code> (defaults to <code>0</code>)
 * and <code>end</code> (defaults to <code>buffer.length</code>) are not given it will fill the entire
 * buffer.
 * 
 * </p>
 * <pre><code>var b = new Buffer(50);
 * b.fill(&quot;h&quot;);</code></pre>
 * */
Buffer.prototype.fill = function(value, offset, end){
};
