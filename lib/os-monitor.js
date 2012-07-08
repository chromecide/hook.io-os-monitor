var Hook = require('hook.io').Hook,
    util = require('util');
var os = require('os');

var OS_Monitor = exports.os_monitor = function(options){
  Hook.call(this, options);
  var self = this;
  
  self.on('*::os-monitor::report', self.report);
  self.on('*::'+self.name+'::os-monitor::report', self.report);
  self.on('*::'+self.name+'::os-monitor::start_poll', self.startPoll);
  self.on('*::'+self.name+'::os-monitor::stop_poll', self.stopPoll);
};

// OS_Monitor inherits from Hook
util.inherits(OS_Monitor, Hook);

OS_Monitor.prototype.startPoll = function(options, callback){
	var self = this;
	if(options.interval){
		self.interval = options.interval;
	}
	
	//clear the existing interval
	clearInterval(self.timerObj);
	
	//start a new interval
	if(self.interval && self.interval>0){
	  	self.timerObj = setInterval(function(){
	  		self.report();
	  	}, self.interval);
	  	
		self.emit('os-monitor::poll::started', {});
	}
	
};

OS_Monitor.prototype.stopPoll = function(options, callback){
	var self = this;
	clearInterval(self.timerObj);
	self.emit('os-monitor::poll::stopped', {});
};

OS_Monitor.prototype.report = function(options, callback){
	var self = this;
	self.emit('os-monitor::report::result', {
		HostName: os.hostname(),
		UpTime: os.uptime(),
		TotalMem: os.totalmem(),
		FreeMem: os.freemem(),
		CPUs: os.cpus()
	});
};
