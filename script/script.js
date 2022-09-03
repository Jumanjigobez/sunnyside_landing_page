//menu button on mobile

var styleElem = document.head.appendChild(document.createElement("style"));
var menu_btn = document.getElementById("menu_btn");

openMenu = () =>{
	menu_btn.innerHTML = `<img src="images/icon-hamburger.svg" alt="menu button" onclick="closeMenu()">`;
	styleElem.innerHTML = `

				@media (max-width: 375px){
						#menu{
						display: block;
						position: absolute;
						top: 18%;
						left: 6%;
						width: 88%;
						height: 50%;
						background-color: var(--White);
						color: var(--Very-dark-grayish-blue);
						text-align: center;
						
					}
				}


					`;
	
}

closeMenu = () =>{
	menu_btn.innerHTML = `<img src="images/icon-hamburger.svg" alt="menu button" onclick="openMenu()">`;
	styleElem.innerHTML = `

				@media (max-width: 375px){
						#menu{
						display: none;
						position: absolute;
						top: 18%;
						left: 6%;
						width: 88%;
						height: 50%;
						background-color: var(--White);
						color: var(--Very-dark-grayish-blue);
						text-align: center;
						
					}
				}


					`;
	
}