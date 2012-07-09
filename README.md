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

**os-monitor::report** *{}* - Initialises an os-monitor report event

**[name]::os-monitor::startPoll** *{interval}* - Starts the os-monitor server poll, emitting an os-monitor::report::result every *interval* milliseconds

**[name]::os-monitor::stopPoll** *{name, path}* - Stops a previously started poll

### Events Emitted:

**os-monitor::poll::started** *{}* - 

**os-monitor::poll::stopped** *{	}* - 

**os-monitor::report::result** *{HostName, UpTime, TotalMem, FreeMem}* -

### Hook config.json settings

```js
{

}
```