pref("general.config.obscure_value", 0);
pref("general.config.filename", "firefox.cfg");

pref("app.update.auto", false);
pref("app.update.enabled", false);
pref("app.update.service.enabled", false);
pref("toolkit.telemetry.prompted", 2);
pref("toolkit.telemetry.rejected", true);
pref("toolkit.telemetry.enabled", false);
pref("browser.rights.3.shown", true);
pref("browser.rights.override", true);
pref("browser.startup.homepage_override.mstone", "ignore");
pref("browser.shell.checkDefaultBrowser", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.healthreport.service.enabled", false);
pref("datareporting.healthreport.service.firstRun", false);
pref("datareporting.healthreport.logging.consoleEnabled", false);

pref("extensions.update.enabled", false);

// https://developer.mozilla.org/en-US/Firefox/Enterprise_deployment
lockPref("app.update.enabled", false);
// make absolutely sure it is really off
lockPref("app.update.auto", false);
lockPref("app.update.mode", 0);
lockPref("app.update.service.enabled", false);

// Disable Add-ons compatibility checking
clearPref("extensions.lastAppVersion");

// Don't show 'know your rights' on first run
pref("browser.rights.3.shown", true);

// Don't show WhatsNew on first run after every update
pref("browser.startup.homepage_override.mstone","ignore");

// Disable the internal PDF viewer
pref("pdfjs.disabled", true);

// Disable the flash to javascript converter
pref("shumway.disabled", true);

// Don't ask to install the Flash plugin
pref("plugins.notifyMissingFlash", false);

//Disable plugin checking
lockPref("plugins.hide_infobar_for_outdated_plugin", true);
clearPref("plugins.update.url");

// Disable health reporter
lockPref("datareporting.healthreport.service.enabled", false);

// Disable all data upload (Telemetry and FHR)
lockPref("datareporting.policy.dataSubmissionEnabled", false);

// Disable crash reporter
lockPref("toolkit.crashreporter.enabled", false);
Components.classes["@mozilla.org/toolkit/crash-reporter;1"].getService(Components.interfaces.nsICrashReporter).submitReports = false;

pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.policy.dataSubmissionPolicyResponseType", "accepted-info-bar-dismissed");
pref("datareporting.policy.dataSubmissionPolicyAccepted; false);
