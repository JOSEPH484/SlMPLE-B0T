const cupp = (prefix, pushname) => {
    return `📱¿Qué es cupp?📱

cupp es una herramienta que nos permite generar diccionarios con información de personas, generalmente esta herramienta se usa para los ataques de fuerza bruta.

📱INSTALACIÓN DE cupp EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y python
$ pkg install -y python2
$ git clone https://github.com/Mebus/cupp.git
$ cd cupp
$ ./cupp.py
$ ./cupp.py -i

Muy bien, aquí debes escribir la información de la víctima, entre mas información es mejor, ya que tu diccionario tendra mas posibilidades de crear una contraseña correcta, EJEMPLO:

Primer Nombre: Termux
Apellido : Hacking
Apodo: Error404
Cumpleaños: 25121996
Novi@: 
apodo novi@:
Cumpleaños novia:
Nombre hijo:
Apodo hijo:
Cumpleaños hijo:
Nombre de mascota:
Trabajo/Escuela/Compania:

¿Agregar palabras claves? [Y/N]: y
ejemplo: rock, basket, computadora, rojo

¿agregar caracteres? [Y/N]: y
¿agregar números? [Y/N]: y
¿agregar letras? [Y/N]: y

Diccionario creado como >> ejemplo.txt

PARA LEER EL DICCIONARIO ESCRIBIMOS EL COMANDO: cat ejemplo.txt`

}

exports.cupp = cupp
