import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
  headers: {
    Authorization: "AIzaSyD4EgZlrmm9hLwSbhoQS4IeJB-aK7Vzeuc",
  },
});

export const Auther = axios.create({
  baseURL: "https://apingweb.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
