import { describe, expect, test } from 'jest/globals';
import data from '../../data/courses.json';

const numItems = data.length;

describe('Number test', () => {
  test('Number of Items = 12', () => {
    expect(numItems).toBe(12);
  });
  test('Number of Items to be greater than or equal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

const dataTest = data[0].title;

describe('String Test', () => {
  test('There is a JS in this title', () => {
    expect(dataTest).toMatch(/JS/);
  });

  test('There title contains React', () => {
    expect(dataTest).toContain('React');
  });
});

const data2 = ['React Native', 'React'];

describe('Arrays and Objects Tests', () => {
  test('The list of courses contains React Native and React', () => {
    expect(['React Native', 'React', 'Meteor JS']).toEqual(
      expect.arrayContaining(data2)
    );
  });

  test('The First Course to have a property title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The First Course to have a property title and value of 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
