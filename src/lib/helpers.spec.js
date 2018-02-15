import { getUniqueAuthors, getUniqueLabels } from './helpers';

describe('getUniqueAuthors', () => {
  it('should return unique authors given expected input', () => {
    const issues = [
      { user: { login: 'John' } },
      { user: { login: 'Paul' } },
      { user: { login: 'John' } },
    ];

    expect(getUniqueAuthors(issues)).toEqual(['John', 'Paul']);
  });
});

describe('getUniqueLabels', () => {
  it('should return unique labels given expected input', () => {
    const issues = [
      { labels: [{ name: 'Foo' }] },
      { labels: [{ name: 'Bar' }, { name: 'Foo' }] },
    ];

    expect(getUniqueLabels(issues)).toEqual(['Foo', 'Bar']);
  });
});
