import { Component, OnInit                    } from '@angular/core';
import { FormGroup,  FormBuilder, Validators  } from '@angular/forms';
import { MainService                          } from 'src/app/services/main.service';


@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.css']
})
export class CreateTransferComponent implements OnInit {
  public cardForm:FormGroup;

  constructor(private FormBuilder:FormBuilder,
              public service:MainService) { 

              }

  ngOnInit() {
    this.initForm(this.service.selectedTransaction);  
   }

   initForm(v:any) :void{
    let standartValid:Array<any> = [Validators.required,
                                    Validators.pattern('[0-9]{4}')];
    this.cardForm = this.FormBuilder.group({
      sendCardNumbers: this.FormBuilder.group({
        first:  [v.sendCardNumbers.first, standartValid], 
        second: [v.sendCardNumbers.second, standartValid],
        third:  [v.sendCardNumbers.third, standartValid],
        fourth: [v.sendCardNumbers.fourth, standartValid] 
      }),
      ownerFullName: [v.ownerFullName, [Validators.required, 
                             Validators.pattern('[A-Za-zА-Яа-яЁё]{2,} [A-Za-zА-Яа-яЁё]{2,} [A-Za-zА-Яа-яЁё]{2,}[ ]{0,6}') ]],   
      activeUntill: this.FormBuilder.group({
        mounth: [v.activeUntill.mounth, Validators.required], 
        year:   [v.activeUntill.year, Validators.required]
      }),
      recipientCardNumbers: this.FormBuilder.group({
        first:  [v.recipientCardNumbers.first, standartValid],
        second: [v.recipientCardNumbers.second, standartValid],
        third:  [v.recipientCardNumbers.third, standartValid],
        fourth: [v.recipientCardNumbers.fourth, standartValid]
      }),
      sum:[v.sum, [Validators.required,
                   Validators.pattern('^[0-9]+$'),
                   Validators.min(100),
                   Validators.max(100000)]]
    }) 
  }

  changeFocus(current:any):void{
    if (current.value.length == 3){
      current.nextSibling.focus();
    } 
  }

}