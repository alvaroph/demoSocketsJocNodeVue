# demoSocketsJuego

Aquesta demo consta de dos parts:
- un servidor node.js (a la carpeta nodeapp)
- un client fet amb vue.js


## Funcionament del client

A la ruta /juego s'executa un client que es connecta al servidor de sockets. L'usuari pot demanar unir-se al joc. 
Cada vegada que un client s'uneix a la partida el servidor el registra al array de jugadors i avisa a tothom que s'hagi unit previament. 

Un cop hi han 2 jugados units, el servidor envia un compte enrrera i comença el joc. 
