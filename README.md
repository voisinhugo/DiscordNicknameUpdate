# Discord Nickname Update

This a small project to update a user and Discord bot nickname, according to the value of the stock of GameStop (GME).

## About

This project is using IEX api to get the stock value, and the Discord REST api to rename an user nickname and a bot nickname.

Note: the bot's Role should have an strictly higher than the user's Role.

## Installation

To run the script, you'll need to provide:

- an IEX API public key in `src/stock_market/credentials.json` as `api_key` value
- Discord credentials in `src/discord/credentials.json` with:

  - a bot token as `bot_token` value
  - a guild ID as `guild_id` value (the server with both the bot and the user)
  - a member ID as `member_id` value

Then, run:

```sh
yarn
yarn start
```

## Acknowledgments

Thanks to [/r/wallstreetbets](https://www.reddit.com/r/wallstreetbets/) for the mess.
