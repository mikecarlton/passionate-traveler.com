// Created by iWeb 3.0.4 local-build-20111019

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="688" height="532" style="height: 532px; left: 6px; position: absolute; top: 2px; width: 688px; z-index: 1; "><param name="src" value="../../Media/ArcLight%20Exhibit%20Movie.mov" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="688" height="532" style="height: 532px; left: 6px; position: absolute; top: 2px; width: 688px; z-index: 1; "><param name="src" value="ArcLight_Exhibit_files/ArcLight%20Exhibit%20Movie.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/ArcLight%20Exhibit%20Movie.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="688" height="532" data="../../Media/ArcLight%20Exhibit%20Movie.mov" style="height: 532px; left: 6px; position: absolute; top: 2px; width: 688px; z-index: 1; "><param name="src" value="../../Media/ArcLight%20Exhibit%20Movie.mov"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:9,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:1.000000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,46),url:'ArcLight_Exhibit_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'ArcLight_Exhibit_files/stroke_1.png'},{rect:new IWRect(1,-1,57,2),url:'ArcLight_Exhibit_files/stroke_2.png'},{rect:new IWRect(58,-1,2,2),url:'ArcLight_Exhibit_files/stroke_3.png'},{rect:new IWRect(58,1,2,46),url:'ArcLight_Exhibit_files/stroke_4.png'},{rect:new IWRect(58,47,2,2),url:'ArcLight_Exhibit_files/stroke_5.png'},{rect:new IWRect(1,47,57,2),url:'ArcLight_Exhibit_files/stroke_6.png'},{rect:new IWRect(-1,47,2,2),url:'ArcLight_Exhibit_files/stroke_7.png'}],new IWSize(59,48))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('ArcLight_Exhibit_files/ArcLight_ExhibitMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
