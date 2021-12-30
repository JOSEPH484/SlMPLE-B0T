const fotosploit = (prefix, pushname) => {
    return `📲¿Qué es FotoSploit?📲

🌐 FotoSploit es una herramienta que se especializa en la ingenieria social, Esta herramienta permite al usuario que la utilice, subir una imágen a un enlace phishing, por lo tanto, será mas probable que la víctima acceda al enlace si ve una imágen que le llame la atención. 🌐

📲INSTALACIÓN DE FotoSploit EN TERMUX (ANDROID)📲

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/Cesar-Hack-Gray/FotoSploit
$ cd FotoSploit
$ bash install.sh
$ ./FotoSploit

Show options

set foto /sdcard/foto.jpg
[RUTA DE TÚ FOTO]

set title url 
[TÍTULO DEL VIDEO]

set mini title 
[DESCRIPCIÓN DEL VIDEO]

set view 
[VISTA DE LA FOTO]

set red social 
[RED SOCIAL PHISHING]

run
[COMIENZA A GENERAR EL ENLACE]

Envía el enlace a tú víctima.`

}

exports.fotosploit = fotosploit
