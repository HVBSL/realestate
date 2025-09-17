# EmailJS Integration Setup

## Overview
This real estate website now includes EmailJS integration for handling form submissions and contact requests. All enquiry forms, property contact buttons, and deal of the day actions will send emails using your EmailJS service.

## EmailJS Configuration

### Credentials Used:
- **Public Key**: `YhmiD28JknS_5_7sS`
- **Service ID**: `service_z9ye6ln`
- **Template ID**: `template_vo452jp`

## Features Integrated

### 1. Enquiry Form (`/contact`)
- **Location**: `src/components/EnquiryForm.js`
- **Functionality**: Sends detailed property enquiry emails
- **Data Sent**:
  - Customer name, email, phone
  - Property preferences (type, budget, location, size)
  - Timeline and preferred contact method
  - Additional message

### 2. Property Details Contact (`View Details` button)
- **Location**: `src/components/PropertyDetails.js`
- **Functionality**: Sends property-specific contact requests
- **Data Sent**:
  - Property title, price, location
  - Agent information
  - Contact type (Call, Email, Share)
  - Property details

### 3. Deal of the Day Actions
- **Location**: `src/components/DealOfTheDay.js`
- **Functionality**: Sends deal-specific enquiries
- **Data Sent**:
  - Deal property information
  - Action type (View Details, Schedule Viewing, Contact Agent)
  - Property pricing and location

## Email Template Variables

Your EmailJS template should include these variables:

### For Enquiry Form:
```
{{from_name}} - Customer name
{{from_email}} - Customer email
{{phone}} - Customer phone
{{property_type}} - Selected property type
{{budget}} - Budget range
{{location}} - Preferred location
{{message}} - Additional message
{{preferred_contact}} - Contact preference
{{timeline}} - Purchase timeline
{{property_size}} - Property size preference
{{to_name}} - Recipient name (DH Enterprises Team)
```

### For Property Contact:
```
{{from_name}} - Enquirer name
{{from_email}} - Enquirer email
{{property_title}} - Property title
{{property_price}} - Property price
{{property_location}} - Property location
{{agent_name}} - Agent name
{{contact_type}} - Type of contact (Call/Email/Share)
{{message}} - Contact message
{{to_name}} - Agent name
```

### For Deal of the Day:
```
{{from_name}} - Enquirer name
{{from_email}} - Enquirer email
{{property_title}} - Deal property title
{{property_price}} - Deal price
{{property_location}} - Deal location
{{action_type}} - Action taken
{{message}} - Enquiry message
{{to_name}} - DH Enterprises Team
```

## Testing the Integration

1. **Enquiry Form**: Fill out the contact form and submit
2. **Property Details**: Click "View Details" on any property, then use contact buttons
3. **Deal of the Day**: Click any action button in the deal popup

## Error Handling

- All email functions include try-catch blocks
- User-friendly error messages are displayed
- Console logging for debugging
- Fallback alerts for failed requests

## Customization

To modify email templates or add new functionality:

1. Update the template variables in `src/config/emailjs.js`
2. Modify the `templateParams` objects in each component
3. Update your EmailJS template accordingly

## Security Notes

- Public key is safe to use in client-side code
- No sensitive data is exposed
- All form validation is maintained
- Rate limiting should be configured in EmailJS dashboard

## Support

If you encounter issues:
1. Check EmailJS dashboard for delivery status
2. Verify template variables match exactly
3. Check browser console for error messages
4. Ensure EmailJS service is active

---

**DH Enterprises** - Real Estate Website with EmailJS Integration



