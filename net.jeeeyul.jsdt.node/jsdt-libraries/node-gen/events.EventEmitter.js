/**
 * @constructor
 */
events.EventEmitter = function(){
}

/**
 * <p>Adds a listener to the end of the listeners array for the specified event.
 * 
 * </p>
 * <pre><code>server.on(&#39;connection&#39;, function (stream) {
 *   console.log(&#39;someone connected!&#39;);
 * });</code></pre>
 * <p>Returns emitter, so calls can be chained.
 * 
 * </p>
 * */
events.EventEmitter.prototype.addListener = function(event, listener){
};

/**
 * <p>Adds a listener to the end of the listeners array for the specified event.
 * 
 * </p>
 * <pre><code>server.on(&#39;connection&#39;, function (stream) {
 *   console.log(&#39;someone connected!&#39;);
 * });</code></pre>
 * <p>Returns emitter, so calls can be chained.
 * 
 * </p>
 * */
events.EventEmitter.prototype.on = function(event, listener){
};

/**
 * <p>Adds a <strong>one time</strong> listener for the event. This listener is
 * invoked only the next time the event is fired, after which
 * it is removed.
 * 
 * </p>
 * <pre><code>server.once(&#39;connection&#39;, function (stream) {
 *   console.log(&#39;Ah, we have our first user!&#39;);
 * });</code></pre>
 * <p>Returns emitter, so calls can be chained.
 * 
 * </p>
 * */
events.EventEmitter.prototype.once = function(event, listener){
};

/**
 * <p>Remove a listener from the listener array for the specified event.
 * <strong>Caution</strong>: changes array indices in the listener array behind the listener.
 * 
 * </p>
 * <pre><code>var callback = function(stream) {
 *   console.log(&#39;someone connected!&#39;);
 * };
 * server.on(&#39;connection&#39;, callback);
 * // ...
 * server.removeListener(&#39;connection&#39;, callback);</code></pre>
 * <p>Returns emitter, so calls can be chained.
 * 
 * </p>
 * */
events.EventEmitter.prototype.removeListener = function(event, listener){
};

/**
 * <p>Removes all listeners, or those of the specified event. It&#39;s not a good idea to
 * remove listeners that were added elsewhere in the code, especially when it&#39;s on
 * an emitter that you didn&#39;t create (e.g. sockets or file streams).
 * 
 * </p>
 * <p>Returns emitter, so calls can be chained.
 * 
 * </p>
 * */
events.EventEmitter.prototype.removeAllListeners = function(event){
};

/**
 * <p>By default EventEmitters will print a warning if more than 10 listeners are
 * added for a particular event. This is a useful default which helps finding memory leaks.
 * Obviously not all Emitters should be limited to 10. This function allows
 * that to be increased. Set to zero for unlimited.
 * 
 * 
 * </p>
 * */
events.EventEmitter.prototype.setMaxListeners = function(n){
};

/**
 * <p>Returns an array of listeners for the specified event.
 * 
 * </p>
 * <pre><code>server.on(&#39;connection&#39;, function (stream) {
 *   console.log(&#39;someone connected!&#39;);
 * });
 * console.log(util.inspect(server.listeners(&#39;connection&#39;))); // [ [Function] ]</code></pre>
 * */
events.EventEmitter.prototype.listeners = function(event){
};

/**
 * <p>Execute each of the listeners in order with the supplied arguments.
 * 
 * </p>
 * <p>Returns <code>true</code> if event had listeners, <code>false</code> otherwise.
 * 
 * 
 * </p>
 * */
events.EventEmitter.prototype.emit = function(event, arg1, arg2){
};
