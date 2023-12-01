export type viewer = "bar" | "pie";

export interface SwitcherProps {
  viewer: viewer;
  onChangeViewer: (newViewer: viewer) => void;
}

export type state = string;

export interface BadgeProps {
  state: state;
}
