pager
=====

this is a javascript pagination plugin with bootstrap style

documentation
======

1.add bootstrap css file to your page
<link rel="stylesheet"   href="bootstrap.min.css" type="text/css" />
2.add pager.js to your page
<script type="text/javascript" src="pager.js"></script>
3.you can call this pagination function when the page load like this:
  window.onload = function() {
				page({
					//id is the ul you wana show 
					id: 'pageul',
					//current page ,the default is the first page
					nowNum: 1,
					//show how many pages every time,the minimum value is 5.it will be setted as default 5 if less than 5
					perPages:4,
					//the total pages
					allNum: 20, 
					//the callback function after you clicked the page link 
					//here you can ask server for data you want according to the arguments like nowNum ,allNum 
					callBack:function(now)	{
						
						alert('µ±Ç°Ò³'+now);
						}	
				});
			}