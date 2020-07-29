(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"LandSkin_atlas_", frames: [[896,498,95,95],[0,1028,192,217],[797,1368,150,104],[0,0,640,658],[201,1345,146,184],[925,300,97,97],[925,399,97,97],[922,0,99,100],[0,1247,133,19],[349,1467,150,104],[0,1345,199,144],[395,1321,199,144],[194,1199,199,144],[596,1368,199,144],[429,1187,294,132],[642,0,278,227],[501,1514,361,23],[922,102,97,97],[766,1185,203,181],[925,201,97,97],[194,1028,233,169],[766,1004,248,179],[256,660,254,182],[512,820,254,182],[255,844,253,182],[768,820,254,182],[510,1004,254,181],[642,428,252,206],[642,229,281,197],[642,636,254,182],[0,660,254,182],[0,844,253,182]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.气候红 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.太阳 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.太阳文案 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.地图 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.葡葡IP = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bnt0 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.btn1 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.btn2 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.FollowNature = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.全年平均降雨量 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.s_1 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.s_2 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.s_3 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.s_4 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.云 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.底色 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.独特的地质优势产出优质的维纳斯 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.环境红 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.矿物质 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.矿物质红 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.矿物质文案 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.组12 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.雨1 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.雨10 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.雨2 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.雨3 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.雨4 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.雨5 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.雨6 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.雨7 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.雨8 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.雨9 = function() {
	this.spriteSheet = ss["LandSkin_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.补间98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.云();
	this.instance.parent = this;
	this.instance.setTransform(-110.8,-49.7,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.8,-49.7,221.6,99.5);


(lib.补间97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.云();
	this.instance.parent = this;
	this.instance.setTransform(-110.8,-49.7,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.8,-49.7,221.6,99.5);


(lib.补间96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.底色();
	this.instance.parent = this;
	this.instance.setTransform(-104.7,-85.5,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.7,-85.5,209.5,171.1);


(lib.补间95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.底色();
	this.instance.parent = this;
	this.instance.setTransform(-104.7,-85.5,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.7,-85.5,209.5,171.1);


(lib.补间94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.雨1();
	this.instance.parent = this;
	this.instance.setTransform(-95.7,-68.5,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.7,-68.5,191.5,137.1);


(lib.补间93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.雨1();
	this.instance.parent = this;
	this.instance.setTransform(-95.7,-68.5,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.7,-68.5,191.5,137.1);


(lib.补间60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矿物质文案();
	this.instance.parent = this;
	this.instance.setTransform(-116.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,-84.5,233,169);


(lib.补间59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矿物质文案();
	this.instance.parent = this;
	this.instance.setTransform(-116.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,-84.5,233,169);


(lib.补间58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矿物质文案();
	this.instance.parent = this;
	this.instance.setTransform(-116.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,-84.5,233,169);


(lib.补间57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矿物质文案();
	this.instance.parent = this;
	this.instance.setTransform(-116.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,-84.5,233,169);


(lib.补间56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.组12();
	this.instance.parent = this;
	this.instance.setTransform(-124,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-89.5,248,179);


(lib.补间55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.组12();
	this.instance.parent = this;
	this.instance.setTransform(-124,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-89.5,248,179);


(lib.补间54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.组12();
	this.instance.parent = this;
	this.instance.setTransform(-124,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-89.5,248,179);


(lib.补间53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.组12();
	this.instance.parent = this;
	this.instance.setTransform(-124,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-89.5,248,179);


(lib.补间52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矿物质();
	this.instance.parent = this;
	this.instance.setTransform(-101.5,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-90.5,203,181);


(lib.补间51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矿物质();
	this.instance.parent = this;
	this.instance.setTransform(-101.5,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-90.5,203,181);


(lib.补间50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矿物质();
	this.instance.parent = this;
	this.instance.setTransform(-101.5,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-90.5,203,181);


(lib.补间49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矿物质();
	this.instance.parent = this;
	this.instance.setTransform(-101.5,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-90.5,203,181);


(lib.补间46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s_4();
	this.instance.parent = this;
	this.instance.setTransform(-99,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-72,199,144);


(lib.补间38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s_3();
	this.instance.parent = this;
	this.instance.setTransform(-99,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-72,199,144);


(lib.补间29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s_2();
	this.instance.parent = this;
	this.instance.setTransform(-99,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-72,199,144);


(lib.补间28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s_1();
	this.instance.parent = this;
	this.instance.setTransform(-99,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-72,199,144);


(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.全年平均降雨量();
	this.instance.parent = this;
	this.instance.setTransform(-75,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-52,150,104);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.全年平均降雨量();
	this.instance.parent = this;
	this.instance.setTransform(-75,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-52,150,104);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.ritext = new cjs.Text("1000hrs", "29px 'Microsoft YaHei'", "#CE0035");
	this.ritext.textAlign = "center";
	this.ritext.lineHeight = 40;
	this.ritext.lineWidth = 111;
	this.ritext.parent = this;
	this.ritext.setTransform(0,-19.1);

	this.timeline.addTween(cjs.Tween.get(this.ritext).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-21.1,114.5,42.3);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.yutext = new cjs.Text("2500hrs", "29px 'Microsoft YaHei'", "#CE0035");
	this.yutext.textAlign = "center";
	this.yutext.lineHeight = 40;
	this.yutext.lineWidth = 114;
	this.yutext.parent = this;
	this.yutext.setTransform(0,-19.4);

	this.timeline.addTween(cjs.Tween.get(this.yutext).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-21.4,118,42.8);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.太阳文案();
	this.instance.parent = this;
	this.instance.setTransform(-75,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-52,150,104);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.太阳文案();
	this.instance.parent = this;
	this.instance.setTransform(-75,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-52,150,104);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.太阳();
	this.instance.parent = this;
	this.instance.setTransform(-96,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-108.5,192,217);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.太阳();
	this.instance.parent = this;
	this.instance.setTransform(-96,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-108.5,192,217);


// stage content:
(lib.LandInfoSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_103 = function() {
		this.gotoAndPlay(80)
	}
	this.frame_153 = function() {
		this.gotoAndPlay(140)
	}
	this.frame_206 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(103).call(this.frame_103).wait(50).call(this.frame_153).wait(53).call(this.frame_206).wait(1));

	// yu10
	this.instance = new lib.雨10();
	this.instance.parent = this;
	this.instance.setTransform(369,344,0.754,0.764);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(103).to({_off:false},0).to({_off:true},2).wait(102));

	// yu9
	this.instance_1 = new lib.雨9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(371,345,0.754,0.764);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).to({_off:true},3).wait(104));

	// yu8
	this.instance_2 = new lib.雨8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(371,346,0.754,0.764);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(97).to({_off:false},0).to({_off:true},3).wait(107));

	// yu7
	this.instance_3 = new lib.雨7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(372,346,0.754,0.764);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).to({_off:true},3).wait(110));

	// yu6
	this.instance_4 = new lib.雨6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(357,347,0.754,0.764);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({_off:false},0).to({_off:true},3).wait(113));

	// yu5
	this.instance_5 = new lib.雨5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(370,327,0.754,0.764);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(88).to({_off:false},0).to({_off:true},3).wait(116));

	// yu4
	this.instance_6 = new lib.雨4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(372,345,0.754,0.764);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(85).to({_off:false},0).to({_off:true},3).wait(119));

	// yu3
	this.instance_7 = new lib.雨3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(370,346,0.754,0.764);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({_off:false},0).to({_off:true},3).wait(122));

	// yu2
	this.instance_8 = new lib.雨2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(370,345,0.754,0.764);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(79).to({_off:false},0).to({_off:true},3).wait(125));

	// yu1
	this.instance_9 = new lib.补间93("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(625.7,441.8);
	this.instance_9.alpha = 0.57;
	this.instance_9._off = true;

	this.instance_10 = new lib.补间94("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(465.7,416.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},60).to({state:[{t:this.instance_10}]},16).to({state:[]},3).to({state:[]},26).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({_off:false},0).to({_off:true,x:465.7,y:416.1,alpha:1},16).wait(131));

	// 底色
	this.instance_11 = new lib.补间95("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(616.8,439.3);
	this.instance_11._off = true;

	this.instance_12 = new lib.补间96("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(457.8,420.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},60).to({state:[{t:this.instance_12}]},16).to({state:[]},29).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60).to({_off:false},0).to({_off:true,x:457.8,y:420.6},16).wait(131));

	// 云
	this.instance_13 = new lib.补间97("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(630.8,375.5);
	this.instance_13._off = true;

	this.instance_14 = new lib.补间98("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(470.8,353.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},60).to({state:[{t:this.instance_14}]},16).to({state:[]},29).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60).to({_off:false},0).to({_off:true,x:470.8,y:353.8},16).wait(131));

	// rain_p
	this.instance_15 = new lib.补间15("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(234.1,584.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(72).to({_off:false},0).to({_off:true},33).wait(102));

	// rain_t
	this.instance_16 = new lib.补间17("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(238,570.3,0.5,0.5,0,0,0,0.4,0.4);
	this.instance_16._off = true;

	this.instance_17 = new lib.补间18("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(238,586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},60).to({state:[{t:this.instance_17}]},15).to({state:[]},30).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,y:586},15).wait(132));

	// sun_p
	this.instance_18 = new lib.补间13("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(323,504.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(31).to({_off:false},0).to({startPosition:0},16).to({alpha:0},27).to({_off:true},31).wait(102));

	// sun_t
	this.instance_19 = new lib.补间3("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(325,491.4,0.55,0.55,0,0,0,0.8,1.2);
	this.instance_19._off = true;

	this.instance_20 = new lib.补间4("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(325,505);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(24).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,y:505},9).wait(174));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(24).to({_off:false},9).to({startPosition:0},14).to({alpha:0},27).to({_off:true},31).wait(102));

	// sun
	this.instance_21 = new lib.补间1("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(592.2,409.5);
	this.instance_21._off = true;

	this.instance_22 = new lib.补间2("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(462,409.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(8).to({_off:false},0).to({_off:true,x:462},24).wait(175));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(8).to({_off:false},24).to({startPosition:0},4).to({startPosition:0},11).to({alpha:0},29).to({_off:true},29).wait(102));

	// btn_active
	this.instance_23 = new lib.气候红();
	this.instance_23.parent = this;
	this.instance_23.setTransform(66,779);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(9).to({_off:false},0).to({_off:true},96).wait(102));

	// s_4
	this.instance_24 = new lib.补间46("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(379.3,597.5,0.5,0.5,0,0,0,0.1,0);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(129).to({_off:false},0).to({regX:0,scaleX:1.2,scaleY:1.2,x:379.2},5).to({scaleX:1,scaleY:1,x:379.3},5).to({scaleX:0.8,scaleY:0.8,x:379.2},7).to({scaleX:1,scaleY:1,x:379.3},7).to({_off:true},2).wait(52));

	// s_3
	this.instance_25 = new lib.补间38("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(133,508.8,0.5,0.5,0,0,0,0,0.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(122).to({_off:false},0).to({regY:0,scaleX:1.2,scaleY:1.2,y:508.7},5).to({scaleX:1,scaleY:1,y:508.8},5).to({scaleX:0.8,scaleY:0.8,y:508.7},7).to({scaleX:1,scaleY:1,y:508.8},7).to({scaleX:0.8,scaleY:0.8,y:508.7},7).to({_off:true},2).wait(52));

	// s_2
	this.instance_26 = new lib.补间29("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(273.8,392.3,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(115).to({_off:false},0).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,x:273.7,y:392.2},5).to({scaleX:1,scaleY:1,x:273.8,y:392.3},5).to({scaleX:0.8,scaleY:0.8,x:273.7,y:392.2},7).to({scaleX:1,scaleY:1,x:273.8,y:392.3},7).to({scaleX:0.8,scaleY:0.8,x:273.7,y:392.2},7).to({scaleX:1,scaleY:1,x:273.8,y:392.3},7).to({_off:true},2).wait(52));

	// s_1
	this.instance_27 = new lib.补间28("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(502.3,308,0.5,0.5,0,0,0,0.1,0);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(108).to({_off:false},0).to({regX:0,scaleX:1.2,scaleY:1.2,x:502.2},5).to({scaleX:1,scaleY:1,x:502.3},5).to({regX:0.1,regY:0.1,scaleX:0.8,scaleY:0.8},7).to({regX:0,regY:0,scaleX:1,scaleY:1},7).to({regX:0.1,regY:0.1,scaleX:0.8,scaleY:0.8},7).to({regX:0,regY:0,scaleX:1,scaleY:1},7).to({regX:0.1,regY:0.1,scaleX:0.8,scaleY:0.8},7).to({_off:true},2).wait(52));

	// btn_active
	this.instance_28 = new lib.环境红();
	this.instance_28.parent = this;
	this.instance_28.setTransform(275,778);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(109).to({_off:false},0).to({_off:true},46).wait(52));

	// m_3
	this.instance_29 = new lib.补间57("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(512.5,377.5,0.7,0.7);
	this.instance_29._off = true;

	this.instance_30 = new lib.补间58("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(512.5,377.5);
	this.instance_30._off = true;

	this.instance_31 = new lib.补间59("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(512.5,355.9);
	this.instance_31._off = true;

	this.instance_32 = new lib.补间60("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(512.5,377.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29}]},190).to({state:[{t:this.instance_30}]},8).to({state:[{t:this.instance_31}]},4).to({state:[{t:this.instance_32}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(190).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},8).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(190).to({_off:false},8).to({_off:true,y:355.9},4).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(198).to({_off:false},4).to({_off:true,y:377.5},4).wait(1));

	// m_2
	this.instance_33 = new lib.补间53("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(249,418.5,0.5,0.5);
	this.instance_33._off = true;

	this.instance_34 = new lib.补间54("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(249,418.5);
	this.instance_34._off = true;

	this.instance_35 = new lib.补间55("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(249,400.5);
	this.instance_35._off = true;

	this.instance_36 = new lib.补间56("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(249,418.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},179).to({state:[{t:this.instance_34}]},9).to({state:[{t:this.instance_35}]},4).to({state:[{t:this.instance_36}]},4).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(179).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},9).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(179).to({_off:false},9).to({_off:true,y:400.5},4).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(188).to({_off:false},4).to({_off:true,y:418.5},4).wait(11));

	// m_1
	this.instance_37 = new lib.补间49("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(318.5,619.5,0.5,0.5);
	this.instance_37._off = true;

	this.instance_38 = new lib.补间50("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(318.5,619.5);
	this.instance_38._off = true;

	this.instance_39 = new lib.补间51("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(318.5,603.3);
	this.instance_39._off = true;

	this.instance_40 = new lib.补间52("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(318.5,619.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_37}]},176).to({state:[{t:this.instance_38}]},9).to({state:[{t:this.instance_39}]},5).to({state:[{t:this.instance_40}]},4).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(176).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},9).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(176).to({_off:false},9).to({_off:true,y:603.3},5).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(185).to({_off:false},5).to({_off:true,y:619.5},4).wait(13));

	// btn_active
	this.instance_41 = new lib.矿物质红();
	this.instance_41.parent = this;
	this.instance_41.setTransform(484,780);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(177).to({_off:false},0).wait(30));

	// btn_2
	this.instance_42 = new lib.btn2();
	this.instance_42.parent = this;
	this.instance_42.setTransform(483,778);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(207));

	// btn_1
	this.instance_43 = new lib.btn1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(275,778);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(207));

	// btn_0
	this.instance_44 = new lib.bnt0();
	this.instance_44.parent = this;
	this.instance_44.setTransform(65,778);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(207));

	// 图层 2
	this.instance_45 = new lib.葡葡IP();
	this.instance_45.parent = this;
	this.instance_45.setTransform(456,19);

	this.text = new cjs.Text("选择了解葡萄园更多信息", "22px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 304;
	this.text.parent = this;
	this.text.setTransform(316.2,888.8);

	this.instance_46 = new lib.FollowNature();
	this.instance_46.parent = this;
	this.instance_46.setTransform(25,119);

	this.instance_47 = new lib.独特的地质优势产出优质的维纳斯();
	this.instance_47.parent = this;
	this.instance_47.setTransform(25,84);

	this.instance_48 = new lib.地图();
	this.instance_48.parent = this;
	this.instance_48.setTransform(29,135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.text},{t:this.instance_45}]}).wait(207));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(345,619,644,964.3);
// library properties:
lib.properties = {
	width: 640,
	height: 1200,
	fps: 24,
	color: "#454545",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/land/LandSkin_atlas_.png", id:"LandSkin_atlas_"}
	],
	preloads: []
};




})(landInfoLib = landInfoLib||{}, landInfoImages = landInfoImages||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var landInfoLib, landInfoImages, createjs, ss, AdobeAn;