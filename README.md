# Pastidatang Frontend Setup

This repository contains the necessary files to set up the frontend for the pastidatang.com web application.

## Quick Start

1. Clone this repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`

## Files Included

- `public/index.html` - Main HTML entry point
- `public/manifest.json` - Web app manifest
- `src/index.js` - React entry point
- `src/context/AuthContext.js` - Authentication context
- `.env` - Environment variables for Supabase connection

## Environment Variables

The application uses Supabase for authentication and database. The necessary environment variables are included in the `.env` file.

## Authentication

The authentication is handled by the Supabase client in the `AuthContext.js` file. It provides functions for signing up, signing in, signing out, and resetting passwords.

## Usage

To use this setup, clone this repository and copy the files to your existing pastidatang-app project, maintaining the same directory structure.