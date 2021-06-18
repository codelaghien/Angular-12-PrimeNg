import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AdminComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    SplitterModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    ToastModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    InputNumberModule,
    PanelModule,
    CheckboxModule,
    RadioButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
