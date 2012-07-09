hook.io-os-monitor
==================

Basic wrapper around some of the core node.js OS functionality


## Installation

     git clone git@github.com:chromecide/hook.io-os-monitor.git
     cd hook.io-os-monitor
     npm install
     node bin/os-monitor
     
### Using NPM

    npm install hook.io-os-monitor

## Hook Event Names

### Event Listeners

**[name]::async_fs::watch_file** *{name, path}* - Watches file *path* using the hook name *name*

**[name]::async_fs::unwatch_file** *{path}* - Stops watching the file specified by *path*

**[name]::async_fs::watch_tree** *{name, path}* - Traverses the directory defined by *path* and recursively creates an async_fs FileHook object for each file

### Events Emitted:

**os-monitor::poll::started** *{}* - 

**os-monitor::poll::stopped** *{	}* - 

**os-monitor::report::result** *{HostName, UpTime, TotalMem, FreeMem}* -

### Hook config.json settings

```js
{

}
```