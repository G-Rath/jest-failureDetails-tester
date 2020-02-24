describe('my test', () => {
  test('it passes', () => {
    expect(true).toBe(false);
  });

  it('fails :(', () => {
    expect(true).toBe(false);
  });

  test('a snapshot failure', () => {
    expect({
      p1: 'hello',
      p2: 'world'
    }).toMatchInlineSnapshot(`
      Object {
        "p1": "hello",
        "p2": "sunshine",
      }
    `);
  });
});

it('throws!', () => {
  throw new Error();
});

test('promise rejection', async () => {
  await expect(Promise.resolve(1)).rejects.toThrowError();
});
