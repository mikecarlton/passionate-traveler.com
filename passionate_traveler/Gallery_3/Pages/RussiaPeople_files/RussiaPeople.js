// Created by iWeb 3.0.3 local-build-20110319

function createMediaStream_id2()
{return IWCreatePhotocast("http://www.passionate-traveler.com/passionate_traveler/Gallery_3/Pages/RussiaPeople_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.passionate-traveler.com/passionate_traveler/Gallery_3/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.passionate-traveler.com/passionate_traveler/Gallery_3/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(187,187),new IWSize(187,32),new IWSize(229,234),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-1,1,2,185),url:'RussiaPeople_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'RussiaPeople_files/stroke_1.png'},{rect:new IWRect(1,-1,185,2),url:'RussiaPeople_files/stroke_2.png'},{rect:new IWRect(186,-1,2,2),url:'RussiaPeople_files/stroke_3.png'},{rect:new IWRect(186,1,2,185),url:'RussiaPeople_files/stroke_4.png'},{rect:new IWRect(186,186,2,2),url:'RussiaPeople_files/stroke_5.png'},{rect:new IWRect(1,186,185,2),url:'RussiaPeople_files/stroke_6.png'},{rect:new IWRect(-1,186,2,2),url:'RussiaPeople_files/stroke_7.png'}],new IWSize(187,187)),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:0,reflectionOffset:2,captionHeight:0,fullScreen:1,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,46),url:'RussiaPeople_files/stroke_8.png'},{rect:new IWRect(-1,-1,2,2),url:'RussiaPeople_files/stroke_9.png'},{rect:new IWRect(1,-1,57,2),url:'RussiaPeople_files/stroke_10.png'},{rect:new IWRect(58,-1,2,2),url:'RussiaPeople_files/stroke_11.png'},{rect:new IWRect(58,1,2,46),url:'RussiaPeople_files/stroke_12.png'},{rect:new IWRect(58,47,2,2),url:'RussiaPeople_files/stroke_13.png'},{rect:new IWRect(1,47,57,2),url:'RussiaPeople_files/stroke_14.png'},{rect:new IWRect(-1,47,2,2),url:'RussiaPeople_files/stroke_15.png'}],new IWSize(59,48)),shadow_0:new IWShadow({blurRadius:9,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('RussiaPeople_files/RussiaPeopleMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
