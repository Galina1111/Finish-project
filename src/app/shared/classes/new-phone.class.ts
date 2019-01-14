import { IPhone } from "../interfaces";

export class NewPhone implements IPhone {

  constructor(
    public id: number = 0,
    public image: string,
    public title: string,
    public first: string,
    public last: string,
    public email: string,
    public namberph: any,
    public age: any,
    public street: any,
    public city: string,
    public postcode: any,
    public description: string,
    public isDescription: boolean = false,
  ) { }
}