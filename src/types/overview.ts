export type OverviewItem = {
  name: string;
  value?: string;
};

export type Overview = {
  title?: string;
  items: OverviewItem[];
};
