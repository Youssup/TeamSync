import { supabase } from '../supabaseClient';

export default function Home() {
  const fetchData = async () => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) console.error(error);
    console.log(data);
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}