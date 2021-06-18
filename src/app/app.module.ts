import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, AdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    SplitterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
