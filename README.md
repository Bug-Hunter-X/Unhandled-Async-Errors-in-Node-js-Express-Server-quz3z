# Unhandled Async Errors in Node.js Express Server

This repository demonstrates a common issue in Node.js applications: unhandled errors during asynchronous operations.  The provided `bug.js` showcases an Express.js server that fetches data asynchronously.  However, it lacks proper error handling, causing the server to crash if the asynchronous operation fails.

The `bugSolution.js` file offers a corrected version with robust error handling, ensuring the server remains responsive even during errors.

## Bug

The `bug.js` file demonstrates an Express.js server that makes an asynchronous call to fetch data.  The problem lies in the absence of error handling within the `getData` callback.  If any error occurs during data retrieval, the error is uncaught, leading to server crashes.

## Solution

The `bugSolution.js` file addresses this by including a `try...catch` block within the `getData` callback, handling potential errors gracefully and preventing the server from crashing.  It logs errors to the console and sends a meaningful error response to the client, providing better user experience and application stability.

## How to Run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to reproduce the bug.
4. Run `node bugSolution.js` to see the improved error handling.