 //Templating
 var replacer=function(match,p){
	return this[p]||p;
 }.bind({
		'zzzz':"eeeeeeeeeeee"
 })
 var n,ntw=d.createTreeWalker(body,4,null,false);//NodeFilter.SHOW_TEXT
 while(ntw.nextNode()){
	n=ntw.currentNode;
	n.textContent=n.textContent.replace(/\{\s*([^\}\s]+)\s*\}/gi,replacer);
 };
 n=ntw=replacer=null;
