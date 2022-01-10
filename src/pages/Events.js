import React from "react";
import { events, topEvents } from "../dummy-event";
import LayoutEvents from "./Layout/layoutEvent";

export default function Events() {
  return <LayoutEvents dataBlog={events} dataTop={topEvents} page="event" />;
}
