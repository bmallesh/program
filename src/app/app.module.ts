import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { UpdateComponent } from './update/update.component';
import { InsertComponent } from './insert/insert.component';


var rt:Routes=[
{ path:'edit',component:EditComponent},
{ path:'update',component:UpdateComponent},
{path:'insert',component:InsertComponent}];

var rout =RouterModule.forRoot(rt)

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    UpdateComponent,InsertComponent
  ],
  imports: [
    BrowserModule,RouterModule,rout,FormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
