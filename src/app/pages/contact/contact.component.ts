import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NewPhone } from 'src/app/shared/classes';
import { IPhone } from 'src/app/shared/interfaces';
import { FormGroup, NgControl } from '@angular/forms';
import { ContactService } from 'src/app/shared/services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  [x: string]: any;
  public phone: Array<IPhone>;
  private modalRef: BsModalRef;



  @Input() imeges: string;
  @Input() submitNewPhone: Array<IPhone>;
  @Input() formControlName !: string;


  constructor(
    private contactService: ContactService,
    private modalService: BsModalService
  ) {
    this.phone = [];
  }

  ngOnInit(): void {
    this.getPhonee();
  }

  private getPhonee(): void {
    this.contactService.getContactes().subscribe(
      data => {
        console.log(data);
        this.phone = data;
      },
      err => {
        console.error(err);
      }
    );
  }




  public isforms(item: IPhone) {
    this.phone.push(item);
  }


  public isSubmit(newPhone: IPhone) {
    newPhone.id = this.phones.slice(-1)[0].id + 1;

    this.contactService.addContact(newPhone).subscribe(() => {
      this.getPhonee();
    });
  }

  public onToggleDescription(item: IPhone): void {
    item.isDescription = !item.isDescription;

  }

  public onDeleteDescription(item: IPhone): void {
    item.isDescription = !item.isDescription;
  }
  public onDeleteContact(item: IPhone): void {
    this.contactService.delContact(item.id).subscribe(() => {
      this.getPhonee();
    });
  }

  // public onDeleteContact(): void {
  //   this.openModal();
  // }
  // public onDeleteCont(item: IPhone): void {
  //   this.contactService.delContact(item.id).subscribe(() => {
  //     this.getPhonee();
  //   });
  // }

  // openModal() {
  //   this.modalRef = this.modalService.show(this.phoneDelModal, {
  //     class: 'modal-dialog-centered app-modal',
  //     ignoreBackdropClick: true
  //   });
  // }

  // public cancel(): void {
  //   this.modalRef.hide();
  // }

  // public save(): void {
  //   this.onDeleteCont(this.id);
  //   this.modalRef.hide();
  // }


}
