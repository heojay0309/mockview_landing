'use server';

import { revalidatePath } from 'next/cache';

export type FormState = {
  message: string;
};
type InputRow = {
  id: number;
  value: string;
};
export async function handleContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const dataEmail = formData.get('email');
  const dataMessage = formData.get('message');

  const params = new FormData();
  params.append('email', dataEmail as string);
  params.append('message', dataMessage as string);

  try {
    const response = await fetch(
      `https://formspree.io/f/${process.env.FORMSPREE_URL}`,
      {
        method: 'POST',
        body: params,
        headers: {
          Accept: 'application/json',
        },
      }
    );

    // Handle the response from Formspree
    if (response.ok) {
      // Form submission was successful, handle accordingly
      // You could clear the form or show a success message
      revalidatePath('/');
      return {
        message: 'Form submitted successfully!',
      };
    } else {
      // There was an error submitting the form
      return {
        message: 'Form submission failed!',
      };
    }
  } catch (error) {
    // Handle the error here if fetch itself fails (e.g. network error)
    return {
      message: 'Network error:',
    };
  }
}
