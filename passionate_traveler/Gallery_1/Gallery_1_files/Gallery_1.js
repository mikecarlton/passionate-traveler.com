// Created by iWeb 3.0.3 local-build-20110402

function createMediaStream_id2()
{return IWCreateMediaCollection("http://www.passionate-traveler.com/passionate_traveler/Gallery_1/Gallery_1_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.passionate-traveler.com/passionate_traveler/Gallery_1',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget13'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.passionate-traveler.com/passionate_traveler/Gallery_1',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(259,194),new IWSize(259,34),new IWSize(309,243),27,27,0,new IWSize(29,29)),new IWPhotoFrame([IWCreateImage('Gallery_1_files/ul.png'),IWCreateImage('Gallery_1_files/top.png'),IWCreateImage('Gallery_1_files/ur.png'),IWCreateImage('Gallery_1_files/right.png'),IWCreateImage('Gallery_1_files/lr.png'),IWCreateImage('Gallery_1_files/bottom.png'),IWCreateImage('Gallery_1_files/ll.png'),IWCreateImage('Gallery_1_files/left.png')],null,0,0.500000,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget13',null,'widget14',{showTitle:true,showMetric:false})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:9,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:1.000000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,46),url:'Gallery_1_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Gallery_1_files/stroke_1.png'},{rect:new IWRect(1,-1,57,2),url:'Gallery_1_files/stroke_2.png'},{rect:new IWRect(58,-1,2,2),url:'Gallery_1_files/stroke_3.png'},{rect:new IWRect(58,1,2,46),url:'Gallery_1_files/stroke_4.png'},{rect:new IWRect(58,47,2,2),url:'Gallery_1_files/stroke_5.png'},{rect:new IWRect(1,47,57,2),url:'Gallery_1_files/stroke_6.png'},{rect:new IWRect(-1,47,2,2),url:'Gallery_1_files/stroke_7.png'}],new IWSize(59,48))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Gallery_1_files/Gallery_1Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
