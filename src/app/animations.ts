import { 
    trigger,
    style,
    transition,
    animate,
    keyframes, 
    query,
    stagger
  } from '@angular/animations';

export const animations =
 trigger('addNewItem',[
    transition('* => *',[
        query(':enter',style({ opacity: 0}), {optional: true}),
   
      query('.animate-Item:enter', stagger(100,[
        animate('.8s ease-in-out', keyframes([
          style({opacity: 0, transform: 'scale(0.4)', offset: 0}),
          style({opacity: 0.7, transform: 'scale(1.1)', offset: 0.7}),
          style({opacity: 1, transform: 'scale(1)', offset: 1}),
        ]))
      ]),{optional: true}),
  
      query('.animate-Item:leave', stagger(300,[
        animate('.6s ease-in-out', keyframes([
          style({opacity: 1, transform: 'scale(1)', offset: 0}),
          style({opacity: 0.7, transform: 'scale(1.1)', offset: 0.7}),
          style({opacity: 0, transform: 'scale(0.4)', offset: 1}),
        ]))
      ]),{ optional: true }),
    ])
   
  ]);