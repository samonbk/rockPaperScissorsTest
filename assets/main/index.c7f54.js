System.register("chunks:///_virtual/Audio.ts",["./rollupPluginModLoBabelHelpers.js","cc","./sound.ts"],(function(i){"use strict";var n,e,u,t,o,r,c,l,s,a,p;return{setters:[function(i){n=i.applyDecoratedDescriptor,e=i.inheritsLoose,u=i.initializerDefineProperty,t=i.assertThisInitialized},function(i){o=i.cclegacy,r=i._decorator,c=i.Sprite,l=i.SpriteFrame,s=i.AudioSource,a=i.Component},function(i){p=i.default}],execute:function(){var f,S,d,h,b,M,m,y,g,O,w,v,z,P,A,k,F,T,C,N,B,_,D,j;o._RF.push({},"b519ePiPZVNBb4UIXOjmPrT","Audio",void 0);var I=r.ccclass,L=r.property;i("default",(f=I("Audio"),S=L(p),d=L(p),h=L(c),b=L(c),M=L(l),m=L(l),y=L(l),g=L(l),O=L(s),w=L(s),f(((j=function(i){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return n=i.call.apply(i,[this].concat(o))||this,u(n,"Music",P,t(n)),u(n,"Sound",A,t(n)),u(n,"MusicSprite",k,t(n)),u(n,"SoundSprite",F,t(n)),u(n,"MusicOn",T,t(n)),u(n,"MusicOff",C,t(n)),u(n,"SoundOn",N,t(n)),u(n,"SoundOff",B,t(n)),u(n,"MusicSource",_,t(n)),u(n,"SoundSource",D,t(n)),n.One=!0,n.Two=!0,n}e(n,i);var o=n.prototype;return o.start=function(){this.MusicPlay("music"),n.instance=this},o.MusicPlay=function(i){var n=this.Music.find((function(n){return n.Name==i}));null==n?console.log("Music not found please check...!"):(this.MusicSource.clip=n.AudioClip,this.MusicSource.play())},o.MusicPause=function(i){var n=this.Music.find((function(n){return n.Name==i}));null==n?console.log("Music not found please check...!"):(this.MusicSource.clip=n.AudioClip,this.MusicSource.stop())},o.SoundPlay=function(i){var n=this.Sound.find((function(n){return n.Name==i}));null==n?console.log("Sound not found please check...!"):(this.SoundSource.clip=n.AudioClip,this.SoundSource.play())},o.SoundPause=function(i){var n=this.Sound.find((function(n){return n.Name==i}));null==n?console.log("Sound not found please check...!"):(this.SoundSource.clip=n.AudioClip,this.SoundSource.stop())},o.MusicButton=function(){this.SoundPlay("click"),this.One=!this.One,this.One?this.One&&(this.MusicSource.volume=1,this.MusicSprite.spriteFrame=this.MusicOn):(this.MusicSource.volume=0,this.MusicSprite.spriteFrame=this.MusicOff)},o.SoundButton=function(){this.SoundPlay("click"),this.Two=!this.Two,this.Two?this.Two&&(this.SoundSource.volume=1,this.SoundSprite.spriteFrame=this.SoundOn):(this.SoundSource.volume=0,this.SoundSprite.spriteFrame=this.SoundOff)},n}(a)).instance=null,P=n((z=j).prototype,"Music",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),A=n(z.prototype,"Sound",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),k=n(z.prototype,"MusicSprite",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=n(z.prototype,"SoundSprite",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=n(z.prototype,"MusicOn",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=n(z.prototype,"MusicOff",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=n(z.prototype,"SoundOn",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=n(z.prototype,"SoundOff",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=n(z.prototype,"MusicSource",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=n(z.prototype,"SoundSource",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=z))||v));o._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,i,n,s,l,r,a,g,h,c,p,C,d,m,u,T;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,c=t.Label,p=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,T=t.Component}],execute:function(){var L,f,M,b,v,x,E,S,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(L=A("internal.DebugViewRuntimeControl"),f=y(r),M=y(r),b=y(r),L((E=e((x=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",E,n(e)),i(e,"singleModeToggle",S,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct TRT","Env TRT","TRT All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","TRT","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[p.WHITE,p.BLACK,p.RED,p.GREEN,p.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var T=h(this.EnableAllCompositeModeButton.getChildByName("Label"));T.setPosition(i+(u>0?450:150),n,0),T.setScale(.75,.75,.75),T.parent=r;var L=T.getComponent(c);L.string=u?"----------Composite Mode----------":"----------Single Mode----------",L.color=p.WHITE,L.overflow=0,this.labelComponentList[this.labelComponentList.length]=L}n-=20;for(var f=0,M=0;M<this.strSingle.length;M++,f++){M===this.strSingle.length>>1&&(i+=200,f=0);var b=M?h(this.singleModeToggle):this.singleModeToggle;b.setPosition(i,n-20*f,0),b.setScale(.5,.5,.5),b.parent=this.singleModeToggle.parent;var v=b.getComponentInChildren(C);v.string=this.strSingle[M],this.textComponentList[this.textComponentList.length]=v,this.textContentList[this.textContentList.length]=v.string,b.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[M]=b}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var x=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=x;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+90,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.changeTextColor,this),E.parent=l,(x=E.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=x;var S=h(this.EnableAllCompositeModeButton);S.setPosition(i+200,n,0),S.setScale(.5,.5,.5),S.on(m.EventType.CLICK,this.hideUI,this),S.parent=this.node.parent,(x=S.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=x,this.hideButtonLabel=x,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(T)).prototype,"compositeModeToggle",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(x.prototype,"singleModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(x.prototype,"EnableAllCompositeModeButton",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=x))||v));s._RF.pop()}}}));

System.register("chunks:///_virtual/game.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Audio.ts"],(function(t){"use strict";var e,i,r,a,n,s,l,o,u,p,c,h,m,y,S;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){n=t.cclegacy,s=t._decorator,l=t.Button,o=t.Node,u=t.Sprite,p=t.SpriteFrame,c=t.Animation,h=t.Label,m=t.director,y=t.Component},function(t){S=t.default}],execute:function(){var g,f,R,b,F,T,x,d,w,B,v,z,A,k,H,P,L,N,G,D,I,W,_,M,E,Y,j,C,O,Q,U,V,q,J,K,X,Z,$,tt,et,it,rt,at,nt,st,lt,ot,ut,pt;n._RF.push({},"6b828u+Rp5EvayQ4r3Epez1","game",void 0);var ct=s.ccclass,ht=s.property;t("game",(g=ct("game"),f=ht(l),R=ht(o),b=ht(u),F=ht(p),T=ht(u),x=ht(p),d=ht(u),w=ht(p),B=ht(p),v=ht(p),z=ht(u),A=ht(p),k=ht(o),H=ht(c),P=ht(h),L=ht(h),N=ht(h),G=ht(h),D=ht(h),I=ht(c),W=ht(c),_=ht(c),M=ht(c),g((j=e((Y=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return e=t.call.apply(t,[this].concat(n))||this,r(e,"startGameBtn",j,a(e)),r(e,"startButtonNode",C,a(e)),r(e,"aiSprite",O,a(e)),r(e,"aiFrame",Q,a(e)),r(e,"playerSprite",U,a(e)),r(e,"playerFrame",V,a(e)),r(e,"playerBtn",q,a(e)),r(e,"paperBtnFrame",J,a(e)),r(e,"rockBtnFrame",K,a(e)),r(e,"traiBtnFrame",X,a(e)),r(e,"aiReact",Z,a(e)),r(e,"aiReactFrame",$,a(e)),r(e,"gameRule",tt,a(e)),r(e,"gameRuleAnimation",et,a(e)),r(e,"playerScoreText",it,a(e)),r(e,"aiScoreText",rt,a(e)),r(e,"finalResultText",at,a(e)),r(e,"winnerText",nt,a(e)),r(e,"winnerResult",st,a(e)),r(e,"playerHandAnimation",lt,a(e)),r(e,"aiHandAnimation",ot,a(e)),r(e,"winnerAnimation",ut,a(e)),r(e,"vsAnimation",pt,a(e)),e.aiScore=0,e.playerScore=0,e.aiResultText="",e.playerResultText="",e}i(e,t);var n=e.prototype;return n.start=function(){this.playerResultText="paper",this.playerBtn[0].spriteFrame=this.paperBtnFrame[1]},n.update=function(t){},n.startGame=function(){var t=this;S.instance.SoundPlay("start"),this.startGameBtn.interactable=!1,this.playerHandAnimation.play("playerHand"),this.aiHandAnimation.play("aiHand"),this.startRandom(),setTimeout((function(){t.stopAnimation(),t.aiResult(),t.playerResult(),t.finalResult(),t.winner()}),1600)},n.onLoad=function(){},n.getRandomIndex=function(){return Math.floor(3*Math.random())+1},n.getIndexName=function(t){return["paper","rock","trai"][t-1]||"Unknown Name"},n.startRandom=function(){var t=this.getRandomIndex(),e=this.getIndexName(t);this.aiResultText=e},n.aiResult=function(){var t=this.aiFrame[0],e=this.aiFrame[1],i=this.aiFrame[2];"paper"==this.aiResultText?this.aiSprite.spriteFrame=t:"rock"==this.aiResultText?this.aiSprite.spriteFrame=e:this.aiSprite.spriteFrame=i},n.playerResult=function(){var t=this.playerFrame[0],e=this.playerFrame[1],i=this.playerFrame[2];"paper"==this.playerResultText?this.playerSprite.spriteFrame=t:"rock"==this.playerResultText?this.playerSprite.spriteFrame=e:this.playerSprite.spriteFrame=i},n.finalResult=function(){var t=this.aiReactFrame[0],e=this.aiReactFrame[1],i=this.aiReactFrame[2];this.aiReactFrame[3];"paper"==this.playerResultText&&"paper"==this.aiResultText?(this.finalResultText.string="Draw",this.aiScore+=0,this.playerScore+=0,this.aiScoreText.string=this.aiScore.toString()+"/10",this.playerScoreText.string=this.playerScore.toString()+"/10",this.aiReact.spriteFrame=t):"paper"==this.playerResultText&&"rock"==this.aiResultText?(this.finalResultText.string="Win",this.aiScore+=0,this.playerScore+=1,this.aiScoreText.string=this.aiScore.toString()+"/10",this.playerScoreText.string=this.playerScore.toString()+"/10",this.aiReact.spriteFrame=i):"paper"==this.playerResultText&&"trai"==this.aiResultText||"rock"==this.playerResultText&&"paper"==this.aiResultText?(this.finalResultText.string="Lose",this.aiScore+=1,this.playerScore+=0,this.aiScoreText.string=this.aiScore.toString()+"/10",this.playerScoreText.string=this.playerScore.toString()+"/10",this.aiReact.spriteFrame=e):"rock"==this.playerResultText&&"rock"==this.aiResultText?(this.finalResultText.string="Draw",this.aiScore+=0,this.playerScore+=0,this.aiScoreText.string=this.aiScore.toString()+"/10",this.playerScoreText.string=this.playerScore.toString()+"/10",this.aiReact.spriteFrame=t):"rock"==this.playerResultText&&"trai"==this.aiResultText||"trai"==this.playerResultText&&"paper"==this.aiResultText?(this.finalResultText.string="Win",this.aiScore+=0,this.playerScore+=1,this.aiScoreText.string=this.aiScore.toString()+"/10",this.playerScoreText.string=this.playerScore.toString()+"/10",this.aiReact.spriteFrame=i):"trai"==this.playerResultText&&"rock"==this.aiResultText?(this.finalResultText.string="Lose",this.aiScore+=1,this.playerScore+=0,this.aiScoreText.string=this.aiScore.toString()+"/10",this.playerScoreText.string=this.playerScore.toString()+"/10",this.aiReact.spriteFrame=e):(this.finalResultText.string="Draw",this.aiScore+=0,this.playerScore+=0,this.aiScoreText.string=this.aiScore.toString()+"/10",this.playerScoreText.string=this.playerScore.toString()+"/10",this.aiReact.spriteFrame=t),console.log("ai Score"+this.aiScore),console.log("player Score"+this.playerScore)},n.stopAnimation=function(){this.playerHandAnimation.play("playerStop"),this.aiHandAnimation.play("aiStop")},n.winner=function(){var t=this,e=(this.aiReactFrame[0],this.aiReactFrame[1]),i=(this.aiReactFrame[2],this.aiReactFrame[3]);10==this.aiScore&&(S.instance.SoundPlay("gameOver"),this.winnerAnimation.play("gameRuleShow"),this.winnerText.string="You Lose",this.winnerResult.string=this.playerScore+":"+this.aiScore,this.aiReact.spriteFrame=e,this.startButtonNode.active=!1,console.log("you lose")),10==this.playerScore&&(S.instance.SoundPlay("gameWin"),this.winnerAnimation.play("gameRuleShow"),this.winnerText.string="You Win",this.winnerResult.string=this.playerScore+":"+this.aiScore,this.aiReact.spriteFrame=i,this.startButtonNode.active=!1,console.log("you win")),setTimeout((function(){t.startGameBtn.interactable=!0}),300)},n.reStart=function(){var t=this;S.instance.SoundPlay("start");this.playerFrame[0];var e=this.playerFrame[1],i=(this.playerFrame[2],this.aiFrame[0],this.aiFrame[1]);this.aiFrame[2];this.playerSprite.spriteFrame=e,this.aiSprite.spriteFrame=i,this.winnerAnimation.play("gameRuleHide"),this.aiScore=0,this.playerScore=0,this.playerScoreText.string=this.playerScore.toString()+"/10",this.aiScoreText.string=this.aiScore.toString()+"/10",this.finalResultText.string="Vs",this.startButtonNode.active=!0,setTimeout((function(){t.vsAnimation.play()}),500)},n.paperButton=function(){S.instance.SoundPlay("click");var t=this.playerBtn[0],e=this.playerBtn[1],i=this.playerBtn[2];t.spriteFrame=this.paperBtnFrame[1],e.spriteFrame=this.rockBtnFrame[0],i.spriteFrame=this.traiBtnFrame[0],this.playerResultText="paper"},n.rockButton=function(){S.instance.SoundPlay("click");var t=this.playerBtn[0],e=this.playerBtn[1],i=this.playerBtn[2];t.spriteFrame=this.paperBtnFrame[0],e.spriteFrame=this.rockBtnFrame[1],i.spriteFrame=this.traiBtnFrame[0],this.playerResultText="rock"},n.traiButton=function(){S.instance.SoundPlay("click");var t=this.playerBtn[0],e=this.playerBtn[1],i=this.playerBtn[2];t.spriteFrame=this.paperBtnFrame[0],e.spriteFrame=this.rockBtnFrame[0],i.spriteFrame=this.traiBtnFrame[1],this.playerResultText="trai"},n.showGameRule=function(){S.instance.SoundPlay("click"),this.gameRule.active=!0,this.gameRuleAnimation.play("gameRuleShow")},n.hideGameRule=function(){var t=this;S.instance.SoundPlay("click"),this.gameRuleAnimation.play("gameRuleHide"),setTimeout((function(){t.gameRule.active=!1}),300)},n.backToLoading=function(){m.loadScene("Loading")},e}(y)).prototype,"startGameBtn",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=e(Y.prototype,"startButtonNode",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(Y.prototype,"aiSprite",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=e(Y.prototype,"aiFrame",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),U=e(Y.prototype,"playerSprite",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=e(Y.prototype,"playerFrame",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),q=e(Y.prototype,"playerBtn",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),J=e(Y.prototype,"paperBtnFrame",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),K=e(Y.prototype,"rockBtnFrame",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),X=e(Y.prototype,"traiBtnFrame",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Z=e(Y.prototype,"aiReact",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=e(Y.prototype,"aiReactFrame",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),tt=e(Y.prototype,"gameRule",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),et=e(Y.prototype,"gameRuleAnimation",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),it=e(Y.prototype,"playerScoreText",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),rt=e(Y.prototype,"aiScoreText",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),at=e(Y.prototype,"finalResultText",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),nt=e(Y.prototype,"winnerText",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),st=e(Y.prototype,"winnerResult",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),lt=e(Y.prototype,"playerHandAnimation",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ot=e(Y.prototype,"aiHandAnimation",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ut=e(Y.prototype,"winnerAnimation",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),pt=e(Y.prototype,"vsAnimation",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=Y))||E));n._RF.pop()}}}));

System.register("chunks:///_virtual/loading.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,e,n,r,o,a,c,l,u;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,c=t.AudioSource,l=t.director,u=t.Component}],execute:function(){var s,p,d,f,g;o._RF.push({},"641edg7j01OZp9xTfAE9exE","loading",void 0);var y=a.ccclass,h=a.property;t("loading",(s=y("loading"),p=h(c),s((g=i((f=function(t){function i(){for(var i,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return i=t.call.apply(t,[this].concat(o))||this,n(i,"loadingMusic",g,r(i)),i}e(i,t);var o=i.prototype;return o.start=function(){this.loadingMusic.play()},o.startPlayBtn=function(){this.loadingMusic.stop(),l.loadScene("Game")},o.update=function(t){},i}(u)).prototype,"loadingMusic",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Audio.ts","./game.ts","./loading.ts","./sound.ts"],(function(){"use strict";return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/sound.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var i,t,r,n,o;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.initializerDefineProperty},function(e){r=e.cclegacy,n=e._decorator,o=e.AudioClip}],execute:function(){var u,l,a,c,s,p,d;r._RF.push({},"12f50G/OgFEe4DJvTJahiZc","sound",void 0);var f=n.ccclass,b=n.property;e("default",(u=f("Sound"),l=b(String),a=b(o),u((p=i((s=function(){t(this,"Name",p,this),t(this,"AudioClip",d,this)}).prototype,"Name",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),d=i(s.prototype,"AudioClip",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=s))||c));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});