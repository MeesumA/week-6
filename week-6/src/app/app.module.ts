import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';  // Import RouterModule

import { AppComponent } from './app.component';  // Import AppComponent
import { ChatComponent } from './chat/chat.component';  // Import other components

// Define your routes
const routes: Routes = [
  { path: '', component: ChatComponent },  // Example route for ChatComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent  // Declare components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)  // Import RouterModule and apply routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
