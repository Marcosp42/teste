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
    //Definição de propriedades CSS/DOM
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

new filmes("Star Wars: Episódio I - A Ameaça Fantasma", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gNk8UNAumXlfCdtaxDqsQe7ZGlt.jpg", "STARWARSEPISODIOIAAMEACAFANTASMA/c5a6842a7039e547331181e157db97b1f0eb0716/f81282.mp4");
new filmes("Star Wars: Episódio II - Ataque dos Clones", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s2ONgVK8ucLfobZn7VTyaAKH0yA.jpg", "STARWARSEPISÓDIOIIATAQUEDOSCLONES/808e78efe0b725549e118fa9865e81d7fbff7044/fd1f9a.mp4");
new filmes("Star Wars: Episódio III - A Vingança dos Sith", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m8PpvsZqTb2RYYnPIF7DZii1DuA.jpg", "Star_Wars_III_A_Vingança_Dos_Sith_2005_720p_210GJI/62deb3171afe0fa94b8230563e17a42f8c9089a6/eab63a.mp4");
new filmes("Episódio IV - Uma Nova Esperança", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tZM2bZySE9DcKMPBeIW0BFfveV1.jpg", "Star-Wars-Ep.-IV---Uma-Nova-Esperança-(1977)/77b3fd39f060c69a4db939752d3fd749c11c3ce8/b3b8b0.mp4");
new filmes("Episódio V - O Império Contra-Ataca", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vqi4H6J7wafSz30xnq5tG9ZcXyL.jpg", "Star-Wars-Ep.-V---O-Império-Contra-Ataca-(1980)/0841b19d4a0a21e4676d8fc8a981e6588e0479a6/a0ffc2.mp4");
new filmes("Episódio VI - O Retorno do Jedi", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8ydT4F2SC6DbLxj2A34V4dNU79B.jpg", "Star-Wars-Ep.-VI---O-Retorno-de-Jedi-(1983)/4cb2ab96f37ba3f6467f72e1c5ab506b96b9ac3e/43f3ad.mp4");
new filmes("Star Wars: Episódio VII O Despertar da Força", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lqMDbo4rXnakFgc4C6LzPv6pG7F.jpg", "Star-Wars---O-Despertar-da-Força-(2015)/7361c7c8f0960cf8519adbfe16ee3822744b1bd9/26da13.mp4");
new filmes("Star Wars: Episódio VIII - Os Últimos Jedi", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5dGufuaIG5vNcxPm8QPij5MSPeQ.jpg", "Star-Wars---Os-Últimos-Jedi-(2017)/ef66d48d4ff42035a0bfba698a809afb6d8d7403/6cf6bf.mp4");
new filmes("Star Wars: Episódio IX - A Ascensão Skywalker", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3Qxox1UryIb3rl0TEBLKd66V5Wu.jpg", "StarWars-A-Ascensão-Skywalker-2019/044ed37591f933461e8bf920463c8c1e92a2e7e1/951e24.mp4");
new filmes("Doutor Estranho no Multiverso da Loucura", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/boIgXXUhw5O3oVkhXsE6SJZkmYo.jpg", "Doutor-Estranho-no-Multiverso-da-Loucura-2022_x264_001/6e8bab2fbc65783d64a66ea272e4245b59795cf2/d281e4.mp4");
new filmes("Velozes-e-Furiosos-1", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fGiLNTHbDyNIY3Fvo96A836UpIy.jpg", "Velozes-e-Furiosos-1-(2001)/3db38539e56dc1dcf6ca4dddbbabdad55e90058c/4aeb51.mp4");
new filmes("Velozes-e-Furiosos-2", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tMUnCAgfARTdAu8ylPw4Wjh3e5N.jpg", "Velozes-e-Furiosos-2-(2003)/e011c83c759609e0b4759ad44cbcd4d1236b1581/1e9d25.mkv");
new filmes("Velozes-e-Furiosos-3", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sHojCCXnSW4Kn294E0BYgq74D5o.jpg", "Velozes-e-Furiosos-3---Desafio-em-Tóquio-(2006)/2a4d49c7a06b2c1673a73618a1d144b1f99614bd/c62d68.mp4");
new filmes("Velozes-e-Furiosos-4", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zvjQPVttJWaCSbzMijyc2x2MLr4.jpg", "Velozes-e-Furiosos-4-(2009)/99d538259062a3a818cb26b419feda69126020b5/cb459e.mp4");
new filmes("Velozes-e-Furiosos-5", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3u5RexOOAJuwm5JtNmxT9P0CdLG.jpg", "Velozes-e-Furiosos-5-(2011)/0c081448947d7c158f1e34ee00c6951171f53279/863d55.mp4");
new filmes("Velozes-e-Furiosos-6", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yeF9WQvxHRrJnr5fGEfnzDpn4pA.jpg", "Velozes-e-Furiosos-6-(2013)/ba7b0e16853d282f86ac1a172dc3681844f0cbcf/2f91a2.mp4");
new filmes("Velozes-e-Furiosos-7", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s112wYVIroeeajzxyWyVaO4D8Dz.jpg", "Velozes-e-Furiosos-7---(2015)/ee63c14326b6883ac385f8d59c4088cf99aca143/96cfe2.mp4");
new filmes("Velozes-e-Furiosos-8", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5L2IpMfGFfwOmxNdIJeJtdlz03.jpg", "Velozes-e-Furiosos-8-(2017)/27d50ffaafc9c1668daa5a125c9efff9916a73ef/ef4ba6.mp4");
new filmes("Velozes-e-Furiosos-9", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mtvlNu9eb9gIzaWaJL9t5LlJmIn.jpg", "Velozese-e-Furiosos---Hobbs-e-Shaw-(2019)/546861629b9ab136338bcfadccb43e7573190e1f/4e6ff5.mp4");
new filmes("Homem-Aranha 1", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2WIwz0qJpnVAiofTAhrmhbKxuvE.jpg", "Homem-Aranha-1-(2002)/9fb81ba75504c9468d0b7d6646cff92e403a4a01/2c3b3d.mp4");
new filmes("Homem-Aranha 2", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ulY3TIeF3cNZKmLmrnQueNYZ0gn.jpg", "Homem-Aranha-2-(2004)/c1df70d6ea88dfb8649eeeb31a8ddbdb688dadb9/d64c27.mp4");
new filmes("Homem-Aranha 3", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/63O5iixxXSmyOaBas7ek1tkeVra.jpg", "Homem-Aranha-3-(2007)/08834e334f304dc6dd08e0beee3b68b242981720/e6d22f.mp4");
new filmes("O Espetacular Homem-Aranha ", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dODKvv9o9BOemWavnulutJBHM80.jpg", "O-Espetacular-Homem-Aranha-1-(2012)/0f4634209d79d2d698eb52059b00bbaedce06dfa/3fcc34.mp4");
new filmes("O Espetacular Homem-Aranha 2: A Ameaça de Electro", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJifnqFgtflsPZ46OGvX3kFsq8h.jpg", "O-Espetacular-Homem-Aranha-2-(2014)/17ae24f3b625fc62b9fda7291d36138e63c51323/920d27.mp4");
new filmes("Homem-Aranha: De Volta ao Lar", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Fgs1ewIZiBBTto1XDHeBN0D8ug.jpg", "Homem-Aranha-De-Volta-ao-Lar-(2017)/aa73d61cad355f99466f3cdb013652ee365b2d7f/67d329.mp4");
new filmes("Homem-Aranha Longe de Casa", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6wtOOCzTNxzwzwvpMeimMHQNTqI.jpg", "Homem-Aranha-Longe-de-Casa-(2019)/76601fda621ad7e65e9caedf3a54c9193115b72a/bb50db.mp4");
new filmes("Homem-Aranha - Sem Volta Para Casa", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg", "Homem-Aranha---Sem-Volta-Para-Casa-(2021)/07d3a08aac14a00dfefac9c1ab91ffeb9543e123/965f5a.mp4");
new filmes("Vingadores 1 - The Avengers", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg", "Os_Vingadores_1/7098939a9538bc2745cc7ed9c4ec468e72e9d331/078a01.mp4");
new filmes("Vingadores 2 - Era de Ultron", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vGIIl89vglo66yUfbuTxzNAs4y5.jpg", "Os_Vingadores_2/079e455375d2a75dded005e1fa7bd8b5ae24b034/7bc44d.mp4");
new filmes("Vingadores 3 - Guerra Infinita", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d6jUbQj4E4R5MJlFYfdzANEZbkL.jpg", "Os_Vingadores_3/0c0b552e9376c15d8e35f2784a8e7099f49bcc45/d960ef.mp4");
new filmes("Vingadores 4 - Ultimato", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zBXAjVMp92PvGovg148Qz0IjrEF.jpg", "Vingadores.Ultimato/57fc85a51021550ae409d88b71445e4c1ddc17ca/b4ecaa.mp4");

