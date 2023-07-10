import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { Form } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get("message") ?? "";
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(email, password);
  const response = await fetch(
    `https://64aa228f8b9afaf4844b37d1.mockapi.io/api/login/1`,
    { signal: request.signal }
  );
  const json = await response.json();
  localStorage.setItem("id", json.id);

  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.searchParams);

  const redirectTo = searchParams?.get("redirectTo") ?? "/";
  searchParams.delete("redirectTo");
  searchParams.delete("message");

  throw redirect(`${redirectTo}?${searchParams.toString()}`);
};

const Login = () => {
  const message = useLoaderData();
  const { state } = useNavigation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("id") ?? false;

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <h3 className="red">{message}</h3>
      {isLoggedIn ? (
        <>
          <h2>You are already loggedIn</h2>
          <Link to={"/"}>Home</Link>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Click here to logout
          </button>
        </>
      ) : (
        <Form method="post" replace className="login-form">
          <input name="email" type="email" placeholder="Email address" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={state === "submitting"}>{"Log in"}</button>
        </Form>
      )}
    </div>
  );
};

export default Login;
