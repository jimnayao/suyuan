!(function () {
	define('BrandTasteInfoModel', function (require, exports, module) {
		var Model=function(){
			var _Self = this;
			//创建canvas对象模块
			var _CJSModel=_Self.CJSModel = ccjs.CCJSModel.Create({width:640,height:1100,fps:30});
			var _Canvas=_CJSModel.Canvas;
            var _SiteModel = seajs.require('SiteModel');
            var _MainModel=seajs.require('MainModel');
            var _SiteTL=_SiteModel.SiteTL;
			var _View
			this.View;
			Init();
			function Init(){
				_View=document.createElement('div');
				_View.id='BrandTaste';
				_Self.View=_View=$(_View);
				_View.append(_Canvas);
			}
			var _Bool=false;
			/*开始加载模块的资源*/
			this.InitLoadAssets=function (){
				// log('BrandTasteInfoModel LoadAssets')
				if(_Bool)return;
				_Bool=true;
				InitUI();
				
				return;
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
					,loadType:false
				}
				//loading加载完成后的方法处理
				function onComplete(e){
					InitUI();
				};
				//loading加载过程中方法处理
				function onProgress(e){var progress=e.target.progress;};
				//开始加载loading的资源
				ccjs.LoadCJSAssets(loadObj);
			};

			var _numfood=[
				'1',
				'2',
				'3',
				'4',
				'8',
				'7',
				'6',
				'5'
			]
			var _MoviePanel,_Panel,_TimePanel,_UserPanel,_InfoPanel,_PageNum;
			var _infoBox,_InfoElement;
			function InitUI(){
				if(_MoviePanel)return;
				_MoviePanel=new foodLib.FoodSkin();
				_CJSModel.Root.addChild(_MoviePanel);
//				_Panel=_MoviePanel.panel;
//				_TimePanel=_Panel.instance;
				
				
				touch.on( "#BrandTaste", 'swipedown',toVar);				
				function toVar(){
					touch.off( "#BrandTaste", 'swipedown',toVar);
					var _obj={v:-1100,t:0}
					JT.to(_obj,1,{delay:.5,v:0,t:1100,
						onUpdate:function(){
							$("#BrandTaste").css("top",_obj.t);
							$("#BrandVar").css("top",_obj.v)
						},onEnd:function(){							
							seajs.require('BrandVarInfoModel').goVar();
							touch.on( "#BrandTaste", 'swipedown',toVar);
						}
					})
				}
				
				
				_MoviePanel.instance.on('click', function(){Previous()});
				_MoviePanel.instance_1.on('click', function(){Next()});
			

				touch.on(_Canvas, 'swipeleft',function(){Next()});
				touch.on(_Canvas, 'swiperight',function(){Previous()});
				
				_PageNum=0;
				GotoNext(0);
			};
			
			var _time=new Date().getTime();
			
			function Next(){
				if(!_numfood)return;
				if(new Date().getTime()-_time<500){
					return;
				};
				
				var _num=_PageNum+1;
				if(_num>=4)_num=0;
				GotoNext(_num);
			}
			function Previous(){
				if(!_numfood)return;
				if(new Date().getTime()-_time<500){
					return;
				};
				
				var _num;
				if(_PageNum==0){
					_num=3
				}else{
					_num=_PageNum-1;
				}
				GotoNext(7-_num);
			}
			
			function GotoNext(value){				
				if(_PageNum==value)return;
				
				_CJSModel.Root.removeAllChildren();
				_CJSModel.Root.addChild(_MoviePanel);
				if(value>=4){
					_PageNum=7-value;
					
					_MoviePanel.gotoAndPlay((7-_PageNum)*12+3);
					_MoviePanel.play()
					
				}else{
					_PageNum=value;
					_MoviePanel.gotoAndPlay(value*12+3);
				}
				
			}
			
		};
		module.exports = new Model();
	});
})();