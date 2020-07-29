/**
 * api接口地址
 */

!(function () {
	define('ApiUrl', function (require, exports, module) {
		var Model=function() {
			var _SiteModel = seajs.require('SiteModel');
			//扫码接口
			this.InfoUrl='http://'+window.location.host;
		
			this.Init=function(bool) {
            	bool=true;
				if(bool)this.InfoUrl='./testData/0.txt';
				
			}
		}
        module.exports = new Model();
        
	})
})();