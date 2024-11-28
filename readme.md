# Portfolio v2

## Brief

This document outlines the steps for setting up the development environment for the project.

## Installing Dependencies

Follow these steps to install the necessary dependencies for this project:

1. **Install npm**:  
   If npm is not already installed, you can obtain it by following the instructions at [npm GitHub](https://github.com/npm/cli). Note that Node.js is required and can be downloaded from the [Node.js official website](https://nodejs.org/en).

2. **Verify npm Installation**:  
   Open a command prompt and run `npm --version` to ensure npm is correctly installed. A version number should be displayed.

3. **Install Project Dependencies**:  
   Open Visual Studio Code and launch a PowerShell terminal.  
   Run `npm install` to install all necessary dependencies for the project.

## Post-Installation Steps

Once dependencies are installed, proceed with the following:

1. **Compile TypeScript Files**:  
   In the PowerShell terminal, run `npm run tsc` to compile the TypeScript files.

2. **Launch the Development Server**:  
   Run `npm run dev` to start the Vue.js development server.  
   Click on the provided localhost link or type `o` in the terminal to open the project in your default web browser.

3. **Terminate the Development Server**:  
   To stop the Vite server, press `Ctrl + C` in the terminal where `npm run dev` was executed.  
   Confirm by typing `y` when prompted to terminate the batch job.

