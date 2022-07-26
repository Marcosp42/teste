const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAjPebuAzvE2ACTnfCSrdHoiDiIRT2yjCg",
    authDomain: "mythic-cinema-298423.firebaseapp.com",
    projectId: "mythic-cinema-298423",
    storageBucket: "mythic-cinema-298423.appspot.com",
    messagingSenderId: "756640999774",
    appId: "1:756640999774:web:ee8fa4edcf2035f7bdc7cf",
    measurementId: "G-ZKEEYQFHZQ"
});
const db = firebaseApp.firestore();

db.collection("Filmes").onSnapshot(function (pastas) {
    pastas.docChanges().forEach(function (changes) {
        const doc = changes.doc;
        arv = doc.data();
        filmes(arv.nome, arv.img, arv.link);
    });
})

//Elemento Pai primario
const ur = document.getElementById("Pagina-Filmes");

function filmes(nome, imge, link) {
    this.nome = nome;
    this.img = imge;
    this.link = link;
    const NewDiv = document.createElement("div");
    const Imagem = document.createElement("img");
    const Texto = document.createElement("h2");

    ur.appendChild(NewDiv);
    NewDiv.appendChild(Imagem);
    NewDiv.appendChild(Texto);
    NewDiv.classList.add("Obj-filme")
    Imagem.setAttribute("src", imge);
    Texto.innerText = nome;
    
    NewDiv.onclick = function(){
        let DivPlayer = document.createElement("div")
        let player = document.createElement("video");
        ur.style.display = "none";
        img_destaque.style.display = "none";
        document.body.appendChild(DivPlayer);
        DivPlayer.classList.add("frame")
        DivPlayer.appendChild(player)
        player.setAttribute("controls" , true)
        player.setAttribute("src", link)
        player.setAttribute("autoplay", true)
        player.style.width = '100%';    
}
}
const img_destaque = document.getElementById("img-destaque");
ImgDestaque = ["https://images2.alphacoders.com/516/thumb-1920-516664.jpg","https://images2.alphacoders.com/582/thumb-1920-582423.jpg","https://images2.alphacoders.com/589/thumb-1920-589553.png","https://images6.alphacoders.com/902/thumb-1920-902379.jpg"];


img_destaque.setAttribute("src", ImgDestaque[0]);
// botoes
const btn_left = document.getElementById("btn-left");
const btn_rigth = document.getElementById("btn-rigth");

var i = 0
btn_left.onclick = function(){
    if(i>0){
     i--;
    img_destaque.setAttribute("src", ImgDestaque[i])
    }else{
        i = 3;
        img_destaque.setAttribute("src", ImgDestaque[i])
    }

}
btn_rigth.onclick = function(){
    if(i<=2){
      i++
    img_destaque.setAttribute("src", ImgDestaque[i])
    }else{
        i= 0;
    img_destaque.setAttribute("src", ImgDestaque[i])
    }

}