# Contact Form Setup Guide

Your portfolio uses **Web3Forms** for handling contact form submissions. Follow these steps to receive emails:

## Setup Instructions

1. **Visit Web3Forms**
   - Go to https://web3forms.com
   - Sign up for a free account

2. **Get Your Access Key**
   - After signing up, go to your dashboard
   - Copy your access key

3. **Add Your Email**
   - In the Web3Forms dashboard, add the email address where you want to receive messages
   - Verify the email address

4. **Update Contact Component**
   - Open `src/components/Contact.jsx`
   - Find this line: `access_key: 'a6a5d045-fb7c-4181-bf01-5c2dd16ba24e',`
   - Replace the key with your actual Web3Forms access key

5. **Test the Form**
   - Run: `npm run dev`
   - Fill out the contact form and submit
   - Check your email for the message

## Environment Variables (Optional)

If you prefer using environment variables:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Web3Forms access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_key_here
   ```

3. Update Contact.jsx to use the environment variable:
   ```jsx
   access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
   ```

## Features

✅ Free and easy to use  
✅ No backend server needed  
✅ Emails go directly to your inbox  
✅ Unlimited form submissions  
✅ Simple setup  

---

**Need Help?** Visit https://web3forms.com/docs for more information.
