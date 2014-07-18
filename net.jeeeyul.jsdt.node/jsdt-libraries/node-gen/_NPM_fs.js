/**
 * @constructor
 */
_NPM_fs = function(){
}

/**
 * <p>Asynchronous rename(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.rename = function(oldPath, newPath, callback){
};

/**
 * <p>Synchronous rename(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.renameSync = function(oldPath, newPath){
};

/**
 * <p>Asynchronous ftruncate(2). No arguments other than a possible exception are
 * given to the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.ftruncate = function(fd, len, callback){
};

/**
 * <p>Synchronous ftruncate(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.ftruncateSync = function(fd, len){
};

/**
 * <p>Asynchronous truncate(2). No arguments other than a possible exception are
 * given to the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.truncate = function(path, len, callback){
};

/**
 * <p>Synchronous truncate(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.truncateSync = function(path, len){
};

/**
 * <p>Asynchronous chown(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.chown = function(path, uid, gid, callback){
};

/**
 * <p>Synchronous chown(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.chownSync = function(path, uid, gid){
};

/**
 * <p>Asynchronous fchown(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.fchown = function(fd, uid, gid, callback){
};

/**
 * <p>Synchronous fchown(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.fchownSync = function(fd, uid, gid){
};

/**
 * <p>Asynchronous lchown(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.lchown = function(path, uid, gid, callback){
};

/**
 * <p>Synchronous lchown(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.lchownSync = function(path, uid, gid){
};

/**
 * <p>Asynchronous chmod(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.chmod = function(path, mode, callback){
};

/**
 * <p>Synchronous chmod(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.chmodSync = function(path, mode){
};

/**
 * <p>Asynchronous fchmod(2). No arguments other than a possible exception
 * are given to the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.fchmod = function(fd, mode, callback){
};

/**
 * <p>Synchronous fchmod(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.fchmodSync = function(fd, mode){
};

/**
 * <p>Asynchronous lchmod(2). No arguments other than a possible exception
 * are given to the completion callback.
 * 
 * </p>
 * <p>Only available on Mac OS X.
 * 
 * </p>
 * */
_NPM_fs.prototype.lchmod = function(path, mode, callback){
};

/**
 * <p>Synchronous lchmod(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.lchmodSync = function(path, mode){
};

/**
 * <p>Asynchronous stat(2). The callback gets two arguments <code>(err, stats)</code> where
 * <code>stats</code> is a <a href="#fs_class_fs_stats">fs.Stats</a> object.  See the <a href="#fs_class_fs_stats">fs.Stats</a>
 * section below for more information.
 * 
 * </p>
 * */
_NPM_fs.prototype.stat = function(path, callback){
};

/**
 * <p>Asynchronous lstat(2). The callback gets two arguments <code>(err, stats)</code> where
 * <code>stats</code> is a <code>fs.Stats</code> object. <code>lstat()</code> is identical to <code>stat()</code>, except that if
 * <code>path</code> is a symbolic link, then the link itself is stat-ed, not the file that it
 * refers to.
 * 
 * </p>
 * */
_NPM_fs.prototype.lstat = function(path, callback){
};

/**
 * <p>Asynchronous fstat(2). The callback gets two arguments <code>(err, stats)</code> where
 * <code>stats</code> is a <code>fs.Stats</code> object. <code>fstat()</code> is identical to <code>stat()</code>, except that
 * the file to be stat-ed is specified by the file descriptor <code>fd</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.fstat = function(fd, callback){
};

/**
 * <p>Synchronous stat(2). Returns an instance of <code>fs.Stats</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.statSync = function(path){
};

/**
 * <p>Synchronous lstat(2). Returns an instance of <code>fs.Stats</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.lstatSync = function(path){
};

/**
 * <p>Synchronous fstat(2). Returns an instance of <code>fs.Stats</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.fstatSync = function(fd){
};

/**
 * <p>Asynchronous link(2). No arguments other than a possible exception are given to
 * the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.link = function(srcpath, dstpath, callback){
};

/**
 * <p>Synchronous link(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.linkSync = function(srcpath, dstpath){
};

/**
 * <p>Asynchronous symlink(2). No arguments other than a possible exception are given
 * to the completion callback.
 * The <code>type</code> argument can be set to <code>&#39;dir&#39;</code>, <code>&#39;file&#39;</code>, or <code>&#39;junction&#39;</code> (default
 * is <code>&#39;file&#39;</code>) and is only available on Windows (ignored on other platforms).
 * Note that Windows junction points require the destination path to be absolute.  When using
 * <code>&#39;junction&#39;</code>, the <code>destination</code> argument will automatically be normalized to absolute path.
 * 
 * </p>
 * */
