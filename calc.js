		console.log(document.body.classList)
		let modeBtn=document.querySelector(".mode")
		modeBtn.addEventListener('click',modeFun)
		function modeFun(){		
			document.body.classList.toggle("darkMode")
			if(modeBtn.innerHTML=='<i class="fa-solid fa-sun"></i>'){
				document.querySelector(".mode").innerHTML='<i class="fa-solid fa-moon" style="color: white;"></i>'				
			}			
		 	else if(modeBtn.innerHTML=='<i class="fa-solid fa-moon" style="color: white;"></i>'){
		 		document.querySelector(".mode").innerHTML='<i class="fa-solid fa-sun"></i>'				 
			}	
		} 
	