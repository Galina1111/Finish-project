import { Component, OnInit, EventEmitter, Output, ViewChild, Input, ElementRef } from '@angular/core';
import { IPhone } from 'src/app/shared/interfaces';
import { NewPhone } from 'src/app/shared/classes';
import { FormGroup, NgForm, FormControl } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { UploadInput, UploadOutput, UploaderOptions } from 'ngx-uploader';
import { ContactService } from 'src/app/shared/services';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Router } from '@angular/router';





@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  public phone: Array<IPhone>;
  private modalRef: BsModalRef;
  //public NewPhone: IPhone;


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

  @ViewChild('phoneModal') phoneModal: ElementRef;
  @ViewChild('newPhoneForm') newPhoneForm: FormGroup;
  @Output() submitNewPhone: EventEmitter<IPhone> = new EventEmitter();
  @Output() change: EventEmitter<IPhone> = new EventEmitter();
  @Output() forms: EventEmitter<IPhone> = new EventEmitter();


  constructor(
    private contactService: ContactService,
    private modalService: BsModalService,
    private router: Router,
  ) { }


  ngOnInit() {

  }

  public onSubmit(): void {
    this.openModal();
  }


  private addContacte(): void {
    this.contactService.addContact(new NewPhone(this.isDescription, this.image, this.title,
      this.first, this.last, this.email, this.namberph, this.age, this.street,
      this.city, this.postcode, this.description)).subscribe(
        data => {
          console.log(data);
          this.phone = data;
        },
        err => {
          console.error(err);
        }
      );
  }



  openModal() {
    this.modalRef = this.modalService.show(this.phoneModal, {
      class: 'modal-dialog-centered app-modal',
      ignoreBackdropClick: true
    });
  }

  public cancel(): void {
    this.modalRef.hide();
  }

  public save(): void {
    this.addContacte();
    this.newPhoneForm.reset();
    this.modalRef.hide();
    this.router.navigate(['/'])

  }
}