_NPM_fs.prototype.symlink = function(srcpath, dstpath, type, callback){
};

/**
 * <p>Synchronous symlink(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.symlinkSync = function(srcpath, dstpath, type){
};

/**
 * <p>Asynchronous readlink(2). The callback gets two arguments <code>(err,
 * linkString)</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.readlink = function(path, callback){
};

/**
 * <p>Synchronous readlink(2). Returns the symbolic link&#39;s string value.
 * 
 * </p>
 * */
_NPM_fs.prototype.readlinkSync = function(path){
};

/**
 * <p>Asynchronous realpath(2). The <code>callback</code> gets two arguments <code>(err,
 * resolvedPath)</code>. May use <code>process.cwd</code> to resolve relative paths. <code>cache</code> is an
 * object literal of mapped paths that can be used to force a specific path
 * resolution or avoid additional <code>fs.stat</code> calls for known real paths.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>var cache = {&#39;/etc&#39;:&#39;/private/etc&#39;};
 * fs.realpath(&#39;/etc/passwd&#39;, cache, function (err, resolvedPath) {
 *   if (err) throw err;
 *   console.log(resolvedPath);
 * });</code></pre>
 * */
_NPM_fs.prototype.realpath = function(path, cache, callback){
};

/**
 * <p>Synchronous realpath(2). Returns the resolved path.
 * 
 * </p>
 * */
_NPM_fs.prototype.realpathSync = function(path, cache){
};

/**
 * <p>Asynchronous unlink(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.unlink = function(path, callback){
};

/**
 * <p>Synchronous unlink(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.unlinkSync = function(path){
};

/**
 * <p>Asynchronous rmdir(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.rmdir = function(path, callback){
};

/**
 * <p>Synchronous rmdir(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.rmdirSync = function(path){
};

/**
 * <p>Asynchronous mkdir(2). No arguments other than a possible exception are given
 * to the completion callback. <code>mode</code> defaults to <code>0777</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.mkdir = function(path, mode, callback){
};

/**
 * <p>Synchronous mkdir(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.mkdirSync = function(path, mode){
};

/**
 * <p>Asynchronous readdir(3).  Reads the contents of a directory.
 * The callback gets two arguments <code>(err, files)</code> where <code>files</code> is an array of
 * the names of the files in the directory excluding <code>&#39;.&#39;</code> and <code>&#39;..&#39;</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.readdir = function(path, callback){
};

/**
 * <p>Synchronous readdir(3). Returns an array of filenames excluding <code>&#39;.&#39;</code> and
 * <code>&#39;..&#39;</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.readdirSync = function(path){
};

/**
 * <p>Asynchronous close(2).  No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.close = function(fd, callback){
};

/**
 * <p>Synchronous close(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.closeSync = function(fd){
};

/**
 * <p>Asynchronous file open. See open(2). <code>flags</code> can be:
 * 
 * </p>
 * <ul>
 * <li><p><code>&#39;r&#39;</code> - Open file for reading.
 * An exception occurs if the file does not exist.</p>
 * </li>
 * <li><p><code>&#39;r+&#39;</code> - Open file for reading and writing.
 * An exception occurs if the file does not exist.</p>
 * </li>
 * <li><p><code>&#39;rs&#39;</code> - Open file for reading in synchronous mode. Instructs the operating
 * system to bypass the local file system cache.</p>
 * <p>This is primarily useful for opening files on NFS mounts as it allows you to
 * skip the potentially stale local cache. It has a very real impact on I/O
 * performance so don&#39;t use this flag unless you need it.</p>
 * <p>Note that this doesn&#39;t turn <code>fs.open()</code> into a synchronous blocking call.
 * If that&#39;s what you want then you should be using <code>fs.openSync()</code></p>
 * </li>
 * <li><p><code>&#39;rs+&#39;</code> - Open file for reading and writing, telling the OS to open it
 * synchronously. See notes for <code>&#39;rs&#39;</code> about using this with caution.</p>
 * </li>
 * <li><p><code>&#39;w&#39;</code> - Open file for writing.
 * The file is created (if it does not exist) or truncated (if it exists).</p>
 * </li>
 * <li><p><code>&#39;wx&#39;</code> - Like <code>&#39;w&#39;</code> but fails if <code>path</code> exists.</p>
 * </li>
 * <li><p><code>&#39;w+&#39;</code> - Open file for reading and writing.
 * The file is created (if it does not exist) or truncated (if it exists).</p>
 * </li>
 * <li><p><code>&#39;wx+&#39;</code> - Like <code>&#39;w+&#39;</code> but fails if <code>path</code> exists.</p>
 * </li>
 * <li><p><code>&#39;a&#39;</code> - Open file for appending.
 * The file is created if it does not exist.</p>
 * </li>
 * <li><p><code>&#39;ax&#39;</code> - Like <code>&#39;a&#39;</code> but fails if <code>path</code> exists.</p>
 * </li>
 * <li><p><code>&#39;a+&#39;</code> - Open file for reading and appending.
 * The file is created if it does not exist.</p>
 * </li>
 * <li><p><code>&#39;ax+&#39;</code> - Like <code>&#39;a+&#39;</code> but fails if <code>path</code> exists.</p>
 * </li>
 * </ul>
 * <p><code>mode</code> sets the file mode (permission and sticky bits), but only if the file was
 * created. It defaults to <code>0666</code>, readable and writeable.
 * 
 * </p>
 * <p>The callback gets two arguments <code>(err, fd)</code>.
 * 
 * </p>
 * <p>The exclusive flag <code>&#39;x&#39;</code> (<code>O_EXCL</code> flag in open(2)) ensures that <code>path</code> is newly
 * created. On POSIX systems, <code>path</code> is considered to exist even if it is a symlink
 * to a non-existent file. The exclusive flag may or may not work with network file
 * systems.
 * 
 * </p>
 * <p>On Linux, positional writes don&#39;t work when the file is opened in append mode.
 * The kernel ignores the position argument and always appends the data to
 * the end of the file.
 * 
 * </p>
 * */
