import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export function DataSelector(props: any) {
  const change = (value: any) => {
    if (value !== null) props.setValue(value);
  };

  return (
    <ButtonGroup
      size={props.size}
      aria-label="contained primary button group"
      color="primary"
      variant="contained"
    >
      <Button onChange={(e) => change("hr")}>
        {props.isMobile ? "h" : "hr"}
      </Button>
      <Button onChange={(e) => change("day")}>
        {props.isMobile ? "d" : "day"}
      </Button>
    </ButtonGroup>
  );
}
