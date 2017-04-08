
window.R1DynamicAd = {
	
	base: false,
	feedid: false,	
	click: false,
	R1GetAds: function(){
		var url = this.base + 'dco/feed/' + this.feedid + '.js';
		var e = document.createElement('script');
		e.src = url;
		e.type = 'text/javascript';
		e.async = 'async';
		document.getElementsByTagName('script')[0].appendChild(e);	
	},
	R1GetJSON: function(jsonp){
		var j = jsonp;
		if(typeof j.error !== "undefined"){
			d.innerHTML = jsonp.error;
		}else{
			var content = this.R1AdTemplate(j,320,50);
		}
		document.getElementsByTagName('body')[0].appendChild(content);
	},
	R1AdTemplate: function(data,w,h){
		var str = '';
		 str += '<div style="width:'+w+'px;height:'+h+'px;border:1px solid #dcdcdc;font-size:10px;font-family:arial,Tahoma,sans-serif;line-height:1.6em;">'
		 str += '<img src="'+data.image+'" width="'+h+'px" height="'+h+'px" style="float:left">'
		 str += '<div style="float:right;width:250px;height:'+h+';overflow:hidden">'
		 str += '<a href="'+this.click+'#" style="font-size:12px;">' + data.title + '</a><br />'+data.description.substring(0, 50)+'<br />&pound;' + data.price
		 str += '</div><br style="visibility:hidden;clear:both;" />'
		 str += '</div>'
		 
		 var c = document.createElement('div');
		 c.width = w; c.height = h; c.innerHTML = str;
		 return c;
	}
	
};





