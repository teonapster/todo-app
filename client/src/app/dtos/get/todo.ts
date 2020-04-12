export default interface TodoGetDto {
    resolved: boolean;
    id: string;
    title: string;
    text: string;
    comments: string[];
  }