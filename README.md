pager
=====

this is a javascript pagination plugin with bootstrap style

documentation
======

1.add bootstrap.min.css  file to your page<br>
<link rel="stylesheet"   href="bootstrap.min.css" type="text/css" /><br>
2.add pager.js to your page<br>
<script type="text/javascript" src="pager.js"></script><br>
3.you can call this pagination function when the page load like this:<br>
  window.onload = function() {<br>
				page({<br>
					//id is the ul you wana show <br>
					id: 'pageul',<br>
					//current page ,the default is the first page<br>
					nowNum: 1,<br>
					//show how many pages every time,the minimum value is 5.it will be setted as default 5 if less than 5<br>
					perPages:4,<br>
					//the total pages<br>
					allNum: 20,<br> 
					//the callback function after you clicked the page link <br>
					//here you can ask server for data you want according to the arguments like nowNum ,allNum <br>
					callBack:function(now)	{<br>
						
						alert('current page:'+now);<br>
						}<br>	
				});<br>
			}<br>

=======
myzhibie<br>
236752395@qq.com