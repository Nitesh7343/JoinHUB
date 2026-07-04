import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";




const DashboardLayout = () => {

 const navigate = useNavigate();

 const handleLogout = async () => {
  try {
    // Sign out from Firebase
    await signOut(auth);

    // Clear browser storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to Login
    navigate("/login", { replace: true });

  } catch (error) {
    console.error("Logout Error:", error);
  }
};

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r p-6">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

        <div className="flex flex-col gap-4">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold"
                : "px-4 py-2 rounded-xl hover:bg-gray-100"
            }
          >
            Overview
          </NavLink>

          <NavLink
            to="/dashboard/upcoming"
            className={({ isActive }) =>
              isActive
                ? "bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold"
                : "px-4 py-2 rounded-xl hover:bg-gray-100"
            }
          >
            Upcoming Sessions
          </NavLink>

          <NavLink
            to="/dashboard/past"
            className={({ isActive }) =>
              isActive
                ? "bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold"
                : "px-4 py-2 rounded-xl hover:bg-gray-100"
            }
          >
            Past Sessions
          </NavLink>

          <NavLink
            to="/dashboard/create-session"
            className={({ isActive }) =>
              isActive
                ? "bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold"
                : "px-4 py-2 rounded-xl hover:bg-gray-100"
            }
          >
            Organize Session
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive
                ? "bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold"
                : "px-4 py-2 rounded-xl hover:bg-gray-100"
            }
          >
            Profile
          </NavLink>
        </div>

          <button
  onClick={handleLogout}
  className="mt-8 px-4 py-2 rounded-xl text-left text-red-600 hover:bg-red-50 transition"
>
  Logout
</button>
      </div>

    

      {/* Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
