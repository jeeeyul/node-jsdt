/**
 * @constructor
 */
_NPM_os = function(){
}

/**
 * <p>Returns the operating system&#39;s default directory for temp files.
 * 
 * </p>
 * */
_NPM_os.prototype.tmpdir = function(){
};

/**
 * <p>Returns the endianness of the CPU. Possible values are <code>&quot;BE&quot;</code> or <code>&quot;LE&quot;</code>.
 * 
 * </p>
 * */
_NPM_os.prototype.endianness = function(){
};

/**
 * <p>Returns the hostname of the operating system.
 * 
 * </p>
 * */
_NPM_os.prototype.hostname = function(){
};

/**
 * <p>Returns the operating system name.
 * 
 * </p>
 * */
_NPM_os.prototype.type = function(){
};

/**
 * <p>Returns the operating system platform.
 * 
 * </p>
 * */
_NPM_os.prototype.platform = function(){
};

/**
 * <p>Returns the operating system CPU architecture.
 * 
 * </p>
 * */
_NPM_os.prototype.arch = function(){
};

/**
 * <p>Returns the operating system release.
 * 
 * </p>
 * */
_NPM_os.prototype.release = function(){
};

/**
 * <p>Returns the system uptime in seconds.
 * 
 * </p>
 * */
_NPM_os.prototype.uptime = function(){
};

/**
 * <p>Returns an array containing the 1, 5, and 15 minute load averages.
 * 
 * </p>
 * <p>The load average is a measure of system activity, calculated by the operating
 * system and expressed as a fractional number.  As a rule of thumb, the load
 * average should ideally be less than the number of logical CPUs in the system.
 * 
 * </p>
 * <p>The load average is a very UNIX-y concept; there is no real equivalent on
 * Windows platforms.  That is why this function always returns <code>[0, 0, 0]</code> on
 * Windows.
 * 
 * </p>
 * */
_NPM_os.prototype.loadavg = function(){
};

/**
 * <p>Returns the total amount of system memory in bytes.
 * 
 * </p>
 * */
_NPM_os.prototype.totalmem = function(){
};

/**
 * <p>Returns the amount of free system memory in bytes.
 * 
 * </p>
 * */
_NPM_os.prototype.freemem = function(){
};

/**
 * <p>Returns an array of objects containing information about each CPU/core
 * installed: model, speed (in MHz), and times (an object containing the number of
 * milliseconds the CPU/core spent in: user, nice, sys, idle, and irq).
 * 
 * </p>
 * <p>Example inspection of os.cpus:
 * 
 * </p>
 * <pre><code>[ { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,
 *     speed: 2926,
 *     times:
 *      { user: 252020,
 *        nice: 0,
 *        sys: 30340,
 *        idle: 1070356870,
 *        irq: 0 } },
 *   { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,
 *     speed: 2926,
 *     times:
 *      { user: 306960,
 *        nice: 0,
 *        sys: 26980,
 *        idle: 1071569080,
 *        irq: 0 } },
 *   { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,
 *     speed: 2926,
 *     times:
 *      { user: 248450,
 *        nice: 0,
 *        sys: 21750,
 *        idle: 1070919370,
 *        irq: 0 } },
 *   { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,
 *     speed: 2926,
 *     times:
 *      { user: 256880,
 *        nice: 0,
 *        sys: 19430,
 *        idle: 1070905480,
 *        irq: 20 } },
 *   { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,
 *     speed: 2926,
 *     times:
 *      { user: 511580,
 *        nice: 20,
 *        sys: 40900,
 *        idle: 1070842510,
 *        irq: 0 } },
 *   { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,
 *     speed: 2926,
 *     times:
 *      { user: 291660,
 *        nice: 0,
 *        sys: 34360,
 *        idle: 1070888000,
 *        irq: 10 } },
 *   { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,
 *     speed: 2926,
 *     times:
 *      { user: 308260,
 *        nice: 0,
 *        sys: 55410,
 *        idle: 1071129970,
 *        irq: 880 } },
 *   { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,
 *     speed: 2926,
 *     times:
 *      { user: 266450,
 *        nice: 1480,
 *        sys: 34920,
 *        idle: 1072572010,
 *        irq: 30 } } ]</code></pre>
 * */
_NPM_os.prototype.cpus = function(){
};

/**
 * <p>Get a list of network interfaces:
 * 
 * </p>
 * <pre><code>{ lo0: 
 *    [ { address: &#39;::1&#39;, family: &#39;IPv6&#39;, internal: true },
 *      { address: &#39;fe80::1&#39;, family: &#39;IPv6&#39;, internal: true },
 *      { address: &#39;127.0.0.1&#39;, family: &#39;IPv4&#39;, internal: true } ],
 *   en1: 
 *    [ { address: &#39;fe80::cabc:c8ff:feef:f996&#39;, family: &#39;IPv6&#39;,
 *        internal: false },
 *      { address: &#39;10.0.1.123&#39;, family: &#39;IPv4&#39;, internal: false } ],
 *   vmnet1: [ { address: &#39;10.99.99.254&#39;, family: &#39;IPv4&#39;, internal: false } ],
 *   vmnet8: [ { address: &#39;10.88.88.1&#39;, family: &#39;IPv4&#39;, internal: false } ],
 *   ppp0: [ { address: &#39;10.2.0.231&#39;, family: &#39;IPv4&#39;, internal: false } ] }</code></pre>
 * */
_NPM_os.prototype.networkInterfaces = function(){
};
