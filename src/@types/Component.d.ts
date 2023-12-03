export type viewer = "bar" | "pie";

export interface SwitcherProps {
  viewer: viewer;
  onChangeViewer: (newViewer: viewer) => void;
}

export type state = string;

export interface BadgeProps {
  state: state;
}

export interface value {
  startDate: Date | null;
  endDate: Date | null;
}

export interface RangeProps {
  value: value;
  onchangeDate: (newval: value) => void;
}
