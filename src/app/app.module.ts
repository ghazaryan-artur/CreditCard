import { BrowserModule                    } from '@angular/platform-browser';
import { NgModule                         } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent                     } from './app.component';
import { MainComponent                    } from './components/main/main.component';
import { AppRoutingModule                 } from './app-routing.module';
import { CreateTransferComponent          } from './components/create-transfer/create-transfer.component';
import { HistoryComponent                 } from './components/history/history.component';
import { MainService                      } from './services/main.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateTransferComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
