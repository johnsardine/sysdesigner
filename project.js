/* 
 * @description A modular approach to Unbabel editing interface
 * @module project
 * @version 0.0.1
 * @requires system-runtime
 */

// install System Runtime
var runtime = require('system-runtime');

// set the level of log
runtime.require('logger').level('debug');

// install and start the system
runtime.install('project.json', true);
