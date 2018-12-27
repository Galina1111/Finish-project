import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { IPhone } from 'src/app/shared/interfaces';
import { NewPhone } from 'src/app/shared/classes';
import { FormGroup, NgForm, FormControl } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { UploadInput, UploadOutput, UploaderOptions } from 'ngx-uploader';



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

  @Output() change: EventEmitter<IPhone> = new EventEmitter();
  // @Output() forms: EventEmitter<IPhone> = new EventEmitter();

  ngOnInit() {
  }
  // startUpload(): void {
  //   let token = this.myToken;  // <----  get token
  //   const event: UploadInput = {
  //     type: 'uploadAll',
  //     url: 'http://ngx-uploader.com/upload',
  //     method: 'POST',
  //     headers: { 'Authorization': 'JWT ' + token },  // <----  set headers
  //     data: { foo: 'bar' },
  //     includeWebKitFormBoundary: true // <----  set WebKitFormBoundary
  //   };

  //   this.uploadInput.emit(event);
  // }

  public onSubmit(): void {
    let phone: IPhone;

    phone = new NewPhone(this.image, this.title, this.first, this.last, this.email, this.namberph, this.age, this.street,
      this.city, this.postcode, this.description);
    this.submitt.emit(phone);

    this.newPhoneForm.reset();


    // const event: UploadInput = {
    //   type: 'uploadAll',
    //   url: 'your-path-to-backend-endpoint',
    //   method: 'POST',
    //   data: { foo: 'bar' },
    //   };
    //   this.files = [];
    //   this.uploadInput.emit(event);
  }

  // public onChange(event): void {
  //   var files = event.srcElement.files;
  //   console.log(files);
  //   this.change.emit(files)
  // }
  // files: FileList;
  //     selectedFiles:File=null;
  //   onFilesSelected(event): void {
  //     this.selectedFiles = <File> event.target.files[0];
  //   }
  //  constructor(public http: HttpClient){}
  // options: UploaderOptions;
  // formData: FormData;
  // files: IPhone[];
  // uploadInput: EventEmitter<IPhone>;
  // humanizeBytes: Function;
  // dragOver: boolean;

  // constructor() {
  //   this.files = [];
  //   this.uploadInput = new EventEmitter<IPhone>();
  //   this.humanizeBytes = this.humanizeBytes;
  // }

  // showFiles() {
  //   let files = '';
  //   for (let i = 0; i < this.files.length; i++) {
  //     files += this.files[i].image;
  //     if (!(this.files.length - 1 === i)) {
  //       files += ',';
  //     }
  //   }
  //   return files;
  // }





  // public onUploadOutput(output: UploadOutput | any): void {

  //   if (output.type === 'allAddedToQueue') {
  //   } else if (output.type === 'addedToQueue') {
  //     this.files.push(output.file); // add file to array when added
  //   } else if (output.type === 'uploading') {
  //     // update current data in files array for uploading file
  //     const index = this.files.findIndex(file => file.id === output.file.id);
  //     this.files[index] = output.file;
  //   } else if (output.type === 'removed') {
  //     // remove file from array when removed
  //     this.files = this.files.filter((file: IPhone) => file !== output.file);
  //   } else if (output.type === 'dragOver') {
  //     this.dragOver = true;
  //   } else if (output.type === 'dragOut') {
  //   } else if (output.type === 'drop') {
  //     this.dragOver = false;
  //   }
  //   this.showFiles();
  // }
  // startUpload(): void {
  //   const event: UploadInput = {
  //     type: 'uploadAll',
  //     url: 'your-path-to-backend-endpoint',
  //     method: 'POST',
  //     data: { foo: 'bar' },
  //   };
  //   this.files = [];
  //   this.uploadInput.emit(event);
  // }
  // public cancelUpload(id: string): void {
  //   this.uploadInput.emit({ type: 'cancel', id: id });
  // }

}
