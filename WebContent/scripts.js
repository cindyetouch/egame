		var clickedTime; var createdTime; var reactionTime;
		function makeBox(){			
			var x=5000*Math.random();
			setTimeout(
				function(){
				document.getElementById("box").style.display="block";
				document.getElementById("box").style.backgroundColor=getRandomColors();
			
				var random01 = Math.floor(Math.random()*2);
				if(random01==0) document.getElementById("box").style.borderRadius="0px";
				else document.getElementById("box").style.borderRadius="50px";
			
				document.getElementById("box").style.left=Math.floor(Math.random()*300) + 'px';
				document.getElementById("box").style.top=Math.floor(Math.random()*300) + 'px';
				createdTime=Date.now();
				}, 
				x
			);
		}
		
		function getRandomColors(){
			var letters='0123456789ABCDEF'.split('');
			var color = '#';
			for (var i = 0; i < 6; i++){
				color += letters[Math.floor(Math.random()*16)];
			}
			return color;		
		}
		document.getElementById("box").onclick=function(){
			clickedTime=Date.now();
			reactionTime=(clickedTime-createdTime)/1000;
			document.getElementById("time").innerHTML=reactionTime;
			this.style.display="none";
			makeBox();
		}
		
		makeBox();