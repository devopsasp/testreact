

describe("these are sample tests ",()=>{
    test("sample test1",()=>{
        const num1=100
        const num2=200
        const num3=num1+num2
        expect(num3).toBe(300)
    })
    test("sample test 2",()=>{
        const num1=100
        const num2=200
        const num3=num1<num2
        expect(num3).toBeTruthy()
    })
    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
      });
      
      test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
      });
      const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
      ];
      
      test('the shopping list has milk on it', () => {
        expect(shoppingList).toContain('milk');
        expect(new Set(shoppingList)).toContain('milk');
      });
})