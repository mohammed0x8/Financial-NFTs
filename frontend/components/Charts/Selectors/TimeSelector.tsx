import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export function TimeSelector(props: any) {
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
      <Button onChange={(e) => change("week")}>
        {props.isMobile ? "w" : "week"}
      </Button>
      <Button onChange={(e) => change("month")}>
        {props.isMobile ? "m" : "month"}
      </Button>
      <Button onChange={(e) => change("all")}>
        {props.isMobile ? "a" : "all"}
      </Button>
    </ButtonGroup>
  );
}
