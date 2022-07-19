
const firebaseApp = firebase.initializeApp({ apiKey: "AIzaSyAjPebuAzvE2ACTnfCSrdHoiDiIRT2yjCg",
    authDomain: "mythic-cinema-298423.firebaseapp.com",
    projectId: "mythic-cinema-298423",
    storageBucket: "mythic-cinema-298423.appspot.com",
    messagingSenderId: "756640999774",
    appId: "1:756640999774:web:ee8fa4edcf2035f7bdc7cf",
    measurementId: "G-ZKEEYQFHZQ" });
    const db = firebaseApp.firestore();

    db.collection("Filmes").onSnapshot(function (pastas){
        pastas.docChanges().forEach(function (changes){
            const doc = changes.doc;
            arv = doc.data();
            filmes(arv.nome,arv.img,arv.link);
        });
    })
//Elemento Pai primario
var ur = document.getElementById("post");
var api = "https://player.odycdn.com/api/v3/streams/free/";
function filmes(nome, imge, link) {
    this.nome = nome;
    this.imge = imge;
    this.link = link;
    //Criação dos elementos
    var NewDiv = document.createElement("div");
    var NewImg = document.createElement("img");
    var NewH2 = document.createElement("h2");
    //Definição de propriedades
    NewDiv.classList.add("filme");
    ur.appendChild(NewDiv);
    NewImg.classList.add("Img-filme");
    NewDiv.appendChild(NewImg);
    NewDiv.appendChild(NewH2);
    //Atribuição de valores
    NewDiv.onclick = function a() {
        var frame = document.getElementById("page-filme");
        frame.setAttribute("src", api + link);
        var ele = document.getElementById("page");
        ele.style.display = "none";
        frame.style.display = "block";
        frame.classList.add("page-filme");
    }
    NewImg.setAttribute("src", imge);
    NewH2.innerText = nome;
}