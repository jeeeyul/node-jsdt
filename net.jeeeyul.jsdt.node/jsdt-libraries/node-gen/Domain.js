/**
 * @constructor
 */
Domain = function(){
}

/**
 * <p>Run the supplied function in the context of the domain, implicitly
 * binding all event emitters, timers, and lowlevel requests that are
 * created in that context.
 * 
 * </p>
 * <p>This is the most basic way to use a domain.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var d = domain.create();
 * d.on(&#39;error&#39;, function(er) {
 *   console.error(&#39;Caught error!&#39;, er);
 * });
 * d.run(function() {
 *   process.nextTick(function() {
 *     setTimeout(function() { // simulating some various async stuff
 *       fs.open(&#39;non-existent file&#39;, &#39;r&#39;, function(er, fd) {
 *         if (er) throw er;
 *         // proceed...
 *       });
 *     }, 100);
 *   });
 * });</code></pre>
 * <p>In this example, the <code>d.on(&#39;error&#39;)</code> handler will be triggered, rather
 * than crashing the program.
 * 
 * </p>
 * */
Domain.prototype.run = function(fn){
};

/**
 * <p>Explicitly adds an emitter to the domain.  If any event handlers called by
 * the emitter throw an error, or if the emitter emits an <code>error</code> event, it
 * will be routed to the domain&#39;s <code>error</code> event, just like with implicit
 * binding.
 * 
 * </p>
 * <p>This also works with timers that are returned from <code>setInterval</code> and
 * <code>setTimeout</code>.  If their callback function throws, it will be caught by
 * the domain &#39;error&#39; handler.
 * 
 * </p>
 * <p>If the Timer or EventEmitter was already bound to a domain, it is removed
 * from that one, and bound to this one instead.
 * 
 * </p>
 * */
Domain.prototype.add = function(emitter){
};

/**
 * <p>The opposite of <code>domain.add(emitter)</code>.  Removes domain handling from the
 * specified emitter.
 * 
 * </p>
 * */
Domain.prototype.remove = function(emitter){
};

/**
 * <p>The returned function will be a wrapper around the supplied callback
 * function.  When the returned function is called, any errors that are
 * thrown will be routed to the domain&#39;s <code>error</code> event.
 * 
 * </p>
 * <h4>Example</h4>
 * <pre><code>var d = domain.create();
 * 
 * function readSomeFile(filename, cb) {
 *   fs.readFile(filename, &#39;utf8&#39;, d.bind(function(er, data) {
 *     // if this throws, it will also be passed to the domain
 *     return cb(er, data ? JSON.parse(data) : null);
 *   }));
 * }
 * 
 * d.on(&#39;error&#39;, function(er) {
 *   // an error occurred somewhere.
 *   // if we throw it now, it will crash the program
 *   // with the normal line number and stack message.
 * });</code></pre>
 * */
Domain.prototype.bind = function(callback){
};

/**
 * <p>This method is almost identical to <code>domain.bind(callback)</code>.  However, in
 * addition to catching thrown errors, it will also intercept <code>Error</code>
 * objects sent as the first argument to the function.
 * 
 * </p>
 * <p>In this way, the common <code>if (er) return callback(er);</code> pattern can be replaced
 * with a single error handler in a single place.
 * 
 * </p>
 * <h4>Example</h4>
 * <pre><code>var d = domain.create();
 * 
 * function readSomeFile(filename, cb) {
 *   fs.readFile(filename, &#39;utf8&#39;, d.intercept(function(data) {
 *     // note, the first argument is never passed to the
 *     // callback since it is assumed to be the &#39;Error&#39; argument
 *     // and thus intercepted by the domain.
 * 
 *     // if this throws, it will also be passed to the domain
 *     // so the error-handling logic can be moved to the &#39;error&#39;
 *     // event on the domain instead of being repeated throughout
 *     // the program.
 *     return cb(null, JSON.parse(data));
 *   }));
 * }
 * 
 * d.on(&#39;error&#39;, function(er) {
 *   // an error occurred somewhere.
 *   // if we throw it now, it will crash the program
 *   // with the normal line number and stack message.
 * });</code></pre>
 * */
Domain.prototype.intercept = function(callback){
};

/**
 * <p>The <code>enter</code> method is plumbing used by the <code>run</code>, <code>bind</code>, and <code>intercept</code>
 * methods to set the active domain. It sets <code>domain.active</code> and <code>process.domain</code>
 * to the domain, and implicitly pushes the domain onto the domain stack managed
 * by the domain module (see <code>domain.exit()</code> for details on the domain stack). The
 * call to <code>enter</code> delimits the beginning of a chain of asynchronous calls and I/O
 * operations bound to a domain.
 * 
 * </p>
 * <p>Calling <code>enter</code> changes only the active domain, and does not alter the domain
 * itself. <code>Enter</code> and <code>exit</code> can be called an arbitrary number of times on a
 * single domain.
 * 
 * </p>
 * <p>If the domain on which <code>enter</code> is called has been disposed, <code>enter</code> will return
 * without setting the domain.
 * 
 * </p>
 * */
Domain.prototype.enter = function(){
};

/**
 * <p>The <code>exit</code> method exits the current domain, popping it off the domain stack.
 * Any time execution is going to switch to the context of a different chain of
 * asynchronous calls, it&#39;s important to ensure that the current domain is exited.
 * The call to <code>exit</code> delimits either the end of or an interruption to the chain
 * of asynchronous calls and I/O operations bound to a domain.
 * 
 * </p>
 * <p>If there are multiple, nested domains bound to the current execution context,
 * <code>exit</code> will exit any domains nested within this domain.
 * 
 * </p>
 * <p>Calling <code>exit</code> changes only the active domain, and does not alter the domain
 * itself. <code>Enter</code> and <code>exit</code> can be called an arbitrary number of times on a
 * single domain.
 * 
 * </p>
 * <p>If the domain on which <code>exit</code> is called has been disposed, <code>exit</code> will return
 * without exiting the domain.
 * 
 * </p>
 * */
Domain.prototype.exit = function(){
};

/**
 * <p>The dispose method destroys a domain, and makes a best effort attempt to
 * clean up any and all IO that is associated with the domain.  Streams are
 * aborted, ended, closed, and/or destroyed.  Timers are cleared.
 * Explicitly bound callbacks are no longer called.  Any error events that
 * are raised as a result of this are ignored.
 * 
 * </p>
 * <p>The intention of calling <code>dispose</code> is generally to prevent cascading
 * errors when a critical part of the Domain context is found to be in an
 * error state.
 * 
 * </p>
 * <p>Once the domain is disposed the <code>dispose</code> event will emit.
 * 
 * </p>
 * <p>Note that IO might still be performed.  However, to the highest degree
 * possible, once a domain is disposed, further errors from the emitters in
 * that set will be ignored.  So, even if some remaining actions are still
 * in flight, Node.js will not communicate further about them.
 * 
 * </p>
 * */
Domain.prototype.dispose = function(){
};
