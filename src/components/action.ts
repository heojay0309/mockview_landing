'use server';
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
  //  {
  //   email: string;
  //   message: InputRow[];
  // }
): Promise<FormState> {
  // formData.preventDefault(); // Prevents the default form submission
  // FormData API to capture the form data
  // const formData = new FormData(event.target);
  // Function to get all entries starting with "message"
  const getAllMessagesStartingWithMessage = (formData: any) => {
    const messages = [];
    for (let [key, value] of formData.entries()) {
      if (key.startsWith('message')) {
        messages.push(value);
        // messages[key] = value;
      }
    }
    return messages.join(' ');
  };

  // Usage
  const messages = getAllMessagesStartingWithMessage(formData);
  const dataEmail = formData.get('email');
  const params = new FormData();
  params.append('email', dataEmail as string);
  params.append('message', messages as string);

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
      console.log('Form submitted successfully!');
      return {
        message: 'Form submitted successfully!',
      };
    } else {
      // There was an error submitting the form
      console.log('Form submission failed!');
      return {
        message: 'Form submission failed!',
      };
    }
  } catch (error) {
    // Handle the error here if fetch itself fails (e.g. network error)
    console.log('Network error:', error);
    return {
      message: 'Network error:',
    };
  }
}
