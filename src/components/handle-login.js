// Contoh login handler
export const handleLogin = (userData) => {
    dispatch(
      login({
        user: userData.user,
        token: userData.token,
        role: userData.role,  // Simpan role dari respons API
      })
    );
  };
  