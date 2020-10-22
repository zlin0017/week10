import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddactorComponent } from './addactor/addactor.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ListactorComponent } from './listactor/listactor.component';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { AddactortomovieComponent } from './addactortomovie/addactortomovie.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';
import { RouterModule, Routes } from "@angular/router";
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const week10Routes: Routes = [
  {path: 'addactor', component: AddactorComponent},
  {path: 'listactor', component: ListactorComponent},
  {path: 'updateactor', component: UpdateactorComponent},
  {path: 'deleteactor', component: DeleteactorComponent},
  {path: 'addmovie', component: AddmovieComponent},
  {path: 'listmovie', component: ListmovieComponent},
  {path: 'deletemovie', component: DeletemovieComponent},
  {path: 'addactortomovie', component: AddactortomovieComponent},
  {path: "", redirectTo: "/listactor", pathMatch: "full" },
  {path: '**', component: ViewnotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddactorComponent,
    ListactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    DeletemovieComponent,
    ListmovieComponent,
    AddactortomovieComponent,
    ViewnotfoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(week10Routes), HttpClientModule, FormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
