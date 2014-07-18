/**
 * @constructor
 */
_NPM_net = function(){
}

/**
 * <p>Creates a new TCP server. The <code>connectionListener</code> argument is
 * automatically set as a listener for the [&#39;connection&#39;][] event.
 * 
 * </p>
 * <p><code>options</code> is an object with the following defaults:
 * 
 * </p>
 * <pre><code>{ allowHalfOpen: false
 * }</code></pre>
 * <p>If <code>allowHalfOpen</code> is <code>true</code>, then the socket won&#39;t automatically send a FIN
 * packet when the other end of the socket sends a FIN packet. The socket becomes
 * non-readable, but still writable. You should call the <code>end()</code> method explicitly.
 * See [&#39;end&#39;][] event for more information.
 * 
 * </p>
 * <p>Here is an example of an echo server which listens for connections
 * on port 8124:
 * 
 * </p>
 * <pre><code>var net = require(&#39;net&#39;);
 * var server = net.createServer(function(c) { //&#39;connection&#39; listener
 *   console.log(&#39;server connected&#39;);
 *   c.on(&#39;end&#39;, function() {
 *     console.log(&#39;server disconnected&#39;);
 *   });
 *   c.write(&#39;hello\r\n&#39;);
 *   c.pipe(c);
 * });
 * server.listen(8124, function() { //&#39;listening&#39; listener
 *   console.log(&#39;server bound&#39;);
 * });</code></pre>
 * <p>Test this by using <code>telnet</code>:
 * 
 * </p>
 * <pre><code>telnet localhost 8124</code></pre>
 * <p>To listen on the socket <code>/tmp/echo.sock</code> the third line from the last would
 * just be changed to
 * 
 * </p>
 * <pre><code>server.listen(&#39;/tmp/echo.sock&#39;, function() { //&#39;listening&#39; listener</code></pre>
 * <p>Use <code>nc</code> to connect to a UNIX domain socket server:
 * 
 * </p>
 * <pre><code>nc -U /tmp/echo.sock</code></pre>
 * */
_NPM_net.prototype.createServer = function(options, connectionListener){
};

/**
 * <p>Constructs a new socket object and opens the socket to the given location.
 * When the socket is established, the [&#39;connect&#39;][] event will be emitted.
 * 
 * </p>
 * <p>For TCP sockets, <code>options</code> argument should be an object which specifies:
 * 
 * </p>
 * <ul>
 * <li><p><code>port</code>: Port the client should connect to (Required).</p>
 * </li>
 * <li><p><code>host</code>: Host the client should connect to. Defaults to <code>&#39;localhost&#39;</code>.</p>
 * </li>
 * <li><p><code>localAddress</code>: Local interface to bind to for network connections.</p>
 * </li>
 * </ul>
 * <p>For UNIX domain sockets, <code>options</code> argument should be an object which specifies:
 * 
 * </p>
 * <ul>
 * <li><code>path</code>: Path the client should connect to (Required).</li>
 * </ul>
 * <p>Common options are:
 * 
 * </p>
 * <ul>
 * <li><code>allowHalfOpen</code>: if <code>true</code>, the socket won&#39;t automatically send
 * a FIN packet when the other end of the socket sends a FIN packet.
 * Defaults to <code>false</code>.  See [&#39;end&#39;][] event for more information.</li>
 * </ul>
 * <p>The <code>connectListener</code> parameter will be added as an listener for the
 * [&#39;connect&#39;][] event.
 * 
 * </p>
 * <p>Here is an example of a client of echo server as described previously:
 * 
 * </p>
 * <pre><code>var net = require(&#39;net&#39;);
 * var client = net.connect({port: 8124},
 *     function() { //&#39;connect&#39; listener
 *   console.log(&#39;client connected&#39;);
 *   client.write(&#39;world!\r\n&#39;);
 * });
 * client.on(&#39;data&#39;, function(data) {
 *   console.log(data.toString());
 *   client.end();
 * });
 * client.on(&#39;end&#39;, function() {
 *   console.log(&#39;client disconnected&#39;);
 * });</code></pre>
 * <p>To connect on the socket <code>/tmp/echo.sock</code> the second line would just be
 * changed to
 * 
 * </p>
 * <pre><code>var client = net.connect({path: &#39;/tmp/echo.sock&#39;});</code></pre>
 * */
