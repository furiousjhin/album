//UTF-8

var ua =navigator.userAgent;
if((ua.indexOf('iPhone') > -1 || ua.indexOf('iPod') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) && 'ontouchstart' in window){
	var start = "touchstart";
	var end = "touchend";
}else{
	var start = "mousedown";
	var end = "mouseup";
}
window.start = start;
window.end = end;


function petitLocalStrageLoad(param){
	if(window.localStorage){
		if(param == 'position') var str = 'PetitDeckPosition';
		else if(param == 'idol_id') var str = 'PetitSelectIdolId';
		else if(param == 'now_position') var str = 'PetitSelectIdolId';
		else if(param.indexOf('lesson')!=-1) var str = 'PetitRunning'+param;
		else return false;

		if(localStorage.getItem(str)) return localStorage.getItem(str);
		else return false;
	}else{
		return false;
	}
}

function petitLocalStrageSave(param,value){
	if(window.localStorage){
		if(param == 'position') var str = 'PetitDeckPosition';
		else if(param == 'idol_id') var str = 'PetitSelectIdolId';
		else if(param == 'now_position') var str = 'PetitSelectNowPosition';
		else if (param.indexOf('lesson')!=-1) var str = 'PetitRunning'+param;
		else return false;

		if(str)	localStorage.setItem(str,value);
		else return false;
	}else{
		return false;
	}
}
