function ComboBox(parent,x,y,width,numberOfDisplayedItems,onClickFunction,newArray){
	var CBbutton;var auxCBarray=new Array(); var actualNumberOfElements=0;var CBcontentDIV;var CBshape;

	//CONSTRUCTOR
	construct();
	function construct(){
	//Adding content div
	CBcontentDIV=parent.appendElement("<div name='anotherReferenceToCBcontentDIV' x='"+x+"' y='"+(y+19)+"' background='#888888' width='"+width+"' height='0'/>");
	//adding general shape of the button
	CBshape=parent.appendElement("<div name='AnotherReferencetoCBShape' background='#7F9DB9' x='"+x+"' y='"+y+"' width='"+width+"' height='19' />");
	//adding text box
	CBedit=parent.appendElement("<edit name='anotherReferencetoCBedit' onmouseover='anotherReferencetoCBbutton.image=\"combobox/button-over.png\";' onmouseout='anotherReferencetoCBbutton.image=\"combobox/button.png\";' background='#FFFFFF' x='"+(x+1)+"' y='"+(y+1)+"' width='"+(width-19)+"' height='17' />");
	}

	this.value="";
	
	//PUBLIC
	this.setValue=setValue;
	function setValue(s){
		this.value=s;CBedit.value=s;
	}

	//PUBLIC
	this.getValue=getValue;
	function getValue(){
		return (CBedit.value);
	}

	//PUBLIC (DESTRUCTOR)
	this.destroy=destroy;
	function destroy(){
		parent.removeElement(anotherReferenceToCBcontentDIV);
		parent.removeElement(anotherReferencetoCBedit);
		parent.removeElement(anotherReferencetoCBbutton);
		parent.removeElement(AnotherReferencetoCBShape);
		return null;
	}
	
	createItemArray();
	function createItemArray(){
	var i=0;
	//adding the content
	for (i=0;i<newArray.length;i++) {
		var aux="";if (onClickFunction!="") aux+="eval(\""+onClickFunction+"("+i+")\");";
		CBcontentDIV.appendElement("<div enabled='true' name='d"+i+"' x='1' y='"+(18*i)+"' width='"+(width-2)+"' height='18' onmousedown='anotherReferencetoCBedit.value=\""+newArray[i]+"\";"+aux+"' onmouseover='d"+i+".background=\"#2070FF\";l"+i+".color=\"#FFFFFF\";' onmouseout='d"+i+".background=\"#FFFFFF\";l"+i+".color=\"#000000\";' background='#FFFFFF'><label name='l"+i+"' width='"+(width-2)+"' height='19'>"+newArray[i]+"</label></div>");
	}
	if (newArray.length<numberOfDisplayedItems) actualNumberOfElements=newArray.length; else actualNumberOfElements=numberOfDisplayedItems;
	auxCBarray=new Array(newArray.length);auxCBarray=newArray;
	//adding dropdown button
	CBbutton=parent.appendElement("<button name='anotherReferencetoCBbutton' x='"+(x+width-18)+"' y='"+(y+1)+"' image='combobox/button.png' overImage='combobox/button-over.png' downImage='combobox/button-down.png' onclick='if (anotherReferenceToCBcontentDIV.height==0) CBShow("+actualNumberOfElements+",anotherReferenceToCBcontentDIV); else CBHide(anotherReferenceToCBcontentDIV);' onfocusout='CBHide(anotherReferenceToCBcontentDIV);' />");	
	}
}

//HELPER FUNCTIONS - SHOULD BE PRIVATE
function CBShow(nr,d){
	if (d.height<nr*18) {d.height+=9;SetTimeout("CBShow("+nr+",anotherReferenceToCBcontentDIV)",5);} else d.height+=1;
}
function CBHide(d){
	if (d.height>0) {d.height-=9;SetTimeout("CBHide(anotherReferenceToCBcontentDIV)",5);} else d.height=0;
}