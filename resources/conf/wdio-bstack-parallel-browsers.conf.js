const defaults = require("./wdio.conf.js")
const _ = require("lodash")
const timeStamp = new Date().getTime()
const wdioParallel = require('wdio-cucumber-parallel-execution');
const rimraf = require('rimraf');

const sourceSpecDirectory = `resources/features`;
let featureFilePath = `${sourceSpecDirectory}/*.feature`;

const overrides = {
    user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    specs: [
        './resources/features/tmp/*.feature'
    ],
    maxInstances: 44,
    capabilities: [{
        'bstack:options': {
            'projectName': 'BrowserStack',
            'buildName': process.env.BROWSERSTACK_BUILD_NAME || 'browserstack-examples-webdriverio - ' + timeStamp,
            'debug': true,
            'networkLogs': true,
            'video': true,
            'maskCommands': 'setValues, getValues, setCookies, getCookies',
            'os': 'Windows',
            'osVersion': '10'
        },
        browserName: 'Edge',
        browserVersion: 'latest',
        acceptInsecureCerts: true
    }, {
        'bstack:options': {
            'projectName': 'BrowserStack',
            'buildName': process.env.BROWSERSTACK_BUILD_NAME || 'browserstack-examples-webdriverio - ' + timeStamp,
            'debug': true,
            'networkLogs': true,
            'video': true,
            'maskCommands': 'setValues, getValues, setCookies, getCookies',
            'os': 'OS X',
            'osVersion': 'Catalina'
        },
        browserName: 'Chrome',
        browserVersion: 'latest',
        acceptInsecureCerts: true
    }, {
        'bstack:options': {
            'projectName': 'BrowserStack',
            'buildName': process.env.BROWSERSTACK_BUILD_NAME || 'browserstack-examples-webdriverio - ' + timeStamp,
            'debug': true,
            'networkLogs': true,
            'video': true,
            'maskCommands': 'setValues, getValues, setCookies, getCookies',
            'osVersion': '10.0',
            'deviceName': 'Samsung Galaxy S20',
            'realMobile': 'true'
        },
        browserName: 'Android',
        acceptInsecureCerts: true
    }, {
        'bstack:options': {
            'projectName': 'BrowserStack',
            'buildName': process.env.BROWSERSTACK_BUILD_NAME || 'browserstack-examples-webdriverio - ' + timeStamp,
            'debug': true,
            'networkLogs': true,
            'video': true,
            'maskCommands': 'setValues, getValues, setCookies, getCookies',
            'osVersion': '13',
            'deviceName': 'iPhone 11',
            'realMobile': 'true'
        },
        browserName: 'iPhone',
        acceptInsecureCerts: true
    }],
    baseUrl: 'https://bstackdemo.com/',
}

exports.config = _.defaultsDeep(overrides, defaults.config)