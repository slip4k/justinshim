'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // Added state for phone
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState('presubmit'); // State to manage loading

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading('midsubmit');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone, // Include phone in the payload
          message,
        }),
      });

      if (response.ok) {
        console.log('Success!');
      } else {
        console.log('Failed');
      }
    } catch (error) {
      console.error('Error', error);
    } finally {
      setIsLoading('postsubmit');
    }
  };

  return (
    <section className="h-full mb-24">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              {' '}
              Contact me by email{' '}
              <a className="text-blue-600 dark:text-blue-500 hover:underline">
                justinjaeshim@gmail.com
              </a>{' '}
              or use the form.
            </p>

            <div className="mt-8">
              <p className="text-2xl font-bold bg-gradient-to-br from-[#304BFF] to-[#00CDAC] inline-block text-transparent bg-clip-text">
                {' '}
                Looking forward to chatting!{' '}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name *</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name..."
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email">Email *</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address..."
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number..."
                    type="tel"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message">Message *</label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message..."
                  rows={8}
                  id="message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="mt-4">
                {isLoading === 'postsubmit' ? (
                  <div>Thank you! I will be in contact soon.</div>
                ) : (
                  <button
                    type="submit"
                    className="inline-block w-full rounded-full bg-foreground px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    {isLoading === 'midsubmit' ? 'Sending...' : 'Send Enquiry'}
                  </button>
                )}
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Fields marked with * are required.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
