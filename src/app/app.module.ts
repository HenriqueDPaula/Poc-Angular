import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { WeighingModule} from './module/weighing/weighing.module'

import { WeighingService } from './service/weighing.service';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WeighingModule
  ],
  providers: [WeighingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
