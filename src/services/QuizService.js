import axios from "axios";
import { toast } from "react-toastify";

export const getQuestion = async () => {
  try {
    const response = await axios.get("https://opentdb.com/api.php?amount=15&category=18&difficulty=medium");
    return response.data; // Return data, not full response
  } catch (error) {
    toast.error("Error fetching questions:", error)
    console.error("Error fetching questions:", error);
    throw error;
  }
};
