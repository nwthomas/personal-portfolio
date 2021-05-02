import axios from 'axios';

const emailServerEndpoint = process.env.NEXT_PUBLIC_EMAIL_SERVER_URL;

export interface EmailType {
  name: string;
  email: string;
  subject: string;
  message: string;
  fax?: string;
}

export async function sendEmailToServer(email: EmailType) {
  return axios.post(emailServerEndpoint, email);
}
