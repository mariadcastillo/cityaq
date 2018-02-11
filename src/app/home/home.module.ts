import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OnboardingModule } from '../onboarding/onboarding.module';
import { SharedModule } from '../shared/shared.module';
import { SettingsModule } from '../settings/settings.module';

import { BannerComponent } from './banner.component';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        RouterModule,
        OnboardingModule,
        SettingsModule,
        SharedModule
    ],
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}