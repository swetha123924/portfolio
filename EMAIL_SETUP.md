# Email Setup Instructions for Contact Form

Your contact form is now configured to send emails directly to your inbox. Follow these steps to set it up:

## Option 1: Formspree (Recommended - Easiest)

1. **Go to** [https://formspree.io/](https://formspree.io/)
2. **Sign up** for a free account using your email: `swethasree630@gmail.com`
3. **Create a new form** in the dashboard
4. **Copy your Form ID** (it looks like: `xyzabc123`)
5. **Update the code**:
   - Open: `src/components/feedback.tsx`
   - Find line with: `'https://formspree.io/f/YOUR_FORM_ID'`
   - Replace `YOUR_FORM_ID` with your actual Form ID
   - Example: `'https://formspree.io/f/xyzabc123'`

### Free Plan Limits:
- 50 submissions per month
- No credit card required

---

## Option 2: EmailJS (Alternative)

1. **Go to** [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Sign up** for free
3. **Add Email Service** (Gmail recommended)
4. **Create Email Template**
5. **Get your credentials**: Service ID, Template ID, Public Key
6. **Install EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```
7. **Update the code** in `feedback.tsx` with EmailJS implementation

---

## Option 3: Web3Forms

1. **Go to** [https://web3forms.com/](https://web3forms.com/)
2. **Enter your email** to get an Access Key
3. **Add this hidden field** to your form:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
   ```
4. **Update fetch URL** to: `https://api.web3forms.com/submit`

---

## Testing Your Form

After setup:
1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Check your email inbox for the message
4. Check spam folder if not found

---

## Current Email: swethasree630@gmail.com

All messages will be sent to this email address.

---

## Need Help?

If you encounter any issues, the easiest solution is **Formspree** - just create an account and copy your form ID into the code!
