/**
 * 网站核心模块控制
 * 模块显示切换
 * @return {[type]} [description]
 */
!(function () {
	define('MainModel', function (require, exports, module) {
		var Model = function () {
            var _Self = this;
            var _SiteModel = seajs.require('SiteModel');
            var _SiteTL=_SiteModel.SiteTL;
            //这个类支持事件扩展
			cagoeAG.Extend(this, cagoeAG.Eventer);
			//所有基础数据
			this.BaseData;
			//追寻码
			this.Code;
			//是否码错误
			this.CodeError;
			this.IScroller

			var _BrandModel,_BoxModel,_BuyModel,_TracingFlowModel,_QueryCodeError;
			var _PacketModel;
			var _ContentBox;
		

			this.Init=function (){
				log('MainVM Init');
				_ContentBox=$('#contentBox .scrollBox')
				_SiteModel.on('Reize',Resize);
				_myScroll = new IScroll($('#contentBox')[0],
			 	{
			 		scrollX: false
				 	,scrollY: false
					,click:true
				 	,scrollbars: true 
				 	// ,interactiveScrollbars: true
				 	,useTransform: false
				 	,useTransition: false
				 	,probeType:3
			 	});
				this.IScroller=_myScroll;

				_BrandModel=seajs.require('BrandModel');
				//红包模块
				_PacketModel=seajs.require('PacketModel');
				
				//追溯流程模块
				_TracingFlowModel=seajs.require('TracingFlowModel');

				$('#qrPanel .bg').on('click',function(){
					_Self.HitQRPanel();
				});


				//获取数据
				
				_Self.InitAjax();
			};
			/*进行初始化数据请求*/
			this.InitAjax=function(){
				var _infoUrl=ApiUrl.InfoUrl;
	            if(_infoUrl.indexOf('testData/')!=-1){
	            	$.ajax({
		            	url:_infoUrl,
						contentType: "application/json; charset=UTF-8",
						data: JSON.stringify(_params),
						success: function (result) {  
							result=JSON.parse(result);
							_Self.Success=result.success;
							if (result.success) {
								_Self.SetInitData(result.data);
							}else{
//								_Self.SetInitData(result.data);
								 errorShow();
							}
						}
				 	})
	            }else{
	            	var _params = { "traceCode": _SiteModel.Code};
		            $.ajax({
		            	type:"POST",
		            	url:_infoUrl,
						contentType: "application/json; charset=UTF-8",
						dataType: "json",
						cache: false,
						data: JSON.stringify(_params),
						success: function (result) {  
							log(result)
							_Self.Success=result.success;
							if (result.success) {
								_Self.SetInitData(result.data);
							}else{
								_Self.SetInitData(result.data);
							}
						},
						error: function(xhr, type){
						   errorShow()
						}
				 	})
	            }
	            function errorShow(){
					layer.open({
						content: '获取数据错误'
						,btn:['刷新', '取消']
						,yes:function(index){
							 location.reload();
							layer.close(index);
						}
						,no:function(index){layer.close(index);}
					});
	            }
			}
			
			/**
			 * 设置初始化数据
			 * @param {[type]} data [description]
			 */
			this.SetInitData=function (data){
				
				this.BaseData=data;
				this.BaseData.success=_Self.Success;
				this.Code=					data.traceCode;
				this.CodeError=				data.isValid==0?true:false;
				this.ActivationCode=		data.categoryCode=="0001"?false:true;
				
				this.WhetherScore=true;
				log('SetInitData:',this.CodeError)
//				if(this.Code==_SiteModel.Code){
//					this.GotoPage('BrandModel');
//					siteModel.MenuModel.SelectMenu(0);					
//				}else{
//					layer.open({
//						content: '二维码不符合规定!'
//						,btn:['确定', '取消']
//						,yes:function(index){layer.close(index);}
//						,no:function(index){layer.close(index);}
//					});
//				}
				//不做二维码判断
				this.GotoPage('BrandModel');
				siteModel.MenuModel.SelectMenu(0);	
				
			}
			this.ShowQRPanel=function(){
				$('#qrPanel').show();
			}
			this.HitQRPanel=function(){
				$('#qrPanel').hide();
			}
			this.PageLabel='';
			/**
			 * 进行页面模块切换
			 */
			this.GotoPage=function(value){
				if(this.PageLabel==value)return;
				log('GotoPage:',value)
				this.PageLabel=value;
				this.HitQRPanel();
				_ContentBox.empty()
				if(value=='BrandModel'){
					_ContentBox.append(_BrandModel.View);
					_BrandModel.MovieIn();
				}else{
					//关闭canvas渲染节省性能
					_BrandModel.SetTickEnabled(false);
				}
//				
				if(value=='PacketModel'){
					_ContentBox.append(_PacketModel.View);
					if(_PacketModel.MovieIn)_PacketModel.MovieIn();
				}
				
				if(value=='TracingFlowModel'){
					_ContentBox.append(_TracingFlowModel.View);
					if(_TracingFlowModel.MovieIn)_TracingFlowModel.MovieIn();
				}else{
					// log(_TracingFlowModel);
					if(_TracingFlowModel.CloseTickEnabled)_TracingFlowModel.CloseTickEnabled();
				}

			}
				
			var _LoadOther=false;
			 /**
			  * [LoadOtherAssets description]
			  */
			this.LoadOtherAssets=function () {
				if(_LoadOther)return;
				_LoadOther=true;
				log('LoadOtherAssets')

				if(_PacketModel.InitLoadAssets)_PacketModel.InitLoadAssets();
				
				//追溯流程模块
				if(_TracingFlowModel.InitLoadAssets)_TracingFlowModel.InitLoadAssets();
			}
			//自适应计算相关
			var _Width,_Height,_PageScale,_ActualH,_Horizontal=false,_IsInputState=false,_ScreenWidth;
			function Resize(){
				log('MainModel Resize');
				
				_Width=_SiteModel.innerWidth;//获取到window宽
	            _Height=_SiteModel.innerHeight;//获取到window高;
				_ActualH= _SiteModel.ActualH;//真实高度
	            _PageScale=_SiteModel.PageScale;//页面上场景缩放比例 
	            _IsInputState=_SiteModel.IsInputState;//是否输入状态下
	            _Horizontal=_SiteModel.Horizontal;//是否选择屏幕状态
	            _ScreenWidth=_SiteModel.ScreenWidth;//当前屏幕尺寸计算用宽
//				alert(_ActualH)
	           	$('#contentBox').css({height:_ActualH})
//	           	$('#id="View"').css({height:2400})
	           	if(_Self.IScroller)_Self.IScroller.refresh();

			}
        }
        module.exports = new Model();
        module.exports.Init();
	})
})();