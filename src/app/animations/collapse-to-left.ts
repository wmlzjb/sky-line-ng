import { trigger, state, style, transition, animate, query, group, animateChild } from '@angular/animations';


export const collapseToLeft = trigger('collapseToLeft', [
    state('open', style({ 'max-width': '*' })),
    state('close', style({ 'max-width': '5rem' })),
    transition('open => close', [
        group([
            query(':self', [style({ 'max-width': '*' }), animate(300, style({ 'max-width': '5rem' }))]),
            query('.sidebar-item span', animateChild())
        ])
    ]),
    transition('close => open', animate(300))
]);
export const opacity = trigger('opacity', [
    state('open', style({ opacity: 1 })),
    state('close', style({ opacity: 0 })),
    transition('open => close', animate(100)),
    transition('close => open', animate(100))
]);
