import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";
export default function PhoneInputGfg() {
  const [phone, setPhone] = useState("");

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
  };

  const handleValidate = (value) => {
    const isValid = true;
    console.log({ isValid });
    return isValid;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-info-form">
      <div>
        <Controller
          name="phone-input"
          control={control}
          rules={{
            validate: (value) => handleValidate(value),
          }}
          render={({ field: { onChange, value } }) => (
            <div>
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(value) => setPhone(value)}
                inputStyle={{
                  // paddingTop: 26,
                  // paddingRight: 14,
                  // paddingBottom: 26,
                  // paddingLeft: 58,
                  width: "100%",
                  // backgroundColor: "#F3F6F9",
                  // border: "none",
                }}
              />
            </div>
          )}
        />
      </div>
    </form>
  );
}
