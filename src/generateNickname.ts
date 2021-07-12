const GME_VALUE_WHEN_BOUGHT = 84.68;

export const generateNickname = (GMEValue: number) => {
  if (GMEValue > GME_VALUE_WHEN_BOUGHT) {
    const percent = (GMEValue / GME_VALUE_WHEN_BOUGHT - 1) * 100;
    return `Hugameriche 📈 +${percent.toFixed(2)}%  📈`;
  } else {
    const percent = (1 - GMEValue / GME_VALUE_WHEN_BOUGHT) * 100;
    return `Hugamepauvre 📉 -${percent.toFixed(2)}%  📉`;
  }
};

export const generateBotNickname = (GMEValue: number) => {
  return `GME ${GMEValue}$ 🚀`;
};
