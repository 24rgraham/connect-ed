// const URL_PREFIX = "https://gentle-beyond-41129.herokuapp.com";
const URL_PREFIX = "http://localhost:3001";

const API = {
  // user routes

  //login
  login: (userObj) => {
    return fetch(`${URL_PREFIX}/api/users/login`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },

  //signup
  signup: (userObj) => {
    return fetch(`${URL_PREFIX}/api/users`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },

  getUserFromToken: (token) => {
    return fetch(`${URL_PREFIX}/api/users/getuserfromtoken`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
  logout: (userId) => {
    return fetch(`${URL_PREFIX}/api/users/logout`).then((res) => res.json());
  },
  getUser: (userId) => {
    return fetch(`${URL_PREFIX}/api/users/${userId}`).then((res) => res.json());
  },
  editUser: (userObj, userId, token) => {
    return fetch(`${URL_PREFIX}/api/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },

  // project routes
  getAllProjects: () => {
    return fetch(`${URL_PREFIX}/api/projects`).then((res) => res.json());
  },
  getProject: (projectId, token) => {
    return fetch(`${URL_PREFIX}/api/projects/${projectId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
  createProject: (projectObj, token) => {
    return fetch(`${URL_PREFIX}/api/projects`, {
      method: "POST",
      body: JSON.stringify(projectObj),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
  deleteProject: (projectId, token) => {
    return fetch(`${URL_PREFIX}/api/projects/${projectId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
  editProject: (projectObj, projectId, token) => {
    return fetch(`${URL_PREFIX}/api/projects/${projectId}`, {
      method: "PUT",
      body: JSON.stringify(projectObj),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
  // comment routes
  getAllComments: () => {
    return fetch(`${URL_PREFIX}/api/comments`).then((res) => res.json());
  },
  getComment: (commentId) => {
    return fetch(`${URL_PREFIX}/api/comments/${commentId}`).then((res) =>
      res.json()
    );
  },
  createComment: (commentObj, token) => {
    return fetch(`${URL_PREFIX}/api/comments`, {
      method: "POST",
      body: JSON.stringify(commentObj),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
  deleteComment: (commentId, token) => {
    return fetch(`${URL_PREFIX}/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
  editComment: (commentObj, commentId, token) => {
    return fetch(`${URL_PREFIX}/api/comments/${commentId}`, {
      method: "PUT",
      body: JSON.stringify(commentObj),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
  //   curriculum routes
  createCurriculum: (curriculumObj, token) => {
    return fetch(`${URL_PREFIX}/api/curriculums`, {
      method: "POST",
      body: JSON.stringify(curriculumObj),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
  deleteCurriculum: (curriculumId, token) => {
    return fetch(`${URL_PREFIX}/api/curriculums/${curriculumId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
  //   subject routes
  createSubject: (subjectObj, token) => {
    return fetch(`${URL_PREFIX}/api/subjects`, {
      method: "POST",
      body: JSON.stringify(subjectObj),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
  deleteSubject: (subjectId, token) => {
    return fetch(`${URL_PREFIX}/api/subjects/${subjectId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
  //   status routes
  getCompletedProjects: async (token) => {
    const res = await fetch(`${URL_PREFIX}/api/status/completed`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  },
  getInProgressProjects: async (token) => {
    const res = await fetch(`${URL_PREFIX}/api/status/in_progress`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  },
  getSavedForLaterProjects: async (token) => {
    const res = await fetch(`${URL_PREFIX}/api/status/saved_for_later`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  },

  getStarredProjects: async (token) => {
    const res = await fetch(`${URL_PREFIX}/api/status/starred`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  },

  changeStatus: async (projectId, statusObj, token) => {
    const res = await fetch(`${URL_PREFIX}/api/status/${projectId}`, {
      method: "PUT",
      body: JSON.stringify(statusObj),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  },


  getOgProjects: async (token) => {
    const res = await fetch(`${URL_PREFIX}/api/projects/getprojectsfromtoken`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  },

  //   search route
  advancedSearch: (searchObj) => {
    return fetch(`${URL_PREFIX}/api/search`, {
      method: "PUT",
      body: JSON.stringify(searchObj),
      headers: {
        "Content-Type": "application/json",
      },
      
    }).then((res) => res.json());
  },
};
export default API;
