Msg = {};

Msg.ok = function(msg,timeout){
	
	
	if(!msg) msg = "操作成功";
	if(!timeout) timeout = 1000;
	
	var contentElt = document.getElementById('oktable');
	
	$(contentElt).find(".textdata").html(msg);
	
    var dg = art.dialog({
	
		content: contentElt,

		//"ok":function(){}
	
	
	});
	
	dg.time(timeout)
}

Msg.error = function(msg){
	
	var contentElt = document.getElementById('errortable');
	
	if(!msg) msg = "操作失败";
	$(contentElt).find(".textdata").html(msg)
    art.dialog({
	
		content: document.getElementById('errortable'),

	});
}


Msg.alert = function(msg){
	
	
	
	var contentElt = document.getElementById('errortable');
	$(contentElt).find(".textdata").html(msg)
    art.dialog({
	
		content: document.getElementById('alerttable')

	});
	

}


Msg.info = function(msg){
	
	var contentElt = document.getElementById('infotable');
	$(contentElt).find(".textdata").html(msg)
    art.dialog({
	
		content: document.getElementById('infotable')

	});
}