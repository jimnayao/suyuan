!(function () {
	define('BrandLandInfoModel', function (require, exports, module) {
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
				_View.id='BrandLandInfo';
				_Self.View=_View=$(_View);
				_View.append(_Canvas);
			}
			/*开始加载模块的资源*/
			this.InitLoadAssets=function (){
				// log('BrandLandInfoModel LoadAssets')
				InitUI();
				return;
				//创建一个加载loading的对象，这个对象具体参数设置请查看ccjs.LoadCJSAssets方法（在createjs核心库里面有）
				var loadObj={
					basePath:'./assets/'
					//js路径
					,jsUrl:'loadSkin.js'
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
			var _MoviePanel,_Panel,_PageNum=-1;
			function InitUI(){
				if(_MoviePanel)return;
				_MoviePanel=new landInfoLib.LandInfoSkin();
				_CJSModel.Root.addChild(_MoviePanel);
//				_Panel=_MoviePanel.panel;
				
				_MoviePanel.instance_44.on('click', function(){GotoPage(0)});
				_MoviePanel.instance_43.on('click', function(){GotoPage(1)});
				_MoviePanel.instance_42.on('click', function(){GotoPage(2)});
				
				$(".dialog_close,.dialog_bg").on("click",function(){
					$(".dialog_main.active").addClass("hide");
					$(".active").removeClass("active");
					setTimeout(function(){
						$(".dialog").hide();
						$(".dialog_main").removeClass("hide");
					},300)
				})
				
				_MoviePanel.instance_27.on('click', function(){
					$(".dialog").show();
					$("#vinu1").addClass("active");
				});
				_MoviePanel.instance_26.on('click', function(){
					$(".dialog").show();
					$("#vinu2").addClass("active");
				});
				_MoviePanel.instance_25.on('click', function(){
					$(".dialog").show();
					$("#vinu3").addClass("active");
				});
				_MoviePanel.instance_24.on('click', function(){
					$(".dialog").show();
					$("#vinu4").addClass("active");
				});
				
				
				
				touch.on( "#BrandLandInfo", 'swipedown',toPlace);
				touch.on( "#BrandLandInfo", 'swipeup',toVar);
				
				
				
				function toPlace(){
					touch.off( "#BrandLandInfo", 'swipedown',toPlace);
					touch.off( "#BrandLandInfo", 'swipeup',toVar);
					var _obj={v:-1100,t:0}
					JT.to(_obj,1,{delay:.5,v:0,t:1100,
						onUpdate:function(){
							$("#BrandLandInfo").css("top",_obj.t);
							$("#BrandPlace").css("top",_obj.v)
						},onEnd:function(){
							touch.on( "#BrandLandInfo", 'swipedown',toPlace);
							touch.on( "#BrandLandInfo", 'swipeup',toVar);
						}
					})
				}
				
				function toVar(){
					touch.off( "#BrandLandInfo", 'swipedown',toPlace);
					touch.off( "#BrandLandInfo", 'swipeup',toVar);
					var _obj={v:1100,t:0}
					JT.to(_obj,1,{delay:.5,v:0,t:-1100,
						onUpdate:function(){
							$("#BrandLandInfo").css("top",_obj.t);
							$("#BrandVar").css("top",_obj.v)
						},onEnd:function(){
							seajs.require('BrandVarInfoModel').goVar();
							touch.on( "#BrandLandInfo", 'swipedown',toPlace);
							touch.on( "#BrandLandInfo", 'swipeup',toVar);
						}
					})
					
				}
				
				touch.on( _Canvas, 'swipeleft',function(){Next()});
				touch.on( _Canvas, 'swiperight',function(){Previous()});

				GotoPage(0);
			}
			function Next(){
//				alert("test")
				var _num=_PageNum+1;
				if(_num>=3)_num=0;
				GotoPage(_num);
			}
			function Previous(){
				var _num=_PageNum-1;
				if(_num<0)_num=2;
				GotoPage(_num);
			}
			function GotoPage(value){
//				alert(_PageNum)
				if(_PageNum==value)return;
				_PageNum=value;
				_CJSModel.Root.removeAllChildren();
				_CJSModel.Root.addChild(_MoviePanel);

				if(value==0){
					_MoviePanel.gotoAndPlay(9);
										
					var _temp1={v:0};
					var _val1=2500;
					JT.to(_temp1,1,{delay:.5,v:_val1,onUpdate:function(){
						var _vl=_temp1.v>>0;
						_MoviePanel.instance_18.yutext.text=_vl+"hrs";
					}});
					
					var _temp0={v:0};
					var _val0=1000;
					JT.to(_temp0,1,{delay:1.5,v:_val0,onUpdate:function(){
						var _vl=_temp0.v>>0;
						_MoviePanel.instance_15.ritext.text=_vl+"hrs";
					}});
				}

				if(value==1){
					_MoviePanel.gotoAndPlay(109);
				}

				if(value==2){
					_MoviePanel.gotoAndPlay(177);
				}
			}
		};
		module.exports = new Model();
		
	});
})();