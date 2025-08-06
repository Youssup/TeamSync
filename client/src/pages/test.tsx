import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Test() {
  const [users, setUsers] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await supabase.from("users").select("*");
      setUsers(data ?? []);
      console.log("Fetched users:", data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user ?? null);
    };
    fetchCurrentUser();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Test Supabase Connection</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} (ELO: {user.elo_rating})
          </li>
        ))}
      </ul>
      <h1 className="text-xl font-bold mb-4">
        Get logged in users email: {user?.email}
      </h1>
    </div>
  );
}
