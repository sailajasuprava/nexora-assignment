import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const { setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      setIsLoading(true);
      const res = await axios.get("/auth/logout");
      toast.success(res?.data?.message);
      setAuth(null);
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Logout failed");
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, handleLogout };
}

export default useLogout;
