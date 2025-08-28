/*JavaScript equipamentos*/
function mostrarEquipamento(index) {
	var equipamentos = [
    {
        nome: 'Cadeira Extensora',
		imagem: "Imagens/CadeiraExtensora.png",
        descricao: "<h3> Remada Baixa <h3><br> O principal movimento articular realizado na cadeira extensora é a extensão de joelho, portanto o quadríceps (vasto lateral, vasto medial, vasto intermédio e reto femoral são os principais músculos trabalhados durante o exercício. <a href='https://treinomestre.com.br/cadeira-extensora-como-potencializar-os-resultados-4-dicas-importantes/'>[Fonte]</a>."
    },
    {
        nome: 'Supino Vertical',
		imagem: "Imagens/SupinoVertical.png",
        descricao: "<h3> Supino Vertical <h3> O supino vertical é um exercício popular e eficaz para desenvolver força, tamanho e definição nos músculos da parte superior do corpo. Ao usar uma máquina de peso guiada, este exercício oferece uma maneira acessível e controlada de direcionar os músculos do peito, ombro e tríceps. <a href='https://www.academiacentralfitness.com.br/post/supino-m%C3%A1quina-como-fazer-benef%C3%ADcios-e-varia%C3%A7%C3%B5es'>[Fonte]</a>."
    },
    {
        nome: 'Remada Baixa',
		imagem: "Imagens/RemadaBaixa.png",
        descricao: "<h3> Remada Baixa <h3> A Remada Baixa é um exercício de máquina para costas feito sentado no banco usando a barra triângulo. A remada trabalha inúmeros músculos como o lombar, latíssimo do dorso, trapézio, deltoide posterior e até mesmo o braquiorradial. <a href='https://www.hipertrofia.org/blog/2018/03/24/remada-baixa/'>[Fonte]</a>."
    }
];
    var imgDes = document.getElementById('imgDes');
    var descExe = document.getElementById('descExe');
    imgDes.innerHTML = "<img src='" + equipamentos[Number(index)].imagem + "'>";
    descExe.innerHTML = equipamentos[Number(index)].descricao;
}