_NPM_fs.prototype.open = function(path, flags, mode, callback){
};

/**
 * <p>Synchronous version of <code>fs.open()</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.openSync = function(path, flags, mode){
};

/**
 * <p>Change file timestamps of the file referenced by the supplied path.
 * 
 * </p>
 * */
_NPM_fs.prototype.utimes = function(path, atime, mtime){
};

/**
 * <p>Change file timestamps of the file referenced by the supplied path.
 * 
 * </p>
 * */
_NPM_fs.prototype.utimesSync = function(path, atime, mtime){
};

/**
 * <p>Change the file timestamps of a file referenced by the supplied file
 * descriptor.
 * 
 * </p>
 * */
_NPM_fs.prototype.futimes = function(fd, atime, mtime){
};

/**
 * <p>Change the file timestamps of a file referenced by the supplied file
 * descriptor.
 * 
 * </p>
 * */
_NPM_fs.prototype.futimesSync = function(fd, atime, mtime){
};

/**
 * <p>Asynchronous fsync(2). No arguments other than a possible exception are given
 * to the completion callback.
 * 
 * </p>
 * */
_NPM_fs.prototype.fsync = function(fd, callback){
};

/**
 * <p>Synchronous fsync(2).
 * 
 * </p>
 * */
_NPM_fs.prototype.fsyncSync = function(fd){
};

/**
 * <p>Write <code>buffer</code> to the file specified by <code>fd</code>.
 * 
 * </p>
 * <p><code>offset</code> and <code>length</code> determine the part of the buffer to be written.
 * 
 * </p>
 * <p><code>position</code> refers to the offset from the beginning of the file where this data
 * should be written. If <code>position</code> is <code>null</code>, the data will be written at the
 * current position.
 * See pwrite(2).
 * 
 * </p>
 * <p>The callback will be given three arguments <code>(err, written, buffer)</code> where <code>written</code>
 * specifies how many <em>bytes</em> were written from <code>buffer</code>.
 * 
 * </p>
 * <p>Note that it is unsafe to use <code>fs.write</code> multiple times on the same file
 * without waiting for the callback. For this scenario,
 * <code>fs.createWriteStream</code> is strongly recommended.
 * 
 * </p>
 * <p>On Linux, positional writes don&#39;t work when the file is opened in append mode.
 * The kernel ignores the position argument and always appends the data to
 * the end of the file.
 * 
 * </p>
 * */
_NPM_fs.prototype.write = function(fd, buffer, offset, length, position, callback){
};

/**
 * <p>Synchronous version of <code>fs.write()</code>. Returns the number of bytes written.
 * 
 * </p>
 * */
_NPM_fs.prototype.writeSync = function(fd, buffer, offset, length, position){
};

