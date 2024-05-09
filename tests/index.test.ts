import { greet } from '../src/index';

describe('greet function', () => {
  it('greets a user with a given name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
