

let grid = document.querySelector(".products");

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                for (let value of json) {
                    addelement(grid,value)
                }
                  
            });

            function addelement(appendln, value){
                let div = document.createElement("div");
                div.className = "item justify-self-center";

                let{image,title,category, price} = value;

                div.innerHTML = 

                `
                  <img src="${image}" class="big-covering img"alt="images1">
                  <div class ="text-centery py-3 font-poppins">
                    <h1 class=""text-lg-title>${title}</h1>
                    <a href="#" class = "block"> <span class="text-sm text-red-400">${category}</span></a>
                    <span class="block py-3">$ <span class="text-md">${price}</span></span>
                    <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">buy now</button>
                  </div>
                `

                appendln.appendChild(div);
                
            }