export const fetchUsers = async () => {
  const response = await fetch("https://pm-backend-sqpt.vercel.app/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};
export const fetchProjects = async () => {
  const response = await fetch("https://pm-backend-sqpt.vercel.app/projects");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};
