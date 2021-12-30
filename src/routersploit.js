const routersploit = (prefix, pushname) => {
    return `📱¿Que es RouterSploit?📱

RouterSploit, es un framework de seguridad open source muy similar al conocido Metasploit con el cual podremos auditar nuestros dispositivos (routers, webcam, NAS, etc) para comprobar si tienen vulnerabilidades conocidas.

📱 El framework, cuenta con los siguientes 5 módulos:📱

🌎 Exploits: módulos que aprovechan las vulnerabilidades identificadas. 🌎

🌐 Creds: módulos para probar credenciales en los servicios de red. 🌐

🔒 Scanners: módulos que verifican si un objetivo es vulnerable a cualquier exploit. 🔒

💉 Payloads: módulos para generar cargas útiles en diversas arquitecturas. 💉

👾 Generic: módulos que realizan ataques genéricos. 👾

📱Instalación:📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install python git clang -y
$ pkg install -y make
$ git clone https://github.com/threat9/routersploit
$ cd routersploit
$ python3 -m pip install -r requirements.txt
$ python3 -m pip install -r requirements-dev.txt
$ chmod +x *setup.py
$ python3 setup.py install
$ python3 rsf.py

Uso:

show all

use scanners/autopwn

show options

set target 192.168.1.1`

}

exports.routersploit = routersploit
