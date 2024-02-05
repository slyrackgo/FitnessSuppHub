from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware to allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize an empty dictionary to store user data
user_data = {}

@app.post("/submit-order")
def submit_order(user_info: dict):
    # Save user data to the dictionary
    user_data.update(user_info)

    # Print the user data to the terminal
    print("User Data:", user_data)

    return {"message": "Order submitted successfully", "user_data": user_data}










