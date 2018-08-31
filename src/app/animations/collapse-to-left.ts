import { trigger, state, style, transition, animate, query } from '@angular/animations';


export const collapseToLeft = trigger('collapseToLeft', [
    state('open', style({
        'max-width': '*'
    })),
    state('close', style({
        'max-width': '5rem'
    })),
    transition('open => close', animate(300)),
    transition('close => open', animate(300))
]);
