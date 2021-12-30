const beef = (prefix, pushname) => {
    return `💻INSTALACIÓN DE BeEF EN TERMUX (ANDROID)💻

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y ruby
$ pkg install -y vim
$ pkg install -y nodejs
$ pkg install -y unstable-repo
$ pkg install -y metasploit
$ git clone https://github.com/beefproject/beef
$ cd beef
$ ./update-beef
$ vim config.yaml

Editar user y pass y salir guardando cambios.

$ ./beef -x`

}

exports.beef = beef