_NPM_net.prototype.connect = function(options, connectionListener){
};

/**
 * <p>Constructs a new socket object and opens the socket to the given location.
 * When the socket is established, the [&#39;connect&#39;][] event will be emitted.
 * 
 * </p>
 * <p>For TCP sockets, <code>options</code> argument should be an object which specifies:
 * 
 * </p>
 * <ul>
 * <li><p><code>port</code>: Port the client should connect to (Required).</p>
 * </li>
 * <li><p><code>host</code>: Host the client should connect to. Defaults to <code>&#39;localhost&#39;</code>.</p>
 * </li>
 * <li><p><code>localAddress</code>: Local interface to bind to for network connections.</p>
 * </li>
 * </ul>
 * <p>For UNIX domain sockets, <code>options</code> argument should be an object which specifies:
 * 
 * </p>
 * <ul>
 * <li><code>path</code>: Path the client should connect to (Required).</li>
 * </ul>
 * <p>Common options are:
 * 
 * </p>
 * <ul>
 * <li><code>allowHalfOpen</code>: if <code>true</code>, the socket won&#39;t automatically send
 * a FIN packet when the other end of the socket sends a FIN packet.
 * Defaults to <code>false</code>.  See [&#39;end&#39;][] event for more information.</li>
 * </ul>
 * <p>The <code>connectListener</code> parameter will be added as an listener for the
 * [&#39;connect&#39;][] event.
 * 
 * </p>
 * <p>Here is an example of a client of echo server as described previously:
 * 
 * </p>
 * <pre><code>var net = require(&#39;net&#39;);
 * var client = net.connect({port: 8124},
 *     function() { //&#39;connect&#39; listener
 *   console.log(&#39;client connected&#39;);
 *   client.write(&#39;world!\r\n&#39;);
 * });
 * client.on(&#39;data&#39;, function(data) {
 *   console.log(data.toString());
 *   client.end();
 * });
 * client.on(&#39;end&#39;, function() {
 *   console.log(&#39;client disconnected&#39;);
 * });</code></pre>
 * <p>To connect on the socket <code>/tmp/echo.sock</code> the second line would just be
 * changed to
 * 
 * </p>
 * <pre><code>var client = net.connect({path: &#39;/tmp/echo.sock&#39;});</code></pre>
 * */
_NPM_net.prototype.createConnection = function(options, connectionListener){
};

/**
 * <p>Creates a TCP connection to <code>port</code> on <code>host</code>. If <code>host</code> is omitted,
 * <code>&#39;localhost&#39;</code> will be assumed.
 * The <code>connectListener</code> parameter will be added as an listener for the
 * [&#39;connect&#39;][] event.
 * 
 * </p>
 * */
_NPM_net.prototype.connect = function(port, host, connectListener){
};

/**
 * <p>Creates a TCP connection to <code>port</code> on <code>host</code>. If <code>host</code> is omitted,
 * <code>&#39;localhost&#39;</code> will be assumed.
 * The <code>connectListener</code> parameter will be added as an listener for the
 * [&#39;connect&#39;][] event.
 * 
 * </p>
 * */
_NPM_net.prototype.createConnection = function(port, host, connectListener){
};

/**
 * <p>Creates unix socket connection to <code>path</code>.
 * The <code>connectListener</code> parameter will be added as an listener for the
 * [&#39;connect&#39;][] event.
 * 
 * </p>
 * */
_NPM_net.prototype.connect = function(path, connectListener){
};

/**
 * <p>Creates unix socket connection to <code>path</code>.
 * The <code>connectListener</code> parameter will be added as an listener for the
 * [&#39;connect&#39;][] event.
 * 
 * </p>
 * */
_NPM_net.prototype.createConnection = function(path, connectListener){
};

/**
 * <p>Tests if input is an IP address. Returns 0 for invalid strings,
 * returns 4 for IP version 4 addresses, and returns 6 for IP version 6 addresses.
 * 
 * 
 * </p>
 * */
_NPM_net.prototype.isIP = function(input){
};

/**
 * <p>Returns true if input is a version 4 IP address, otherwise returns false.
 * 
 * 
 * </p>
 * */
_NPM_net.prototype.isIPv4 = function(input){
};

/**
 * <p>Returns true if input is a version 6 IP address, otherwise returns false.
 * 
 * </p>
 * */
_NPM_net.prototype.isIPv6 = function(input){
};
