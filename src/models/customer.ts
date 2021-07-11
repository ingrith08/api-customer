import mongoose, { Schema } from 'mongoose';

export interface CustomerI {
  name: string;
  lastName: string;
  documentType: string;
  identificationNumber: string;
  email: string;
  address: string;
  phone: string;
}

export const CustomerSchema = new Schema<CustomerI>({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  documentType: {
    type: String,
    required: true,
  },
  identificationNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
}, {
  minimize: false,
  timestamps: true,
});

export const customerModel = mongoose.model<CustomerI>('customers', CustomerSchema);
