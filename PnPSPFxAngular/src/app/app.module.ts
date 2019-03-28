import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { SpCrudopsWebPartComponent } from './sp-crudops-web-part/sp-crudops-web-part.component';

@NgModule({
  declarations: [
    SpCrudopsWebPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [SpCrudopsWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(SpCrudopsWebPartComponent, { injector: this.injector });
    customElements.define('app-sp-crudops-web-part', el);
  }
}
