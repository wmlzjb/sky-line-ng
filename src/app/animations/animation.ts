import { trigger, state, style, transition, animate } from '@angular/animations';


export const slideToRight = trigger('routerAnimate', [
    state('in', style({ transform: 'translateX(0)' })),
    /** 进场 */
    transition('void => *', [
        style({ transform: 'translateX(-125%)' }),
        animate(600)
    ]),
    // transition('* => void', [
    //     animate(500, style({ transform: 'translateX(100%)' }))
    // ])
]);
