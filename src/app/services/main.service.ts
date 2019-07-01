import { Injectable } from '@angular/core';
import { Router     } from '@angular/router';
import { Subject    } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  public transactions:Array<any> = [];
  public historyChange: Subject<any>;
  public selectedTransaction: Object;

  constructor(private router:Router) { 
    localStorage.setItem('history', '[{"sendCardNumbers":{"first":"1111","second":"2222","third":"3333","fourth":"4444"},"ownerFullName":"Квентин Сергеевич Тарантино","activeUntill":{"mounth":7,"year":20},"recipientCardNumbers":{"first":"5555","second":"6666","third":"7777","fourth":"8888"},"sum":10000,"date":"01.01.2018"},{"sendCardNumbers":{"first":"1122","second":"3344","third":"5566","fourth":"7788"},"ownerFullName":"Ларс Степанович ФонТриер","activeUntill":{"mounth":7,"year":19},"recipientCardNumbers":{"first":"1234","second":"5678","third":"9101","fourth":"1112"},"sum":33000,"date":"10.05.2019"}]');
    this.historyChange = new Subject;
    this.selectedTransaction = this.defaultValue();
  }

  // Функция объявлена здесь, а не сразу в create-transfer.ts следуя из задания
  sendForm(form:any):void{
    let date:string = new Date().toLocaleDateString();
    form.value.date = date; // Добавляем текущую дату к транзакии
    this.transactions = JSON.parse(localStorage.getItem('history'));
    this.transactions.push(form.value)
    localStorage.setItem('history', JSON.stringify(this.transactions));
    this.selectedTransaction = this.defaultValue();
    this.router.navigateByUrl('/history');
  }


  deleteTrans(i:number):void{
    this.transactions = JSON.parse(localStorage.getItem('history'));
    this.transactions.splice(i,1);
    localStorage.setItem('history', JSON.stringify(this.transactions));
    this.historyChange.next(); // Отправка всем подписавшимся об изменении
  }

  remake(i:number):void{
    this.transactions = JSON.parse(localStorage.getItem('history'));
    delete this.transactions[i].date;
    this.selectedTransaction = this.transactions[i];
    this.router.navigateByUrl('/create');
  }

  // Обнуляет значение выбранной транзакции
  defaultValue():Object{
    return {"sendCardNumbers":{"first":"","second":"","third":"","fourth":""},"ownerFullName":"","activeUntill":{"mounth":7,"year":20},"recipientCardNumbers":{"first":"","second":"","third":"","fourth":""},"sum":null};
  }
}
 