/**
 * <p>Read data from the file specified by <code>fd</code>.
 * 
 * </p>
 * <p><code>buffer</code> is the buffer that the data will be written to.
 * 
 * </p>
 * <p><code>offset</code> is the offset in the buffer to start writing at.
 * 
 * </p>
 * <p><code>length</code> is an integer specifying the number of bytes to read.
 * 
 * </p>
 * <p><code>position</code> is an integer specifying where to begin reading from in the file.
 * If <code>position</code> is <code>null</code>, data will be read from the current file position.
 * 
 * </p>
 * <p>The callback is given the three arguments, <code>(err, bytesRead, buffer)</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.read = function(fd, buffer, offset, length, position, callback){
};

/**
 * <p>Synchronous version of <code>fs.read</code>. Returns the number of <code>bytesRead</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.readSync = function(fd, buffer, offset, length, position){
};

/**
 * <p>Asynchronously reads the entire contents of a file. Example:
 * 
 * </p>
 * <pre><code>fs.readFile(&#39;/etc/passwd&#39;, function (err, data) {
 *   if (err) throw err;
 *   console.log(data);
 * });</code></pre>
 * <p>The callback is passed two arguments <code>(err, data)</code>, where <code>data</code> is the
 * contents of the file.
 * 
 * </p>
 * <p>If no encoding is specified, then the raw buffer is returned.
 * 
 * 
 * </p>
 * */
_NPM_fs.prototype.readFile = function(filename, options, callback){
};

/**
 * <p>Synchronous version of <code>fs.readFile</code>. Returns the contents of the <code>filename</code>.
 * 
 * </p>
 * <p>If the <code>encoding</code> option is specified then this function returns a
 * string. Otherwise it returns a buffer.
 * 
 * 
 * </p>
 * */
_NPM_fs.prototype.readFileSync = function(filename, options){
};

/**
 * <p>Asynchronously writes data to a file, replacing the file if it already exists.
 * <code>data</code> can be a string or a buffer.
 * 
 * </p>
 * <p>The <code>encoding</code> option is ignored if <code>data</code> is a buffer. It defaults
 * to <code>&#39;utf8&#39;</code>.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>fs.writeFile(&#39;message.txt&#39;, &#39;Hello Node&#39;, function (err) {
 *   if (err) throw err;
 *   console.log(&#39;It\&#39;s saved!&#39;);
 * });</code></pre>
 * */
_NPM_fs.prototype.writeFile = function(filename, data, options, callback){
};

/**
 * <p>The synchronous version of <code>fs.writeFile</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.writeFileSync = function(filename, data, options){
};

/**
 * <p>Asynchronously append data to a file, creating the file if it not yet exists.
 * <code>data</code> can be a string or a buffer.
 * 
 * </p>
 * <p>Example:
 * 
 * </p>
 * <pre><code>fs.appendFile(&#39;message.txt&#39;, &#39;data to append&#39;, function (err) {
 *   if (err) throw err;
 *   console.log(&#39;The &quot;data to append&quot; was appended to file!&#39;);
 * });</code></pre>
 * */
_NPM_fs.prototype.appendFile = function(filename, data, options, callback){
};

/**
 * <p>The synchronous version of <code>fs.appendFile</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.appendFileSync = function(filename, data, options){
};

/**
 * <p>Watch for changes on <code>filename</code>. The callback <code>listener</code> will be called each
 * time the file is accessed.
 * 
 * </p>
 * <p>The second argument is optional. The <code>options</code> if provided should be an object
 * containing two members a boolean, <code>persistent</code>, and <code>interval</code>. <code>persistent</code>
 * indicates whether the process should continue to run as long as files are
 * being watched. <code>interval</code> indicates how often the target should be polled,
 * in milliseconds. The default is <code>{ persistent: true, interval: 5007 }</code>.
 * 
 * </p>
 * <p>The <code>listener</code> gets two arguments the current stat object and the previous
 * stat object:
 * 
 * </p>
 * <pre><code>fs.watchFile(&#39;message.text&#39;, function (curr, prev) {
 *   console.log(&#39;the current mtime is: &#39; + curr.mtime);
 *   console.log(&#39;the previous mtime was: &#39; + prev.mtime);
 * });</code></pre>
 * <p>These stat objects are instances of <code>fs.Stat</code>.
 * 
 * </p>
 * <p>If you want to be notified when the file was modified, not just accessed
 * you need to compare <code>curr.mtime</code> and <code>prev.mtime</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.watchFile = function(filename, options, listener){
};

/**
 * <p>Stop watching for changes on <code>filename</code>. If <code>listener</code> is specified, only that
 * particular listener is removed. Otherwise, <em>all</em> listeners are removed and you
 * have effectively stopped watching <code>filename</code>.
 * 
 * </p>
 * <p>Calling <code>fs.unwatchFile()</code> with a filename that is not being watched is a
 * no-op, not an error.
 * 
 * </p>
 * */
