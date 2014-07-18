/**
 * @constructor
 */
_NPM_querystring = function(){
}

/**
 * <p>Serialize an object to a query string.
 * Optionally override the default separator (<code>&#39;&amp;&#39;</code>) and assignment (<code>&#39;=&#39;</code>)
 * characters.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>querystring.stringify({ foo: &#39;bar&#39;, baz: [&#39;qux&#39;, &#39;quux&#39;], corge: &#39;&#39; })
 * // returns
 * &#39;foo=bar&amp;baz=qux&amp;baz=quux&amp;corge=&#39;
 * 
 * querystring.stringify({foo: &#39;bar&#39;, baz: &#39;qux&#39;}, &#39;;&#39;, &#39;:&#39;)
 * // returns
 * &#39;foo:bar;baz:qux&#39;</code></pre>
 * */
_NPM_querystring.prototype.stringify = function(obj, sep, eq){
};

/**
 * <p>Deserialize a query string to an object.
 * Optionally override the default separator (<code>&#39;&amp;&#39;</code>) and assignment (<code>&#39;=&#39;</code>)
 * characters.
 * 
 * </p>
 * <p>Options object may contain <code>maxKeys</code> property (equal to 1000 by default), it&#39;ll
 * be used to limit processed keys. Set it to 0 to remove key count limitation.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>querystring.parse(&#39;foo=bar&amp;baz=qux&amp;baz=quux&amp;corge&#39;)
 * // returns
 * { foo: &#39;bar&#39;, baz: [&#39;qux&#39;, &#39;quux&#39;], corge: &#39;&#39; }</code></pre>
 * */
_NPM_querystring.prototype.parse = function(str, sep, eq, options){
};
