import { Document } from 'mongoose';
import { CustomerI, customerModel, CustomerSchema } from '../models/customer';
import BaseMongoose, { Query } from './BaseMongoose';
import MongooseDecorator from './decorator';

type CustomerDocument = CustomerI & Document;

@MongooseDecorator<CustomerI>(customerModel, CustomerSchema)
class Customer extends BaseMongoose<CustomerI> implements CustomerI {
  name: string;
  lastName: string;
  documentType: string;
  identificationNumber: string;
  email: string;
  address: string;
  phone: string;

  constructor(data: CustomerI | CustomerDocument) {
    super(Customer.getDoc<CustomerI>(data));

    this.name = data.name;
    this.lastName = data.lastName;
    this.documentType = data.documentType;
    this.identificationNumber = data.identificationNumber;
    this.email = data.email;
    this.address = data.address;
    this.phone = data.phone;
  }

  static async find(query: Query): Promise<CustomerDocument[]> {
    const customers = await this.model.find(query);

    return customers as CustomerDocument[];
  }

  static async create(data: CustomerI): Promise<CustomerDocument> {
    const customer = await this.model.create<CustomerI>(data);

    return customer as CustomerDocument;
  }

  static async findOne(query: Query): Promise<CustomerDocument> {
    const customer = await this.model.findOne(query);

    return customer as CustomerDocument;
  }

  static async update(_id: string, query: Query): Promise<CustomerDocument> {
    const customer = await this.model.findOneAndUpdate({ _id }, query, { new: true });

    return customer as CustomerDocument;
  }
}

export default Customer;
