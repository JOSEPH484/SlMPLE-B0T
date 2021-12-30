const phoneinfoga = (prefix, pushname) => {
    return `📲PhoneInfoga📲

🌎 PhoneInfoga es una de las herramientas más avanzadas para escanear números de teléfono internacionales utilizando solo recursos gratuitos. Le permite recopilar primero información estándar como país, área, operador y tipo de línea en cualquier número de teléfono internacional. Luego, busque huellas en los motores de búsqueda para tratar de encontrar el proveedor de VoIP o identificar al propietario. 🌎

📲Instalación:📲

$ pkg upgrede -y && pkg update -y
$ pkg install -y python git
$ git clone https://github.com/sundowndev/PhoneInfoga
$ ls
$ cd PhoneInfoga
$ mv config.example.py config.py
$ ls
$ chmod 777 config.py config.py
$ python3 -m pip install -r requirements.txt
$ python3 phoneinfoga.py -v
$ python3 phoneinfoga.py -n
$ cp -rf ../usr/bin/ngrok $HOME/PhoneInfoga`

}

exports.phoneinfoga = phoneinfoga
