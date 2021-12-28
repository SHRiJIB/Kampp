import axios from "axios";

export const Api = axios.create({ baseURL: "http://localhost:5000/" });

export const getAllCampgrounds = () => Api.get("/campgrounds");
export const getCampgroundById = (id) => Api.get(`/campgrounds/${id}`);
export const addNewCamp = (campground) =>
  Api.post("/campgrounds/new", campground);
export const editCampground = (id) => Api.get(`/campgrounds/${id}`);
export const updateCampground = (id, campground) =>
  Api.patch(`/campgrounds/${id}`, campground);
export const deleteCampground = (id) => Api.delete(`/campgrounds/${id}`);
