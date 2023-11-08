const ApiService = {
  createAdmin: async (email: string, password: string) => {
    const response = await fetch('/admin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  },

  updateAdmin: async (id: number, adminData: any) => {
    const response = await fetch(`/admin/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adminData),
    });
    return response;
  },

  deleteAdmin: async (id: number) => {
    const response = await fetch(`/admin/${id}`, {
      method: 'DELETE',
    });
    return response;
  },

  getAllAdmins: async () => {
    const response = await fetch('/admin/');
    const data = await response.json();
    return data;
  },

  getAdminById: async (id: number) => {
    const response = await fetch(`/admin/${id}`);
    const data = await response.json();
    return data;
  },

};

export default ApiService;