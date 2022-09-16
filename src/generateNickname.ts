const GME_VALUE_WHEN_BOUGHT = 84.68;

export const generateNickname = (GMEValue: number) => {
  // There was a stock split on July 22 on a 4-for-1 basis
  const GMEValueBeforeShareSplit = GMEValue * 4;

  if (GMEValueBeforeShareSplit > GME_VALUE_WHEN_BOUGHT) {
    const percent =
      (GMEValueBeforeShareSplit / GME_VALUE_WHEN_BOUGHT - 1) * 100;
    return `Hugameriche 📈 +${percent.toFixed(2)}%  📈`;
  } else {
    const percent =
      (1 - GMEValueBeforeShareSplit / GME_VALUE_WHEN_BOUGHT) * 100;
    return `Hugamepauvre 📉 -${percent.toFixed(2)}%  📉`;
  }
};

export const generateBotNickname = (GMEValue: number) => {
  return `GME ${GMEValue}$ 🚀`;
};
