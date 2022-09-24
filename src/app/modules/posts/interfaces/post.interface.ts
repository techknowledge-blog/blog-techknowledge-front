export default interface IPost {
  id: number;
  title: string;
  category: any;
  subtitle: string;
  content: string;
  author: any;
  previewContent: string;
  slug: string;
  previewImagePath: string;
  createdAt?: Date;
  updatedAt?: Date;

  // createdAt: string;
  // updatedAt: string;
}
