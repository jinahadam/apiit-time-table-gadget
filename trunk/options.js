/*
Copyright (C) 2007 Jinah Adam

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var xmlHttpOptions = null;
var cw = options.getValue("cweek");
function onOpen() {
	dis.visible = false;
	llabel.visible = true;
	xmlHttpOptions = new XMLHttpRequest();
  try {
    xmlHttpOptions.open("GET","http://members.dhivehinet.net.mv/m-jinah/options.php?r=" + Math.random(), true);
  } catch (e) {
    // Catch invalid URLs
	alert("an error occured");
     xmlHttpOptions = null;
    return;
  }

   xmlHttpOptions.onreadystatechange = hRequestStateChange;

   try {
    xmlHttpOptions.send();
  } catch (e) {
  	alert("an error occured");
     xmlHttpOptions = null;
    return;
  }
  
  intakeCode.value = options.getValue("code");
 
}
function setvalue(x){
	cw = c.getValue();
}
function hRequestStateChange() 
{
  if (xmlHttpOptions.readyState != 4)
    return;
  if (xmlHttpOptions.status != 200) {
    xmlHttpOptions = null;
    return;
  }
  var xmlResponse = xmlHttpOptions.responseXML;
  xmlRoot = xmlResponse.documentElement;
  weeklist = xmlRoot.getElementsByTagName("weeklist");
  var a=new Array(weeklist.length);
   for(var i=0;i<a.length;i++)
  {
  	a[i] = weeklist[i].firstChild.data;
  }
  c=new ComboBox(view,70,13,100,a.length,"setvalue",a);
  c.setValue(cw);
  llabel.visible = false;
  dis.visible = true;
  
  xmlHttpOptions = null;
}

function onCancel() {
  // No settings will be saved.
}

function onOk() {
    options.putValue("code",intakeCode.value);
   options.putValue("cweek",cw);
 }
