declare interface openTradeDataset {
    type: 'highs-lows-candles-dataset';
    data: openTradeHighLowCandleDatasetElement[];
    labels: openTradeDatasetLabels[];
}

declare interface openTradeHighLowCandleDatasetElement {}
declare interface openTradeDatasetLabels {}
