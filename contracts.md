# API Contracts & Integration Plan

## Overview
This document outlines the backend API contracts and integration strategy for Bhavitha's Portfolio website.

## Current Mock Data Location
- **Contact Form**: Frontend only (no mock data file, currently shows toast on submit)

## Backend Requirements

### 1. Contact Form API

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "contact_id": "string"
}
```

**Validation**:
- Name: Required, min 2 characters
- Email: Required, valid email format
- Message: Required, min 10 characters

**Database Model**: `Contact`
- id: string (UUID)
- name: string
- email: string
- message: string
- timestamp: datetime
- status: string (default: "new")

### 2. Get All Contacts (Optional - Admin)

**Endpoint**: `GET /api/contacts`

**Response**:
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "message": "string",
    "timestamp": "ISO string",
    "status": "string"
  }
]
```

## Frontend Integration Plan

### Files to Update:
1. `/app/frontend/src/components/Contact.jsx`
   - Remove mock setTimeout
   - Add real API call to `POST /api/contact`
   - Handle success/error responses
   - Show appropriate toast messages

### Integration Steps:
1. Create backend MongoDB model for contacts
2. Create POST /api/contact endpoint
3. Update Contact.jsx to call real API
4. Test form submission
5. Verify data is saved to MongoDB

## Error Handling
- 400: Invalid input (validation errors)
- 500: Server error
- Display user-friendly messages in toast

## Success Criteria
- Contact form submits successfully
- Data is stored in MongoDB
- User receives confirmation message
- Form resets after successful submission
