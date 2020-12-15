import '../../scss/open-trade/index.scss';
import OpenTradeGraph from './graph';

export default class OpenTrade {
    private datasets: {
        [key: string]: openTradeDataset;
    } = {};
    constructor() {}
    public setDataset(name: string, dataset: openTradeDataset) {
        this.datasets[name] = dataset;
    }

    public createGraph(base: HTMLElement | string, options: any) {
        return new OpenTradeGraph(base, options);
    }
}
