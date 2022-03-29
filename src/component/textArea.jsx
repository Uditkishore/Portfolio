import { Textarea, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
export function Textbox() {
  let [value, setValue] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Write your reviews"
        size="sm"
      />
      <Button
        bg={"blue.300"}
        onClick={() => alert("Thanks for your feedback ")}
        color="white"
        m={"2"}
      >
        Submit
      </Button>
    </>
  );
}
