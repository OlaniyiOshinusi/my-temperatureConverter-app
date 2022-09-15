import { render, screen } from '@testing-library/react';
import App from './App';

// Smoke Test - Checks that jest is working!
//a describe block groups several tests together
describe("check that Jest is working", () => {
  test("that 2+2 is 4", () => {
      expect(2+2).toBe(4); // smoke test's assertion
  })
});

test('renders H1', () => {
  render(<App />);
  const h1Element = screen.getByText(/temperature converter/i);
  expect(h1Element).toBeInTheDocument();
});

test('renders H1', () => {
  render(<App />);
  const headingOne = screen.getByRole('heading');
  expect(headingOne).toBeInTheDocument();
});

describe('tests variables and constants', () => {
  it('tests myConstant', () => {
      expect(myConstant).toBeDefined();
      expect(typeof myConstant).toBe("number");
      expect(myConstant%1).toBe(0);
      expect(() => {
          constantIdentifier('const');
      }).toThrowError(/^Assignment to constant variable.$/);
  });
  it('tests myVar', () => {
      expect(myVar).toBeDefined();
      expect(typeof myConstant).toBe("number");
      expect(myConstant%1).toBe(0);
      expect(() => {
          constantIdentifier('var');
      }).not.toThrowError(/^Assignment to constant variable.$/);
  });
  it('tests myBoolVal', () => {
      expect(myBoolVal).toBeDefined();
      expect(typeof myBoolVal).toBe("boolean");
      expect(myBoolVal).not.toBe(true);
  });
  it('tests myStingVar', () => {
      expect(myStingVar).toBeDefined();
      expect(typeof myStingVar).toBe("string");
      expect(myStingVar).toHaveLength(23);
  });
});