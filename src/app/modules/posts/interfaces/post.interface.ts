export default interface IPost {
  id: number;
  title: string;
  category: any;
  author: any;
  subtitle: string;
  content: string;
  previewContent: string;
  slug: string;
  previewImagePath: string;
  createdAt?: Date;
  updatedAt?: Date;

  // createdAt: string;
  // updatedAt: string;
}
