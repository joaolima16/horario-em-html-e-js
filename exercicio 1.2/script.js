function carregar(){
    var msg = window.document.getElementById("texto")
    var image = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML =  `agora são ${hora} horas..`
    var hora = 21
    if (hora>0 && hora <12){
        Image.src ="imagens/imgmanha.jpg.jpg"
        document.body.style.background= '#F0E68C'
        
}
else if (hora>12 && hora<18){
    image.src="imagens/imgtarde.jpg.jpeg"         
    document.body.style.background= '#FF8C00'
}

else{
    image.src="imagens/noite-256x256.png"
    document.body.style.background ="#4169E1"
}
}