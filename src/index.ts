import { getStockValue } from "./stock_market/getStockValue";
import { changeNickname, changeBotNickname } from "./discord/changeNickname";
import { isWallStreetOpen } from "./time/isWallStreetOpen";
import { generateNickname, generateBotNickname } from "./generateNickname";

const main = async () => {
  if (isWallStreetOpen()) {
    const GMEValue = await getStockValue("GME");

    const nickname = generateNickname(GMEValue);
    await changeNickname(nickname);

    const botNickname = generateBotNickname(GMEValue);
    await changeBotNickname(botNickname);
  } else {
    console.log("Wall Street is closed...");
  }
};

main();
