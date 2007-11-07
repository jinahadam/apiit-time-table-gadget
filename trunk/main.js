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
setInterval ( "view_onOpen()", 86400000 ); //update every 24 hours
var xmlHttp = null;
var  url = "http://members.dhivehinet.net.mv/m-jinah/timetable.php?intake=TP1F0701COM&r=" +Math.random();
var  str = "TP1F0701COM";

function view_onOpen() {
		icode.innerText = "connecting to apiit webspace....";
	xmlHttp = new XMLHttpRequest();
  try {
    xmlHttp.open("GET",url, true);
  } catch (e) {
    xmlHttp = null;
    return;
  }
  xmlHttp.onreadystatechange = handleRequestStateChange;

  try {
    xmlHttp.send();
  } catch (e) {
    xmlHttp = null;
    return;
  }
}

function getWeekDay()
{
    var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var now = new Date();
	var dn = dayName[now.getDay()];
	return dn;
}
// function called when the state of the HTTP request changes
function handleRequestStateChange() 
{
if(xmlHttp)
{
  if (xmlHttp.readyState != 4)
    return;
  if (xmlHttp.status != 200) {
    label.innerText = "Time table is not available at the moment";
    xmlHttp = null;
    return;
  }
  var xmlResponse = xmlHttp.responseXML;
  xmlRoot = xmlResponse.documentElement;
  titleArray = xmlRoot.getElementsByTagName("class");
  var weekn = xmlRoot.getElementsByTagName("week");
  str = options.getValue("code") + "(" + weekn[0].firstChild.data + ")" + "\n\n";
  icode.innerText = str;
 
  //=============================
  if(getWeekDay() == "Monday")
  {
  	moday_label.innerText= "Monday(Today)";
  }
  else 
  {
  	moday_label.innerText= "Monday";
  }	
  monList.removeAllElements();
  var mi = 0;
  for(var i=0;i<titleArray.length; i++)
  {
	if(titleArray.item(i).parentNode.nodeName == "mon")
	{
		//str += titleArray.item(i).childNodes(1).firstChild.data+ "\n";
		var tim = titleArray.item(i).childNodes(0).firstChild.data;
		var loc = titleArray.item(i).childNodes(1).firstChild.data;
		var subj = titleArray.item(i).childNodes(2).firstChild.data;
		var st = tim + " " + loc + " " + subj;
		mi++;
		monList.appendElement("<listitem name=\"item\" tooltip=\""+st+"\"><label size=\"7\" color=\"#000000\" y=\"0\" tooltip=\""+st+"\">"+st+"</label></listitem>");
	}
  }
  
  //=============================
  tuesday_label.y = moday_label.y + (mi*12) + 13;
  tueList.y = tuesday_label.y + 13;
  var mi = 0;
  if(getWeekDay() == "Tuesday")
  {
  	 tuesday_label.innerText= "Tuesday(Today)";
  }
  else 
  {
  	 tuesday_label.innerText= "Tuesday";
  }	
  tueList.removeAllElements();
  for(var i=0;i<titleArray.length; i++)
  {
	if(titleArray.item(i).parentNode.nodeName == "tue")
	{
		//str += titleArray.item(i).childNodes(1).firstChild.data+ "\n";
		var tim = titleArray.item(i).childNodes(0).firstChild.data;
		var loc = titleArray.item(i).childNodes(1).firstChild.data;
		var subj = titleArray.item(i).childNodes(2).firstChild.data;
		var st = tim + " " + loc + " " + subj;
		mi++;
		tueList.appendElement("<listitem name=\"item\" tooltip=\""+st+"\"><label size=\"7\" color=\"#000000\" y=\"0\" tooltip=\""+st+"\">"+st+"</label></listitem>");
	}
  }
    //=============================
  wed_label.y = tuesday_label.y + (mi*12) + 13;
  wedList.y = wed_label.y + 13;
  var mi = 0;
   if(getWeekDay() == "Wednesday")
  {
  	 wed_label.innerText= "Wednesday(Today)";
  }
  else 
  {
     wed_label.innerText= "Wednesday";
  }	
  wedList.removeAllElements();
  for(var i=0;i<titleArray.length; i++)
  {
	if(titleArray.item(i).parentNode.nodeName == "wed")
	{
		//str += titleArray.item(i).childNodes(1).firstChild.data+ "\n";
		var tim = titleArray.item(i).childNodes(0).firstChild.data;
		var loc = titleArray.item(i).childNodes(1).firstChild.data;
		var subj = titleArray.item(i).childNodes(2).firstChild.data;
		var st = tim + " " + loc + " " + subj;
		mi++;
		wedList.appendElement("<listitem name=\"item\" tooltip=\""+st+"\"><label size=\"7\" color=\"#000000\" y=\"0\" tooltip=\""+st+"\">"+st+"</label></listitem>");
	}
  }
  //=============================
  thu_label.y = wed_label.y + (mi*12) + 13;
  thuList.y = thu_label.y + 13;
  var mi = 0;
  if(getWeekDay() == "Thursday")
  {
  	 thu_label.innerText= "Thursday(Today)";
  }
  else 
  {
      thu_label.innerText= "Thursday";
  }	
  thuList.removeAllElements();
  for(var i=0;i<titleArray.length; i++)
  {
	if(titleArray.item(i).parentNode.nodeName == "thu")
	{
		//str += titleArray.item(i).childNodes(1).firstChild.data+ "\n";
		var tim = titleArray.item(i).childNodes(0).firstChild.data;
		var loc = titleArray.item(i).childNodes(1).firstChild.data;
		var subj = titleArray.item(i).childNodes(2).firstChild.data;
		var st = tim + " " + loc + " " + subj;
		mi++;
		thuList.appendElement("<listitem name=\"item\" tooltip=\""+st+"\"><label size=\"7\" color=\"#000000\" y=\"0\" tooltip=\""+st+"\">"+st+"</label></listitem>");
	}
  }
  //=============================
  fri_label.y = thu_label.y + (mi*12) + 13;
  friList.y = fri_label.y + 13;
  var mi = 0;
  if(getWeekDay() == "Friday")
  {
  	 fri_label.innerText= "Friday(Today)";
  }
  else 
  {
     fri_label.innerText= "Friday";
  }
  friList.removeAllElements();
  for(var i=0;i<titleArray.length; i++)
  {
	if(titleArray.item(i).parentNode.nodeName == "fri")
	{
		//str += titleArray.item(i).childNodes(1).firstChild.data+ "\n";
		var tim = titleArray.item(i).childNodes(0).firstChild.data;
		var loc = titleArray.item(i).childNodes(1).firstChild.data;
		var subj = titleArray.item(i).childNodes(2).firstChild.data;
		var st = tim + " " + loc + " " + subj;
		mi++;
		friList.appendElement("<listitem name=\"item\" tooltip=\""+st+"\"><label size=\"7\" color=\"#000000\" y=\"0\" tooltip=\""+st+"\">"+st+"</label></listitem>");
	}
  }
  xmlHttp = null;
  }
}

function onOptionChanged() {
  var optionChanged = event.propertyName;
   if (optionChanged == "code")
       url = "http://members.dhivehinet.net.mv/m-jinah/timetable.php?intake=" + options.getValue("code") + "&r="+Math.random();
   if (optionChanged == "cweek")
       url = "http://members.dhivehinet.net.mv/m-jinah/timetable.php?intake=" + options.getValue("code") + "&week=" + options.getValue("cweek") + "&r="+Math.random();;
	view_onOpen();   
}

function onOpenOptionsClick() {
  pluginHelper.showOptionsDialog();
}

