<?php
echo"
<!DOCTYPE html>
<html lang='pt-br'>

<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='stylesheet' href='style.css'>
    <link rel='shortcut icon' href='img/favicon.ico' type='image/x-icon'>
    <title>Linkverso</title>
</head>

<body class='container'>
    <header class='BarraPrincipal'>
        <div class='logo'>
            <h1 id='h1logo'>Linkverso</h1>
            <img id='imglogo' src='img/logo90x90.png'>
        </div>
        <nav class='Menu'>
            <ul>
                <li class='item-menu-principal'><a href='index.html'>Inicio</a></li>
                <li class='item-menu-principal'><a href='index.html'>Filmes</a></li>
                <li class='item-menu-principal'><a href='index.html'>Series</a></li>
            </ul>
        </nav>
    </header>
    <div id='page' class='page-conetudo'>
        <h1 id='Titulo-page'>Filmes</h1>
        <div class='post'>
            <div class='filme'>
                <a onclick='ver(filme0)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gNk8UNAumXlfCdtaxDqsQe7ZGlt.jpg'
                        alt=''>
                    <p>Star Wars: Episódio I - A Ameaça Fantasma</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme1)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s2ONgVK8ucLfobZn7VTyaAKH0yA.jpg'
                        alt=''>
                    <p>Star Wars: Episódio II - Ataque dos Clones</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme2)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m8PpvsZqTb2RYYnPIF7DZii1DuA.jpg'
                        alt=''>
                    <p>Star Wars: Episódio III - A Vingança dos Sith</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme3)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dw7X9YPjjAfIxKHW04V64Bb9TB0.jpg'
                        alt=''>
                    <p>Episódio IV - Uma Nova Esperança</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme4)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vqi4H6J7wafSz30xnq5tG9ZcXyL.jpg'
                        alt=''>
                    <p>Episódio V - O Império Contra-Ataca</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme5)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/llaJ35p5e23ygDbqd0H3otJLWsA.jpg'
                        alt=''>
                    <p>Episódio VI - O Retorno do Jedi</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme6)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hq2igFqb31fDqGotz8ZuUfwKgn8.jpg'
                        alt=''>
                    <p>Doutor Estranho no Multiverso da Loucura</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme7)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7FUqXrudOZ1jbvnVxPLoph0H8yF.jpg'
                        alt=''>
                    <p>Velozes e Furiosos 1</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme8)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oUEiEsdF1hRqJGJo6Zoc69ZsebG.jpg'
                        alt=''>
                    <p>Velozes e Furiosos 2</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme9)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sHojCCXnSW4Kn294E0BYgq74D5o.jpg'
                        alt=''>
                    <p>Velozes e Furiosos 3</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme10)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zvjQPVttJWaCSbzMijyc2x2MLr4.jpg'
                        alt=''>
                    <p>Velozes e Furiosos 4</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme11)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/l1lvu5P4xfBicxuhgL0pmvkWReO.jpg'
                        alt=''>
                    <p>Velozes e Furiosos 5</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme12)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yeF9WQvxHRrJnr5fGEfnzDpn4pA.jpg'
                        alt=''>
                    <p>Velozes e Furiosos 6</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme13)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s112wYVIroeeajzxyWyVaO4D8Dz.jpg'
                        alt=''>
                    <p>Velozes e Furiosos 7</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme14)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sFG0CljSSnLafgz7l8Yqoe6LJ42.jpg'
                        alt=''>
                    <p>Velozes e Furiosos 8</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme15)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg'
                        alt=''>
                    <p>Vingadores 1 - The Avengers</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme16)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vGIIl89vglo66yUfbuTxzNAs4y5.jpg'
                        alt=''>
                    <p>Vingadores 2 - Era de Ultron</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme17)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d6jUbQj4E4R5MJlFYfdzANEZbkL.jpg'
                        alt=''>
                    <p>Vingadores 3 - Guerra Infinita</p>
                </a>
            </div>
            <div class='filme'>
                <a onclick='ver(filme18)'>
                    <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zBXAjVMp92PvGovg148Qz0IjrEF.jpg'
                        alt=''>
                    <p>Vingadores 4 - Ultimato</p>
                </a>
            </div>
        </div>
    </div>
    <video controls id='page-filme'></video>
    <script>
        var filme0 = 'https://player.odycdn.com/api/v3/streams/free/STARWARSEPISODIOIAAMEACAFANTASMA/c5a6842a7039e547331181e157db97b1f0eb0716/f81282.mp4';
        var filme1 = 'https://player.odycdn.com/api/v3/streams/free/STARWARSEPISÓDIOIIATAQUEDOSCLONES/808e78efe0b725549e118fa9865e81d7fbff7044/fd1f9a.mp4';
        var filme2 = 'https://player.odycdn.com/api/v3/streams/free/Star_Wars_III_A_Vingança_Dos_Sith_2005_720p_210GJI/62deb3171afe0fa94b8230563e17a42f8c9089a6/eab63a.mp4';
        var filme3 = 'https://player.odycdn.com/api/v3/streams/free/Episódio-IV---Uma-Nova-Esperança-(1977)-1080p-Dublado---Alan_680/585ca4f6e071234ba92cc95c7058e2e3534dcb56/2c246e.mp4';
        var filme4 = 'https://player.odycdn.com/api/v3/streams/free/StarWarsV/3b386bb7b13972fa1a6b526dfe34085b8390a53b/def3fe.mp4';
        var filme5 = 'https://player.odycdn.com/api/v3/streams/free/Episódio-VI---O-Retorno-do-Jedi-(1983)-1080p-Dublado---Alan_680/122095056ca95587da1e5826227be22a23949332/4e7a77.mp4';
        var filme6 = 'https://player.odycdn.com/api/v3/streams/free/Doutor-Estranho-no-Multiverso-da-Loucura-2022_x264_001/6e8bab2fbc65783d64a66ea272e4245b59795cf2/d281e4.mp4';
        var filme7 = 'https://player.odycdn.com/api/v3/streams/free/Velozes-e-Furiosos-1-(2001)/3db38539e56dc1dcf6ca4dddbbabdad55e90058c/4aeb51.mp4';
        var filme8 = 'https://player.odycdn.com/api/v3/streams/free/Velozes-e-Furiosos-2-(2003)/e011c83c759609e0b4759ad44cbcd4d1236b1581/1e9d25.mkv';
        var filme9 = 'https://player.odycdn.com/api/v3/streams/free/Velozes-e-Furiosos-3---Desafio-em-Tóquio-(2006)/2a4d49c7a06b2c1673a73618a1d144b1f99614bd/c62d68.mp4';
        var filme10 = 'https://player.odycdn.com/api/v3/streams/free/Velozes-e-Furiosos-4-(2009)/99d538259062a3a818cb26b419feda69126020b5/cb459e.mp4';
        var filme11 = 'https://player.odycdn.com/api/v3/streams/free/Velozes-e-Furiosos-5-(2011)/0c081448947d7c158f1e34ee00c6951171f53279/863d55.mp4';
        var filme12 = 'https://player.odycdn.com/api/v3/streams/free/Velozes-e-Furiosos-6-(2013)/ba7b0e16853d282f86ac1a172dc3681844f0cbcf/2f91a2.mp4';
        var filme13 = 'https://player.odycdn.com/api/v3/streams/free/Velozes-e-Furiosos-7---(2015)/ee63c14326b6883ac385f8d59c4088cf99aca143/96cfe2.mp4';
        var filme14 = 'https://player.odycdn.com/api/v3/streams/free/Velozes-e-Furiosos-8-(2017)/27d50ffaafc9c1668daa5a125c9efff9916a73ef/ef4ba6.mp4';
        var filme15 = 'https://player.odycdn.com/api/v3/streams/free/vingadores.1/1e026432ee699790625ae8d0b7fabdfd599b62b7/fbb2ed.mp4';
        var filme16 = 'https://player.odycdn.com/api/v3/streams/free/vingadores.2/a1df3d7502e65224ec177675b1c770a86a29bae4/c15225.mp4';
        var filme17 = 'https://player.odycdn.com/api/v3/streams/free/vingadores.guerra.infinita/a1f6724b6259d8fdfae2453f02e3f85745fe1546/bbebc8.mp4';
        var filme18 = 'https://player.odycdn.com/api/v3/streams/free/Vingadores.Ultimato/57fc85a51021550ae409d88b71445e4c1ddc17ca/b4ecaa.mp4';


        function ver(filme) {
            var frame = document.getElementById('page-filme');
            frame.setAttribute('src', filme);
            var ele = document.getElementById('page');
            ele.style.display = 'none';
            frame.style.display = 'block';
            frame.classList.add('page-filme');
        }

    </script>
</body>

</html>";