import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { environment } from 'src/environments/environment';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    SocialButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents:[AppComponent,
    SocialButtonsComponent]
})
export class AppModule {

  constructor(private injector: Injector){}

  ngDoBootstrap(app: ApplicationRef){
    if(environment.production){
  const socialButtonElement = createCustomElement(SocialButtonsComponent,{injector : this.injector});
  customElements.define('social-buttons', socialButtonElement);
}else{
  app.bootstrap(AppComponent);
    }
  }
 }
