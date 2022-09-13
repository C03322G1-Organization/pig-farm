import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BodyModule} from './body/body.module';
import {VaccinationModule} from './vaccination/vaccination.module';
import {TreatmentModule} from './treatment/treatment.module';
import {StorageModule} from './storage/storage.module';
import {StatisticModule} from "./statistic/statistic.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    VaccinationModule,
    StorageModule,
    BodyModule,
    TreatmentModule,
    StatisticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
