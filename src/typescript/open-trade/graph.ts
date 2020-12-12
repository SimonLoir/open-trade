import ElementIsNotAValidElementException from '../../exceptions/elementIsNotAValidElementException';
import { $, ExtJsObject } from '../extjs';

export default class OpenTradeGraph {
    constructor(base: HTMLElement | string, options: any) {
        // If a string is given, we use the query selector to get the element
        if (typeof base == 'string')
            base = document.querySelector<HTMLElement>(base);

        // If the element is not valid
        if (!base) throw new ElementIsNotAValidElementException();

        // We get the current style of the element
        const container_style = window.getComputedStyle(base);
        console.log(container_style.width);

        // We create the base elements
        const left_toolbox = $(base).child('div').addClass('left-toolbox');
        const top_toolbox = $(base).child('div').addClass('top-toolbox');
        const graph = $(base).child('canvas').addClass('graph');

        base.classList.add('open-trade-base-element');
    }
}
