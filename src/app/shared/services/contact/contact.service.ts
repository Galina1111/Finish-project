import { Injectable } from '@angular/core';
import { IPhone } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getPhone(): any {
    throw new Error("Method not implemented.");
  }
  private url: string;


  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://localhost:3000/phone';
  }

  public getContactes(): Observable<Array<IPhone>> {
    return this.http.get<Array<IPhone>>(this.url);
  }

  public addContact(phone: IPhone): Observable<Array<IPhone>> {
    return this.http.post<Array<IPhone>>(this.url, phone);
  }

  public delContact(id: number): Observable<Array<IPhone>> {
    return this.http.delete<Array<IPhone>>(`${this.url}/${id}`);
  }

  // public updateTodo(todo: ITodo): Observable<Array<ITodo>> {
  //   console.log(todo);
  //   return this.http.put<Array<ITodo>>(`${this.url}/${todo.id}`, todo);
  // }

  public getContact(): Observable<Array<IPhone>> {
    return new Observable((observer) => {
      observer.next(dani);
      observer.complete();
    });
  }
}
const dani: Array<IPhone> = [
  <IPhone>{
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    title: "mr. ",
    first: "Gustavo",
    last: "Prieto",
    email: "gustavo.prieto@example.com",
    namberph: 971704473,
    age: 55,
    street: "3017 calle de tetuán",
    city: "Gijón",
    postcode: 80573,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore harum praesentium accusamus minus magnam adipisci minima dignissimos aut labore, sit molestiae, vitae, repellat sint quibusdam quisquam eligendi numquam veritatis at."
  },
  <IPhone>{
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    title: "mrs. ",
    first: "Amy",
    last: "Vavalcanti",
    email: "amy.cavalcanti@example.com",
    age: 39,
    namberph: 971704473,
    street: "2107 travessa dos açorianos",
    city: "governador valadares",
    postcode: 43552,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore harum praesentium accusamus minus magnam adipisci minima dignissimos aut labore, sit molestiae, vitae, repellat sint quibusdam quisquam eligendi numquam veritatis at."
  },
  <IPhone>{
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    title: "mr. ",
    first: "Alfredo",
    last: "Garcia",
    namberph: 3698958304,
    email: "alfredo.garcia@example.com",
    age: 32,
    street: "8666 york road",
    city: "Carlisle",
    postcode: 79552,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore harum praesentium accusamus minus magnam adipisci minima dignissimos aut labore, sit molestiae, vitae, repellat sint quibusdam quisquam eligendi numquam veritatis at."
  },
  <IPhone>{
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    title: "mrs. ",
    first: "Ennya",
    last: "Daluz",
    namberph: 2066385631,
    email: "ennya.daluz@example.com",
    age: 42,
    street: "5709 rua da saudade",
    city: "Caxias",
    postcode: 75653,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore harum praesentium accusamus minus magnam adipisci minima dignissimos aut labore, sit molestiae, vitae, repellat sint quibusdam quisquam eligendi numquam veritatis at."
  }
];
