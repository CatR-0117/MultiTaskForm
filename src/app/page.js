"use client";

import Calendar from "@/components/Calendar";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Track from "@/components/Track";

const Home = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col p-8 justify-between w-[480px] h-[689px] rounded-lg bg-white">
        <div>
          <Header></Header>
          <div className="flex flex-col gap-3 w-104">
            <Input
              title="First Name"
              req="First name cannot contain special characters or numbers."
            ></Input>
            <Input
              title="Last Name"
              req="Last name cannot contain special characters or numbers."
            ></Input>
            <Input
              title="Username"
              req="This username is already taken. Please choose another one."
            ></Input>
          </div>
        </div>
        <Track></Track>
      </div>
      <div className="flex flex-col p-8 justify-between w-[480px] h-[689px] rounded-lg bg-white h-auto">
        <div>
          <Header></Header>
          <div className="flex flex-col gap-3 w-104">
            <Input
              title="Email"
              req="Please provide a valid email address."
            ></Input>
            <Input
              title="Phone Number"
              req="Please enter a valid phone number."
            ></Input>
            <Input
              title="Password"
              req="Password must include letters and numbers."
            ></Input>
            <Input
              title="Confirm Password"
              req="Passwords do not match. Please try again."
            ></Input>
          </div>
        </div>
        <Track></Track>
      </div>
      <div className="flex flex-col p-8 justify-between w-[480px] h-[689px] rounded-lg bg-white">
        <div>
          <Header></Header>
          <div className="flex flex-col gap-3 w-104">
            <Calendar></Calendar>
          </div>
        </div>
        <Track></Track>
      </div>
    </div>
  );
};

export default Home;
