
'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  eventType: z.string().min(3, { message: 'Please specify an event type.' }),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), { message: "Please select a valid date." }),
  message: z.string().max(500, { message: "Message cannot exceed 500 characters."}).optional(),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    phone?: string[];
    eventType?: string[];
    date?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawFormData = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    eventType: formData.get('eventType'),
    date: formData.get('date'),
    message: formData.get('message'),
  };

  const validatedFields = contactSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  const eventDate = new Date(validatedFields.data.date);

  try {
    await addDoc(collection(db, 'event_queries'), {
      ...validatedFields.data,
      eventDate,
      submittedAt: serverTimestamp(),
    });
    return { success: true, message: "Thank you! We'll be in touch soon." };
  } catch (error) {
    console.error('Error adding document to Firestore: ', error);
    return {
      success: false,
      message: 'Something went wrong on our end. Please try again.',
    };
  }
}
