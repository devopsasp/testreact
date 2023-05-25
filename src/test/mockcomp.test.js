import { forEach } from "../components/mockcomp";

const mockCallback = jest.fn(x => 42 + x);
beforeAll(() => {
    console.log("before all")
  });
  
  afterAll(() => {
    console.log("after all")
  });
beforeEach(() => {
console.log("before each")
  });
  
  afterEach(() => {
    console.log("after each")
  });
  
test('forEach mock function', () => {
  forEach([0, 1], mockCallback);

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42

});