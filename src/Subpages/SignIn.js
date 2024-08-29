import React from 'react';
import Form from 'react-bootstrap/Form';
import '../assets/CSS/SignIn.css';

function SignIn() {
  return (
    <div className="signup-container">
      <h2>Sign In</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="address">State</label>
          <Form.Select defaultValue="Choose...">
            <option>Choose</option>
            <option>강원도</option>
            <option>경기도</option>
            <option>경상도</option>
            <option>전라도</option>
            <option>충청도</option>
            <option>서울시</option>
            <option>부산시</option>
            <option>제주도</option>
          </Form.Select>
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
