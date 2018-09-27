import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './routing.module';
import { CheckinService } from './services/checkin.service';

@NgModule({
  declarations: [
    AppComponent,
    StartcheckinComponent,
    CheckinComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [CheckinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
