const ngrok = (prefix, pushname) => {
    return `📱¿Qué es Ngrok?📱

Ngrok es una herramienta que permite acceder nuestro servidor local a cualquier persona en internet con la que compartamos una url generada dinamicamente.

📱INSTALACIÓN DE Ngrok EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/TermuxHacking000/NgrokTH
$ ls
$ cd NgrokTH
$ ls
$ chmod +x *
$ ls
$ ./ngrok.sh

Aqui debemos ponemos 1 para instalar ngrok en termux.

Aqui deveremos ir a la pagina de Ngrok registrarnos o inciar seccion en Ngrok y copiar nuestro authtoken de nuestra cuenta aqui les dejo la pagina de Ngrok para que vallan.

Sitio https://ngrok.com/

Una vez aigan copiado su authtoken lo pegan en termux y le pulsan a enter.

Despues de eso nos dira para elegir entre
-ngrok http 4444
-ngrok tcp 4444

Pero yo en este caso pongo 
ngrok http 8080
Le damos a enter y ya de aver echo todo eso ya tenes el Ngrok`

}

exports.ngrok = ngrok
