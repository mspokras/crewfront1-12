declare module "*.jpg";
declare module "*.json";
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}
declare module "*.png" {
  const content: any;
  export default content;
}
declare module 'react-input-mask';