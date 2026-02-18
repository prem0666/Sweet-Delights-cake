import React, { useState } from "react";
import Api from "./api/Api";
// import { useAuth } from "./context/Auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/Auth";
import { toast } from "sonner";

const Login = () => {
  const [login1, setLogin] = useState(true);
 const [formLogin, setFormLogin] = useState({
  email: "",
  password: "",
});

const [formSignup, setFormSignup] = useState({
  name: "",
  email: "",
  phone: "",
  password: "",
  confirm: "",
});
const [loadingAuth, setLoadingAuth] = useState(false);
const { login } = useAuth();
const navigate = useNavigate();

const handleChange = (setter) => (e) => {
  const { name, value } = e.target;
  setter((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleLoginSubmit = async (e) => {
  e.preventDefault();
  setLoadingAuth(true);
  try {
    const res = await Api.post("/login", formLogin);
    const data = res.data || res;
    login(data.user, data.token);

    toast.success("Logged in successfully!");
    navigate("/");
  } catch (err) {
    console.error(err);
    toast.error(err.response?.data?.error || err.message || "Login failed");
    
  } finally {
    setLoadingAuth(false);
  }
};


  // console.log(formLogin);
  // console.log(formSignup);
  

  return (
    <div
      className="min-h-screen gradient-hero flex items-center justify-center p-4 py-14"
      style={{
        background:
          "linear-gradient(135deg, rgb(252, 217, 223), rgb(250, 242, 235), rgb(249, 242, 220))",
      }}
    >
      <div className="rounded-lg bg-card text-card-foreground shadow-sm w-full max-w-md border-0 shadow-elevated">
        <div className="flex flex-col space-y-1.5 p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-cake h-8 w-8 text-primary"
            >
              <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
              <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
              <path d="M2 21h20"></path>
              <path d="M7 8v3"></path>
              <path d="M12 8v3"></path>
              <path d="M17 8v3"></path>
              <path d="M7 4h.01"></path>
              <path d="M12 4h.01"></path>
              <path d="M17 4h.01"></path>
            </svg>
          </div>

          <h3 className="font-semibold tracking-tight text-2xl font-display">
            Welcome to Sweet Delights
          </h3>

          <p className="text-sm text-muted-foreground">
            Sign in to your account or create a new one
          </p>
        </div>

        <div className="p-6 pt-0">
          <div dir="ltr" data-orientation="horizontal" className="w-full">
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2 mb-6"
              tabIndex="0"
              data-orientation="horizontal"
              style={{ outline: "none" }}
            >
              <button
                type="button"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  ${login ? "text-foreground bg-background rounded-sm " : " shadow-sm shadow-black/5 text-foreground"} `}
                onClick={() => setLogin(true)}
              >
                login
              </button>
              <button
                type="button"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-background transition-all  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${login ? " shadow-sm shadow-black/5 text-foreground" : "text-foreground bg-background "} `}
                // onClick={() => setLogin(true)}
                onClick={() => setLogin(false)}
              >
                Sign Up
              </button>
            </div>

            {login1 ? (
              <div
                className="mt-2  ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                //   style=""
              >
                <form className="space-y-4" onSubmit={handleLoginSubmit}>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="login-email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="login-email"
                      placeholder="john@example.com"
                      value={formLogin.email}
                      onChange={handleChange(setFormLogin)}
                      name="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="login-password"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        id="login-password"
                        placeholder="••••••••"
                        value={formLogin.password}
                      onChange={handleChange(setFormLogin)}
                        name="password"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-eye h-4 w-4"
                        >
                          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full gradient-primary"
                    type="submit"
                  >
                    {loadingAuth ? "Please wait..." : "login"}
                  </button>
                  <p className="text-center text-sm text-muted-foreground">
                    Demo Admin: admin@cakeshop.com / admin123
                  </p>
                </form>
              </div>
            ) : (
              <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="signup-name"
                    >
                      Full Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="signup-name"
                      placeholder="John Doe"
                      value={formSignup.name}
                      onChange={handleChange(setFormSignup)}
                      name="name"

                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="signup-email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="signup-email"
                      placeholder="john@example.com"
                      value={formSignup.email}
                      onChange={handleChange(setFormSignup)}

                      name="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="signup-phone"
                    >
                      Phone
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="signup-phone"
                      placeholder="+91 98765 43210"
                      value={formSignup.phone}
                      onChange={handleChange(setFormSignup)}
                      name="phone"

                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="signup-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="signup-password"
                      placeholder="••••••••"
                      value={formSignup.password}
                      onChange={handleChange(setFormSignup)}
                      name="password"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="signup-confirm"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="signup-confirm"
                      placeholder="••••••••"
                      value={formSignup.confirm}
                      onChange={handleChange(setFormSignup)}
                      name="confirm"
                      required
                    />
                  </div>
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full gradient-primary"
                    type="button"
                    onClick={async (e) => {
                      e.preventDefault();
                      if (formSignup.password !== formSignup.confirm) {
                        toast.error("Passwords do not match");
                        return;
                      }
                      setLoadingAuth(true);
                      try {
                        const payload = {
                          name: formSignup.name,
                          email: formSignup.email,
                          phone: formSignup.phone,
                          password: formSignup.password,
                        };
                        const res = await Api.post("/register", payload);
                        const data = res.data || res;
                        login(data.user, data.token);
                        toast.success("Account created successfully!");
                        navigate("/");
                      } catch (err) {
                        console.error(err);
                        toast.error(err.response?.data?.error || err.message || "Signup failed");
                      } finally {
                        setLoadingAuth(false);
                      }
                    }
                  }
                  >
                    {loadingAuth ? "Please wait..." : "Create Account"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
