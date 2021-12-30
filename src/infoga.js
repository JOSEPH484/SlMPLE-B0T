const infoga = (prefix, pushname) => {
    return `📱 InfoGa es una herramienta que recopila información de cuentas de correo electrónico (ip, nombre de host, país, ...) de diferentes fuentes públicas (motores de búsqueda, servidores clave pgp y shodan) y verifica si los correos electrónicos se filtraron utilizando la API haveibeenpwned.com. Es una herramienta realmente sencilla, pero muy eficaz para las primeras etapas de una prueba de penetración o simplemente para conocer la visibilidad de tu empresa en Internet.📱

📱Installation :📱

$ apt update && apt upgrade
$ apt install git 
$ apt install python2
$ git clone https://github.com/m4ll0k/Infoga
$ cd Infoga
$ chmod +x *
$ pip2 install requests

📱usage:📱

$ python2 infoga.py

Now it shows all options to use this tool

$ python2 infoga.py -t gmail.com -s all

Now its started collecting emails and e-mails information

[hostname, city, organization, longitude and latitude ports..]`

}

exports.infoga = infoga
