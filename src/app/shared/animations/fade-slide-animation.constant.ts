import { trigger, transition, style, animate, state, AnimationTriggerMetadata } from '@angular/animations';

export const FadeSlideAnimation: AnimationTriggerMetadata = trigger(
    'fadeSlide',
    [
        transition(
            ':enter', 
            [
                style({transform: 'translateY(-100%)', opacity: 0}),
                animate('300ms', style({transform: 'translateY(0)', 'opacity': 1}))
            ]
        ),
        transition(
            ':leave', 
            [
                style({transform: 'translateY(0)', 'opacity': 1}),
                animate('300ms', style({transform: 'translateY(-100%)', 'opacity': 0}))              
            ]
        )
    ]
)