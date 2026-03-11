# TravelUp Product Manager
A React based product management dashboard built as part of the TravelUp FrontEnd assignment.
The application allows users to manage products through a clean interface with features such as search, add, edit, delete, validation, and basic testing.

## Features
- View product catalog
- Search products using debounced search
- Add new products
- Edit existing products
- Delete products with confirmation modal
- Form validation
- Loading state
- Error state handling
- User feedback messages for CRUD actions
- Component-based architecture

## Tech Stack
- **React**
- **Vite**
- **Context API** (State Management)
- **Custom Hooks**
- **CSS**
- **Vitest**
- **React Testing Library**
- **@testing-library/user-event**

## Project Structure

```
src
├── components
│   ├── banner
│   ├── footer
│   ├── header
│   ├── modal
│   └── productlist
│
├── context
│   └── ProductContext.jsx
│
├── hooks
│   ├── useDebounce.js
│   └── useProductForm.js
│
├── services
│   └── productservice.js
│
├── tests
│   ├── AddProduct.test.jsx
│   ├── EditProduct.test.jsx
│   ├── DeleteProduct.test.jsx
│   └── Validation.test.jsx
│
├── styles
│   └── CSS files
│
└── App.jsx
```

## Setup Instructions

### 1. Clone the repository
git clone <repository-url>

### 2. Navigate into the project
cd travelup-product-manager

### 3. Install dependencies
npm install

### 4. Start development server
npm run dev
The application will run locally at :
http://localhost:5173

## Running Tests
The project includes basic integration tests using **Vitest** and **React Testing Library**.
Run tests using:
npm run test

Test cases include:
- Add product
- Edit product
- Delete product
- Form validation

## Architecture Explanation

### State Management
The application uses **React Context API** for global state management.
`ProductContext` manages:
- product list
- loading state
- error state
- CRUD operations
- search filtering

This allows all components to access product data without prop drilling.

### Services Layer
API calls are abstracted into a **services layer**.
src/services/productservice.js
This separation keeps components focused on UI logic while handling data fetching separately.

## Custom Hooks
The application uses custom hooks to separate reusable logic from UI components.

### useDebounce
The `useDebounce` hook is used to improve search performance.
It delays the execution of the search filtering until the user stops typing, preventing unnecessary computations and re renders.
Example usage:
- Debounced product search
- Optimized filtering

### useProductForm
The `useProductForm` hook manages product form state and validation logic.
It centralizes form-related behavior such as:
- Managing form state
- Handling input changes
- Running validation
- Resetting form data

Validation is handled using a separate validation utility to keep the hook clean and reusable.
Responsibilities of the hook include:
- Handling form field updates
- Displaying validation errors
- Running validation before submitting
- Resetting form when editing or adding products

This approach keeps the modal component focused on UI while the hook manages form behavior.

### Validation Layer
Form validation is handled using a dedicated validation utility:
src/validation/productValidation.js
This separates validation rules from UI and hooks, improving maintainability.

### Component Architecture
The UI is structured into reusable components.
Main components include:
- Header
- Banner
- ProductList
- ProductModal
- DeleteConfirmationModal
- Footer

This improves maintainability and scalability.

## Error Handling
The application handles errors in the following scenarios:
- API failure while fetching products
- API failure during CRUD operations
Fallback behavior updates local state when API operations fail.

## User Feedback
The application provides feedback messages for important user actions.
Examples:
- Product added successfully
- Product updated successfully
- Product deleted successfully
- Error messages for failed operations
Messages automatically disappear after a few seconds.

## Known Limitations
- The application uses a public demo API for product data.
- The API supports fetching product data but does not persist write operations.
- For demonstration purposes, create, update, and delete operations update the local application state after the API call.
- Changes made to products will not be permanently stored on the external API.

## Possible Improvements
Future improvements could include:
- Toast notification library
- Pagination for large product lists
- Improved accessibility support
- API retry logic
- Improved UI animations
- Dark mode support

## Author
Steve Nixon

