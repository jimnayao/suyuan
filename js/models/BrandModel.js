!(function () {
	define('BrandModel', function (require, exports, module) {
		var Model=function(){
			var _Self = this;
            var _SiteModel = seajs.require('SiteModel');
            var _MainModel=seajs.require('MainModel');
            var _SiteTL=_SiteModel.SiteTL;
			var _View
			this.View;
			Init();
			function Init(){
				log('BrandModel Init')
				_View=document.createElement('div');
				_View.id='View';
				_Self.View=_View=$(_View);
			};
			/*
			初始化子模块
			 */
			
			var _BrandInfro,_BrandPlace,_BrandLandInfo,_BrandVarInfo,_BrandTasteInfo;
			var _QueryCodeError;
			function InitModel(){
				if(_BrandInfro)return;
				_BrandInfro=seajs.require('BrandInfroModel');
				_BrandPlace=seajs.require('BrandPlaceModel');
				_BrandLandInfo=seajs.require('BrandLandInfoModel');
				_BrandVarInfo=seajs.require('BrandVarInfoModel');
				_BrandTasteInfo=seajs.require('BrandTasteInfoModel');
				
//				_QueryCodeError=seajs.require('QueryCodeError');

				_View.append(_BrandInfro.View);
				if(_MainModel.CodeError){
					// _View.append(_QueryCodeError.View);
				}
				else{
					_View.append(_BrandPlace.View);
					_View.append(_BrandLandInfo.View);
					_View.append(_BrandVarInfo.View);
					_View.append(_BrandTasteInfo.View);
				}
				//更新是否滚动
				_Self.SetScrollBool(false);
				//开始进场
				_Self.MovieIn();

				var _myScroll=_MainModel.IScroller;
				
				_myScroll.on('scrollStart', function(){
//					log('scrollStart',_myScroll.y);
					// log('scrollStart');
					_Self.SetTickEnabled(false);
				});
				
				_myScroll.on('scroll', function(){
					log('scroll',_myScroll.y);
					// log('scroll')
				})
				_myScroll.on('scrollEnd', function(){
//					log('scrollEnd',_myScroll.y);
					// _Self.SetTickEnabled(true);
					UpStageTick();
				});

				
			}
			/*优化性能 多个canvas不要同时渲染*/
			function UpStageTick(){
				if(!_BrandInfro)return;
				var _myScroll=_MainModel.IScroller;
				
//				渲染注销
//				if(_myScroll.y<=-1300){
//					_BrandInfro.CJSModel.Stage.tickEnabled=false;
//				}else{
//					_BrandInfro.CJSModel.Stage.tickEnabled=true;
//				}
//
//				if(_myScroll.y<=-2130||_myScroll.y>=-200){
//					_BrandPlace.CJSModel.Stage.tickEnabled=true;
//				}else{
//					_BrandPlace.CJSModel.Stage.tickEnabled=true;
//				}
//				if(_myScroll.y>=-3100&&_myScroll.y<=-1500){
//					_BrandLandInfo.CJSModel.Stage.tickEnabled=true;
//				}else{
//					_BrandLandInfo.CJSModel.Stage.tickEnabled=false;
//				}
//				if(_myScroll.y>=- 4200&&_myScroll.y<=-3300){
//					_BrandVarInfo.CJSModel.Stage.tickEnabled=true;
//				}else{
//					_BrandVarInfo.CJSModel.Stage.tickEnabled=false;
//				}
//				if(_myScroll.y>=-3900){
//					_BrandTasteInfo.CJSModel.Stage.tickEnabled=false;
//				}else{
//					_BrandTasteInfo.CJSModel.Stage.tickEnabled=true;
//				}
				
//				if(_myScroll.y>=-2587){
//					_BrandTasteInfo.CJSModel.Stage.tickEnabled=false;
//				}else{
//					_BrandTasteInfo.CJSModel.Stage.tickEnabled=true;
//				}
				
				if(_myScroll.y==0){
					_BrandInfro.CJSModel.Stage.tickEnabled=true;
					_BrandPlace.CJSModel.Stage.tickEnabled=true;
					_BrandLandInfo.CJSModel.Stage.tickEnabled=true;
					_BrandLandInfo.CJSModel.Stage.tickEnabled=true;
					_BrandVarInfo.CJSModel.Stage.tickEnabled=true;
					_BrandTasteInfo.CJSModel.Stage.tickEnabled=true;
				}

//				if(_myScroll.y<=-1300){
//					_BrandInfro.CJSModel.Stage.tickEnabled=false;
//				}else{
//					_BrandInfro.CJSModel.Stage.tickEnabled=true;
////					_BrandPlace.CJSModel.Stage.tickEnabled=true;
////					_BrandLandInfo.CJSModel.Stage.tickEnabled=true;
////					_BrandLandInfo.CJSModel.Stage.tickEnabled=true;
////					_BrandVarInfo.CJSModel.Stage.tickEnabled=true;
////					_BrandTasteInfo.CJSModel.Stage.tickEnabled=true;
//				}
//
//				if(_myScroll.y>=-3100&&_myScroll.y<=-1500){
//					_BrandVarInfo.CJSModel.Stage.tickEnabled=false;
//				}else{
//					_BrandVarInfo.CJSModel.Stage.tickEnabled=true;
//				}
//				
//				if(_myScroll.y<=-2130||_myScroll.y>=-200){
//					_BrandLandInfo.CJSModel.Stage.tickEnabled=false;
//				}else{
//					_BrandLandInfo.CJSModel.Stage.tickEnabled=true;
//				}
//
//				if(_myScroll.y>=-2587){
//					_BrandTasteInfo.CJSModel.Stage.tickEnabled=false;
//				}else{
//					_BrandTasteInfo.CJSModel.Stage.tickEnabled=true;
//				}
			}
			/**
			 * canvas渲染开关，滚动时候的性能优化
			 * @param {[type]} bool [description]
			 */
			this.SetTickEnabled=function(bool){
				// return;
				if(_BrandInfro.CJSModel)_BrandInfro.CJSModel.Stage.tickEnabled =bool;
				if(_BrandPlace.CJSModel)_BrandPlace.CJSModel.Stage.tickEnabled =bool;
				if(_BrandLandInfo.CJSModel)_BrandLandInfo.CJSModel.Stage.tickEnabled =bool;
				if(_BrandVarInfo.CJSModel)_BrandVarInfo.CJSModel.Stage.tickEnabled =bool;
				if(_BrandTasteInfo.CJSModel)_BrandTasteInfo.CJSModel.Stage.tickEnabled =bool;
				
			}
			/*开始加载其他模块资源*/
			this.LoadOtherModelLoadAssets=function(){
				//二维码错误
				if(_MainModel.CodeError){
					// if(_QueryCodeError.InitLoadAssets)_QueryCodeError.InitLoadAssets();
				}else{
				//二维码正确
				
					if(_BrandPlace.InitLoadAssets)_BrandPlace.InitLoadAssets();
					if(_BrandLandInfo.InitLoadAssets)_BrandLandInfo.InitLoadAssets();
					if(_BrandVarInfo.InitLoadAssets)_BrandVarInfo.InitLoadAssets();
					if(_BrandTasteInfo.InitLoadAssets)_BrandTasteInfo.InitLoadAssets();
				}
			}
			/**
			 *  查询错误模块显示
			 */
			this.ShowQueryCodeError=function(){
//				 _View.append(_QueryCodeError.View);
			}
			/*设置模块是否可以滚动*/
			this.SetScrollBool=function(bool){
				if(bool){
					_View.css({height:''})
				}
				else{
					_View.css({height:0});
				}
				_MainModel.IScroller.refresh();
			};
			/*模块进场*/
			this.MovieIn=function(){
				
				if(!_BrandInfro){
					InitModel();
				}
				_BrandInfro.MovieIn();
				_MainModel.IScroller.refresh();
				this.SetTickEnabled(true)
			};
			
		};
		module.exports = new Model();
	
	});
})();