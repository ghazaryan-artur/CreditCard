import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit,
                                         OnDestroy {
  public history:Array<Object>;
  public historyChange:Subscription;

  constructor(private service:MainService) { 
    this.history = JSON.parse(localStorage.getItem('history'));
  }

  ngOnInit() { 
    this.historyChange = this.service.historyChange.subscribe(() => { //подписка на изменения в historyChange в сервисе
      this.history = JSON.parse(localStorage.getItem('history'));
    });
  }
  ngOnDestroy(){
    if (this.historyChange) {
      this.historyChange.unsubscribe();
      this.historyChange = null;
    }
  }
 

}
