import { getStockValue } from "./stock_market/getStockValue";
import { changeNickname, changeBotNickname } from "./discord/changeNickname";
import { isWallStreetOpen } from "./time/isWallStreetOpen";
import { sleep } from "./utils/sleep";
import { generateNickname, generateBotNickname } from "./generateNickname";

const LOOP_PERIOD = 900000; // 15min

const main = async () => {
  let count = 0;

  while (count < 900) {
    if (isWallStreetOpen()) {
      const GMEValue = await getStockValue("GME");

      const nickname = generateNickname(GMEValue);
      await changeNickname(nickname);

      const botNickname = generateBotNickname(GMEValue);
      await changeBotNickname(botNickname);

      count++;
    } else {
      console.log("Wall Street is closed...");
    }
    await sleep(LOOP_PERIOD);
  }
};

main();
