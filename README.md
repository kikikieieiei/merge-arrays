# Array Merge Function

This project implements a function that merges three arrays into a single sorted array.

## Installation

```bash
# Clone the repository
git clone https://github.com/kikikieieiei/merge-arrays.git
cd merge-arrays

# Install dependencies
npm install
```

## Running Tests

```bash
# Run all tests
npm test
```

## Implementation Details

The `merge` function accepts three arrays:
- `collection_1`: Sorted from min to max
- `collection_2`: Sorted from max to min
- `collection_3`: Sorted from min to max

It returns a new array containing all elements sorted in ascending order.

## Project Structure

```
merge-arrays/
├── src/
│   ├── merge.ts           # Function implementation
│   └── merge.test.ts      # Unit tests
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── jest.config.js         # Jest configuration
└── .gitignore             # Git ignore file
```