// Created by iWeb 3.0.4 local-build-20111019

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="693" height="406" style="height: 406px; left: 4px; position: absolute; top: 5px; width: 693px; z-index: 1; "><param name="src" value="../../Media/PNG-large.m4v" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="693" height="406" style="height: 406px; left: 4px; position: absolute; top: 5px; width: 693px; z-index: 1; "><param name="src" value="Papua_New_Guinea_files/PNG-large.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/PNG-large.m4v"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="693" height="406" data="../../Media/PNG-large.m4v" style="height: 406px; left: 4px; position: absolute; top: 5px; width: 693px; z-index: 1; "><param name="src" value="../../Media/PNG-large.m4v"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Papua_New_Guinea_files/Papua_New_GuineaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');fixupIECSS3Opacity('id3');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
