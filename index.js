require('dotenv')
const noblox = require('noblox.js');

async function initApp () {
    const Client = await noblox.setCookie(process.env.RBLX_COOKIE);
    console.log(`Logged in ${Client.UserName} with ID [${Client.UserID}]`)
};

initApp();