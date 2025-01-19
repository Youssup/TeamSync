import os
from dotenv import load_dotenv
from supabase import create_client, Client  

# Load environment variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

def get_supabase_client() -> Client:
    if not SUPABASE_URL or not SUPABASE_KEY:
        raise ValueError("SUPABASE_URL or SUPABASE_KEY is not set in the environment variables")
    return create_client(SUPABASE_URL, SUPABASE_KEY)

def test_connection():
    try:
        supabase = get_supabase_client()
        # Query the Users table
        response = supabase.table('users').select("*").limit(1).execute()

        if response.data is not None:
            print("Connection to Supabase is successful!")
            print("Sample Data:", response.data)
        elif response.error is not None:
            print("Failed to connect to Supabase.")
            print("Error:", response.error)
        else:
            print("Unexpected response:", response)
    except Exception as e:
        print("An error occurred while testing the connection:", str(e))

if __name__ == "__main__":
    test_connection()