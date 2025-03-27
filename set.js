/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables. And don't forget to rest, for even the relentless must recharge.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09KRXZOMGFVR2Q3TitYenZLclMwZzAvTUZkMlkzT3ZXTTBqek8xUDlIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZW50NUkwdTVRRmVNbjFNWEEwQWRvTURYZTZjVGlwWGE5azB6THc3dkF4dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQ3BVNVg1TUpWYmV6bm1zeUxPTk5rRUhnU3RsS1NIL0Z1WTc1Zkc2VjE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4U3JCZkVoVXBGbFJDeTdoRXZzclBWWkY4Y1ZUMncwR3VTMGNxZTR0d1hFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdBUGdjNDBJbmwrWld1bkEweXVrd2UxT3c4RHdLYXUwS0JHNlFKd0xuV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5QQ05jOXcwOWVKdG9BL3lpU1JXY1dCZjdQS3N1aE1MR04vS3ZHZFRrQ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09pQ3BnYkVuL1BGL1RoWTB3UjRUUUFuRENEeldIN1RPRzBHVGJnd0tFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREREakxpbmNRUkFhWWtGbUlJU0NNcERhK29VQ0tBeURJbjVrZmUzT0tqbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBuQlg5OERtQWRXc1VIUlJzYVUrMExya3NXVnpNYm9QTVV0VUw3VkZqeFY4dzFET3pXeVhyYzYyODhOYUFQRjJzN0FnMDVTREwvQS9ab1Z6VU9pNGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJlaElVU2ozL1gwOW1WM01wbXB3ZkxSckM1QW0zSDBKTTdtWkpUY1F5MElZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxNjcyOTIyMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyQTcxNEZDQjkxOEQ0ODg5QTQxRjI5RTM4NUZBQTEzMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQzMTEyMjc0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTY3MjkyMjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjk3NkMxRjNEMjM1NDQzRUUzRjM5MDAzRDFDQzBDNkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MzExMjI4Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzE2NzI5MjIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRFMUM0MERDMTM3MENDRkIxRUZDRjk5RTNEOUZBNDg4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDMxMTIzMDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlFONzNqdFhhVEZPWUVzUEcwaGl1N0EiLCJwaG9uZUlkIjoiMDE5MWE1NDQtN2FkOS00MzI1LTkzMmYtNjI1ODY2OTljYTAxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh1Zi9FV2ZVSXJRUXRFU0o2LzJTQTFXSjhFQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzUUpnblUyUlUzMk93aXBWZXBiazh1RzhycWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUjQ3RFNBNzMiLCJtZSI6eyJpZCI6IjI2MzcxNjcyOTIyMjo1OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJASm9zaHVhbWFtYm8x8J+UpSBOZXRLaW5nIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPS1NoKzBCRU1HUWw3OEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJObnNITWwyL256VndIdGxNbGEzeHdWT0dmSlRFelBKL21QQ0JadFhjekNnPSIsImFjY291bnRTaWduYXR1cmUiOiJrMVVuWXNpVTZuR0ZpajVPSUExcDBDMjBaTnc4Qm12V04wUlk1YWVRb2lITzFmLzlaNC9jMFBablZCT0ZuMTBMTzBSYk9GQ2JMZW5ZdlptQU5RVG1Cdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTWZtWHh0SXFja28ySWt3WVJQb3hZMUJrNExJZmdqdkhycU5MZnlQLzdheFNMM2ZiM0xxejZxYTk2ZG9abnlWMlZSalR0U0d3V1MvOElzTitTb3BMaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTY3MjkyMjI6NThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFo3QnpKZHY1ODFjQjdaVEpXdDhjRlRobnlVeE16eWY1andnV2JWM013byJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MzExMjI3MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIai8ifQ==;
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'FALSE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';

const prefix = process.env.PREFIX || '+';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';

const botname = process.env.BOTNAME || 'Jᴏsʜᴜᴀᴍᴀᴍʙᴏ-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗝𝗢𝗦𝗛𝗞𝗜𝗡𝗚';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '263716729222';

const menu = process.env.MENU_TYPE || 'VIDEO';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';

const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';

const wapresence = process.env.WA_PRESENCE || '';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '263';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = {
  session,
  sessionName,
  autobio,
  author,
  packname,
  dev,
  DevRaven,
  badwordkick,
  bad,
  mode,
  group,
  NotOwner,
  botname,
  botAdmin,
  antiforeign,
  menu,
  autoread,
  antilink,
  admin,
  mycode,
  antilinkall,
  anticall,
  antitag,
  antidel,
  wapresence,
  welcomegoodbye,
  antibot,
  herokuapi,
  prefix,
  port,
  gptdm,
  appname,
  autolike,
  autoviewstatus,
};
  
