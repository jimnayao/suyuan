/**
 * @return {[type]} [description]
 */
!(function () {
	define('BrandInfroModel', function (require, exports, module) {
		var Model=function(){
			//一个loading的动画 UI
		
			var _Self = this;
			//创建canvas对象模块
			var _CJSModel=_Self.CJSModel = ccjs.CCJSModel.Create({width:640,height:1200,fps:30});
			var _Canvas=_CJSModel.Canvas;
			var _Root=_CJSModel.Root;
            var _SiteModel = seajs.require('SiteModel');
            var _MainModel=seajs.require('MainModel');
            var _SiteTL=_SiteModel.SiteTL;
			var _View
			this.View;
			Init();
			function Init(){
				_View=document.createElement('div');
				_View.id='BrandInfro';
				_Self.View=_View=$(_View);
				_View.append(_Canvas);
			}
			var _LoadPanel;
			
			function InitHomePanel(){
				log('BrandInfroModel load HomePanel')
				//创建一个加载loading的对象，这个对象具体参数设置请查看ccjs.LoadCJSAssets方法（在createjs核心库里面有）
				var loadObj={
					basePath:'./assets/'
					//js路径
					,jsUrl:'HomeSkin.js'
					//注意：spritesheet 资源列表  cc 2016.2以后不需要json进行解析额了
					// ,ssList:[
					// 	{src:"images/load/loadPanel_atlas_P_.json", type:"spritesheet", id:"loadPanel_atlas_P_"}
					// ]
					//输出js的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认lib
//					 ,jsNS:'lib'
//					//输出images的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认images
//					 ,imgNS:'images'
					//加载完成后调用的方法
					,complete:onComplete
					//加载进行调用的方法
					,progress:onProgress
					//加载方式 初始化LoadQueue的crossOrigin参数
					,loadType:true
				}
				//loading加载完成后的方法处理
				function onComplete(e){
					if(_MainModel.CodeError){
						_Self.LoadEndMovieIn();
					}else{
						//二维码正确
						// if(_BrandPlace.InitLoadAssets)_BrandPlace.InitLoadAssets();
						// if(_BrandFarmInfo.InitLoadAssets)_BrandFarmInfo.InitLoadAssets();
						// if(_BrandFarming.InitLoadAssets)_BrandFarming.InitLoadAssets();
						PlaceSkinLoadAssets();
//						FarmInfoSkinLoadAssets();
					}
					
				};
				function audioAutoPlay(id){
				    var audio = document.getElementById(id),
				        play = function(){
				        audio.play();
				        document.removeEventListener("touchstart",play, false);
				    };
				    audio.play();
				    document.addEventListener("WeixinJSBridgeReady", function () {
				        play();
				    }, false);
				    document.addEventListener("touchstart",play, false);
				}
				//loading加载过程中方法处理
				function onProgress(e){
					audioAutoPlay('music');
				};
				//开始加载loading的资源
				ccjs.LoadCJSAssets(loadObj);
			};
			/*开始加载模块的资源*/
			function PlaceSkinLoadAssets(){
				log('BrandPlaceModel LoadAssets')
				//创建一个加载loading的对象，这个对象具体参数设置请查看ccjs.LoadCJSAssets方法（在createjs核心库里面有）
				var loadObj={
					basePath:'./assets/'
					//js路径
					,jsUrl:'PlaceSkin.js'
					//注意：spritesheet 资源列表  cc 2016.2以后不需要json进行解析额了
					// ,ssList:[
					// 	{src:"images/load/loadPanel_atlas_P_.json", type:"spritesheet", id:"loadPanel_atlas_P_"}
					// ]
					//输出js的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认lib
					,jsNS:'placeLib'
					//输出images的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认images
					,imgNS:'placeImages'
					//加载完成后调用的方法
					,complete:onComplete
					//加载进行调用的方法
					,progress:onProgress
					//加载方式 初始化LoadQueue的crossOrigin参数
					,loadType:true
				}
				//loading加载完成后的方法处理
				function onComplete(e){
					FarmInfoSkinLoadAssets();
				};
				//loading加载过程中方法处理
				function onProgress(e){
					var progress=e.target.progress;
//					_LoadPanel.loadPanel.mc.label.text=(10+(10*progress>>0))+'%'
				};
				//开始加载loading的资源
				ccjs.LoadCJSAssets(loadObj);
			};
			/*开始加载模块的资源*/
			function FarmInfoSkinLoadAssets(){
				log('BrandFarmInfoModel LoadAssets')
				//创建一个加载loading的对象，这个对象具体参数设置请查看ccjs.LoadCJSAssets方法（在createjs核心库里面有）
				var loadObj={
					basePath:'./assets/'
					//js路径
					,jsUrl:'LandSkin.js'
					//注意：spritesheet 资源列表  cc 2016.2以后不需要json进行解析额了
					// ,ssList:[
					// 	{src:"images/load/loadPanel_atlas_P_.json", type:"spritesheet", id:"loadPanel_atlas_P_"}
					// ]
					//输出js的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认lib
					,jsNS:'landInfoLib'
					//输出images的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认images
					,imgNS:'landInfoImages'
					//加载完成后调用的方法
					,complete:onComplete
					//加载进行调用的方法
					,progress:onProgress
					//加载方式 初始化LoadQueue的crossOrigin参数
					,loadType:true
				}
				//loading加载完成后的方法处理
				function onComplete(e){
					VarInfoSkinLoadAssets();
				};
				//loading加载过程中方法处理
				function onProgress(e){
					var progress=e.target.progress;
//					_LoadPanel.loadPanel.mc.label.text=(20+(10*progress>>0))+'%';
				};
				//开始加载loading的资源
				ccjs.LoadCJSAssets(loadObj);
			};
			
			/*开始加载模块的资源*/
			function VarInfoSkinLoadAssets(){
				log('BrandFarmInfoModel LoadAssets')
				//创建一个加载loading的对象，这个对象具体参数设置请查看ccjs.LoadCJSAssets方法（在createjs核心库里面有）
				var loadObj={
					basePath:'./assets/'
					//js路径
					,jsUrl:'VarSkin.js'
					//注意：spritesheet 资源列表  cc 2016.2以后不需要json进行解析额了
					// ,ssList:[
					// 	{src:"images/load/loadPanel_atlas_P_.json", type:"spritesheet", id:"loadPanel_atlas_P_"}
					// ]
					//输出js的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认lib
					,jsNS:'varLib'
					//输出images的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认images
					,imgNS:'varImages'
					//加载完成后调用的方法
					,complete:onComplete
					//加载进行调用的方法
					,progress:onProgress
					//加载方式 初始化LoadQueue的crossOrigin参数
					,loadType:true
				}
				//loading加载完成后的方法处理
				function onComplete(e){
					FarmingSkinLoadAssets();
				};
				//loading加载过程中方法处理
				function onProgress(e){
					var progress=e.target.progress;
//					_LoadPanel.loadPanel.mc.label.text=(20+(10*progress>>0))+'%';
				};
				//开始加载loading的资源
				ccjs.LoadCJSAssets(loadObj);
			};
			
			/*开始加载模块的资源*/
			function FarmingSkinLoadAssets(){
				log('BrandFarmingModel LoadAssets')
				//创建一个加载loading的对象，这个对象具体参数设置请查看ccjs.LoadCJSAssets方法（在createjs核心库里面有）
				var loadObj={
					basePath:'./assets/'
					//js路径
					,jsUrl:'FoodSkin.js'
					//注意：spritesheet 资源列表  cc 2016.2以后不需要json进行解析额了
					// ,ssList:[
					// 	{src:"images/load/loadPanel_atlas_P_.json", type:"spritesheet", id:"loadPanel_atlas_P_"}
					// ]
					//输出js的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认lib
					,jsNS:'foodLib'
					//输出images的命名空间 用来加载除spritesheet资源外的其他图片资源 空值默认images
					,imgNS:'foodImages'
					//加载完成后调用的方法
					,complete:onComplete
					//加载进行调用的方法
					,progress:onProgress
					//加载方式 初始化LoadQueue的crossOrigin参数
					,loadType:true
				}
				//loading加载完成后的方法处理
				function onComplete(e){
					if(_MainModel.CodeError){
						
					}else{
						//二维码正确
						_Self.LoadEndMovieIn();
					};
					
				};
				//loading加载过程中方法处理
				function onProgress(e){
					var progress=e.target.progress;
//					_LoadPanel.loadPanel.mc.label.text=(30+(10*progress>>0))+'%';
				};
				//开始加载loading的资源
				ccjs.LoadCJSAssets(loadObj);
			};


			var _HomePanel,_HomeMovie;
			this.LoadEndMovieIn=function(){
				log('homeMovie Start')
				_CJSModel.Root.removeAllChildren();
//				if(_LoadPanel.parent)_LoadPanel.parent.removeChild(_LoadPanel)
					
				_HomePanel=new lib.HomeSkin();
				_HomeMovie=_HomePanel.homeMovie;
				window._HomeMovie=_HomeMovie;
				
				_Root.removeAllChildren();
				// _Root.removeAllChildren();
				_Root.addChild(_HomePanel);




				if(_MainModel.ActivationCode&&_MainModel.Success&&!_MainModel.CodeError){
					//让其他模块也开始加载
					seajs.require('BrandModel').LoadOtherModelLoadAssets();
					_MainModel.LoadOtherAssets();
				}
//				if(!_MainModel.Success||!_MainModel.ActivationCode)_HomeMovie.tip1.visible=false;
				
				
//					var _obj={value:10};
//					JT.to(_obj,5,{value:100,
//						onUpdate:function(){
////							_HomeMovie.labelMc.label.text=(_obj.value>>0)+'%';
//						},
//						onEnd:function(){
//							_HomePanel.on('homeEnd',function(){
//								HomeEnd();
//							})
//						}
//					});
				// }
				_HomePanel.on('loadEnd',function(){
					HomeEnd();
				})
			};
			function HomeEnd(){
				if(_MainModel.PageLabel!='BrandModel')return;
				log('loadEnd',_MainModel.ActivationCode)
				touch.on( _Canvas, 'swipeup',toPlace);
				function toPlace(){
					var _obj={v:1100,t:0}
					touch.off( _Canvas, 'swipeup',toPlace);
					JT.to(_obj,1,{delay:.5,v:0,t:-1100,
						onUpdate:function(){
							$("#BrandInfro").css("top",_obj.t);
							$("#BrandPlace").css("top",_obj.v)
						},
						onEnd:function(){
							seajs.require('MenuModel').Open(true);
							seajs.require('BrandModel').SetScrollBool(true);
						}}
					)
				}
				
			}
			
			this.MovieIn=function (){
				if(!_HomePanel){
					InitHomePanel();
					return;
				};
				
			};
		};
		module.exports = new Model();
	});
})();