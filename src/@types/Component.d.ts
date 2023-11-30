export type viewer = "Table" | "Card";

export interface SwitcherProps {
  viewer: viewer;
  onChangeViewer: (newViewer: viewer) => void;
}

export type state = string;

export interface BadgeProps {
  state: state;
}
