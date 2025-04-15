"use client";

import { useEffect } from "react";

const units = [
  {
    mode: "thumbnails-1x1",
    container: "taboola-widget-1x1",
    placement: "Widget 1x1",
    target_type: "mix",
  },
  {
    mode: "thumbnails-2x1",
    container: "taboola-widget-2x1",
    placement: "Widget 2x1",
    target_type: "mix",
  },
  {
    mode: "thumbnails-4x1",
    container: "taboola-widget-4x1",
    placement: "Widget 4x1",
    target_type: "mix",
  },
  {
    mode: "thumbnails-lr",
    container: "taboola-left-rail-thumbnails",
    placement: "Left Rail Thumbnails",
    target_type: "mix",
  },
  {
    mode: "thumbnails-rr",
    container: "taboola-right-rail-thumbnails",
    placement: "Right Rail Thumbnails",
    target_type: "mix",
  },
  {
    mode: "alternating-thumbnails-a",
    container: "taboola-footer-feed-50-sc",
    placement: "Footer Feed 50 SC",
    target_type: "mix",
  },
  {
    mode: "thumbnails-invisible",
    container: "taboola-trigger-next-up-now",
    placement: "Trigger Next Up Now",
    target_type: "mix",
  },
  { flush: true },
];

const Taboola = () => {
  useEffect(() => {
    units.forEach((unit) => {
      (window as any)._taboola = (window as any)._taboola || [];
      (window as any)._taboola.push(unit);
    });
  }, []);

  return null;
};

export default Taboola;
