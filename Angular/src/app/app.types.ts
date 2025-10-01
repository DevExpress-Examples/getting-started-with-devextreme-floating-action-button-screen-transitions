export interface TabItem {
  title: string;
}

export interface NotifyConfig {
  message: string;
  position: {
    my: string;
    at: string;
    of: string;
    offset: string;
  };
  minWidth: null;
  width: number;
}
