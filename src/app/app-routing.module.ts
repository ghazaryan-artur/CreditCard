import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { RouterModule, Routes     } from '@angular/router';
import { HistoryComponent         } from './components/history/history.component'
import { CreateTransferComponent  } from './components/create-transfer/create-transfer.component';

const routes: Routes = [
  { path: 'create',   component: CreateTransferComponent },
  { path: 'history',  component: HistoryComponent },
  { path: '**',  redirectTo: 'create', pathMatch: 'full'  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
