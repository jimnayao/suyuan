(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"PlaceSkin_atlas_", frames: [[0,0,639,638],[790,390,41,53],[641,283,272,105],[641,566,150,26],[641,390,147,174],[641,0,250,281]]}
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



(lib.addr = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.addr_icon = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cloud = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.FromLanguedoc = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.IP = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.sun = function() {
	this.spriteSheet = ss["PlaceSkin_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sun();
	this.instance.parent = this;
	this.instance.setTransform(-125,-140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-140.5,250,281);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sun();
	this.instance.parent = this;
	this.instance.setTransform(-125,-140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-140.5,250,281);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sun();
	this.instance.parent = this;
	this.instance.setTransform(-125,-140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-140.5,250,281);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cloud();
	this.instance.parent = this;
	this.instance.setTransform(-136,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-52.5,272,105);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cloud();
	this.instance.parent = this;
	this.instance.setTransform(-136,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-52.5,272,105);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cloud();
	this.instance.parent = this;
	this.instance.setTransform(-136,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-52.5,272,105);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.addr_icon();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-26.5,41,53);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.addr_icon();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-26.5,41,53);


// stage content:
(lib.PlaceSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_106 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(106).call(this.frame_106).wait(1));

	// addr_e
	this.text = new cjs.Text("LANGUEDOC", "22px 'Microsoft YaHei'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 206;
	this.text.parent = this;
	this.text.setTransform(340.1,648.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(107));

	// addr_c
	this.text_1 = new cjs.Text("郎格多克 ", "22px 'Microsoft YaHei'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 207;
	this.text_1.parent = this;
	this.text_1.setTransform(340.3,675.4);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(107));

	// cloud
	this.instance = new lib.补间3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(161,734);
	this.instance._off = true;

	this.instance_1 = new lib.补间4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(202,734);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(161,734);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},52).to({state:[{t:this.instance_2}]},52).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true,x:202},52).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},52).to({_off:true,x:161},52).wait(1));

	// sun
	this.instance_3 = new lib.补间6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(484,482.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.补间7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(398,482.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(484,482.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},52).to({state:[{t:this.instance_5}]},52).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({_off:true,x:398,y:482.5},52).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},52).to({_off:true,x:484,y:482.1},52).wait(1));

	// addr_icon
	this.instance_6 = new lib.补间1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(343.5,746.6);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(343.5,739);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({_off:true,y:739},10).to({_off:false,y:746.6},11).to({_off:true,y:739},10).to({_off:false,y:746.6},11).to({_off:true,y:739},10).to({_off:false,y:746.6},11).to({_off:true,y:739},10).to({_off:false,y:746.6},11).to({_off:true,y:739},10).to({_off:false,y:746.6},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},10).to({_off:true,y:746.6},11).to({_off:false,y:739},10).to({_off:true,y:746.6},11).to({_off:false,y:739},10).to({_off:true,y:746.6},11).to({_off:false,y:739},10).to({_off:true,y:746.6},11).to({_off:false,y:739},10).to({_off:true,y:746.6},10).wait(1));

	// addr
	this.instance_8 = new lib.addr();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1,259);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(107));

	// name_e
	this.instance_9 = new lib.FromLanguedoc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(25,121);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(107));

	// name_c
	this.text_2 = new cjs.Text("的葡萄园", "22px 'Microsoft YaHei'");
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 90;
	this.text_2.parent = this;
	this.text_2.setTransform(294.7,82.2);

	this.text_3 = new cjs.Text("朗格多克区", "22px 'Microsoft YaHei'", "#CE0035");
	this.text_3.lineHeight = 29;
	this.text_3.lineWidth = 119;
	this.text_3.parent = this;
	this.text_3.setTransform(181.8,82.2);

	this.text_4 = new cjs.Text("来自法国南部区", "22px 'Microsoft YaHei'");
	this.text_4.lineHeight = 29;
	this.text_4.lineWidth = 156;
	this.text_4.parent = this;
	this.text_4.setTransform(26.4,82.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4},{t:this.text_3},{t:this.text_2}]}).wait(107));

	// IP
	this.instance_10 = new lib.IP();
	this.instance_10.parent = this;
	this.instance_10.setTransform(452,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321,628,639,869);
// library properties:
lib.properties = {
	width: 640,
	height: 1200,
	fps: 24,
	color: "#454545",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/place/PlaceSkin_atlas_.png", id:"PlaceSkin_atlas_"}
	],
	preloads: []
};




})(placeLib = placeLib||{}, placeImages = placeImages||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var placeLib, placeImages, createjs, ss, AdobeAn;