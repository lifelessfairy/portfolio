 /* JavaScript janela planos */
 
 function abrirJanela (index) {
  var planos = [
    {
		titulo: "Academia",
		preços: `	    
		    <div class="apres"><b>Academia</b>
			    <p>(<span class="preço">Musculação</span>)</p></div>
	        <div><img src="Imagens/Academia.png">
		        <ol><li>Anual <span class="preço">R$180,00</span></li>
                <li>Semestral <span class="preço">R$220,00</span></li>
                <li>Mensal <span class="preço">R$260,00</span></li></ol></div>`
	},
	{
		titulo: "Natação",
		preços: `
                <div class="apres"><b>Natação</b>
		          <p>(<span class="preço">3x na semana</span>)</p></div>
	            <div><img src="Imagens/Natacao.png">		
		          <ol><li>Anual <span class="preço">R$300,00</span></li>
                  <li>Semestral <span class="preço">R$340,00</span></li>
                  <li>Mensal <span class="preço">R$380,00</span></li>
                </ol></div>`
	},
	{
		titulo: "Combo",
		preços: `
			    <div class="apres"><b>Combo</b>
			     <p>(<span class="preço">musculação + natação</span>)</p></div>
	            <div> <img src="Imagens/Combo.png">
                <ol><li>Anual <span class="preço">R$330,00</span></li>
                  <li>Semestral <span class="preço">R$390,00</span></li>
                  <li>Mensal <span class="preço">R$440,00</span></li>
                </ol></div>`
	}
];
	var janela = window.open("","_blank", "location=center,width=300,height=400");
	janela.document.write (`
	                <!DOCTYPE html>
	                <html>
	                 <head>
   	                    <title>${planos[Number(index)].titulo}</title>
   	                    <link rel="stylesheet" type="text/css" href="estilos.css">
  	                 </head>
 	                 <body class="txtcentr">
					 ${planos[Number(index)].preços}
					 <button onclick="window.close()">Fechar</button>
 					 </body>
					</html>`);
	janela.document.close();
	
 }

