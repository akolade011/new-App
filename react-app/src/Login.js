function Login() {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
