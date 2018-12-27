import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
//   MatButtonModule,
//   MatMenuModule,
//   MatIconModule,
//   MatCardModule,
//   MatSidenavModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatTooltipModule,
//   MatToolbarModule
// } from '@angular/material';
// import { MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // MatAutocompleteModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
//     MatButtonModule,
//     MatMenuModule,
//     MatIconModule,
//     MatCardModule,
//     MatSidenavModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatTooltipModule,
//     MatToolbarModule,
//   ],
//   exports: [
//     MatButtonModule,
//     MatMenuModule,
//     MatAutocompleteModule,
//     MatIconModule,
//     MatCardModule,
//     MatSidenavModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatTooltipModule,
//     MatToolbarModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
