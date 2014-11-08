 pager
=====

this is a javascript pagination plugin with bootstrap style

documentation
======

1.add bootstrap.min.css  file to your page  
\<link rel="stylesheet"   href="bootstrap.min.css" type="text/css" />  
2.add pager.js to your page  
\<script type="text/javascript" src="pager.js"\></script>  
3.you can call this pagination function when the page load like this:  
```
   /**
      * @param id
      *            id is the ul you wana show 
      * @param nowNum
      *            current page ,the default is the first page
      * @param perPages
      *            show how many pages every time,the minimum value is 5.it will be setted as default 5 if less than 5
       * @param allNum
      *           the callback function after you clicked the page link 
      *           here you can ask server for data you want according to the arguments like nowNum ,allNum 
    
      */

window.onload = function() {
		page({
				id: 'pageul',
				nowNum: 1,
				perPages:4,
				allNum: 20, 
				callBack:function(now)	{
				        alert('current page:'+now);
						        }	
				});
			}
```

myzhibie<br>
236752395@qq.com

