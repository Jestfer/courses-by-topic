import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { ModalComponent } from './components/modal/modal.component';
import { TopicsComponent } from './components/topics/topics.component';

import { RouterModule, Routes } from '@angular/router';
import { ModalService } from './services/modal.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: TopicsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SelectComponent,
    ModalComponent,
    TopicsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ModalService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
