# Bombshell Luxe Cleaning Setup Guide

## Installation

Open a terminal inside the project folder and run:

npm install

Start the development server:

npm run dev

The website will be available at:

http://localhost:5173

---

## Sanity CMS Setup

### Create a Sanity Project

1. Create a Sanity account at https://www.sanity.io/
2. Create a new project.
3. Choose a dataset name.
4. Note your Project ID.

## FormSpree Setup

1. Create an account at https://formspree.io/
2. Create a new form.
3. Copy your Form Endpoint URL.
4. Open Sanity Studio at https://www.sanity.io/
5. Navigate to Contact Section.
6. Paste your Form Endpoint URL into the Form Endpoint field.
7. Publish changes.

Your contact form is now connected.

---

### Connect the Template

Open:

src/sanityClient.js

Update:

projectId: 'YOUR_PROJECT_ID'
dataset: 'YOUR_DATASET'

Save changes.

---

## Running Sanity Studio

Inside the Sanity Studio folder:

npm install

Then run:

npm run dev

The CMS dashboard will launch locally.

---

## Deploying to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Deploy.

If Sanity content does not load:

* Open Sanity Dashboard
* API Settings
* CORS Origins
* Add your Vercel domain

Example:

https://your-project.vercel.app

Publish changes.

---

## Editing Website Content

The following sections are editable through Sanity:

* Hero
* Services
* Promotions
* Transformations
* Testimonials
* Contact
* Site Settings

No coding knowledge is required.

---

## Need Help?

Refer to the Sanity documentation and Vercel documentation for advanced configuration and deployment options.
