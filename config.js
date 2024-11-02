const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_30_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgODgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDMxLFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMixcbiAgICAgICAgODMsXG4gICAgICAgIDc3LFxuICAgICAgICA2NixcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxLFxuICAgICAgICA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMixcbiAgICAgICAgODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjIzLFxuICAgICAgICA2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDczLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE3LFxuICAgICAgICA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDk1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi92d3FVZ0xGTFkrZjlvbjFnSlR6dEllZWNYN1ZLTmpKTXcxaU1rZFlabGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRBSElHQ1VGUVpXRU5nam13bUY5MndcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGEyMDIxODctYTE1Yi00ZmM0LTlkMDItMWRmZjM1MzNhZGY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDIwOCxcbiAgICAgIDE4NyxcbiAgICAgIDIxNyxcbiAgICAgIDE0OSxcbiAgICAgIDE0NixcbiAgICAgIDE1NyxcbiAgICAgIDIyNCxcbiAgICAgIDM2LFxuICAgICAgMTQ5LFxuICAgICAgMTU2LFxuICAgICAgMTk0LFxuICAgICAgMTc3LFxuICAgICAgMTUxLFxuICAgICAgMTc5LFxuICAgICAgMTc2LFxuICAgICAgMTU2LFxuICAgICAgNzEsXG4gICAgICA4MCxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDIwOCxcbiAgICAgIDEsXG4gICAgICA4LFxuICAgICAgMTU5LFxuICAgICAgMTk4LFxuICAgICAgNDMsXG4gICAgICAxODcsXG4gICAgICA4MixcbiAgICAgIDI1MixcbiAgICAgIDEzNyxcbiAgICAgIDIyMyxcbiAgICAgIDM3LFxuICAgICAgMTM5LFxuICAgICAgMTk4LFxuICAgICAgMTIsXG4gICAgICAxMTIsXG4gICAgICAyMzUsXG4gICAgICAxMTgsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFOVdUQ1RHNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5MzE2NzgyNTU6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk1MzM5ODg1NDA4Mjg2OjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YLzVOY0NFUGZJbGJrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQUZVa1NyNFE3UzNZU2NQcTN5dTRIMjFkc1hFdEdhWTVmdDI3UkdBaUN5az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlSTdpMC8rYVFZaTJpSElBWTkrY29JVTY0K05rcXV1MGNOdFR4T2VYai81cHBCbGt1dGJtT3hJNVR4QkkzazZNaUNhd3NPYVFScXhSd3NNODBQaDNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1djc4S01YckZTWHlIN29IdEViSEJ2UzM4dm4wcWQzYmNLTE9VQm0ybzdJRDZNZnRkcGFYbG5kVCtrY3pRcXVRdjVsaFhJNldiVHBJdFZOcTU0V2tCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDkzMTY3ODI1NTo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTAzODAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSCtIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIK0guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJldWtGaWdoVDVmZ01kT3J5OXlhV2JHRGpTWjZjb01PRVRlSUpPbmhMYkRNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcyMDk3Nzg5MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4MjY5NDk0ODQ1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
