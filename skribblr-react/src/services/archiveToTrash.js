import axios from "axios";

const archiveToTrashService = (note, token) => {
  return axios.post(
    `/api/archives/trash/${note._id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { archiveToTrashService };
