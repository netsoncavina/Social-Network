export default function LogIn() {
  return (
    <div
      class="
          container
          d-flex
          flex-row
          justify-content-center
          align-items-center
        "
    >
      <div class="col-6 text-center">
        <div class="form-group">
          <h1>Login</h1>
          <label for="">email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email-login"
            aria-describedby="emailHelpId"
            placeholder="exemplo@email.com"
          />
        </div>

        <div class="form-group">
          <label for="password">password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            id="password-login"
            placeholder="password"
          />
          <span
            toggle="#password-field"
            id="toggle-eye-login"
            class="fa fa-fw fa-eye field-icon toggle-password"
            onclick="togglePasswordLogin()"
          ></span>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onclick="checkCredentials()"
        >
          Login
        </button>
      </div>
    </div>
  );
}
