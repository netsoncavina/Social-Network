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
        <button type="button" class="btn btn-primary" onclick="signin()">
          Sign in
        </button>
      </div>
    </div>
  );
}
