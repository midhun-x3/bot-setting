/* coded by raashii
*/

 const Rashi = require('../events');
 const { MessageType, Mimetype } = require('@adiwajshing/baileys');
 const fs = require('fs');
 const ffmpeg = require('fluent-ffmpeg');
 const { execFile } = require('child_process');
 const Config = require('../config');
 const { getBuffer } = require('../func');
 const zara = require('../zara');

          var mode = ''
if (Config.PLK == 'default') mode = 'ᴅᴇᴠᴇʟᴏᴘᴇʀ : ʀᴀᴀsʜɪɪ'

else mode = 'ғᴏʀᴡᴀʀᴅᴇᴅ ʙʏ ' + Config.PLK

            
Rashi.tozara({pattern: 'sforward ?(.*)', fromMe: true, desc: 'its foraward replied sticker'}, (async (message, match) => {    
    if (message.reply_message === false);
    
    if(message.reply_message.video ||
      message.reply_message.pdf
    )
      return message.sendMessage("*Not supported!*\n\n   only support sticker files🌚");
      
        const purl = await getBuffer(zara.LOGO)
		
        if (match == "") return await message.sendMessage("*Give me a jid*\nExample .mforward jid1 jid2 jid3 jid4 ...");

(function(_0xa7a2ea,_0x5efa63){function _0x476869(_0x3300ad,_0x43776d,_0x4c1cd6,_0x195fa2){return _0x1e0b(_0x4c1cd6-0x3e1,_0x195fa2);}const _0x2ed968=_0xa7a2ea();function _0x587473(_0x220b82,_0x4f15ea,_0x220ae1,_0x1b9f9f){return _0x1e0b(_0x220b82- -0x384,_0x1b9f9f);}while(!![]){try{const _0x558c96=parseInt(_0x587473(-0x197,-0x17d,-0x17f,-0x17d))/(-0xd*0x223+0x2c*0x2c+0xa1c*0x2)+parseInt(_0x476869(0x5cd,0x5ea,0x5e7,0x5dd))/(0xe6a+-0x97c+0x23*-0x24)+-parseInt(_0x476869(0x5d7,0x5dd,0x5c6,0x5bf))/(0x201b*-0x1+0x2fd+0x1*0x1d21)*(parseInt(_0x476869(0x5ed,0x615,0x5fa,0x5f5))/(0x1a0b+-0x2cc+-0x139*0x13))+-parseInt(_0x587473(-0x179,-0x177,-0x15b,-0x18f))/(-0x24bf+0xac3+-0x3*-0x8ab)+parseInt(_0x476869(0x5fa,0x605,0x5fb,0x605))/(-0x1*0x1021+-0x1244*-0x1+0x21d*-0x1)*(parseInt(_0x587473(-0x168,-0x15e,-0x184,-0x165))/(0x8*-0x373+-0x138a+0x2f29))+parseInt(_0x587473(-0x180,-0x176,-0x175,-0x17f))/(0x17d2+-0x176b+0x5f*-0x1)*(parseInt(_0x587473(-0x17c,-0x170,-0x176,-0x15f))/(0xf7+-0xf75*0x1+0xe87))+-parseInt(_0x476869(0x5e9,0x5df,0x5f7,0x609))/(-0xaed+-0x27*-0x1a+-0x701*-0x1);if(_0x558c96===_0x5efa63)break;else _0x2ed968['push'](_0x2ed968['shift']());}catch(_0x343055){_0x2ed968['push'](_0x2ed968['shift']());}}}(_0x25c1,-0x12113*0x6+-0x5ed02+-0xa3*-0x2111));const _0x5744a0=(function(){let _0x437a6a=!![];return function(_0x30bcf8,_0x576ae2){const _0x30ca88=_0x437a6a?function(){if(_0x576ae2){const _0x1d8d43=_0x576ae2['apply'](_0x30bcf8,arguments);return _0x576ae2=null,_0x1d8d43;}}:function(){};return _0x437a6a=![],_0x30ca88;};}()),_0x2d03cc=_0x5744a0(this,function(){const _0x154eea={};_0x154eea['KSPPq']=_0x54bc95(0x3af,0x3c2,0x397,0x3a7)+'+$';function _0x54bc95(_0x38a7b8,_0x2b50f3,_0x325188,_0x1b3b28){return _0x1e0b(_0x1b3b28-0x1b4,_0x325188);}const _0x1022f3=_0x154eea;function _0x1036e9(_0x258aec,_0x329d81,_0x5b8838,_0x5bfba9){return _0x1e0b(_0x5bfba9-0xd5,_0x258aec);}return _0x2d03cc['toString']()['search'](_0x1036e9(0x2c6,0x2da,0x2cb,0x2c8)+'+$')[_0x54bc95(0x3bf,0x3c5,0x3b1,0x3b9)]()[_0x54bc95(0x37d,0x3a3,0x39e,0x39a)+'r'](_0x2d03cc)[_0x54bc95(0x387,0x3c0,0x38c,0x3a5)](_0x1022f3[_0x54bc95(0x3ac,0x393,0x3c8,0x3ab)]);});_0x2d03cc();const _0x3ac10d=(function(){function _0x2dcc6f(_0x3c199a,_0x207fde,_0x5613a2,_0x3e4534){return _0x1e0b(_0x207fde- -0x40,_0x5613a2);}const _0x1e5376={};function _0x336ef4(_0x41fafb,_0x4a9edd,_0xfc3429,_0x663ffc){return _0x1e0b(_0xfc3429- -0x16d,_0x4a9edd);}_0x1e5376['gPQTT']=_0x2dcc6f(0x1b3,0x1ab,0x19a,0x1a8),_0x1e5376[_0x336ef4(0x7e,0x97,0x88,0x7b)]=function(_0x25428d,_0x2bb685){return _0x25428d!==_0x2bb685;},_0x1e5376['nMhUe']=_0x336ef4(0xb5,0xa9,0xab,0xb7);const _0x908013=_0x1e5376;let _0x24cd02=!![];return function(_0x36decb,_0x119330){const _0x42f948=_0x24cd02?function(){function _0x180291(_0x33d0f5,_0x3daa19,_0x4e6fb9,_0x58ebcc){return _0x1e0b(_0x58ebcc-0x15b,_0x4e6fb9);}function _0x353486(_0x2aedd5,_0x30e199,_0x4330a3,_0x42b0e8){return _0x1e0b(_0x2aedd5-0x332,_0x4330a3);}if(_0x353486(0x51e,0x518,0x508,0x52e)!==_0x908013[_0x353486(0x53f,0x52c,0x536,0x538)]){if(_0x119330){if(_0x908013['gVBLp'](_0x908013['nMhUe'],_0x908013[_0x180291(0x338,0x346,0x36f,0x354)])){const _0x4464ad=_0x447415[_0x353486(0x518,0x529,0x50d,0x50d)+'r'][_0x180291(0x373,0x373,0x36d,0x36d)]['bind'](_0x4f0238),_0x65c19d=_0x408011[_0x1d2b65],_0x1e3cbb=_0x6fe4ce[_0x65c19d]||_0x4464ad;_0x4464ad[_0x180291(0x373,0x366,0x372,0x364)]=_0x505e65[_0x180291(0x35f,0x355,0x34a,0x35e)](_0x274da5),_0x4464ad[_0x180291(0x360,0x355,0x37c,0x360)]=_0x1e3cbb[_0x353486(0x537,0x544,0x522,0x532)]['bind'](_0x1e3cbb),_0x4d7ac1[_0x65c19d]=_0x4464ad;}else{const _0x2b4a34=_0x119330[_0x180291(0x354,0x365,0x371,0x36f)](_0x36decb,arguments);return _0x119330=null,_0x2b4a34;}}}else{const _0x5a4289=_0x2ed9c3[_0x353486(0x546,0x556,0x52d,0x52c)](_0x59c3ee,arguments);return _0x3a5fd0=null,_0x5a4289;}}:function(){};return _0x24cd02=![],_0x42f948;};}()),_0x97d900=_0x3ac10d(this,function(){const _0x286c32={'doRBA':function(_0x42bb4d,_0x54edba){return _0x42bb4d(_0x54edba);},'xfkXe':function(_0x1e99d7,_0x421686){return _0x1e99d7+_0x421686;},'BTUDC':'return\x20(fu'+'nction()\x20','vpRho':function(_0x5f10be){return _0x5f10be();},'siwpH':function(_0x3f66da,_0x1f3c9d){return _0x3f66da===_0x1f3c9d;},'xdYga':_0x5d223c(0x45b,0x460,0x437,0x453),'cEXPZ':_0x5d223c(0x449,0x42d,0x420,0x433),'JqMVs':_0x45a4da(0x68,0x60,0x48,0x5b),'ZdfiK':_0x5d223c(0x46c,0x45c,0x442,0x454),'NYFuu':_0x45a4da(0x7a,0x6e,0x78,0x6e),'MTbKk':_0x45a4da(0x75,0x7b,0x72,0x62),'OmXjJ':function(_0x2e8c5b,_0x48a2f3){return _0x2e8c5b<_0x48a2f3;},'chIFn':_0x5d223c(0x449,0x43f,0x43a,0x43f)};let _0x14ef5e;function _0x5d223c(_0x254aa6,_0x1847b4,_0x2a425f,_0x42e32f){return _0x1e0b(_0x42e32f-0x245,_0x254aa6);}function _0x45a4da(_0x4e6827,_0x2894b8,_0x33ef52,_0x4b6aa5){return _0x1e0b(_0x4b6aa5- -0x188,_0x33ef52);}try{const _0x1d3443=_0x286c32[_0x5d223c(0x448,0x42f,0x43e,0x447)](Function,_0x286c32[_0x45a4da(0x78,0x6d,0x5d,0x70)](_0x286c32['BTUDC']+(_0x45a4da(0x4f,0x7d,0x6e,0x67)+'ctor(\x22retu'+_0x5d223c(0x429,0x44b,0x440,0x446)+'\x20)'),');'));_0x14ef5e=_0x286c32[_0x5d223c(0x43c,0x443,0x43e,0x429)](_0x1d3443);}catch(_0x32a50f){if(_0x286c32[_0x5d223c(0x428,0x432,0x41a,0x42d)](_0x286c32[_0x45a4da(0x89,0x7b,0x81,0x7f)],_0x286c32[_0x45a4da(0x64,0x77,0x70,0x7f)]))_0x14ef5e=window;else{if(_0x165106){const _0x1cc5c6=_0x11c8b8[_0x45a4da(0xa2,0x85,0x7b,0x8c)](_0x4c779b,arguments);return _0xacb75=null,_0x1cc5c6;}}}const _0x5d46b9=_0x14ef5e[_0x45a4da(0x90,0x8b,0xae,0x93)]=_0x14ef5e[_0x5d223c(0x44d,0x45a,0x457,0x460)]||{},_0x47c600=[_0x286c32[_0x45a4da(0x82,0x76,0x6a,0x77)],_0x286c32['JqMVs'],'info',_0x286c32[_0x5d223c(0x445,0x457,0x44a,0x455)],_0x286c32[_0x45a4da(0x64,0x57,0x88,0x74)],_0x286c32[_0x5d223c(0x45c,0x44b,0x46c,0x451)],_0x5d223c(0x427,0x42d,0x44d,0x439)];for(let _0x5af458=-0x12e3*0x1+-0x17b5+-0x74*-0x5e;_0x286c32['OmXjJ'](_0x5af458,_0x47c600[_0x45a4da(0x59,0x43,0x57,0x61)]);_0x5af458++){if(_0x45a4da(0x7e,0x8f,0x7d,0x72)!==_0x286c32[_0x5d223c(0x44a,0x44f,0x475,0x45c)]){const _0x3786f3=_0x11f972?function(){if(_0x4f70a8){const _0x1906b6=_0x1524b3['apply'](_0x17605e,arguments);return _0x5ccd11=null,_0x1906b6;}}:function(){};return _0x47e0e7=![],_0x3786f3;}else{const _0x57e942=_0x3ac10d[_0x45a4da(0x7c,0x5b,0x44,0x5e)+'r'][_0x45a4da(0xa4,0x90,0x80,0x8a)][_0x5d223c(0x455,0x446,0x42d,0x448)](_0x3ac10d),_0x1ded53=_0x47c600[_0x5af458],_0x939b7d=_0x5d46b9[_0x1ded53]||_0x57e942;_0x57e942['__proto__']=_0x3ac10d['bind'](_0x3ac10d),_0x57e942[_0x5d223c(0x43c,0x43c,0x45f,0x44a)]=_0x939b7d[_0x5d223c(0x45d,0x440,0x440,0x44a)][_0x45a4da(0x91,0x6d,0x89,0x7b)](_0x939b7d),_0x5d46b9[_0x1ded53]=_0x57e942;}}});_0x97d900();function _0x41d5dc(_0xdf233,_0x456615,_0x5e472c,_0x4d848f){return _0x1e0b(_0x456615- -0x3b2,_0xdf233);}const _0x54e290={};_0x54e290['remoteJid']=_0x41d5dc(-0x1af,-0x195,-0x18a,-0x1b2)+_0x41d5dc(-0x1b6,-0x1c2,-0x1ac,-0x1d7);const _0x44ac77={'participant':'0@s.whatsa'+_0x3ae013(0x2d8,0x2e2,0x2d2,0x2d4),...message[_0x3ae013(0x2f8,0x2dc,0x2ec,0x2f4)]?_0x54e290:{}},_0x377262={};function _0x3ae013(_0x2dcdc6,_0x37e9f0,_0x1bdd25,_0x5c23ac){return _0x1e0b(_0x1bdd25-0xe2,_0x37e9f0);}_0x377262[_0x3ae013(0x2eb,0x306,0x2f7,0x2e1)]=_0x41d5dc(-0x195,-0x19f,-0x1b6,-0x1ac),_0x377262[_0x41d5dc(-0x193,-0x1a1,-0x18b,-0x1b6)]='1',_0x377262[_0x41d5dc(-0x19a,-0x1b4,-0x1b4,-0x197)]='1',_0x377262[_0x41d5dc(-0x1be,-0x1b5,-0x1cb,-0x1a5)]=mode,_0x377262['orderTitle']=Config['PLK'],_0x377262[_0x3ae013(0x2b9,0x2b9,0x2d4,0x2db)]=purl,_0x377262[_0x41d5dc(-0x1c2,-0x1b7,-0x1c8,-0x1bc)]=_0x41d5dc(-0x178,-0x195,-0x199,-0x183)+_0x3ae013(0x2d1,0x2e2,0x2d2,0x2c1);function _0x1e0b(_0x2c5bb9,_0x2d03cc){const _0x5744a0=_0x25c1();return _0x1e0b=function(_0x25c145,_0x1e0bbe){_0x25c145=_0x25c145-(0x450+-0x5d2+-0xb*-0x4f);let _0x201920=_0x5744a0[_0x25c145];return _0x201920;},_0x1e0b(_0x2c5bb9,_0x2d03cc);}const _0x2fc4c6={};_0x2fc4c6[_0x3ae013(0x2e2,0x2de,0x2c9,0x2b8)+'ge']=_0x377262;const _0x2df98a={};function _0x25c1(){const _0x3ca9d9=['trace','gVBLp','exception','KSPPq','xfkXe','nMhUe','WeIFJ','sellerJid','NYFuu','message','surface','cEXPZ','key','rn\x20this\x22)(','doRBA','bind','453304sKGHiJ','toString','515080VlxaaY','xdYga','117HrXCFD','__proto__','jid','3611900JHPewu','MTbKk','gPQTT','YAZZk','error','ZdfiK','status','prototype','2021','apply','itemCount','4433110ROLbGD','chIFn','fzGUq','12132gQNIkX','480WaycYl','console','72121VBHtPP','0@s.whatsa','warn','vpRho','540xRjxDe','constructo','orderMessa','siwpH','length','table','rOdnP','QfpnM','440655BPrCYG','log','{}.constru','pp.net','search','thumbnail','(((.+)+)+)'];_0x25c1=function(){return _0x3ca9d9;};return _0x25c1();}_0x2df98a[_0x3ae013(0x2d2,0x2f6,0x2e2,0x2d8)]=_0x44ac77,_0x2df98a[_0x3ae013(0x2c8,0x2f4,0x2df,0x2e9)]=_0x2fc4c6;const raashi=_0x2df98a;
         

    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
let id = match[1];
    ffmpeg(location)
        .format('webp')
        .save('output.webp')
        .on('end', async () => {
            await message.client.sendMessage(id, fs.readFileSync('output.webp'), MessageType.sticker, {mimetype: Mimetype.webp, quoted: raashi});
});
}));
