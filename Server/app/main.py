from typing import Union
from fastapi import FastAPI
from app.supabase_client import get_supabase_client
app = FastAPI()


@app.get("/")
def read_root():
    client = get_supabase_client()
    # Example query to test Supabase connection
    response = client.from_("users").select("*").execute()
    if response["error"]:
        return {"error": "Failed to connect to database"}
    return {"Hello": "World"}

