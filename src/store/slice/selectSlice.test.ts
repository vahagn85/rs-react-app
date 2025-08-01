import { create } from 'zustand';
import { createSelectSlice, type SelectSlice } from './selectSlice';
import type { Result } from '../../types/result.types';
const setupStore = () =>
  create<SelectSlice>()((...args) => ({
    ...createSelectSlice(...args),
  }));
describe('createSelectSlice slice', () => {
  it('should add a new item when item not exist', () => {
    const store = setupStore();
    const item = { url: '/1', name: 'Test' } as Result;

    store.getState().addItem(item);

    expect(store.getState().selected).toEqual([item]);
  });

  it('should remove item by URL', () => {
    const store = setupStore();
    const item1 = { url: '/1', name: 'Item 1' } as Result;
    const item2 = { url: '/2', name: 'Item 2' } as Result;

    store.getState().addItem(item1);
    store.getState().addItem(item2);

    store.getState().removeItem('/1');

    expect(store.getState().selected).toEqual([item2]);
  });

  it('should clean all items', () => {
    const store = setupStore();
    const item = { url: '/1', name: 'Test' } as Result;

    store.getState().addItem(item);
    store.getState().cleanItems();

    expect(store.getState().selected).toEqual([]);
  });
});
