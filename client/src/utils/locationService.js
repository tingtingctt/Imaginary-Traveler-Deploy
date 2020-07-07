import axios from "axios";

export const saveLocation = (id,loc) => axios.put(`/api/location/${id}`, {loc})