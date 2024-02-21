'use server';

export async function waitlistSignup(prevState: any, formData: FormData) {
  try {
    console.log('formData', formData);
    const dataEmail = formData.get('email');
    console.log(dataEmail);
    const response = await fetch('https://api.getwaitlist.com/api/v1/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: dataEmail as string,
        waitlist_id: 13863,
      }),
    });
    const result = await response.json();
    prevState = {
      ...prevState,
      message: result?.configuration_style_json.status_descrption,
    };
    return prevState;

    // return response;
  } catch (error: any) {
    console.log('error from signup action', error);

    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
