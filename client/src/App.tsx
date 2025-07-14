import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const App = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await supabase.from('users').select('*');
        setUsers(data ?? []);
        console.log('Fetched users:', data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Test Supabase Connection</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username} (ELO: {user.elo_rating})</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
