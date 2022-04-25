import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <div
        class="
          container
          d-flex
          flex-row
          justify-content-center
          align-items-center
        "
      >
        <div class="col-4 text-center">
          <h1>Sign in</h1>
          <div class="form-group">
            <label for="">Name</label>
            <input
              type="name"
              class="form-control"
              name="name"
              id="name"
              aria-describedby="name"
              placeholder="Your name"
            />
          </div>
          <div class="form-group">
            <label for="">email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="email-signin"
              aria-describedby="emailHelpId"
              placeholder="example@email.com"
            />
          </div>

          <div class="form-group">
            <label for="password">password</label>

            <input
              type="password"
              class="form-control"
              name="password"
              id="password-signin"
              placeholder="password "
            />
            <span
              toggle="#password-field"
              id="toggle-eye-signin"
              class="fa fa-fw fa-eye field-icon toggle-password"
              onclick="togglePasswordSignin()"
            ></span>
          </div>
          <div class="form-group">
            <label for="password">confirm password</label>

            <input
              type="password"
              class="form-control"
              name="password"
              id="password-signin"
              placeholder="password "
            />
            <span
              toggle="#password-field"
              id="toggle-eye-signin"
              class="fa fa-fw fa-eye field-icon toggle-password"
              onclick="togglePasswordSignin()"
            ></span>
          </div>
          <button type="button" class="btn btn-primary" onClick="signin()">
            Sign in
          </button>
        </div>
      </div>
      <a>
        Do you have an account? <Link to="/logIn">Log in</Link>
      </a>
    </>
  );
}
