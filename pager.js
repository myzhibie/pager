function page(opt) {
				if (!opt.id) {
					return false;
				}
				var obj = document.getElementById(opt.id);
				var nowNum = opt.nowNum || 1;
				var allNum = opt.allNum || 10;
				
				var perPages=  10;
				if(opt.perPages >=5&&opt.perPages!=10)
				{
					perPages=opt.perPages;
				}
				var callBack=opt.callBack;
				var oSpan=document.createElement('span');
				//在这个范围内需要显示首页
				if(nowNum>=Math.ceil(perPages/2)+1&&allNum>=perPages+1)
				{
					var oLi=createLi('1','首页',false);
					
					obj.appendChild(oLi);
				}
				//当前页大于第一页时，需要显示上一页按钮
				if(nowNum>=2)
				{
					var oLi=createLi(nowNum-1,'上一页',false);
					
					obj.appendChild(oLi);
					
					}
					//如果所有页面小于每页默认显示页码
					//直接输出
				if (allNum <= perPages) { 
					for (var i = 1; i <= allNum; i++) {
						
						
						var text=i;
						var bCurrent=false;
						if (nowNum == i) {
							bCurrent=true;
						} 

						var oLi=createLi(i,text,bCurrent);
					
					    obj.appendChild(oLi);
					}
				} else
				//如果整个页数大于预定的默认页码，那么只显示默认页码数
				{   var times=Math.ceil(perPages/2);
					for (var i = 1; i <=perPages; i++) 
					{
						var href="";
						var text="";
						var bCurrent=false;
						//如果当前页数小于要显示页码的一半
						//直接输出
						//最左边的页码这样处理
						if (nowNum<=Math.ceil(perPages/2)) 
						{
							href =  i;
							text = i;
							if (nowNum == i) {
								bCurrent=true;
								
							} 
						} 
						//最右边的页码这样处理
						
						else if(nowNum>allNum-times)
						{
							href = (allNum-perPages+i);
							text = (allNum-perPages+i);
							var j=0;
							var flag=false;
							for(j=0;j<=times-1;j++)
							{
							
							if(nowNum == allNum-j&&i==perPages-j)
								{
									flag=true;
									break;
								}
								
							
							}
							if(flag)
							{
								bCurrent=true;
							}
							 
							
							}
						
						else {
							href =  (nowNum - times + i); 
							text = (nowNum - times + i);
							if (i == times) { 
								bCurrent=true;
							} 


						}

						var oLi=createLi(href,text,bCurrent);
					
					    obj.appendChild(oLi);
					}
				}
				if( allNum-nowNum >=1)//显示下一页按钮
				{
					var oLi=createLi(nowNum+1,'下一页',false);
					
					    obj.appendChild(oLi);
					
					}
				
               if( allNum-nowNum >=Math.ceil(perPages/2)+1&&allNum>=perPages+1)//显示尾页按钮
				{
					var oLi=createLi(allNum,'尾页',false);
					
					    obj.appendChild(oLi);
					
					}
			callBack(nowNum,allNum);
			oSpan.innerHTML='当前第'+nowNum+'页,共有'+allNum+'页,每次显示'+perPages+"页";
				obj.appendChild(oSpan);		
			var aA=obj.getElementsByTagName('a');
			for(var i=0;i<aA.length;i++)
			{
				aA[i].onclick=function()
				{
					var nowNum1=parseInt(this.getAttribute('href').substring(1));
					 obj.innerHTML='';
					 oSpan.innerHTML='当前第'+nowNum1+'页,共有'+allNum+'页,每次显示'+perPages+"页";
					 page({
						 id:opt.id,
						 nowNum:nowNum1,
                         perPages:perPages,
						 allNum:allNum,
						 callBack:callBack
						 })
						return false;
					}
				}
			}
			
			function createLi(href,text,bCurrent)
			{
					var oLi=document.createElement('li');
					if(bCurrent)
					{
						oLi.setAttribute('class','active');
					}
					var oA=document.createElement('a');
					oA.href='#'+href;
					oA.innerHTML=text;
					oLi.appendChild(oA);
					return oLi;
			}