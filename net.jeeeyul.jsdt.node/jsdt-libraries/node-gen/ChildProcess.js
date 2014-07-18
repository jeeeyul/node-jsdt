/**
 * @constructor
 */
ChildProcess = function(){
}

/**
 * <p>Send a signal to the child process. If no argument is given, the process will
 * be sent <code>&#39;SIGTERM&#39;</code>. See <code>signal(7)</code> for a list of available signals.
 * 
 * </p>
 * <pre><code>var spawn = require(&#39;child_process&#39;).spawn,
 *     grep  = spawn(&#39;grep&#39;, [&#39;ssh&#39;]);
 * 
 * grep.on(&#39;close&#39;, function (code, signal) {
 *   console.log(&#39;child process terminated due to receipt of signal &#39;+signal);
 * });
 * 
 * // send SIGHUP to process
 * grep.kill(&#39;SIGHUP&#39;);</code></pre>
 * <p>May emit an <code>&#39;error&#39;</code> event when the signal cannot be delivered. Sending a
 * signal to a child process that has already exited is not an error but may
 * have unforeseen consequences: if the PID (the process ID) has been reassigned
 * to another process, the signal will be delivered to that process instead.
 * What happens next is anyone&#39;s guess.
 * 
 * </p>
 * <p>Note that while the function is called <code>kill</code>, the signal delivered to the
 * child process may not actually kill it.  <code>kill</code> really just sends a signal
 * to a process.
 * 
 * </p>
 * <p>See <code>kill(2)</code>
 * 
 * </p>
 * */
ChildProcess.prototype.kill = function(signal){
};

/**
 * <p>When using <code>child_process.fork()</code> you can write to the child using
 * <code>child.send(message, [sendHandle])</code> and messages are received by
 * a <code>&#39;message&#39;</code> event on the child.
 * 
 * </p>
 * <p>For example:
 * 
 * </p>
 * <pre><code>var cp = require(&#39;child_process&#39;);
 * 
 * var n = cp.fork(__dirname + &#39;/sub.js&#39;);
 * 
 * n.on(&#39;message&#39;, function(m) {
 *   console.log(&#39;PARENT got message:&#39;, m);
 * });
 * 
 * n.send({ hello: &#39;world&#39; });</code></pre>
 * <p>And then the child script, <code>&#39;sub.js&#39;</code> might look like this:
 * 
 * </p>
 * <pre><code>process.on(&#39;message&#39;, function(m) {
 *   console.log(&#39;CHILD got message:&#39;, m);
 * });
 * 
 * process.send({ foo: &#39;bar&#39; });</code></pre>
 * <p>In the child the <code>process</code> object will have a <code>send()</code> method, and <code>process</code>
 * will emit objects each time it receives a message on its channel.
 * 
 * </p>
 * <p>Please note that the <code>send()</code> method on both the parent and child are
 * synchronous - sending large chunks of data is not advised (pipes can be used
 * instead, see
 * <a href="#child_process_child_process_spawn_command_args_options"><code>child_process.spawn</code></a>).
 * 
 * </p>
 * <p>There is a special case when sending a <code>{cmd: &#39;NODE_foo&#39;}</code> message. All messages
 * containing a <code>NODE_</code> prefix in its <code>cmd</code> property will not be emitted in
 * the <code>message</code> event, since they are internal messages used by node core.
 * Messages containing the prefix are emitted in the <code>internalMessage</code> event, you
 * should by all means avoid using this feature, it is subject to change without notice.
 * 
 * </p>
 * <p>The <code>sendHandle</code> option to <code>child.send()</code> is for sending a TCP server or
 * socket object to another process. The child will receive the object as its
 * second argument to the <code>message</code> event.
 * 
 * </p>
 * <p>Emits an <code>&#39;error&#39;</code> event if the message cannot be sent, for example because
 * the child process has already exited.
 * 
 * </p>
 * <h4>Example: sending server object</h4>
 * <p>Here is an example of sending a server:
 * 
 * </p>
 * <pre><code>var child = require(&#39;child_process&#39;).fork(&#39;child.js&#39;);
 * 
 * // Open up the server object and send the handle.
 * var server = require(&#39;net&#39;).createServer();
 * server.on(&#39;connection&#39;, function (socket) {
 *   socket.end(&#39;handled by parent&#39;);
 * });
 * server.listen(1337, function() {
 *   child.send(&#39;server&#39;, server);
 * });</code></pre>
 * <p>And the child would the receive the server object as:
 * 
 * </p>
 * <pre><code>process.on(&#39;message&#39;, function(m, server) {
 *   if (m === &#39;server&#39;) {
 *     server.on(&#39;connection&#39;, function (socket) {
 *       socket.end(&#39;handled by child&#39;);
 *     });
 *   }
 * });</code></pre>
 * <p>Note that the server is now shared between the parent and child, this means
 * that some connections will be handled by the parent and some by the child.
 * 
 * </p>
 * <p>For <code>dgram</code> servers the workflow is exactly the same.  Here you listen on
 * a <code>message</code> event instead of <code>connection</code> and use <code>server.bind</code> instead of
 * <code>server.listen</code>.  (Currently only supported on UNIX platforms.)
 * 
 * </p>
 * <h4>Example: sending socket object</h4>
 * <p>Here is an example of sending a socket. It will spawn two children and handle
 * connections with the remote address <code>74.125.127.100</code> as VIP by sending the
 * socket to a &quot;special&quot; child process. Other sockets will go to a &quot;normal&quot; process.
 * 
 * </p>
 * <pre><code>var normal = require(&#39;child_process&#39;).fork(&#39;child.js&#39;, [&#39;normal&#39;]);
 * var special = require(&#39;child_process&#39;).fork(&#39;child.js&#39;, [&#39;special&#39;]);
 * 
 * // Open up the server and send sockets to child
 * var server = require(&#39;net&#39;).createServer();
 * server.on(&#39;connection&#39;, function (socket) {
 * 
 *   // if this is a VIP
 *   if (socket.remoteAddress === &#39;74.125.127.100&#39;) {
 *     special.send(&#39;socket&#39;, socket);
 *     return;
 *   }
 *   // just the usual dudes
 *   normal.send(&#39;socket&#39;, socket);
 * });
 * server.listen(1337);</code></pre>
 * <p>The <code>child.js</code> could look like this:
 * 
 * </p>
 * <pre><code>process.on(&#39;message&#39;, function(m, socket) {
 *   if (m === &#39;socket&#39;) {
 *     socket.end(&#39;You were handled as a &#39; + process.argv[2] + &#39; person&#39;);
 *   }
 * });</code></pre>
 * <p>Note that once a single socket has been sent to a child the parent can no
 * longer keep track of when the socket is destroyed. To indicate this condition
 * the <code>.connections</code> property becomes <code>null</code>.
 * It is also recommended not to use <code>.maxConnections</code> in this condition.
 * 
 * </p>
 * */
ChildProcess.prototype.send = function(message, sendHandle){
};

/**
 * <p>Close the IPC channel between parent and child, allowing the child to exit
 * gracefully once there are no other connections keeping it alive. After calling
 * this method the <code>.connected</code> flag will be set to <code>false</code> in both the parent and
 * child, and it is no longer possible to send messages.
 * 
 * </p>
 * <p>The &#39;disconnect&#39; event will be emitted when there are no messages in the process
 * of being received, most likely immediately.
 * 
 * </p>
 * <p>Note that you can also call <code>process.disconnect()</code> in the child process when the
 * child process has any open IPC channels with the parent (i.e <code>fork()</code>).
 * 
 * </p>
 * */
ChildProcess.prototype.disconnect = function(){
};
