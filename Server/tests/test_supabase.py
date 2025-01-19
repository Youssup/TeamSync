# tests/test_supabase.py
import pytest
from unittest import mock
from fastapi.testclient import TestClient
from app.main import app  # Import FastAPI app from main.py

@pytest.fixture
def mock_supabase():
    # Create a mock for the Supabase client
    mock_supabase = mock.Mock()
    
    # Mock the 'from' method of Supabase to return a mock response
    mock_supabase.from_.return_value.select.return_value.execute.return_value = {
        "data": [{"id": 1, "name": "Test User"}],  # Mocked user data
        "error": None
    }
    return mock_supabase

def test_get(mock_supabase):
    # Patch the get_supabase_client function to return the mocked Supabase client
    with mock.patch('app.main.get_supabase_client', return_value=mock_supabase):  # Patch the correct location
        client = TestClient(app)  # Initialize FastAPI test client
        response = client.get("/")  # Call the root route
        
        # Assert that the response status is 200 OK
        assert response.status_code == 200  
        
        # Check the returned data (you can customize this based on your actual logic)
        assert response.json() == {"Hello": "World"}  # Expected response