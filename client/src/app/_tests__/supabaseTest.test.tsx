import { createClient } from '../__mocks__/@supabase/supabase-js'; // Adjust the import path as needed

describe('Supabase Client', () => {
  it('should mock the supabase client correctly', async () => {
    const supabase = createClient();
    
    // Simulate calling the 'from' method
    const { data, error } = await supabase.from('test').select();
    
    // Assertions to check if the mock works
    expect(data).toEqual([{ id: 1, name: 'Test Item' }]);
    expect(error).toBeNull();
  });
});