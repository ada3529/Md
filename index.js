/* Copyright (C) 2020 INrlTeam.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

inrl-md

*/
function _0x5a59(_0x3edc9b,_0x5aad5c){const _0x36f984=_0x36f9();return _0x5a59=function(_0x5a59c5,_0x5367dc){_0x5a59c5=_0x5a59c5-0x81;let _0x3615d7=_0x36f984[_0x5a59c5];return _0x3615d7;},_0x5a59(_0x3edc9b,_0x5aad5c);}const _0x126a89=_0x5a59;(function(_0xb10ad8,_0x13e9c){const _0x598155=_0x5a59,_0x36700d=_0xb10ad8();while(!![]){try{const _0x49106d=parseInt(_0x598155(0xc5))/0x1*(parseInt(_0x598155(0xb7))/0x2)+-parseInt(_0x598155(0x8f))/0x3*(parseInt(_0x598155(0xe9))/0x4)+-parseInt(_0x598155(0x90))/0x5+parseInt(_0x598155(0x8a))/0x6*(-parseInt(_0x598155(0xd7))/0x7)+parseInt(_0x598155(0xad))/0x8+parseInt(_0x598155(0xb9))/0x9+parseInt(_0x598155(0xa3))/0xa*(parseInt(_0x598155(0x81))/0xb);if(_0x49106d===_0x13e9c)break;else _0x36700d['push'](_0x36700d['shift']());}catch(_0x4b3d81){_0x36700d['push'](_0x36700d['shift']());}}}(_0x36f9,0x852b8));function _0x36f9(){const _0x269e60=['output','child','statusCode','split','pin','message','url','now','remoteJid','6874350FxSMvQ','fromMe','./plugins/','length','indexOf','videoMessage','includes','messageStubType','✅\x20Plugins\x20installed!','path','get','commands','imageMessage','got','Bot\x20working...','NO_ONLINE','image','Connection\x20closed.\x20Reconnecting...','8QGFwhf','@adiwajshing/baileys','loggedOut','./session.json','Disconnected:\x20','330aMPSpV','Lost\x20connection\x20to\x20the\x20server.\x20Trying\x20to\x20reconnect...','error','onlyPm','./lib/sql/greetings','body','restartRequired','extname','participant','6HcDGKo','messages.upsert','prototype','chats','.js','310227HHoRbX','5436955BslAVp','forEach','DATABASE','name','pattern','caption','./lib/sql/plugin','pino','unavailable','@adiwajshing/baileys/lib/Utils/logger','⬇️\x20Installing\x20external\x20plugins...','goodbye','timedOut','updatePresence','./lib/','writeFileSync','onlyGroup','default','connectionLost','280430dkFrEA','DB\x20syncing','text','readdirSync','sendMessage','test','Connection\x20timed\x20out,\x20Reconnecting...','connectionClosed','*Wa-Bot-Md\x20Working*','open','2797832jBkaSB','chatRead','user','./lib/inrl','log','Current\x20session\x20replaced\x20by\x20the\x20new\x20one\x20opened.\x20Please\x20close\x20this\x20session\x20first.','key','undefined','jid','replace','10502jCpwQb','badSession','5271795cVbmuh','video','./lib/sql/','map','findAll','existsSync','dataValues','Bot\x20connected.✅️.','getTime','sync','match','end','199gMrfJA','format','logout','SUDO','photo','./config','silent','store','PluginDB'];_0x36f9=function(){return _0x269e60;};return _0x36f9();}const {default:makeWASocket,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,makeInMemoryStore}=require(_0x126a89(0xea)),{Boom}=require('@hapi/boom'),{state,saveState}=useSingleFileAuthState(_0x126a89(0xec)),MAIN_LOGGER=require(_0x126a89(0x99))[_0x126a89(0xa1)],logger=MAIN_LOGGER[_0x126a89(0xcf)]({});logger['level']=_0x126a89(0xcb);const config=require(_0x126a89(0xca)),pino=require(_0x126a89(0x97)),store=makeInMemoryStore({'logger':pino()[_0x126a89(0xcf)]({'level':'silent','stream':_0x126a89(0xcc)})}),fs=require('fs'),path=require(_0x126a89(0xe0)),events=require(_0x126a89(0xb0)),{Message,Image,Video}=require(_0x126a89(0x9e)),{DataTypes}=require('sequelize'),{GreetingsDB,getMessage}=require(_0x126a89(0x85)),got=require(_0x126a89(0xe4)),prefix=config['PREFIX'];fs['readdirSync'](_0x126a89(0xbb))['forEach'](_0x3ea402=>{const _0x28e7ec=_0x126a89;path[_0x28e7ec(0x88)](_0x3ea402)['toLowerCase']()==_0x28e7ec(0x8e)&&require(_0x28e7ec(0xbb)+_0x3ea402);});const plugindb=require(_0x126a89(0x96));String[_0x126a89(0x8c)][_0x126a89(0xc6)]=function(){const _0x50bc01=_0x126a89;var _0x321594=0x0,_0xcba4d6=arguments;return this[_0x50bc01(0xb6)](/{}/g,function(){const _0x53401b=_0x50bc01;return typeof _0xcba4d6[_0x321594]!=_0x53401b(0xb4)?_0xcba4d6[_0x321594++]:'';});};!Date[_0x126a89(0xd5)]&&(Date[_0x126a89(0xd5)]=function(){const _0x448e83=_0x126a89;return new Date()[_0x448e83(0xc1)]();});Array[_0x126a89(0x8c)]['remove']=function(){const _0x45789f=_0x126a89;var _0x20e60a,_0x243f74=arguments,_0x3d7bf7=_0x243f74['length'],_0x502951;while(_0x3d7bf7&&this[_0x45789f(0xda)]){_0x20e60a=_0x243f74[--_0x3d7bf7];while((_0x502951=this[_0x45789f(0xdb)](_0x20e60a))!==-0x1){this['splice'](_0x502951,0x1);}}return this;};const startSock=async()=>{const _0x5d2bce=_0x126a89;await config[_0x5d2bce(0x92)][_0x5d2bce(0xc2)](),console[_0x5d2bce(0xb1)](_0x5d2bce(0xa4)),console[_0x5d2bce(0xb1)]('Wa-Bot\x20Connecting\x20to\x20whatsapp');const {version:_0xe6178e}=await fetchLatestBaileysVersion(),_0x123ffe=makeWASocket({'logger':logger,'version':_0xe6178e,'printQRInTerminal':![],'auth':state});console[_0x5d2bce(0xb1)](_0x5d2bce(0xc0)),store['bind'](_0x123ffe['ev']),_0x123ffe['ev']['on']('connection.update',async _0x275b07=>{const _0x34b44e=_0x5d2bce,{connection:_0x1bb379,lastDisconnect:_0xc7c525}=_0x275b07;console[_0x34b44e(0xb1)](_0x34b44e(0x9a));var _0x572418=await plugindb[_0x34b44e(0xcd)][_0x34b44e(0xbd)]();_0x572418[_0x34b44e(0xbc)](async _0x2d1fd9=>{const _0x5d8465=_0x34b44e;if(!fs[_0x5d8465(0xbe)](_0x5d8465(0xd9)+_0x2d1fd9['dataValues'][_0x5d8465(0x93)]+_0x5d8465(0x8e))){console[_0x5d8465(0xb1)](_0x2d1fd9['dataValues'][_0x5d8465(0x93)]);var _0x450fcb=await got(_0x2d1fd9[_0x5d8465(0xbf)][_0x5d8465(0xd4)]);_0x450fcb[_0x5d8465(0xd0)]==0xc8&&(fs[_0x5d8465(0x9f)](_0x5d8465(0xd9)+_0x2d1fd9[_0x5d8465(0xbf)][_0x5d8465(0x93)]+_0x5d8465(0x8e),_0x450fcb[_0x5d8465(0x86)]),require(_0x5d8465(0xd9)+_0x2d1fd9['dataValues']['name']+'.js'));}}),fs[_0x34b44e(0xa6)]('./plugins')[_0x34b44e(0x91)](_0x1c2ec6=>{const _0xa56bc=_0x34b44e;path[_0xa56bc(0x88)](_0x1c2ec6)['toLowerCase']()==_0xa56bc(0x8e)&&require(_0xa56bc(0xd9)+_0x1c2ec6);}),console['log'](_0x34b44e(0xdf)),_0x1bb379==_0x34b44e(0xac)&&(console[_0x34b44e(0xb1)](_0x34b44e(0xe5)),await _0x123ffe['sendMessage'](_0x123ffe[_0x34b44e(0xaf)]['id'],{'text':_0x34b44e(0xab)}));}),_0x123ffe['ev']['on'](_0x5d2bce(0x8b),async({messages:_0x54b113})=>{const _0x4a5e5a=_0x5d2bce;config[_0x4a5e5a(0xe6)]&&await _0x123ffe[_0x4a5e5a(0x9d)](_0x54b113['key'][_0x4a5e5a(0xd6)],Presence[_0x4a5e5a(0x98)]);if(_0x54b113['messageStubType']===0x20||_0x54b113[_0x4a5e5a(0xde)]===0x1c){var _0xe7c0a6=await getMessage(_0x54b113[_0x4a5e5a(0xb3)]['remoteJid'],_0x4a5e5a(0x9b));_0xe7c0a6!==![]&&await _0x123ffe[_0x4a5e5a(0xa7)](_0x54b113[_0x4a5e5a(0xb3)][_0x4a5e5a(0xd6)],_0xe7c0a6[_0x4a5e5a(0xd3)],MessageType['text']);return;}else{if(_0x54b113[_0x4a5e5a(0xde)]===0x1b||_0x54b113[_0x4a5e5a(0xde)]===0x1f){var _0xe7c0a6=await getMessage(_0x54b113[_0x4a5e5a(0xb3)][_0x4a5e5a(0xd6)]);_0xe7c0a6!==![]&&await _0x123ffe[_0x4a5e5a(0xa7)](_0x54b113[_0x4a5e5a(0xb3)][_0x4a5e5a(0xd6)],_0xe7c0a6[_0x4a5e5a(0xd3)],MessageType[_0x4a5e5a(0xa5)]);return;}}events[_0x4a5e5a(0xe2)][_0x4a5e5a(0xbc)](async _0x24bb89=>{const _0x47dc3e=_0x4a5e5a;if(msg[_0x47dc3e(0xd3)]&&msg[_0x47dc3e(0xd3)][_0x47dc3e(0xe3)]&&msg[_0x47dc3e(0xd3)][_0x47dc3e(0xe3)]['caption'])var _0x53fe15=msg[_0x47dc3e(0xd3)]['imageMessage']['caption'];else{if(msg[_0x47dc3e(0xd3)]&&msg[_0x47dc3e(0xd3)]['videoMessage']&&msg[_0x47dc3e(0xd3)][_0x47dc3e(0xdc)]['caption'])var _0x53fe15=msg[_0x47dc3e(0xd3)][_0x47dc3e(0xdc)][_0x47dc3e(0x95)];else{if(msg[_0x47dc3e(0xd3)])var _0x53fe15=msg['message']['extendedTextMessage']===null?msg[_0x47dc3e(0xd3)]['conversation']:msg[_0x47dc3e(0xd3)]['extendedTextMessage'][_0x47dc3e(0xa5)];else var _0x53fe15=undefined;}}if(_0x24bb89['on']!==undefined&&(_0x24bb89['on']===_0x47dc3e(0xe7)||_0x24bb89['on']===_0x47dc3e(0xc9))&&msg[_0x47dc3e(0xd3)]&&msg[_0x47dc3e(0xd3)][_0x47dc3e(0xe3)]!==null&&(_0x24bb89[_0x47dc3e(0x94)]===undefined||_0x24bb89[_0x47dc3e(0x94)]!==undefined&&_0x24bb89[_0x47dc3e(0x94)][_0x47dc3e(0xa8)](_0x53fe15))||_0x24bb89[_0x47dc3e(0x94)]!==undefined&&_0x24bb89[_0x47dc3e(0x94)][_0x47dc3e(0xa8)](_0x53fe15)||_0x24bb89['on']!==undefined&&_0x24bb89['on']==='text'&&_0x53fe15||_0x24bb89['on']!==undefined&&_0x24bb89['on']===_0x47dc3e(0xba)&&msg[_0x47dc3e(0xd3)]&&msg[_0x47dc3e(0xd3)][_0x47dc3e(0xdc)]!==null&&(_0x24bb89['pattern']===undefined||_0x24bb89[_0x47dc3e(0x94)]!==undefined&&_0x24bb89[_0x47dc3e(0x94)][_0x47dc3e(0xa8)](_0x53fe15))){let _0x599eb3=![];var _0x407815=_0x123ffe[_0x47dc3e(0x8d)][_0x47dc3e(0xe1)](msg['key']['remoteJid']);if(config[_0x47dc3e(0xc8)]!==![]&&msg['key'][_0x47dc3e(0xd8)]===![]&&_0x24bb89[_0x47dc3e(0xd8)]===!![]&&(msg[_0x47dc3e(0x89)]&&config[_0x47dc3e(0xc8)][_0x47dc3e(0xdd)](',')?config[_0x47dc3e(0xc8)][_0x47dc3e(0xd1)](',')[_0x47dc3e(0xdd)](msg[_0x47dc3e(0x89)]['split']('@')[0x0]):msg[_0x47dc3e(0x89)][_0x47dc3e(0xd1)]('@')[0x0]==config[_0x47dc3e(0xc8)]||config[_0x47dc3e(0xc8)][_0x47dc3e(0xdd)](',')?config['SUDO'][_0x47dc3e(0xd1)](',')['includes'](msg[_0x47dc3e(0xb3)][_0x47dc3e(0xd6)]['split']('@')[0x0]):msg[_0x47dc3e(0xb3)][_0x47dc3e(0xd6)]['split']('@')[0x0]==config[_0x47dc3e(0xc8)])||_0x24bb89[_0x47dc3e(0xd8)]===msg[_0x47dc3e(0xb3)][_0x47dc3e(0xd8)]||_0x24bb89[_0x47dc3e(0xd8)]===![]&&!msg['key'][_0x47dc3e(0xd8)]){if(_0x24bb89['onlyPinned']&&_0x407815[_0x47dc3e(0xd2)]===undefined)return;if(!_0x24bb89[_0x47dc3e(0x84)]===_0x407815['jid'][_0x47dc3e(0xdd)]('-'))_0x599eb3=!![];else{if(_0x24bb89[_0x47dc3e(0xa0)]===_0x407815[_0x47dc3e(0xb5)][_0x47dc3e(0xdd)]('-'))_0x599eb3=!![];}}if(_0x599eb3){config['SEND_READ']&&_0x24bb89['on']===undefined&&await _0x123ffe[_0x47dc3e(0xae)](msg[_0x47dc3e(0xb3)][_0x47dc3e(0xd6)]);var _0x536e75=_0x53fe15[_0x47dc3e(0xc3)](_0x24bb89[_0x47dc3e(0x94)]);if(_0x24bb89['on']!==undefined&&(_0x24bb89['on']===_0x47dc3e(0xe7)||_0x24bb89['on']===_0x47dc3e(0xc9))&&msg[_0x47dc3e(0xd3)][_0x47dc3e(0xe3)]!==null)whats=new Image(_0x123ffe,msg);else _0x24bb89['on']!==undefined&&_0x24bb89['on']===_0x47dc3e(0xba)&&msg['message'][_0x47dc3e(0xdc)]!==null?whats=new Video(_0x123ffe,msg):whats=new Message(_0x123ffe,msg);_0x24bb89['deleteCommand']&&msg[_0x47dc3e(0xb3)][_0x47dc3e(0xd8)]&&await whats['delete']();}}});});if(connection!=='close')return;let _0x163609=new Boom(lastDisconnect?.[_0x5d2bce(0x83)])?.[_0x5d2bce(0xce)]?.[_0x5d2bce(0xd0)];const _0x191800=DisconnectReason;if(_0x163609===_0x191800[_0x5d2bce(0xb8)]){console[_0x5d2bce(0xb1)]('Corrupted\x20section.\x20Delete\x20old\x20session\x20and\x20scan\x20the\x20QR\x20code.'),_0x123ffe[_0x5d2bce(0xc7)]();return;}if(_0x163609===_0x191800[_0x5d2bce(0xaa)]){console[_0x5d2bce(0xb1)](_0x5d2bce(0xe8)),startSock();return;}if(_0x163609===_0x191800[_0x5d2bce(0xa2)]){console[_0x5d2bce(0xb1)](_0x5d2bce(0x82)),startSock();return;}if(_0x163609===_0x191800['connectionReplaced']){console['log'](_0x5d2bce(0xb2)),_0x123ffe[_0x5d2bce(0xc7)]();return;}if(_0x163609===_0x191800[_0x5d2bce(0xeb)]){console[_0x5d2bce(0xb1)]('Session\x20terminated\x20by\x20cell\x20phone.\x20Delete\x20session\x20and\x20scan\x20the\x20QR\x20code.'),_0x123ffe[_0x5d2bce(0xc7)]();return;}if(_0x163609===_0x191800[_0x5d2bce(0x87)]){console[_0x5d2bce(0xb1)]('Kingdom\x20needed.\x20restarting...'),startSock();return;}if(_0x163609===_0x191800[_0x5d2bce(0x9c)]){console['log'](_0x5d2bce(0xa9)),startSock();return;}_0x123ffe[_0x5d2bce(0xc4)](_0x5d2bce(0xed)+_0x163609+'|'+lastDisconnect[_0x5d2bce(0x83)]),_0x123ffe['ev']['on']('creds.update',saveState);};startSock();
