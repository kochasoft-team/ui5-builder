//@ui5-bundle application/k/subcomponentA/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"application/k/subcomponentA/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent"],function(n){"use strict";return n.extend("application.k.subcomponentA.Component",{metadata:{manifest:"json"}})});
},
	"application/k/subcomponentA/manifest.json":'{"_version":"1.1.0","sap.app":{"_version":"1.1.0","id":"application.k.subcomponentA","type":"application","applicationVersion":{"version":"1.2.2"},"embeds":["embedded"],"title":"{{title}}"}}'
}});
