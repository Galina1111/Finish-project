import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { IPhone } from 'src/app/shared/interfaces';
import { NewPhone } from 'src/app/shared/classes';
import { FormGroup, NgForm, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  public phone: Array<IPhone>;

  public image: string;
  public first: string;
  public title: string;
  public last: string;
  public email: string;
  public namberph: any;
  public age: any;
  public street: any;
  public city: string;
  public postcode: any;
  public description: string;
  public isDescription: any;


  @ViewChild('newPhoneForm') newPhoneForm: FormGroup;
  @Output() submitt: EventEmitter<IPhone> = new EventEmitter();
  // @Output() forms: EventEmitter<IPhone> = new EventEmitter();

  ngOnInit() {
  }


  public onSubmit(): void {
    let phone: IPhone;

    phone = new NewPhone(this.image, this.title, this.first, this.last, this.email, this.namberph, this.age, this.street,
      this.city, this.postcode, this.description);
    this.submitt.emit(phone);
    this.newPhoneForm.reset();

  }
}
