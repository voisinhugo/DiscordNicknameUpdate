import axios from "axios";
import credentials from "./credentials.json";

const BOT_TOKEN = credentials.bot_token;

const GUILD_ID = credentials.guild_id; // Zone 6 server
const MEMBER_ID = credentials.member_id; // hugov

const NICKNAME_URL = `https://discord.com/api/guilds/${GUILD_ID}/members/${MEMBER_ID}`;
const BOT_NICKNAME_URL = `https://discord.com/api/guilds/${GUILD_ID}/members/@me/nick`;

export const changeNickname = async (
  newNickname: string,
  url = NICKNAME_URL
) => {
  const body = { nick: newNickname };
  const options = {
    headers: {
      Authorization: `Bot ${BOT_TOKEN}`,
    },
  };

  try {
    const response = await axios.patch(url, body, options);
    console.log(`Discord status code: ${response.status}`);
  } catch (error) {
    console.error(error);
  }
};

export const changeBotNickname = async (newNickname) => {
  await changeNickname(newNickname, BOT_NICKNAME_URL);
};
