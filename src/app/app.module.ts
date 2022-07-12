import { ContabilityService } from './pages/contability/contability.service';
import { ContabilityComponent } from './pages/contability/contability.component';
import { DialogAnimationsExampleDialog } from './utilities/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './pages/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContabilityComponent,
    DialogAnimationsExampleDialog,
  ],
  imports: [
    FormsModule,
    MatIconModule,
    BrowserModule,
    MatTabsModule,
    MatDialogModule,
    AppRoutingModule,
    MatGridListModule,
    BrowserAnimationsModule,
  ],
  providers: [ContabilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
