import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Redux/Login/action";

export const LoginSignUp = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    password: "",
    location: "",
    technology: [],
    image: "",
  });
  // console.log(user);

  const handleChange = () => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/users", user);
  };

  // const [data, setData] = useState([]);

  const onLogin = (e) => {
    e.preventDefault();
    console.log("e.target.name:", e.target.name);
    console.log("e.target.password:", e.target.password);
    axios.get("http://localhost:8080/users").then((res) => {
      let data = res.data;
      data.forEach((ele) => {
        if (ele.name === e.target.name && ele.password === e.target.password) {
          useDispatch(userLogin(data));
        } else {
          // alert("Invalid Credentials");
        }
      });
    });
  };

  return (
    <div className="loginSignUp">
      <form
        className="signUp"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          name="name"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          name="password"
          className="password"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <br />
        <select
          value={""}
          className="location"
          name="location"
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          name="technology"
          className="technology"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label>food</label>
        <input
          type="checkbox"
          className="food"
          name="food"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label>movies</label>
        <input
          type="checkbox"
          className="movies"
          name="movies"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label>culture</label>
        <input
          type="checkbox"
          className="culture"
          name="culture"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label>art</label>
        <input
          type="checkbox"
          className="art"
          name="art"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label>drama</label>
        <input
          type="checkbox"
          className="drama"
          name="drama"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          name="image"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <br />
      <form
        className="login"
        onSubmit={(e) => {
          onLogin(e);
        }}
      >
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          name="name"
          onChange={(event) => {}}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          name="password"
          className="password"
          onChange={(event) => {}}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