_NPM_fs.prototype.unwatchFile = function(filename, listener){
};

/**
 * <p>Watch for changes on <code>filename</code>, where <code>filename</code> is either a file or a
 * directory.  The returned object is a <a href="#fs_class_fs_fswatcher">fs.FSWatcher</a>.
 * 
 * </p>
 * <p>The second argument is optional. The <code>options</code> if provided should be an object
 * containing a boolean member <code>persistent</code>, which indicates whether the process
 * should continue to run as long as files are being watched. The default is
 * <code>{ persistent: true }</code>.
 * 
 * </p>
 * <p>The listener callback gets two arguments <code>(event, filename)</code>.  <code>event</code> is either
 * &#39;rename&#39; or &#39;change&#39;, and <code>filename</code> is the name of the file which triggered
 * the event.
 * 
 * </p>
 * */
_NPM_fs.prototype.watch = function(filename, options, listener){
};

/**
 * <p>Test whether or not the given path exists by checking with the file system.
 * Then call the <code>callback</code> argument with either true or false.  Example:
 * 
 * </p>
 * <pre><code>fs.exists(&#39;/etc/passwd&#39;, function (exists) {
 *   util.debug(exists ? &quot;it&#39;s there&quot; : &quot;no passwd!&quot;);
 * });</code></pre>
 * <p><code>fs.exists()</code> is an anachronism and exists only for historical reasons.
 * There should almost never be a reason to use it in your own code.
 * 
 * </p>
 * <p>In particular, checking if a file exists before opening it is an anti-pattern
 * that leaves you vulnerable to race conditions: another process may remove the
 * file between the calls to <code>fs.exists()</code> and <code>fs.open()</code>.  Just open the file
 * and handle the error when it&#39;s not there.
 * 
 * </p>
 * */
_NPM_fs.prototype.exists = function(path, callback){
};

/**
 * <p>Synchronous version of <code>fs.exists</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.existsSync = function(path){
};

/**
 * <p>Returns a new ReadStream object (See <code>Readable Stream</code>).
 * 
 * </p>
 * <p><code>options</code> is an object with the following defaults:
 * 
 * </p>
 * <pre><code>{ flags: &#39;r&#39;,
 *   encoding: null,
 *   fd: null,
 *   mode: 0666,
 *   autoClose: true
 * }</code></pre>
 * <p><code>options</code> can include <code>start</code> and <code>end</code> values to read a range of bytes from
 * the file instead of the entire file.  Both <code>start</code> and <code>end</code> are inclusive and
 * start at 0. The <code>encoding</code> can be <code>&#39;utf8&#39;</code>, <code>&#39;ascii&#39;</code>, or <code>&#39;base64&#39;</code>.
 * 
 * </p>
 * <p>If <code>autoClose</code> is false, then the file descriptor won&#39;t be closed, even if
 * there&#39;s an error.  It is your responsiblity to close it and make sure
 * there&#39;s no file descriptor leak.  If <code>autoClose</code> is set to true (default
 * behavior), on <code>error</code> or <code>end</code> the file descriptor will be closed
 * automatically.
 * 
 * </p>
 * <p>An example to read the last 10 bytes of a file which is 100 bytes long:
 * 
 * </p>
 * <pre><code>fs.createReadStream(&#39;sample.txt&#39;, {start: 90, end: 99});</code></pre>
 * */
_NPM_fs.prototype.createReadStream = function(path, options){
};

/**
 * <p>Returns a new WriteStream object (See <code>Writable Stream</code>).
 * 
 * </p>
 * <p><code>options</code> is an object with the following defaults:
 * 
 * </p>
 * <pre><code>{ flags: &#39;w&#39;,
 *   encoding: null,
 *   mode: 0666 }</code></pre>
 * <p><code>options</code> may also include a <code>start</code> option to allow writing data at
 * some position past the beginning of the file.  Modifying a file rather
 * than replacing it may require a <code>flags</code> mode of <code>r+</code> rather than the
 * default mode <code>w</code>.
 * 
 * </p>
 * */
_NPM_fs.prototype.createWriteStream = function(path, options){
};
