import { SupabaseClient } from '@supabase/supabase-js';

export const createClient = jest.fn((): SupabaseClient => {
  return {
    from: jest.fn(() => ({
      select: jest.fn(() => Promise.resolve({ data: [{ id: 1, name: 'Test Item' }], error: null })),
      insert: jest.fn(() => Promise.resolve({ data: { id: 2, name: 'New Item' }, error: null })),
      update: jest.fn(() => Promise.resolve({ data: { id: 1, name: 'Updated Item' }, error: null })),
      delete: jest.fn(() => Promise.resolve({ data: { id: 1 }, error: null })),
    })),
  } as unknown as SupabaseClient;
});