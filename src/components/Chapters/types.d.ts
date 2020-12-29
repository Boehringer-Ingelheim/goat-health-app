export type Chapter = {
  body?: string[];
  color: string;
  icon: string;
  image: string;
  isHeader: boolean;
  title: string;
  url: string;
};

export interface ChapterProps {
  isCard?: boolean;
}
