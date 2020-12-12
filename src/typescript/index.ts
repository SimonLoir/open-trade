import '../scss/style.scss';
import OpenTrade from './open-trade';
import OpenTradeGraph from './open-trade/graph';
(async function () {
    new OpenTradeGraph('#container', {});
    new OpenTrade();

    console.log(await getData());
})();

async function getData() {
    return await (await fetch('BTC.json')).json();
}
